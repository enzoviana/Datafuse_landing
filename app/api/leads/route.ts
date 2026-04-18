import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://datafuseweb-95a5588f8542.herokuapp.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validation anti-spam simple
    if (body.honeypot) {
      // Si le champ honeypot est rempli, c'est probablement un bot
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      )
    }

    // Envoyer au backend
    const response = await fetch(`${BACKEND_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.message || 'Erreur lors de la création du lead' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data, { status: 201 })

  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
