'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Pencil, Code2, Rocket, CheckCircle2 } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Découverte',
      description: 'Analyse approfondie de vos besoins, objectifs et contraintes pour définir la stratégie optimale.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500',
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Conception UX/UI premium avec prototypes interactifs validés à chaque étape.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500',
    },
    {
      icon: Code2,
      title: 'Développement',
      description: 'Développement agile avec code clean, tests automatisés et revues de code rigoureuses.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
    },
    {
      icon: Rocket,
      title: 'Déploiement',
      description: 'Mise en production progressive avec monitoring, CI/CD et optimisation des performances.',
      color: 'text-green-500',
      bgColor: 'bg-green-500',
    },
    {
      icon: CheckCircle2,
      title: 'Support',
      description: 'Accompagnement continu, maintenance évolutive et support technique dédié 24/7.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-500',
    },
  ]

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre <span className="gradient-text">Processus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour garantir le succès de votre projet
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 via-purple-200 to-primary-200"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className={`inline-flex p-3 rounded-xl ${step.bgColor} mb-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center font-bold text-xl text-primary-600 shadow-lg z-10">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 w-full md:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
