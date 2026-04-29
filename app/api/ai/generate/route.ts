import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import OpenAI from 'openai'
import prisma from '@/lib/prisma'

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

// POST - Générer un article via IA
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!openai) {
      return NextResponse.json({ error: 'OpenAI not configured' }, { status: 500 })
    }

    const body = await request.json()
    const { topic, keywords, category } = body

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 })
    }

    // Générer le contenu avec GPT-4
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `Tu es un expert rédacteur tech spécialisé en IA, développement web et infrastructure cloud. 
Tu écris des articles de blog SEO-optimisés, informatifs et engageants.

Structure requise :
- Titre accrocheur (H1)
- Introduction captivante (150-200 mots)
- 4-6 sections avec sous-titres (H2)
- Exemples de code si pertinent
- Conclusion avec appel à l'action
- Longueur : 1500-2000 mots
- Format : Markdown
- Ton : Professionnel mais accessible
- Inclure des données chiffrées et exemples concrets`
        },
        {
          role: 'user',
          content: `Écris un article complet sur le sujet : "${topic}"
${keywords ? `Mots-clés SEO à intégrer : ${keywords.join(', ')}` : ''}
${category ? `Catégorie : ${category}` : ''}

L'article doit être optimisé SEO, technique mais accessible, avec des exemples concrets.`
        }
      ],
      temperature: 0.7,
      max_tokens: 4000
    })

    const content = completion.choices[0].message.content || ''

    // Extraire le titre (première ligne)
    const lines = content.split('\n')
    const title = lines[0].replace(/^#\s+/, '')

    // Générer l'excerpt (premiers 200 caractères)
    const excerpt = content
      .replace(/^#.*\n/, '')
      .replace(/\n/g, ' ')
      .substring(0, 200)
      .trim() + '...'

    // Générer un slug
    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    // Générer meta SEO
    const seoCompletion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'Tu génères des meta descriptions SEO optimisées (max 160 caractères) et titres SEO (max 60 caractères).'
        },
        {
          role: 'user',
          content: `Pour l'article "${title}", génère :
1. Un titre SEO optimisé (max 60 caractères)
2. Une meta description SEO (max 160 caractères)

Format JSON :
{
  "seoTitle": "...",
  "seoDescription": "..."
}`
        }
      ],
      temperature: 0.5,
      max_tokens: 200
    })

    let seoData = { seoTitle: title, seoDescription: excerpt }
    try {
      const seoContent = seoCompletion.choices[0].message.content || '{}'
      seoData = JSON.parse(seoContent)
    } catch (e) {
      console.error('Error parsing SEO data:', e)
    }

    // Générer des backlinks pertinents
    const backlinks = [
      { url: 'https://techcrunch.com', anchor: 'TechCrunch' },
      { url: 'https://dev.to', anchor: 'Dev.to' },
      { url: 'https://github.com', anchor: 'GitHub' }
    ]

    // Trouver l'auteur
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Créer l'article en brouillon
    const post = await prisma.blogPost.create({
      data: {
        title,
        slug: `${slug}-${Date.now()}`, // Ajouter timestamp pour éviter duplicates
        category: category || 'Intelligence Artificielle',
        excerpt,
        content,
        status: 'draft',
        featured: false,
        tags: keywords || ['IA', 'Tech'],
        seoTitle: seoData.seoTitle,
        seoDescription: seoData.seoDescription,
        backlinks,
        authorId: user.id,
        image: '/LOGO__Datafuse_Blue.svg' // Image par défaut
      }
    })

    return NextResponse.json({
      success: true,
      post,
      tokensUsed: completion.usage?.total_tokens
    })
  } catch (error) {
    console.error('Error generating article:', error)
    return NextResponse.json({ 
      error: 'Failed to generate article',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
