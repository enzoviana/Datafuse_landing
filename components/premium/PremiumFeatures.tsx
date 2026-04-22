'use client'

import { motion } from 'framer-motion'
import { Cloud, Zap, Smartphone, AppWindow, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react'
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
      id: "01",
      stat: "73 SaaS livrés",
      result: "+312% croissance",
      color: "blue"
    },
    {
      title: t.features.services.speed.title,
      desc: t.features.services.speed.desc,
      icon: <Zap className="size-6 text-blue-400" />, // Harmonisé en bleu
      stack: t.features.services.speed.stack,
      className: "lg:col-span-2 md:col-span-3 col-span-1",
      id: "02",
      stat: "98/100 Score",
      result: "-87% chargement",
      color: "green"
    },
    {
      title: t.features.services.mobile.title,
      desc: t.features.services.mobile.desc,
      icon: <Smartphone className="size-6 text-blue-400" />, // Harmonisé en bleu
      stack: t.features.services.mobile.stack,
      className: "lg:col-span-2 md:col-span-3 col-span-1",
      id: "03",
      stat: "34 apps mobiles",
      result: "4.6/5 Satisfaction",
      color: "blue"
    },
    {
      title: t.features.services.brand.title,
      desc: t.features.services.brand.desc,
      icon: <AppWindow className="size-6 text-blue-400" />, // Harmonisé en bleu
      stack: t.features.services.brand.stack,
      className: "lg:col-span-4 md:col-span-6 col-span-1",
      id: "04",
      stat: "89 identités",
      result: "+45% conversion",
      color: "green"
    }
  ]

  return (
    <section id="services" className="relative bg-[#030303] py-32 overflow-hidden">
      {/* Glow discret aligné avec le Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-20" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header de section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase"
            >
              <Layers size={12} />
              <span>{t.features.badge}</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              {t.features.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-600 italic font-light">{t.features.subtitle}</span>
            </h2>
          </div>
          <div className="md:text-right border-l md:border-l-0 md:border-r border-blue-500/20 pl-6 md:pr-6">
            <p className="text-gray-500 max-w-[320px] text-sm leading-relaxed font-light">
              {t.features.description}
            </p>
          </div>
        </div>

        {/* Bento Grid High-Tech */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden transition-all duration-500 hover:border-blue-500/30",
                service.className
              )}
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={18} className="text-blue-500" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & ID */}
                <div className="flex justify-between items-center mb-12">
                  <div className="size-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs text-gray-700">MOD_{service.id}</span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                    {service.desc}
                  </p>

                  {/* Micro-Stats (The "Result" focus) */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-blue-500/50" />
                        <span className="text-xs font-mono text-gray-300 uppercase tracking-tighter">{service.stat}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-green-400 font-bold uppercase tracking-tighter">{service.result}</span>
                    </div>
                  </div>

                  {/* Tech Stack Horizontal - More discreet */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors"
                      >
                        // {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-600/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}