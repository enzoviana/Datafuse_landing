#!/usr/bin/env node

/**
 * Script de test pour vérifier la configuration OpenAI
 * Usage: node test-openai.js
 */

require('dotenv').config({ path: '.env.local' })

async function testOpenAI() {
  console.log('🔍 Vérification de la configuration OpenAI...\n')

  // Vérifier que la clé API est présente
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    console.error('❌ Erreur : OPENAI_API_KEY non trouvée dans .env.local')
    console.log('\n📝 Action requise :')
    console.log('1. Ouvrez le fichier .env.local')
    console.log('2. Ajoutez votre clé API OpenAI :')
    console.log('   OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx')
    console.log('3. Obtenez une clé sur https://platform.openai.com/api-keys')
    process.exit(1)
  }

  if (apiKey === 'your_openai_api_key_here') {
    console.error('❌ Erreur : Vous devez remplacer "your_openai_api_key_here" par votre vraie clé API')
    console.log('\n📝 Action requise :')
    console.log('1. Obtenez une clé sur https://platform.openai.com/api-keys')
    console.log('2. Remplacez la valeur dans .env.local')
    process.exit(1)
  }

  console.log('✅ Clé API trouvée')
  console.log(`   Format : ${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 4)}`)

  // Test de connexion à l'API OpenAI
  console.log('\n🚀 Test de connexion à OpenAI...')

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'Tu es un assistant de test.' },
          { role: 'user', content: 'Réponds juste "OK" pour confirmer que tu fonctionnes.' }
        ],
        max_tokens: 10
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('❌ Erreur API OpenAI :', error.error?.message || 'Erreur inconnue')

      if (error.error?.code === 'invalid_api_key') {
        console.log('\n📝 Votre clé API est invalide ou expirée')
        console.log('   Créez une nouvelle clé sur https://platform.openai.com/api-keys')
      } else if (error.error?.code === 'insufficient_quota') {
        console.log('\n📝 Quota insuffisant')
        console.log('   Ajoutez des crédits sur https://platform.openai.com/account/billing')
      }

      process.exit(1)
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content

    console.log('✅ Connexion réussie !')
    console.log(`   Réponse de l\'IA : "${aiResponse}"`)
    console.log(`   Modèle utilisé : ${data.model}`)
    console.log(`   Tokens utilisés : ${data.usage.total_tokens}`)

    console.log('\n🎉 Configuration OpenAI validée avec succès !')
    console.log('\n📌 Prochaines étapes :')
    console.log('1. Lancez votre serveur : npm run dev')
    console.log('2. Testez le chatbot sur votre site')
    console.log('3. Consultez CHATBOT_AI_SETUP.md pour la personnalisation')

  } catch (error) {
    console.error('❌ Erreur lors du test :', error.message)
    console.log('\n📝 Vérifiez votre connexion internet')
    process.exit(1)
  }
}

testOpenAI()
