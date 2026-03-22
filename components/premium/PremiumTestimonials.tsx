'use client'

import React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/contexts/LanguageContext"

const TestimonialsColumn = ({
  testimonials,
  className,
  duration = 20,
}: {
  testimonials: Array<{ text: string; name: string; role: string; initials?: string }>
  className?: string
  duration?: number
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, outerIndex) => (
          <React.Fragment key={outerIndex}>
            {testimonials.map((testimonial, i) => (
              <div
                key={`${outerIndex}-${i}`}
                className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-3 h-3 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed font-light italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  {testimonial.initials && (
                    <div className="size-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                      {testimonial.initials}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-bold text-white tracking-tight">{testimonial.name}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                {/* Icône décorative Quote */}
                <Quote className="absolute top-6 right-6 size-8 text-white/[0.03] group-hover:text-blue-500/10 transition-colors" />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export default function PremiumTestimonials() {
  const { t } = useTranslation()

  // Ajouter les initiales aux testimonials
  const testimonialsWithInitials = t.testimonials.items.map((item, index) => ({
    ...item,
    initials: item.name.split(' ').map(n => n[0]).join('')
  }))

  const firstColumn = testimonialsWithInitials.slice(0, 3)
  const secondColumn = testimonialsWithInitials.slice(3, 6)

  return (
    <section className="bg-[#030303] py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6"
          >
            {t.testimonials.badge}
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            {t.testimonials.title} <span className="text-gray-600">{t.testimonials.subtitle}</span>
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[650px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden lg:block" duration={45} />
        </div>

        {/* Badge de score final */}
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-6 px-8 py-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col items-start border-r border-white/10 pr-6">
              <span className="text-2xl font-bold text-white">4.9/5</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.testimonials.stats.rating}</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.testimonials.stats.projects}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}