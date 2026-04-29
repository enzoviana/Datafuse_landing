import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET - Liste tous les prospects
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = parseInt(searchParams.get('skip') || '0')

    const where: any = {}
    if (status && status !== 'all') where.status = status

    const leads = await prisma.formSubmission.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip
    })

    const total = await prisma.formSubmission.count({ where })

    // Stats par status
    const statsByStatus = await prisma.formSubmission.groupBy({
      by: ['status'],
      _count: {
        status: true
      }
    })

    return NextResponse.json({
      leads,
      total,
      stats: statsByStatus.map(s => ({
        status: s.status,
        count: s._count.status
      })),
      hasMore: total > skip + limit
    })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

// PUT - Mettre à jour le status d'un lead
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 })
    }

    const lead = await prisma.formSubmission.update({
      where: { id },
      data: { status }
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}
