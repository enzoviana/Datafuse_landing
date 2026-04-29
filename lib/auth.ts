import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        console.log('🔐 [AUTH] ================')
        console.log('📥 authorize called')
        console.log('📧 credentials:', credentials?.email)
        console.log('🔑 password length:', credentials?.password?.length)

        if (!credentials?.email || !credentials?.password) {
          console.log('❌ Missing credentials')
          return null
        }

        console.log('🔎 Searching user in DB...')

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        console.log('👤 User found:', user ? 'YES' : 'NO')
        console.log('📦 User data:', user)

        if (!user) {
          console.log('❌ No user found')
          return null
        }

        console.log('🔐 Comparing passwords...')
        console.log('➡️ Input password:', credentials.password)
        console.log('➡️ Stored hash:', user.password)

        let isPasswordValid = false

        try {
          isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          )
        } catch (err) {
          console.log('💥 bcrypt error:', err)
          return null
        }

        console.log('✅ Password valid?', isPasswordValid)

        if (!isPasswordValid) {
          console.log('❌ Invalid password')
          return null
        }

        console.log('🎉 AUTH SUCCESS')

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/admin/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      console.log('🪪 JWT callback')
      if (user && 'role' in user) {
        token.role = user.role
      }
      return token
    },

    async session({ session, token }) {
      console.log('📦 Session callback')
      if (session.user && token.role) {
        session.user.role = token.role
      }
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}
