'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Quels sont les délais de réalisation d\'un projet ?',
      answer: 'Les délais varient selon la complexité : 2-4 semaines pour un site vitrine, 8-12 semaines pour une application web, 12-16 semaines pour un SaaS complet. Nous établissons un planning détaillé dès le début du projet.',
    },
    {
      question: 'Proposez-vous de la maintenance après livraison ?',
      answer: 'Oui, nous proposons des contrats de maintenance évolutive et corrective adaptés à vos besoins. Support technique, mises à jour de sécurité, évolutions fonctionnelles et hébergement inclus selon la formule choisie.',
    },
    {
      question: 'Comment se déroule la collaboration ?',
      answer: 'Méthodologie agile avec sprints de 2 semaines, points réguliers, démos fonctionnelles et feedback continu. Vous êtes impliqué à chaque étape pour garantir l\'alignement avec votre vision.',
    },
    {
      question: 'Livrez-vous le code source ?',
      answer: 'Absolument ! Vous êtes propriétaire à 100% du code source, de la documentation technique et de tous les assets du projet. Transfert complet des droits et accès à tous les repositories.',
    },
    {
      question: 'Quelles technologies utilisez-vous ?',
      answer: 'Stack moderne : React/Next.js, Node.js, TypeScript, PostgreSQL/MongoDB pour le web. React Native/Flutter pour le mobile. Cloud AWS/GCP avec CI/CD automatisé. Technologies choisies selon vos besoins spécifiques.',
    },
    {
      question: 'Gérez-vous l\'hébergement et le déploiement ?',
      answer: 'Oui, nous gérons l\'infrastructure cloud complète : configuration, déploiement, monitoring, sauvegardes automatiques et scaling. Support DevOps inclus avec formation pour votre équipe si besoin.',
    },
    {
      question: 'Puis-je voir des exemples de vos réalisations ?',
      answer: 'Bien sûr ! Consultez notre portfolio ci-dessus ou contactez-nous pour des études de cas détaillées, démos live et mise en relation avec nos clients références selon vos besoins spécifiques.',
    },
    {
      question: 'Comment garantissez-vous la qualité du code ?',
      answer: 'Code reviews systématiques, tests automatisés (unit, integration, E2E), analyse statique, standards de code stricts, documentation complète et audits de sécurité réguliers.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Contactez-nous
          </button>
        </motion.div>
      </div>
    </section>
  )
}
