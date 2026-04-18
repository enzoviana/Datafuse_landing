import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, serviceType, budget, projectBrief } = body

    // Validation
    if (!fullName || !email || !serviceType || !budget || !projectBrief) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Envoyer au backend qui gèrera la création du prospect et l'envoi de l'email
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://datafuseweb-95a5588f8542.herokuapp.com'
    console.log('🔗 Backend URL:', backendUrl)

    const response = await fetch(`${backendUrl}/api/public/website-contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        serviceType,
        budget,
        projectBrief
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`❌ Erreur backend ${response.status}:`, errorText)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message' },
        { status: response.status }
      )
    }

    const result = await response.json()
    console.log('✅ Prospect créé avec succès:', result.prospectId)

    return NextResponse.json({ success: true, data: result }, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
