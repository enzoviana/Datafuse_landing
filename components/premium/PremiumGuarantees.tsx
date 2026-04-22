'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, RefreshCcw, FileCheck, TrendingDown, Award, ArrowUpRight, Lock } from 'lucide-react'

const guarantees = [
  {
    icon: RefreshCcw,
    title: 'Audit remboursé',
    id: 'SLA_01',
    description: "Incertitude éliminée : si l'audit technique ne révèle pas de leviers de croissance concrets, le remboursement est intégral et immédiat.",
    badge: '100% Refund',
    color: 'green'
  },
  {
    icon: Clock,
    title: 'Deadline contractuelle',
    id: 'SLA_02',
    description: "Zéro glissement. La date de livraison finale est gravée dans le contrat avec un planning de déploiement par étapes (milestones).",
    badge: 'Hard Deadline',
    color: 'blue'
  },
  {
    icon: TrendingDown,
    title: 'Pénalités de retard',
    id: 'SLA_03',
    description: "Engagement financier : nous appliquons une remise automatique sur le solde final pour chaque jour de retard constaté.",
    badge: 'Risk Offset',
    color: 'green'
  },
  {
    icon: FileCheck,
    title: 'IP Ownership 100%',
    id: 'SLA_04',
    description: "Propriété totale du code source dès le premier commit. Pas de vendor lock-in, pas de frais de licence, pas de dépendance.",
    badge: 'Full IP',
    color: 'blue'
  },
  {
    icon: Shield,
    title: 'Support Post-Live',
    id: 'SLA_05',
    description: "Phase de monitoring de 30 jours incluse. Correction prioritaire de tout bug détecté après la mise en production.",
    badge: '30D Warm-up',
    color: 'green'
  },
  {
    icon: Award,
    title: 'Acceptation Recette',
    id: 'SLA_06',
    description: "Paiement au résultat : le solde final n'est débloqué qu'après validation complète de la conformité sur l'environnement de test.",
    badge: 'QA Verified',
    color: 'blue'
  }
]

export default function PremiumGuarantees() {
  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-mono text-green-400 tracking-[0.2em] mb-6 uppercase">
            SLA_GUARANTEES
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              Protection <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600 italic font-light">intégrale.</span>
            </h2>
            <div className="max-w-sm text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-green-500/30 pl-6 md:pr-6 py-1">
                <p className="text-gray-500 text-sm font-mono leading-relaxed uppercase tracking-tighter">
                  Nous portons le risque technique. <br />
                  Vous portez la vision business.
                </p>
            </div>
          </div>
        </motion.div>

        {/* Guarantees Grid - Chassis Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guarantees.map((guarantee, idx) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`size-12 rounded-xl flex items-center justify-center ${
                  guarantee.color === 'green' ? 'bg-green-500/10 border border-green-500/20' : 'bg-blue-500/10 border border-blue-500/20'
                }`}>
                  <guarantee.icon size={22} className={guarantee.color === 'green' ? 'text-green-400' : 'text-blue-400'} />
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-gray-700 mb-1">{guarantee.id}</span>
                    <span className={`text-[8px] font-mono px-2 py-0.5 rounded border uppercase tracking-widest ${
                         guarantee.color === 'green' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-blue-400 border-blue-400/20 bg-blue-400/5'
                    }`}>
                        {guarantee.badge}
                    </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-green-400 transition-colors">
                {guarantee.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                {guarantee.description}
              </p>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={14} className="text-green-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Proof / Security Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-1 border border-white/5 bg-white/[0.01] rounded-[2rem] overflow-hidden"
        >
          <div className="bg-[#050505] border border-white/10 rounded-[1.9rem] p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="shrink-0">
                    <div className="size-24 rounded-3xl bg-green-500/10 border border-green-500/20 flex items-center justify-center relative">
                        <Lock className="text-green-400" size={40} />
                        <div className="absolute inset-0 bg-green-400/20 blur-2xl rounded-full" />
                    </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Contractual Trust Protocol</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                        Ces garanties ne sont pas des arguments marketing, mais des clauses juridiques intégrées à nos devis. 
                        En cas de non-respect du SLA (Service Level Agreement), les compensations sont automatiques.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {['Juridiquement contraignant', 'SLA Certifié', 'Transparence Repo Git'].map(tag => (
                            <div key={tag} className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                <div className="size-1 rounded-full bg-green-500" />
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 shrink-0 w-full lg:w-auto">
                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl text-center">
                        <div className="text-2xl font-bold text-white">0</div>
                        <div className="text-[9px] font-mono text-gray-600 uppercase mt-1">Litiges</div>
                    </div>
                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl text-center">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-[9px] font-mono text-gray-600 uppercase mt-1">Livraisons</div>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}