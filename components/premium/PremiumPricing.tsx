'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Check, Zap, Crown, Rocket, ArrowRight, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/contexts/LanguageContext'

export default function PremiumPricing() {
  const { t } = useTranslation()

  const plans = [
    {
      name: t.pricing.plans.starter.name,
      icon: Zap,
      info: t.pricing.plans.starter.info,
      price: t.pricing.plans.starter.price,
      features: t.pricing.plans.starter.features,
      btn: t.pricing.plans.starter.btn,
      highlighted: false,
    },
    {
      name: t.pricing.plans.scale.name,
      icon: Crown,
      info: t.pricing.plans.scale.info,
      price: t.pricing.plans.scale.price,
      features: t.pricing.plans.scale.features,
      btn: t.pricing.plans.scale.btn,
      highlighted: true,
      mostSelected: t.pricing.plans.scale.mostSelected,
    },
    {
      name: t.pricing.plans.custom.name,
      icon: Rocket,
      info: t.pricing.plans.custom.info,
      price: t.pricing.plans.custom.price,
      features: t.pricing.plans.custom.features,
      btn: t.pricing.plans.custom.btn,
      highlighted: false,
    },
  ]
  return (
    <section id="tarifs" className="py-40 bg-[#020203] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.03] text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase mb-8"
          >
            <ShieldCheck size={12} />
            {t.pricing.badge}
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85] mb-6">
            {t.pricing.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">{t.pricing.subtitle}</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg font-light">
            {t.pricing.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 group",
                plan.highlighted 
                  ? "bg-white/[0.04] border border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.1)] scale-105 z-10" 
                  : "bg-white/[0.01] border border-white/5 hover:border-white/20"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 right-10 bg-blue-600 text-white px-4 py-1 rounded-lg text-[9px] font-mono uppercase tracking-[0.2em] shadow-2xl">
                  {plan.mostSelected}
                </div>
              )}

              <div className="mb-12">
                <div className={cn(
                  "size-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:rotate-6",
                  plan.highlighted ? "bg-blue-600 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)]" : "bg-white/5 border-white/10"
                )}>
                  <plan.icon className={cn("size-6", plan.highlighted ? "text-white" : "text-blue-500")} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tighter">{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{plan.info}</p>
              </div>

              <div className="mb-12 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white tracking-tighter font-mono">
                    {plan.price}
                  </span>
                  {!plan.price.toLowerCase().includes('custom') && !plan.price.toLowerCase().includes('mesure') && !plan.price.toLowerCase().includes('personalizado') && <span className="text-2xl text-gray-600 font-light">€</span>}
                </div>
                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{t.pricing.baseRate}</div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    <Check className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className={cn(
                  "w-full h-16 rounded-[1.2rem] font-mono text-[11px] tracking-widest uppercase transition-all duration-500",
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                )}
              >
                <a href="#contact" className="flex items-center justify-center gap-3">
                  {plan.btn}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Annotation */}
        <div className="mt-24 max-w-2xl mx-auto p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="size-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <ShieldCheck size={24} />
            </div>
            <div>
                <h4 className="text-white font-bold text-sm mb-1">{t.pricing.guarantee.title}</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed font-light">
                    {t.pricing.guarantee.desc}
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}