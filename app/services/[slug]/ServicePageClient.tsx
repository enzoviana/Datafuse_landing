'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Clock, Euro, Shield, Zap, Crown, Rocket, ChevronRight } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import { servicesData, type ServiceSlug } from '@/lib/services-data'
import { useReducedMotion } from '@/lib/useReducedMotion'
import Link from 'next/link'

export default function ServicePageClient() {
  const params = useParams()
  const slug = params.slug as ServiceSlug
  const { t, language } = useTranslation()
  const { isMobile } = useReducedMotion()

  const service = servicesData[slug]

  if (!service) {
    return <div>Service non trouvé</div>
  }

  // Récupérer les données traduitesdu service
  const serviceData = slug === 'site-web-entreprise' ? t.pricing.plans.starter :
                      slug === 'mvp-express' ? t.pricing.plans.scale :
                      t.pricing.plans.custom

  const iconMap = {
    'site-web-entreprise': Zap,
    'mvp-express': Crown,
    'applications-mobile-metier': Rocket,
  }

  const Icon = iconMap[slug]

  return (
    <main className="min-h-screen bg-[#020203]">
      <PremiumNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link href="/#tarifs" className="text-blue-500 hover:text-blue-400 text-sm font-mono uppercase tracking-wider transition-colors">
              {t.pricing.badge}
            </Link>
            <ChevronRight size={16} className="text-gray-600" />
            <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">
              {serviceData.name}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: isMobile ? 0.3 : 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <div className="size-16 rounded-2xl bg-blue-600 border border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center">
                  <Icon className="size-8 text-white" />
                </div>
                <span className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em]">
                  {service.category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-6"
              >
                {serviceData.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.3 }}
                className="text-xl text-gray-400 font-light leading-relaxed mb-8"
              >
                {serviceData.info}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <Clock size={18} className="text-blue-500" />
                  <span className="text-sm text-gray-300">
                    <span className="font-bold text-white">{service.deliveryTime}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <Euro size={18} className="text-blue-500" />
                  <span className="text-sm text-gray-300">
                    {t.pricing.baseRate} <span className="font-bold text-white">{serviceData.price}€</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <Shield size={18} className="text-green-500" />
                  <span className="text-sm text-gray-300 font-bold text-white">
                    {t.pricing.guarantee.title}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-900/20"
                >
                  {serviceData.btn}
                  <ArrowRight size={20} />
                </a>
                <Link
                  href="/#tarifs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold transition-all"
                >
                  Comparer les offres
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 p-10 backdrop-blur-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-mono uppercase tracking-wider">
                  {slug === 'mvp-express' ? t.pricing.plans.scale.mostSelected : 'Populaire'}
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-bold text-white font-mono">
                      {serviceData.price}
                    </span>
                    <span className="text-3xl text-gray-600">€</span>
                  </div>
                  <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">
                    {t.pricing.baseRate}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Fourchette : {service.priceRange}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold text-lg mb-4">Ce qui est inclus :</h3>
                  {serviceData.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="size-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all"
                  >
                    {serviceData.btn}
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Unique per service */}
      <section className="py-20 px-4 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12 text-center">
            {language === 'fr' ? 'Comment ça marche ?' :
             language === 'en' ? 'How it works?' :
             'Como funciona?'}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {t.timeline.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="text-5xl font-bold text-blue-500/20 mb-4">{i + 1}</div>
                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {phase.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-mono uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-4 bg-[#020203]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
          >
            {language === 'fr' ? 'Prêt à démarrer ?' :
             language === 'en' ? 'Ready to start?' :
             'Pronto para começar?'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 font-light mb-12"
          >
            {language === 'fr' ? 'Discutons de votre projet et obtenez un devis personnalisé en 24h.' :
             language === 'en' ? 'Let\'s talk about your project and get a personalized quote in 24h.' :
             'Vamos discutir o seu projeto e obter um orçamento personalizado em 24h.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-900/20 text-lg"
            >
              {serviceData.btn}
              <ArrowRight size={24} />
            </a>
            <Link
              href="/#tarifs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold transition-all text-lg"
            >
              {language === 'fr' ? 'Voir toutes les offres' :
               language === 'en' ? 'View all offers' :
               'Ver todas as ofertas'}
            </Link>
          </motion.div>

          <p className="text-sm text-gray-500 mt-8">
            ✓ {language === 'fr' ? 'Réponse en 24h' : language === 'en' ? '24h response' : 'Resposta em 24h'} •
            ✓ {t.pricing.guarantee.title} •
            ✓ {language === 'fr' ? 'Sans engagement' : language === 'en' ? 'No commitment' : 'Sem compromisso'}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
