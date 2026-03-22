import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Envoyer au backend pour créer le prospect via l'endpoint public
    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
      console.log('🔗 Backend URL:', backendUrl)

      const response = await fetch(`${backendUrl}/public/website-contact`, {
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
        throw new Error(`Erreur ${response.status}: ${errorText}`)
      }

      const result = await response.json()
      console.log('✅ Prospect créé avec succès:', result.prospectId)
    } catch (backendError) {
      console.error('❌ Erreur lors de la création du prospect:', backendError)
      // Ne pas bloquer l'envoi de l'email si le backend échoue
    }

    // Envoyer l'email
    const data = await resend.emails.send({
      from: 'Datafuse Contact <onboarding@resend.dev>', // Remplacez par votre domaine vérifié
      to: 'contact@datafuse.fr',
      replyTo: email,
      subject: `Nouveau contact : ${fullName} - ${serviceType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .header {
                background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                color: white;
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 25px;
              }
              .field-label {
                font-size: 11px;
                text-transform: uppercase;
                color: #666;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 8px;
              }
              .field-value {
                font-size: 15px;
                color: #111;
                padding: 12px;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 3px solid #2563eb;
              }
              .footer {
                background: #f8f9fa;
                padding: 20px 30px;
                text-align: center;
                font-size: 12px;
                color: #666;
              }
              .badge {
                display: inline-block;
                padding: 6px 12px;
                background: #dbeafe;
                color: #1e40af;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>⚡ Nouveau Contact - Datafuse Studio</h1>
                <div class="badge">${serviceType}</div>
              </div>

              <div class="content">
                <div class="field">
                  <div class="field-label">Nom Complet</div>
                  <div class="field-value">${fullName}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </div>
                </div>

                <div class="field">
                  <div class="field-label">Type de Service</div>
                  <div class="field-value">${serviceType}</div>
                </div>

                <div class="field">
                  <div class="field-label">Budget</div>
                  <div class="field-value">${budget}</div>
                </div>

                <div class="field">
                  <div class="field-label">Brief du Projet</div>
                  <div class="field-value">${projectBrief.replace(/\n/g, '<br>')}</div>
                </div>
              </div>

              <div class="footer">
                Envoyé depuis le formulaire de contact de datafuse.fr<br>
                ${new Date().toLocaleString('fr-FR', {
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
