import { NextResponse } from 'next/server'

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://datafuseweb-95a5588f8542.herokuapp.com/api'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    // Construire l'URL avec les paramètres
    const params = new URLSearchParams()
    if (type) params.append('type', type)
    if (category) params.append('category', category)

    const url = `${BACKEND_API_URL}/projets-website${params.toString() ? `?${params.toString()}` : ''}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache de 5 minutes
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch projets')
    }

    const data = await response.json()

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des projets' },
      { status: 500 }
    )
  }
}
