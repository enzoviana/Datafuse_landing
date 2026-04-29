'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Lock, TrendingUp, Check, DollarSign, CreditCard, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'

export default function SolutionFinTechPage() {
  const solutions = [
    {
      icon: <CreditCard className="size-6" />,
      title: "Plateforme de paiement",
      features: ["Stripe/PayPal integration", "Multi-devises", "Fraud detection", "Réconciliation auto"]
    },
    {
      icon: <BarChart3 className="size-6" />,
      title: "Dashboard analytics financier",
      features: ["KPIs temps réel", "Prévisions ML", "Reporting automatisé", "Export comptable"]
    },
    {
      icon: <DollarSign className="size-6" />,
      title: "Néobanque / Banking app",
      features: ["Comptes virtuels", "Cartes virtuelles", "Virements SEPA", "API bancaire"]
    }
  ]

  const compliance = [
    { standard: "PCI-DSS", desc: "Sécurité des données de paiement", icon: <Shield className="size-5" /> },
    { standard: "RGPD", desc: "Protection données personnelles", icon: <Lock className="size-5" /> },
    { standard: "KYC/AML", desc: "Vérification identité anti-blanchiment", icon: <Check className="size-5" /> }
  ]

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30">
      <PremiumNavbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
      </div>

      <section className="relative z-10 pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-600/10 backdrop-blur-xl mb-8"
          >
            <DollarSign size={12} className="text-green-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-green-400">Solution Verticale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
          >
            Solution SaaS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              FinTech
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
          >
            Développez votre plateforme FinTech sécurisée. RGPD, PCI-DSS, KYC/AML. Architecture banking-grade avec
            conformité réglementaire intégrée.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-12 text-sm text-gray-500 font-mono"
          >
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-green-500" />
              <span>PCI-DSS compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-green-500" />
              <span>Banking-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>RGPD natif</span>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="group h-14 px-8 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2"
            >
              Devis FinTech gratuit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projets/fintech-saas-platform"
              className="h-14 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
            >
              Case study FinTech →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Nos solutions FinTech
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="size-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                  {sol.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                <ul className="space-y-2">
                  {sol.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="font-light">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Conformité réglementaire
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {compliance.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold">{c.standard}</h3>
                </div>
                <p className="text-gray-400 font-light">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Tarifs solution FinTech
          </h2>
          <p className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-8">
            À partir de 25k€
          </p>
          <p className="text-gray-400 font-light text-lg mb-12">
            Prix selon complexité et intégrations. Audit sécurité inclus.
          </p>
          <Link
            href="/developpement-saas-sur-mesure"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all"
          >
            En savoir plus sur nos services SaaS
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
