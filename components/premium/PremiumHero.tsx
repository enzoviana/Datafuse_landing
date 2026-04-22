'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Terminal } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

const partners = ["Stripe", "Vercel", "AWS", "GitHub", "Linear", "Figma", "OpenAI", "Supabase"]

export default function DatafuseStudioHero() {
  const { t } = useTranslation()
  
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020203] px-4">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)] opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[400px] md:h-[800px] bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent opacity-50" />
        {/* Glow plus petit sur mobile */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 md:left-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-32 md:pt-32 md:pb-20 flex flex-col items-center w-full">
        
        {/* Badge Futuriste */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="group flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 md:mb-8 hover:border-blue-500/50 transition-colors cursor-default"
        >
          <div className="size-1.5 md:size-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-400">
            {t.hero.badge}
          </span>
          <ChevronRight size={10} className="text-gray-600 group-hover:translate-x-0.5 transition-transform" />
        </motion.div>

        {/* Headline - Ajustement tailles de texte */}
        <div className="text-center mb-8 md:mb-12 relative w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-white leading-[0.9] md:leading-[0.85] pointer-events-none"
          >
            {t.hero.title} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              {t.hero.subtitle}
            </span>
          </motion.h1>

          {/* Badge Terminal - Caché sur petit mobile, visible en haut à droite sinon */}
         <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -right-4 md:-right-20 top-0 hidden md:block"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 backdrop-blur-md rotate-12">
              <Terminal size={14} className="text-blue-400" />
              <span className="text-[10px] font-mono text-blue-200">{t.hero.productionReady}</span>
            </div>
          </motion.div>
        </div>

        {/* Description - Max-width et taille de police */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-500 max-w-[90%] md:max-w-[600px] text-base md:text-xl font-light mb-6 md:mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.hero.description }}
        />



        {/* CTAs - Full width sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mb-6 md:mb-8 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-full bg-blue-600 text-white text-sm md:text-base font-bold hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2">
            Audit gratuit • 48h
            <ChevronRight size={18} />
          </button>
          <button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-full bg-white/5 text-white border border-white/10 text-sm md:text-base font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
            Voir les offres
          </button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs md:text-sm text-gray-600 font-mono mb-16"
        >
          ✓ Satisfait ou remboursé • ✓ Deadline garantie • ✓ Code 100% propriété
        </motion.p>

        {/* --- PARTNERS MARQUEE --- */}
        <div className="w-full max-w-5xl mt-auto">
          <p className="text-center text-[9px] md:text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8">
            {t.hero.partnersTitle}
          </p>
          
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-10 md:gap-16 items-center whitespace-nowrap"
            >
              {[...partners, ...partners].map((partner, i) => (
                <span 
                  key={i} 
                  className="text-xl md:text-3xl font-bold text-white/10 hover:text-blue-500/50 transition-colors cursor-default tracking-tighter"
                >
                  {partner}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  )
}