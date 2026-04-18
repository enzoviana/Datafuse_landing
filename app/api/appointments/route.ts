import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://datafuseweb-95a5588f8542.herokuapp.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validation
    if (!body.name || !body.email || !body.phone || !body.date || !body.time) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Envoyer au backend
    const response = await fetch(`${BACKEND_URL}/api/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.message || 'Erreur lors de la création du rendez-vous' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data, { status: 201 })

  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json(
        { error: 'Date requise' },
        { status: 400 }
      )
    }

    // Récupérer les créneaux disponibles depuis le backend
    const response = await fetch(`${BACKEND_URL}/api/appointments/available?date=${date}`)

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.message || 'Erreur lors de la récupération des créneaux' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)

  } catch (error) {
    console.error('Error fetching available slots:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
