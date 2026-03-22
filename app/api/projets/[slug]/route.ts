import { NextResponse } from 'next/server'

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://datafuseweb-95a5588f8542.herokuapp.com/api'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug

    const response = await fetch(`${BACKEND_API_URL}/projets-website/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache de 5 minutes
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Projet introuvable' },
          { status: 404 }
        )
      }
      throw new Error('Failed to fetch projet')
    }

    const data = await response.json()

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    })
  } catch (error) {
    console.error('Erreur lors de la récupération du projet:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du projet' },
      { status: 500 }
    )
  }
}
