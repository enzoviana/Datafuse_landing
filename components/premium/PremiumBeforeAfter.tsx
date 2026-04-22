'use client'

import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp, Zap, Users, DollarSign, Clock } from 'lucide-react'
import { useState } from 'react'

const cases = [
  {
    client: 'SaaS B2B - Fintech',
    industry: 'Finance',
    challenge: 'Temps de chargement inacceptable',
    before: {
      loadTime: '8.4s',
      conversionRate: '1.2%',
      revenue: '12k€/mois',
      churn: '8%',
      lighthouse: '34/100'
    },
    after: {
      loadTime: '1.1s',
      conversionRate: '4.7%',
      revenue: '47k€/mois',
      churn: '2%',
      lighthouse: '98/100'
    },
    impact: '+292% de revenus en 4 mois',
    testimonial: '"On a enfin un produit dont on est fiers. Les clients ne se plaignent plus de la lenteur."',
    author: 'Thomas L., CTO'
  },
  {
    client: 'E-commerce Mode',
    industry: 'Retail',
    challenge: 'Panier abandonné trop élevé',
    before: {
      loadTime: '5.2s',
      conversionRate: '0.9%',
      revenue: '8k€/mois',
      churn: 'N/A',
      lighthouse: '42/100'
    },
    after: {
      loadTime: '0.8s',
      conversionRate: '3.4%',
      revenue: '31k€/mois',
      churn: 'N/A',
      lighthouse: '96/100'
    },
    impact: '+288% de CA en 2 mois',
    testimonial: '"Le ROI a été immédiat. L\'investissement s\'est rentabilisé en 3 semaines."',
    author: 'Marie D., Founder'
  },
  {
    client: 'Plateforme SaaS RH',
    industry: 'HR Tech',
    challenge: 'Code legacy impossible à maintenir',
    before: {
      loadTime: '12.1s',
      conversionRate: '0.6%',
      revenue: '6k€/mois',
      churn: '15%',
      lighthouse: '28/100'
    },
    after: {
      loadTime: '1.4s',
      conversionRate: '2.9%',
      revenue: '29k€/mois',
      churn: '3%',
      lighthouse: '94/100'
    },
    impact: '+383% de revenus en 6 mois',
    testimonial: '"On peut enfin itérer vite. Avant, chaque feature prenait 3 semaines. Maintenant : 2 jours."',
    author: 'Alex M., CEO'
  }
]

const metrics = [
  { icon: Clock, label: 'Temps de chargement', key: 'loadTime' },
  { icon: TrendingUp, label: 'Taux de conversion', key: 'conversionRate' },
  { icon: DollarSign, label: 'Revenu mensuel', key: 'revenue' },
  { icon: TrendingDown, label: 'Taux de churn', key: 'churn' },
  { icon: Zap, label: 'Score Lighthouse', key: 'lighthouse' }
]

export default function PremiumBeforeAfter() {
  const [activeCase, setActiveCase] = useState(0)
  const currentCase = cases[activeCase]

  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase">
            RÉSULTATS MESURABLES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Avant / Après <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">mesurables</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pas de bla-bla. Voici ce qui se passe quand on optimise vraiment.
          </p>
        </motion.div>

        {/* Case selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              className={`px-6 py-3 rounded-xl font-mono text-sm transition-all ${
                activeCase === idx
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/30'
              }`}
            >
              {c.client}
            </button>
          ))}
        </div>

        {/* Comparison grid */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-6 mb-12"
        >
          {/* AVANT */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <TrendingDown className="text-red-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AVANT</h3>
                <p className="text-sm text-gray-400">{currentCase.challenge}</p>
              </div>
            </div>

            <div className="space-y-4">
              {metrics.map((metric) => (
                currentCase.before[metric.key as keyof typeof currentCase.before] !== 'N/A' && (
                  <div key={metric.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <metric.icon className="text-gray-500" size={20} />
                      <span className="text-sm text-gray-400">{metric.label}</span>
                    </div>
                    <span className="text-lg font-bold text-red-400">
                      {currentCase.before[metric.key as keyof typeof currentCase.before]}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* APRÈS */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">APRÈS</h3>
                <p className="text-sm text-green-400 font-semibold">{currentCase.impact}</p>
              </div>
            </div>

            <div className="space-y-4">
              {metrics.map((metric) => (
                currentCase.after[metric.key as keyof typeof currentCase.after] !== 'N/A' && (
                  <div key={metric.key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <metric.icon className="text-gray-500" size={20} />
                      <span className="text-sm text-gray-400">{metric.label}</span>
                    </div>
                    <span className="text-lg font-bold text-green-400">
                      {currentCase.after[metric.key as keyof typeof currentCase.after]}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          key={`testimonial-${activeCase}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">
                {currentCase.industry}
              </span>
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6 italic">
            {currentCase.testimonial}
          </blockquote>
          <p className="text-gray-400 font-mono text-sm">
            — {currentCase.author}
          </p>
        </motion.div>

        {/* Global stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">+312%</div>
            <div className="text-sm text-gray-500">croissance moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">-87%</div>
            <div className="text-sm text-gray-500">temps de chargement</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">x4.2</div>
            <div className="text-sm text-gray-500">conversions en moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">3.1 mois</div>
            <div className="text-sm text-gray-500">délai moyen de ROI</div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30">
            Voir votre potentiel
          </button>
          <p className="text-xs text-gray-500 mt-4 font-mono">
            Audit gratuit • Résultats en 48h
          </p>
        </div>
      </div>
    </section>
  )
}
