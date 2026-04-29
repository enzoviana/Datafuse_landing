require('dotenv').config()

const { PrismaClient } = require('@prisma/client')
const { withAccelerate } = require('@prisma/extension-accelerate')

async function main() {
  console.log('🚀 DÉMARRAGE SCRIPT')
  console.log('---------------------------------')

  // 🔍 Vérif env
  console.log('🔍 Vérification des variables d’environnement...')
  console.log('DATABASE_URL =', process.env.DATABASE_URL ? '✅ définie' : '❌ UNDEFINED')
  
  if (process.env.DATABASE_URL) {
    console.log('📏 Longueur URL:', process.env.DATABASE_URL.length)
    console.log('🔗 Prefix:', process.env.DATABASE_URL.substring(0, 30) + '...')
  }

  console.log('---------------------------------')

  let prisma

  try {
    console.log('⚙️ Initialisation PrismaClient...')
    
prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL, // 👈 AJOUT CRITIQUE
  log: ['query', 'info', 'warn', 'error'],
}).$extends(withAccelerate())

    console.log('✅ PrismaClient initialisé')

  } catch (initError) {
    console.error('❌ ERREUR INIT PrismaClient')
    console.error(initError)
    return
  }

  console.log('---------------------------------')

  try {
    console.log('📡 Test requête DB...')
    
    const start = Date.now()

    const userCount = await prisma.user.count()

    const duration = Date.now() - start

    console.log('✅ Requête réussie')
    console.log(`📊 Users: ${userCount}`)
    console.log(`⏱️ Temps: ${duration}ms`)

  } catch (error) {
    console.error('❌ ERREUR REQUÊTE')
    console.error('Message:', error.message)
    console.error('Code:', error.code)
    console.error('Stack:', error.stack)

    if (error.message?.includes('accelerateUrl')) {
      console.log('💡 PROBLÈME: accelerateUrl non détecté')
    }

    if (error.message?.includes('api_key')) {
      console.log('💡 PROBLÈME: API key invalide')
    }

  } finally {
    console.log('---------------------------------')
    console.log('🔌 Fermeture connexion Prisma...')
    
    if (prisma) {
      await prisma.$disconnect()
      console.log('✅ Déconnecté')
    } else {
      console.log('⚠️ Prisma non initialisé')
    }

    console.log('🏁 FIN SCRIPT')
  }
}

main()