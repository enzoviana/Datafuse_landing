require('dotenv').config()

const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const { withAccelerate } = require('@prisma/extension-accelerate')

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate())

async function main() {
  console.log('🚀 Create/Update admin')

  const hashedPassword = await bcrypt.hash('Admin123!', 12)

  const user = await prisma.user.upsert({
    where: { email: 'admin@datafuse.com' },
    update: {
      role: 'admin',
    },
    create: {
      email: 'admin@datafuse.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    },
  })

  console.log('✅ Admin ready:')
  console.log(user)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())