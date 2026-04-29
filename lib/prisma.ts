import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

console.log('🧠 [Prisma] Chargement du module prisma.ts')
console.log('🌍 NODE_ENV =', process.env.NODE_ENV)

// 🔍 Vérif env
console.log('🔍 [Prisma] Vérification DATABASE_URL...')
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL est UNDEFINED')
} else {
  console.log('✅ DATABASE_URL détectée')
  console.log('📏 Longueur:', process.env.DATABASE_URL.length)
  console.log(
    '🔗 Prefix:',
    process.env.DATABASE_URL.substring(0, 30) + '...'
  )
}

// Factory pour créer le client Prisma avec Accelerate
const makeClient = () => {
  console.log('⚙️ [Prisma] Création d’un nouveau PrismaClient...')

  try {
    const client = new PrismaClient({
      accelerateUrl: process.env.DATABASE_URL,
      log:
        process.env.NODE_ENV === 'development'
          ? ['query', 'error', 'warn']
          : ['error'],
    }).$extends(withAccelerate())

    console.log('✅ [Prisma] PrismaClient créé avec succès')

    return client
  } catch (error) {
    console.error('❌ [Prisma] Erreur lors de la création du client')
    console.error(error)
    throw error
  }
}

// Typage du client étendu
type PrismaClientExtended = ReturnType<typeof makeClient>

// Singleton global (évite multi instances en dev)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientExtended | undefined
}

console.log(
  '♻️ [Prisma] Instance globale existante ?',
  globalForPrisma.prisma ? 'OUI' : 'NON'
)

// Instance unique
export const prisma =
  globalForPrisma.prisma ??
  (() => {
    console.log('🆕 [Prisma] Aucune instance trouvée, création...')
    return makeClient()
  })()

// Cache en dev uniquement
if (process.env.NODE_ENV !== 'production') {
  console.log('💾 [Prisma] Sauvegarde instance en global (dev)')
  globalForPrisma.prisma = prisma
} else {
  console.log('🚀 [Prisma] Mode production (pas de cache global)')
}

console.log('🏁 [Prisma] Module prêt')

export default prisma