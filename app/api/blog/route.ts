import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import prisma from '@/lib/prisma'

// GET - Liste tous les articles (avec filtres)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = parseInt(searchParams.get('skip') || '0')

    const where: any = {}
    if (status) where.status = status

    const posts = await prisma.blogPost.findMany({
      where,
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip
    })

    const total = await prisma.blogPost.count({ where })

    return NextResponse.json({
      posts,
      total,
      hasMore: total > skip + limit
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const {
      title,
      titleEn,
      titlePt,
      slug,
      category,
      excerpt,
      excerptEn,
      excerptPt,
      content,
      contentEn,
      contentPt,
      image,
      status,
      featured,
      tags,
      seoTitle,
      seoDescription,
      backlinks
    } = body

    // Vérifier si le slug existe déjà
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug }
    })

    if (existingPost) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 })
    }

    // Trouver l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        titleEn,
        titlePt,
        slug,
        category,
        excerpt,
        excerptEn,
        excerptPt,
        content,
        contentEn,
        contentPt,
        image,
        status: status || 'draft',
        featured: featured || false,
        tags: tags || [],
        seoTitle,
        seoDescription,
        backlinks,
        authorId: user.id,
        publishedAt: status === 'published' ? new Date() : null
      }
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
