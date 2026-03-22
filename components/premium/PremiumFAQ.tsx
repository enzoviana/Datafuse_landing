'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { HelpCircle, MessageCircle } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

export default function PremiumFAQ() {
  const { t } = useTranslation()

  const questions = t.faq.questions.map((q, index) => ({
    id: `item-${index + 1}`,
    category: q.category,
    title: q.title,
    content: q.content,
  }))
  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      
      <div className="mx-auto w-full max-w-4xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6"
          >
            <HelpCircle size={12} />
            <span>{t.faq.badge}</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            {t.faq.title} <span className="text-gray-600 italic">{t.faq.subtitle}</span>
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          defaultValue="item-1"
        >
          {questions.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="border border-white/5 bg-white/[0.02] rounded-2xl px-6 transition-all hover:bg-white/[0.04] hover:border-white/10 data-[state=open]:bg-white/[0.04] data-[state=open]:border-blue-500/30"
            >
              <AccordionTrigger className="py-6 text-left text-white font-semibold hover:no-underline group">
                <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                  <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 w-fit">
                    {item.category}
                  </span>
                  <span className="text-lg tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 font-light">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
              <MessageCircle size={24} />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold">{t.faq.cta.title}</h4>
              <p className="text-gray-500 text-sm">{t.faq.cta.desc}</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform"
          >
            {t.faq.cta.btn}
          </a>
        </motion.div>
      </div>
    </section>
  )
}