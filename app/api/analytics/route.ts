import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET - Récupérer les analytics
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '30' // jours
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - parseInt(period))

    // Visiteurs uniques
    const uniqueVisitors = await prisma.visitorSession.count({
      where: {
        firstVisit: {
          gte: startDate
        }
      }
    })

    // Pages vues totales
    const totalPageViews = await prisma.pageView.count({
      where: {
        createdAt: {
          gte: startDate
        }
      }
    })

    // Temps moyen sur site
    const sessions = await prisma.visitorSession.findMany({
      where: {
        firstVisit: {
          gte: startDate
        }
      },
      select: {
        totalDuration: true
      }
    })

    const avgDuration = sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + s.totalDuration, 0) / sessions.length)
      : 0

    // Top pages
    const topPages = await prisma.pageView.groupBy({
      by: ['path'],
      where: {
        createdAt: {
          gte: startDate
        }
      },
      _count: {
        path: true
      },
      orderBy: {
        _count: {
          path: 'desc'
        }
      },
      take: 10
    })

    // Top pays
    const topCountries = await prisma.visitorSession.groupBy({
      by: ['country'],
      where: {
        firstVisit: {
          gte: startDate
        },
        country: {
          not: null
        }
      },
      _count: {
        country: true
      },
      orderBy: {
        _count: {
          country: 'desc'
        }
      },
      take: 10
    })

    // Devices
    const devices = await prisma.visitorSession.groupBy({
      by: ['device'],
      where: {
        firstVisit: {
          gte: startDate
        },
        device: {
          not: null
        }
      },
      _count: {
        device: true
      }
    })

    // Nouveaux prospects
    const newLeads = await prisma.formSubmission.count({
      where: {
        createdAt: {
          gte: startDate
        }
      }
    })

    // Taux de conversion
    const conversions = await prisma.visitorSession.count({
      where: {
        firstVisit: {
          gte: startDate
        },
        isConverted: true
      }
    })

    const conversionRate = uniqueVisitors > 0
      ? ((conversions / uniqueVisitors) * 100).toFixed(2)
      : '0.00'

    // Graphe daily visitors (7 derniers jours)
    const dailyStats = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      date.setHours(0, 0, 0, 0)
      
      const nextDate = new Date(date)
      nextDate.setDate(nextDate.getDate() + 1)

      const count = await prisma.visitorSession.count({
        where: {
          firstVisit: {
            gte: date,
            lt: nextDate
          }
        }
      })

      dailyStats.push({
        date: date.toISOString().split('T')[0],
        visitors: count
      })
    }

    return NextResponse.json({
      summary: {
        uniqueVisitors,
        totalPageViews,
        avgDuration,
        newLeads,
        conversionRate
      },
      topPages: topPages.map(p => ({
        path: p.path,
        views: p._count.path
      })),
      topCountries: topCountries.map(c => ({
        country: c.country,
        visitors: c._count.country
      })),
      devices: devices.map(d => ({
        device: d.device,
        count: d._count.device
      })),
      dailyStats
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}
