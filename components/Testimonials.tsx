'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'CEO, TechStart',
      company: 'SaaS FinTech',
      content: 'DataFuse Studio a transformé notre vision en une plateforme SaaS exceptionnelle. Leur expertise technique et leur accompagnement ont dépassé toutes nos attentes.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Marc Dubois',
      role: 'Fondateur',
      company: 'E-Commerce Luxe',
      content: 'Une équipe professionnelle qui comprend les enjeux business. Notre site e-commerce a généré +300% de conversions en 3 mois. Résultats exceptionnels.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Laura Chen',
      role: 'Product Manager',
      company: 'HealthTech App',
      content: 'Développement mobile impeccable. L\'application est fluide, intuitive et nos utilisateurs adorent. Support réactif et livraison dans les délais.',
      rating: 5,
      image: '👩‍⚕️',
    },
    {
      name: 'Thomas Bernard',
      role: 'Directeur Marketing',
      company: 'Agence Immobilière',
      content: 'Site vitrine premium qui reflète parfaitement notre positionnement haut de gamme. Design élégant et performances au top. Bravo !',
      rating: 5,
      image: '👨‍💻',
    },
    {
      name: 'Emma Rousseau',
      role: 'CTO',
      company: 'AI Analytics',
      content: 'Architecture technique solide, code propre et scalable. DataFuse comprend les enjeux d\'une startup en croissance. Partenaire de confiance.',
      rating: 5,
      image: '👩‍🔬',
    },
    {
      name: 'Alexandre Petit',
      role: 'Entrepreneur',
      company: 'Social Network',
      content: 'Du MVP à l\'application complète, DataFuse nous a accompagné à chaque étape. Communication fluide, conseils pertinents, résultats au rendez-vous.',
      rating: 5,
      image: '👨‍🚀',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ils nous font <span className="gradient-text">Confiance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure référence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
            >
              <Quote className="w-8 h-8 text-primary-300 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-primary-600">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-50 to-purple-50 rounded-full border border-primary-200">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-gray-600">sur 50+ projets</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
