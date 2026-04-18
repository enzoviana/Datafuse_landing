import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://datafuseweb-95a5588f8542.herokuapp.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Protection anti-bot - Honeypot
    if (body.honeypot) {
      console.log('Bot detected via honeypot')
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      )
    }

    // Protection anti-bot - Vérifier le temps de soumission
    const submissionTime = Date.now() - (body.timestamp || 0)
    if (submissionTime < 5000) {
      console.log('Form submitted too quickly')
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      )
    }

    // Validation des champs requis
    if (!body.email || !body.service || !body.budget || !body.deadline || !body.description) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Validation de la description
    if (body.description.length < 20) {
      return NextResponse.json(
        { error: 'Description trop courte (minimum 20 caractères)' },
        { status: 400 }
      )
    }

    // Supprimer les champs de protection avant d'envoyer au backend
    const { honeypot, timestamp, ...cleanData } = body

    // Envoyer au backend
    const response = await fetch(`${BACKEND_URL}/api/project-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanData),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.message || 'Erreur lors de la création de la demande' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data, { status: 201 })

  } catch (error) {
    console.error('Error creating project request:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
