'use client'

import { motion } from 'framer-motion'
import { Cloud, Globe, Smartphone, Layout } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Applications cloud scalables et performantes avec architecture moderne, multi-tenant, et intégrations API complètes.',
      features: ['Architecture cloud-native', 'Scalabilité garantie', 'Sécurité renforcée', 'Analytics avancés'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Applications web sur-mesure avec interfaces utilisateur modernes, performances optimales et expérience utilisateur exceptionnelle.',
      features: ['React/Next.js', 'Performance optimisée', 'SEO optimisé', 'Progressive Web App'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Applications natives iOS et Android, ou cross-platform React Native, avec design intuitif et performances natives.',
      features: ['iOS & Android', 'Design natif', 'Offline-first', 'Push notifications'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Layout,
      title: 'Sites Vitrine',
      description: 'Sites web élégants et performants qui convertissent vos visiteurs en clients avec un design premium et moderne.',
      features: ['Design premium', 'Responsive parfait', 'CMS intégré', 'Performance maximale'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions digitales complètes pour concrétiser vos ambitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-transparent overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 font-semibold group-hover:underline">
                  En savoir plus →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
