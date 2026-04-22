'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Award, Clock, Target, ArrowUpRight, BarChart3 } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '127',
    label: 'projets livrés',
    sublabel: 'Expertise prouvée',
    trend: 'Depuis 2022',
    color: 'blue'
  },
  {
    icon: TrendingUp,
    value: '+312%',
    label: 'croissance moyenne',
    sublabel: 'Impact business',
    trend: 'Mesuré sur 24 mois',
    color: 'green'
  },
  {
    icon: Zap,
    value: '-87%',
    label: 'temps de chargement',
    sublabel: 'Performance technique',
    trend: 'Score Lighthouse',
    color: 'blue'
  },
  {
    icon: Target,
    value: '3.1 mois',
    label: 'délai moyen de ROI',
    sublabel: 'Rentabilité rapide',
    trend: '41 projets audités',
    color: 'green'
  },
  {
    icon: Award,
    value: '4.9/5',
    label: 'satisfaction client',
    sublabel: 'Qualité de code',
    trend: '89 avis vérifiés',
    color: 'blue'
  },
  {
    icon: Clock,
    value: '100%',
    label: 'respect des délais',
    sublabel: 'Zéro retard',
    trend: 'Bilan annuel 2024',
    color: 'green'
  }
]

export default function PremiumStats() {
  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden">
      {/* Background Glows - Aligned with Hero */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase">
            AUDIT & PERFORMANCE
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                Les chiffres <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">parlent.</span>
              </h2>
              <p className="text-lg text-gray-400 mt-4 max-w-xl font-light">
                Derrière chaque ligne de code, il y a un objectif de rentabilité. 
                Voici les standards que nous appliquons à chaque projet.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-4 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl">
                <BarChart3 className="text-blue-500" size={24} />
                <div>
                  <div className="text-white font-bold text-sm">Données certifiées</div>
                  <div className="text-gray-500 text-xs font-mono">MAJ : Avril 2026</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid - Matching Hero Comparison Cards style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`size-12 rounded-xl flex items-center justify-center ${
                  stat.color === 'green' ? 'bg-green-500/10 border border-green-500/20' : 'bg-blue-500/10 border border-blue-500/20'
                }`}>
                  <stat.icon size={24} className={stat.color === 'green' ? 'text-green-400' : 'text-blue-400'} />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">{stat.trend}</span>
                  <ArrowUpRight size={10} className="text-gray-500" />
                </div>
              </div>

              <div>
                <div className={`text-5xl font-bold mb-2 tracking-tighter ${
                   stat.color === 'green' ? 'text-green-400' : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-200 uppercase tracking-wide mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 font-light">
                  {stat.sublabel}
                </div>
              </div>

              {/* Progress-like decorative bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Records section - Cleaned up to match Hero footer */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 py-12 border-y border-white/5 bg-white/[0.01]">
          {[
            { label: 'CA Généré 2025', val: '2.4M€' },
            { label: 'Meilleur ROI', val: '+670%' },
            { label: 'Lighthouse Record', val: '98/100' },
            { label: 'MVP Delivery', val: '14 jours' },
          ].map((item) => (
            <div key={item.label} className="text-center md:text-left px-4">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">{item.label}</div>
              <div className="text-2xl font-bold text-white">{item.val}</div>
            </div>
          ))}
        </div>

        {/* CTA section - More integrated */}
        <div className="mt-20 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-6 mb-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                {['Google Analytics', 'Lighthouse', 'Vercel', 'Stripe'].map(tool => (
                    <span key={tool} className="text-[10px] font-mono text-gray-400 border border-white/10 px-3 py-1 rounded-md">✓ {tool}</span>
                ))}
            </div>
            
            <button className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20">
                <span className="relative z-10 flex items-center gap-2">
                    REJOINDRE LE TOP 1% CLIENTS
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
            </button>
            <p className="mt-4 text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
                +15 places disponibles • Q2 2026
            </p>
        </div>
      </div>
    </section>
  )
}