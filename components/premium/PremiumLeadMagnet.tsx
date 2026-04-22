'use client'

import { motion } from 'framer-motion'
import { FileText, Calculator, CheckCircle2, Download, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const magnets = [
  {
    icon: FileText,
    title: 'Checklist SaaS 2026',
    subtitle: 'Les 47 points pour réussir',
    description: 'Le guide complet utilisé par +500 fondateurs pour valider leur MVP',
    value: 'Gratuit',
    format: 'PDF • 12 pages',
    cta: 'Télécharger',
    color: 'blue'
  },
  {
    icon: Calculator,
    title: 'Simulateur de coût',
    subtitle: 'Estimez votre projet en 2 min',
    description: 'Calculez le budget réel de votre application (frontend, backend, infra)',
    value: 'Instantané',
    format: 'Outil en ligne',
    cta: 'Calculer',
    color: 'purple'
  },
  {
    icon: CheckCircle2,
    title: 'Audit Express Gratuit',
    subtitle: '5 points d\'analyse',
    description: 'Performance, SEO, sécurité, accessibilité, code quality - rapport en 48h',
    value: 'Offert',
    format: 'Rapport • 5 pages',
    cta: 'Demander',
    color: 'green'
  }
]

export default function PremiumLeadMagnet() {
  const [email, setEmail] = useState('')
  const [selectedMagnet, setSelectedMagnet] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleDownload = async (magnetIndex: number) => {
    setSelectedMagnet(magnetIndex)

    if (!email) {
      alert('Veuillez entrer votre email')
      return
    }

    setStatus('loading')

    // Simuler l'envoi
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        setEmail('')
        setSelectedMagnet(null)
      }, 3000)
    }, 1500)
  }

  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-mono text-green-400 tracking-[0.2em] mb-6 uppercase">
            RESSOURCES GRATUITES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Démarrez <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600">avant de payer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Profitez de nos outils et guides. Aucune carte bancaire requise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {magnets.map((magnet, idx) => (
            <motion.div
              key={magnet.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-${magnet.color}-500/10 border border-${magnet.color}-500/20 flex items-center justify-center mb-6`}>
                <magnet.icon className={`text-${magnet.color}-400`} size={32} />
              </div>

              {/* Badge valeur */}
              <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
                {magnet.value}
              </span>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-white mb-2">{magnet.title}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">{magnet.subtitle}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {magnet.description}
              </p>

              {/* Format */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-mono">
                <Download size={14} />
                <span>{magnet.format}</span>
              </div>

              {/* Email input */}
              <div className="space-y-3">
                <input
                  type="email"
                  value={selectedMagnet === idx ? email : ''}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setSelectedMagnet(idx)
                  }}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <button
                  onClick={() => handleDownload(idx)}
                  disabled={status === 'loading' && selectedMagnet === idx}
                  className="w-full py-3 bg-white text-black rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' && selectedMagnet === idx ? (
                    'Envoi en cours...'
                  ) : status === 'success' && selectedMagnet === idx ? (
                    <>
                      <CheckCircle2 size={16} />
                      Envoyé !
                    </>
                  ) : (
                    <>
                      {magnet.cta}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/5 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">2 847</div>
              <div className="text-sm text-gray-500">téléchargements en 2025</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.8/5</div>
              <div className="text-sm text-gray-500">note moyenne des ressources</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">0€</div>
              <div className="text-sm text-gray-500">vraiment gratuit, toujours</div>
            </div>
          </div>
        </motion.div>

        {/* Note légale */}
        <p className="text-center text-xs text-gray-600 mt-8">
          Vos données sont protégées et ne seront jamais vendues. Désinscription en 1 clic.
        </p>
      </div>
    </section>
  )
}
