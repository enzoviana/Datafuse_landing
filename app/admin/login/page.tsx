'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, Mail, Terminal } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  console.log('🚀 [LOGIN] Submit triggered')
  console.log('📧 Email:', email)
  console.log('🔑 Password length:', password?.length)

  setError('')
  setLoading(true)

  try {
    console.log('📡 [LOGIN] Calling NextAuth signIn...')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    console.log('📩 [LOGIN] Raw result:', result)

    if (!result) {
      console.log('❌ [LOGIN] No result returned from signIn')
      setError('Erreur de connexion (no result)')
      return
    }

    console.log('⚠️ [LOGIN] Error field:', result.error)
    console.log('🔗 [LOGIN] URL:', result.url)
    console.log('✅ [LOGIN] Status:', result.ok)

    if (result.error) {
      console.log('❌ [LOGIN] Authentication failed')
      setError('Email ou mot de passe incorrect')
    } else {
      console.log('🎉 [LOGIN] Success → redirecting to dashboard')
      router.push('/admin/dashboard')
    }

  } catch (err) {
    console.error('💥 [LOGIN] Exception caught:', err)
    setError('Une erreur est survenue')
  } finally {
    console.log('🏁 [LOGIN] Loading finished')
    setLoading(false)
  }
}

  return (
    <main className="min-h-screen bg-[#020203] flex items-center justify-center px-4">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Terminal className="text-blue-500" size={32} />
            <span className="text-2xl font-bold text-white">DataFuse</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Administration</h1>
          <p className="text-gray-400">Connectez-vous pour accéder au dashboard</p>
        </div>

        {/* Form */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="admin@datafuse.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} DataFuse Studio - Tous droits réservés
        </p>
      </motion.div>
    </main>
  )
}
 