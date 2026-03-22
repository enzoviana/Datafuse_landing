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
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-white leading-[0.9] md:leading-[0.85] pointer-events-none"
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
          className="text-center text-gray-500 max-w-[90%] md:max-w-[600px] text-base md:text-xl font-light mb-10 md:mb-12 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.hero.description }}
        />

        {/* CTAs - Full width sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center mb-20 md:mb-24 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-full bg-blue-600 text-white text-sm md:text-base font-bold hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2">
            {t.hero.ctaPrimary}
            <ChevronRight size={18} />
          </button>
          <button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-full bg-white/5 text-white border border-white/10 text-sm md:text-base font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

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

      {/* Barre de Status / Trustpilot (Fixée en bas) */}
      <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-center z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-2 w-full max-w-[280px] pointer-events-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm w-full">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-2 md:size-2.5 text-green-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[7px] md:text-[8px] font-mono text-gray-400 uppercase tracking-widest">
              Trustpilot <span className="text-white">4.9/5</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}