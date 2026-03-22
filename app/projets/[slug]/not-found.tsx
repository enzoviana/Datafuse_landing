'use client'

import Link from 'next/link'
import { ArrowLeft, SearchX, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020203] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Icon */}
        <div className="size-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <SearchX className="w-12 h-12 text-gray-600" />
        </div>

        {/* Error Code */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
            ERROR_404
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-6">
          Projet <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            introuvable.
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Ce projet n'existe pas ou a été déplacé. Explorez notre portfolio complet ou retournez à l'accueil.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projets">
            <button className="h-14 px-10 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Voir tous les projets
            </button>
          </Link>

          <Link href="/">
            <button className="h-14 px-10 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2 backdrop-blur-xl">
              <Terminal className="w-5 h-5" />
              Retour à l'accueil
            </button>
          </Link>
        </div>

        {/* Status Line */}
        <div className="mt-16 px-4 py-2 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md text-[9px] font-mono text-gray-600 uppercase tracking-tight inline-flex items-center gap-2">
          <span className="size-1 rounded-full bg-red-500" />
          Resource not found
        </div>
      </motion.div>
    </div>
  )
}
