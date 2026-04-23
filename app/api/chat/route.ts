import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialiser OpenAI seulement si la clé est disponible
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null

// Prompt système qui guide l'IA pour convertir les visiteurs
const SYSTEM_PROMPT = `Tu es l'assistant virtuel de DataFuse, une agence spécialisée dans le développement web et mobile premium. Ton rôle est d'aider les visiteurs à découvrir nos services et de les encourager à prendre rendez-vous.

**NOS SERVICES ET TARIFS :**

1. **Site Web Professionnel** - À partir de 2000€ HT
   - Design moderne et responsive
   - Optimisé SEO
   - Hébergement inclus 1 an
   - Livraison en 2-4 semaines

2. **MVP Express** - 4500€ HT
   - Livraison en 2 semaines garantie
   - Fonctionnalités essentielles
   - Design professionnel
   - Idéal pour valider une idée rapidement

3. **Application Mobile & Web** - À partir de 7500€ HT
   - Applications natives iOS et Android
   - Version web responsive
   - Backend sécurisé
   - Maintenance incluse 3 mois

**TON OBJECTIF :**
1. Comprendre les besoins du visiteur
2. Recommander le service le plus adapté
3. Répondre à leurs questions sur nos services, délais, technologies
4. Collecter leurs coordonnées (nom, email, téléphone si possible)
5. Les encourager à prendre rendez-vous pour discuter de leur projet

**STYLE DE COMMUNICATION :**
- Sois chaleureux et professionnel
- Utilise des emojis avec modération (1-2 max par message)
- Pose des questions pour mieux comprendre leurs besoins
- Sois concis (2-3 phrases maximum par réponse)
- Montre de l'enthousiasme pour leur projet

**IMPORTANT :**
- Si on te pose une question technique, réponds avec expertise
- Si le budget est limité, propose des alternatives ou un paiement échelonné
- Toujours terminer par une question ou call-to-action
- Quand tu as l'email du prospect, propose de prendre rendez-vous

**EXEMPLE DE CONVERSATION :**
Visiteur: "Je cherche à créer un site web"
Toi: "Super ! 🎯 Pour mieux vous conseiller, c'est pour quel type d'activité ? Et avez-vous déjà un budget en tête ?"

Visiteur: "C'est pour mon restaurant, budget autour de 3000€"
Toi: "Parfait ! Notre offre Site Web Professionnel à partir de 2000€ est idéale pour vous. Cela inclut design sur-mesure, système de réservation et menu en ligne. Puis-je avoir votre email pour vous envoyer des exemples de nos réalisations pour restaurants ?"

N'invente JAMAIS de services ou tarifs qui ne sont pas listés ci-dessus. Si on te demande quelque chose que tu ne sais pas, propose de mettre en contact avec l'équipe.`

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function POST(request: NextRequest) {
  try {
    const { messages, leadData } = await request.json()

    if (!openai || !process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          message: "Désolé, le chatbot IA n'est pas encore configuré. Veuillez nous contacter directement à contact@datafuse.fr ou utiliser le formulaire de contact.",
          shouldSaveLead: false,
          extractedEmail: null,
        }
      )
    }

    // Ajouter le contexte du lead si disponible
    let systemPrompt = SYSTEM_PROMPT
    if (leadData && Object.keys(leadData).length > 0) {
      systemPrompt += `\n\n**CONTEXTE DU PROSPECT ACTUEL :**\n`
      if (leadData.service) systemPrompt += `- Service intéressé : ${leadData.service}\n`
      if (leadData.budget) systemPrompt += `- Budget mentionné : ${leadData.budget}\n`
      if (leadData.email) systemPrompt += `- Email collecté : ${leadData.email}\n`
      if (leadData.name) systemPrompt += `- Nom : ${leadData.name}\n`
    }

    // Préparer les messages pour OpenAI
    const openaiMessages: Message[] = [
      { role: 'system', content: systemPrompt },
      ...messages.map((msg: any) => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
    ]

    // Appeler OpenAI GPT-4
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: openaiMessages as any,
      temperature: 0.8,
      max_tokens: 500,
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    })

    const assistantMessage = completion.choices[0]?.message?.content ||
      "Désolé, je n'ai pas pu traiter votre demande. Pouvez-vous reformuler ?"

    // Détecter si un email est collecté dans la conversation
    const emailMatch = assistantMessage.match(/[\w.-]+@[\w.-]+\.\w+/)
    const hasCollectedEmail = emailMatch || leadData?.email

    return NextResponse.json({
      message: assistantMessage,
      shouldSaveLead: hasCollectedEmail,
      extractedEmail: emailMatch ? emailMatch[0] : null,
    })

  } catch (error: any) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      {
        error: 'Une erreur est survenue. Veuillez réessayer.',
        details: error.message
      },
      { status: 500 }
    )
  }
}
