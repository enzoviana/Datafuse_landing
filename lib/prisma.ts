import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

console.log('[Prisma] Chargement du module prisma.ts')

// Typage du client etendu
type PrismaClientExtended = ReturnType<typeof createPrismaClient>

// Singleton global (evite multi instances en dev)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientExtended | undefined
}

// Factory pour creer le client Prisma avec Accelerate
function createPrismaClient() {
  console.log('[Prisma] Creation d\'un nouveau PrismaClient...')
  console.log('NODE_ENV =', process.env.NODE_ENV)

  // Verification env
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL est UNDEFINED')
    throw new Error('DATABASE_URL must be defined')
  }

  console.log('DATABASE_URL detectee')
  console.log('Longueur:', process.env.DATABASE_URL.length)
  console.log('Prefix:', process.env.DATABASE_URL.substring(0, 30) + '...')

  const client = new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  }).$extends(withAccelerate())

  console.log('[Prisma] PrismaClient cree avec succes')

  return client
}

// Getter lazy pour le client Prisma
function getPrismaClient(): PrismaClientExtended {
  if (globalForPrisma.prisma) {
    console.log('[Prisma] Utilisation de l\'instance en cache')
    return globalForPrisma.prisma
  }

  console.log('[Prisma] Aucune instance trouvee, creation...')
  const client = createPrismaClient()

  // Cache en dev uniquement
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Prisma] Sauvegarde instance en global (dev)')
    globalForPrisma.prisma = client
  } else {
    console.log('[Prisma] Mode production (pas de cache global)')
  }

  return client
}

// Export d'un proxy qui cree le client a la demande
export const prisma = new Proxy({} as PrismaClientExtended, {
  get(target, prop) {
    const client = getPrismaClient()
    const value = client[prop as keyof typeof client]
    return typeof value === 'function' ? value.bind(client) : value
  }
})

export default prisma
