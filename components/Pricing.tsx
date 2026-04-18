'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Site Web',
      icon: Zap,
      price: '2 000',
      period: 'À partir de',
      description: 'Site vitrine professionnel et moderne',
      features: [
        'Site vitrine responsive',
        'Design personnalisé',
        'SEO optimisé',
        'Formation incluse',
        'Support 30 jours',
        'Hébergement en option (50€/mois)',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
      priceNote: 'HT',
    },
    {
      name: 'MVP Express',
      icon: Crown,
      price: '4 500',
      period: 'Livré en 2 semaines',
      description: 'Validez votre idée rapidement',
      features: [
        'Application complète et fonctionnelle',
        'Dashboard admin',
        'Authentification utilisateur',
        'Base de données configurée',
        'Tests et déploiement',
        'Livraison garantie en 14 jours',
        'Support 60 jours',
        'Hébergement en option (50€/mois)',
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      priceNote: 'HT',
    },
    {
      name: 'Apps Mobile & Web',
      icon: Rocket,
      price: '7 500',
      period: 'À partir de',
      description: 'Applications web et mobile complètes',
      features: [
        'Application web responsive',
        'Applications mobiles (iOS & Android)',
        'API REST/GraphQL',
        'Dashboard administrateur',
        'Base de données optimisée',
        'Tests automatisés',
        'CI/CD pipeline',
        'Support 90 jours',
        'Hébergement en option (50€/mois)',
      ],
      gradient: 'from-orange-500 to-red-500',
      popular: false,
      priceNote: 'HT',
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tarifs <span className="gradient-text">Transparents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des formules adaptées à vos besoins et votre budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-2xl ${
                plan.popular
                  ? 'border-primary-500 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Plus populaire
                  </span>
                </div>
              )}

              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                <plan.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">{plan.period}</div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-600 ml-2">€</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{plan.priceNote}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 bg-gradient-to-r ${plan.gradient} text-white rounded-full p-0.5`} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                    : 'border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                {plan.price === 'Sur mesure' ? 'Nous contacter' : 'Démarrer'}
              </button>
            </motion.div>
          ))}
        </div>



        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600"
        >
          <p className="mb-4">Tous nos projets incluent :</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Code source livré', 'Documentation complète', 'Formation utilisateur', 'Garantie qualité'].map((item, i) => (
              <div key={i} className="flex items-center">
                <Check className="w-5 h-5 text-primary-600 mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
