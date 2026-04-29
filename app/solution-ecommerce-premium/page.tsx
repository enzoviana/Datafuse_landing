'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, Zap, TrendingUp, Check } from 'lucide-react'
import Link from 'next/link'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'

export default function SolutionEcommercePage() {
  return (
    <main className="min-h-screen bg-[#020203] text-white">
      <PremiumNavbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
      </div>

      <section className="relative z-10 pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-600/10 mb-8"
          >
            <ShoppingCart size={12} className="text-purple-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">E-commerce Premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
          >
            Solution E-commerce <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Haute Performance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
          >
            Boutique en ligne ultra-rapide avec taux de conversion optimisé. Stripe, PayPal, gestion stock, analytics
            avancés. Score 98/100 mobile.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="group h-14 px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2"
            >
              Devis e-commerce gratuit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Performance extrême", desc: "Score 98/100 mobile, chargement <1s" },
              { icon: <TrendingUp />, title: "+45% conversion", desc: "UX optimisée, checkout simplifié" },
              { icon: <Check />, title: "Stripe + PayPal", desc: "Paiements sécurisés, 3D Secure" }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="size-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-400 font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Tarifs e-commerce premium
          </h2>
          <p className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-8">
            À partir de 8k€
          </p>
          <Link
            href="/developpement-saas-sur-mesure"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold transition-all"
          >
            Découvrir nos services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
