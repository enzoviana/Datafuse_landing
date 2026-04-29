import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import prisma from '@/lib/prisma'

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

// Topics tech populaires pour génération automatique
const TECH_TOPICS = [
  'Intelligence Artificielle',
  'Développement Web',
  'Cloud Computing',
  'Cybersécurité',
  'DevOps',
  'Machine Learning',
  'Blockchain',
  'React & Next.js',
  'TypeScript',
  'PostgreSQL',
  'Architecture Logicielle',
  'Performance Web',
  'SEO Technique',
  'API Design',
  'Microservices'
]

// GET - Générer 5 articles automatiquement (Cron job)
export async function GET(request: NextRequest) {
  try {
    // Vérifier l'auth du cron (secret key)
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET || 'dev-secret'
    
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!openai) {
      return NextResponse.json({ error: 'OpenAI not configured' }, { status: 500 })
    }

    // Trouver un admin pour attribuer les articles
    const admin = await prisma.user.findFirst({
      where: { role: 'admin' }
    })

    if (!admin) {
      return NextResponse.json({ error: 'No admin user found' }, { status: 404 })
    }

    const generatedPosts = []
    const errors = []

    // Générer 5 articles
    for (let i = 0; i < 5; i++) {
      try {
        // Sélectionner un topic aléatoire
        const topic = TECH_TOPICS[Math.floor(Math.random() * TECH_TOPICS.length)]

        // Demander à GPT de trouver un sujet tendance
        const topicCompletion = await openai.chat.completions.create({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: 'Tu es un expert en veille technologique. Tu identifies les sujets tendances et d\'actualité dans le domaine tech.'
            },
            {
              role: 'user',
              content: `Dans le domaine "${topic}", trouve un sujet d'actualité ou une tendance récente (2026) qui mérite un article de blog technique.
Réponds avec juste le titre de l'article (max 100 caractères).`
            }
          ],
          temperature: 0.8,
          max_tokens: 100
        })

        const articleTopic = topicCompletion.choices[0].message.content?.trim() || `${topic} : Tendances 2026`

        // Générer l'article complet
        const completion = await openai.chat.completions.create({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: `Tu es un expert rédacteur tech. Tu écris des articles SEO-optimisés, informatifs et engageants.

Structure requise :
- Titre accrocheur
- Introduction captivante (150-200 mots)
- 4-6 sections avec sous-titres
- Exemples concrets et données chiffrées
- Conclusion avec insights
- Longueur : 1500-2000 mots
- Format : Markdown`
            },
            {
              role: 'user',
              content: `Écris un article technique complet et SEO-optimisé sur : "${articleTopic}"`
            }
          ],
          temperature: 0.7,
          max_tokens: 4000
        })

        const content = completion.choices[0].message.content || ''
        const lines = content.split('\n')
        const title = lines[0].replace(/^#\s+/, '')
        const excerpt = content.replace(/^#.*\n/, '').replace(/\n/g, ' ').substring(0, 200).trim() + '...'

        const slug = title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')

        // Créer l'article en brouillon
        const post = await prisma.blogPost.create({
          data: {
            title,
            slug: `${slug}-${Date.now()}-${i}`,
            category: topic,
            excerpt,
            content,
            status: 'draft',
            featured: i === 0, // Premier article en featured
            tags: [topic, 'Actualité Tech', '2026'],
            seoTitle: title,
            seoDescription: excerpt,
            authorId: admin.id,
            image: '/LOGO__Datafuse_Blue.svg'
          }
        })

        generatedPosts.push(post.id)

        // Petit délai pour ne pas surcharger l'API
        await new Promise(resolve => setTimeout(resolve, 2000))

      } catch (error) {
        console.error(`Error generating article ${i + 1}:`, error)
        errors.push({
          index: i + 1,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    return NextResponse.json({
      success: true,
      generated: generatedPosts.length,
      articles: generatedPosts,
      errors: errors.length > 0 ? errors : undefined
    })
  } catch (error) {
    console.error('Error in scheduled generation:', error)
    return NextResponse.json({
      error: 'Failed to generate articles',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
