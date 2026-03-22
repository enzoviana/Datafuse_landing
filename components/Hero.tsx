'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Effet de parallaxe subtil au scroll
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] text-white selection:bg-blue-500/30"
    >
      {/* Background : Grille estompée et spots de lumière */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-[0.15]" 
          style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
        ></div>
        
        {/* Glows dynamiques */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        
        {/* Badge Premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-blue-200/60">
            Datafuse Studio — Disponibilité Q3 2026
          </span>
        </motion.div>

        {/* Headline avec lettrage serré */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]"
        >
          L'ingénierie au service <br /> 
          <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
            de la performance
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Nous concevons des écosystèmes digitaux de haute précision. 
          SaaS, IA générative et infrastructures data pour entreprises visionnaires.
        </motion.p>

        {/* Groupe de boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Bouton Shimmer (Effet Brillance) */}
          <button className="relative group overflow-hidden bg-white text-black px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
            <span className="relative z-10 flex items-center gap-2">
              Lancer le projet <ChevronRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </button>

          <button className="group px-10 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
            Notre portfolio
          </button>
        </motion.div>

        {/* Stats Minimalistes */}
        <motion.div
          style={{ opacity }}
          className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto"
        >
          {[
            { value: '12M€', label: 'Volume Data managé' },
            { value: '99.9%', label: 'Uptime garanti' },
            { value: '24ms', label: 'Latence moyenne' },
            { value: 'Top 1%', label: 'Expertise tech' },
          ].map((stat, index) => (
            <div key={index} className="group cursor-default">
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}