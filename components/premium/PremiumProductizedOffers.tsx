'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Clock, TrendingUp, Shield } from 'lucide-react'

const offers = [
  {
    icon: Zap,
    badge: 'POPULAIRE',
    name: 'Audit Technique SaaS',
    price: '490',
    duration: '48h',
    description: 'Rapport complet sur la santé technique de votre SaaS',
    results: '+35% de performance en moyenne',
    includes: [
      'Analyse complète du code',
      'Rapport de sécurité',
      'Plan d\'optimisation prioritaire',
      'Roadmap technique 6 mois',
      'Call de restitution 1h'
    ],
    cta: 'Commander l\'audit',
    highlight: true
  },
  {
    icon: Clock,
    badge: 'DÉMARRAGE RAPIDE',
    name: 'MVP en 14 jours',
    price: '5 000',
    duration: '2 semaines',
    description: 'Votre produit minimum viable prêt à lancer',
    results: '3x plus rapide que le marché',
    includes: [
      'Design système complet',
      'Développement full-stack',
      'Base de données configurée',
      'Hébergement 3 mois inclus',
      'Formation à la prise en main'
    ],
    cta: 'Lancer mon MVP',
    highlight: false
  },
  {
    icon: TrendingUp,
    badge: 'BOOST IMMÉDIAT',
    name: 'Refonte Performance',
    price: '2 000',
    duration: 'dès',
    description: 'Accélérez votre site web existant',
    results: '-60% temps de chargement garanti',
    includes: [
      'Optimisation du code existant',
      'Migration vers Next.js 14',
      'Mise en cache intelligente',
      'SEO technique inclus',
      'Monitoring 1 mois offert'
    ],
    cta: 'Booster mon site',
    highlight: false
  }
]

export default function PremiumProductizedOffers() {
  return (
    <section className="py-32 bg-[#020203] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase">
            OFFRES CLAIRES • PRIX FIXES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Démarrez <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">en un clic</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pas de devis compliqué. Pas d'appel obligatoire. Commandez en 30 secondes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                offer.highlight
                  ? 'bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/50 shadow-lg shadow-blue-500/20'
                  : 'bg-white/[0.02] border-white/10 hover:border-blue-500/30'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 rounded-full ${
                  offer.highlight
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 border border-white/10 text-gray-400'
                }`}>
                  {offer.badge}
                </span>
                <offer.icon className="text-blue-400" size={28} />
              </div>

              {/* Nom */}
              <h3 className="text-2xl font-bold text-white mb-2">{offer.name}</h3>

              {/* Prix */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">{offer.price}€</span>
                <span className="text-gray-500 text-sm">{offer.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{offer.description}</p>

              {/* Résultat */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-400" size={16} />
                  <span className="text-green-400 text-sm font-semibold">{offer.results}</span>
                </div>
              </div>

              {/* Includes */}
              <ul className="space-y-3 mb-8">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wider transition-all ${
                offer.highlight
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                {offer.cta}
              </button>

              {/* Garantie */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                <Shield size={12} />
                <span>Satisfait ou remboursé</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            <span className="text-white font-semibold">+127 projets</span> livrés dans les délais •
            <span className="text-white font-semibold"> 4.9/5</span> de satisfaction •
            <span className="text-white font-semibold"> 0 retard</span> depuis 2024
          </p>
        </motion.div>
      </div>
    </section>
  )
}
