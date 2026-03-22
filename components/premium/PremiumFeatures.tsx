'use client'

import { motion } from 'framer-motion'
import { Cloud, Zap, Shield, Smartphone, AppWindow, Layers, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/contexts/LanguageContext'

export default function PremiumFeatures() {
  const { t } = useTranslation()

  const services = [
    {
      title: t.features.services.saas.title,
      desc: t.features.services.saas.desc,
      icon: <Cloud className="size-6 text-blue-400" />,
      stack: t.features.services.saas.stack,
      className: "lg:col-span-4 md:col-span-6 col-span-1",
      id: "01"
    },
    {
      title: t.features.services.speed.title,
      desc: t.features.services.speed.desc,
      icon: <Zap className="size-6 text-yellow-400" />,
      stack: t.features.services.speed.stack,
      className: "lg:col-span-2 md:col-span-3 col-span-1",
      id: "02"
    },
    {
      title: t.features.services.mobile.title,
      desc: t.features.services.mobile.desc,
      icon: <Smartphone className="size-6 text-purple-400" />,
      stack: t.features.services.mobile.stack,
      className: "lg:col-span-2 md:col-span-3 col-span-1",
      id: "03"
    },
    {
      title: t.features.services.brand.title,
      desc: t.features.services.brand.desc,
      icon: <AppWindow className="size-6 text-emerald-400" />,
      stack: t.features.services.brand.stack,
      className: "lg:col-span-4 md:col-span-6 col-span-1",
      id: "04"
    }
  ]
  return (
    <section id="services" className="relative bg-[#020203] py-32 overflow-hidden">
      {/* Rayon lumineux subtil en haut */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header de section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-500 font-mono text-[10px] mb-6 tracking-[0.4em] uppercase"
            >
              <Layers size={14} />
              <span>{t.features.badge}</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              {t.features.title} <br />
              <span className="text-gray-600 italic">{t.features.subtitle}</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-gray-500 max-w-[320px] text-sm leading-relaxed font-light mb-4">
              {t.features.description}
            </p>
            <div className="h-px w-full md:w-32 bg-blue-500/30 ml-auto" />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "group relative h-full rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:bg-white/[0.03] hover:border-white/10",
                service.className
              )}
            >
              {/* Background Decorator: Numéro géant en opacité faible */}
              <span className="absolute -right-4 -top-8 text-[120px] font-bold text-white/[0.02] pointer-events-none group-hover:text-blue-500/[0.05] transition-colors">
                {service.id}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header de carte */}
                <div className="flex justify-between items-start mb-16">
                  <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="text-gray-700 group-hover:text-blue-500 transition-colors" size={20} />
                </div>

                {/* Corps de carte */}
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-[90%]">
                    {service.desc}
                  </p>

                  {/* Tech Stack Horizontal */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {service.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Effet Spotlight au hover */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}