'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

// Coordenadas ajustadas para o mapa SVG (Escala 0 a 100)
const locations = [
  { name: 'França', x: 49.5, y: 32, id: 'fr' },
  { name: 'Portugal', x: 46.5, y: 37, id: 'pt' },
  { name: 'Suíça', x: 50.8, y: 34, id: 'ch' },
  { name: 'USA', x: 22, y: 38, id: 'us' },
]

const Ping = ({ x, y, name }: { x: number; y: number; name: string }) => (
  <div 
    className="absolute flex items-center justify-center z-20"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <motion.div
      animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      className="absolute size-4 rounded-full bg-blue-500/50"
    />
    <div className="size-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
    
    <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="text-[9px] font-mono font-bold text-white/70 bg-black/90 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 uppercase tracking-tighter">
            {name}
        </span>
    </div>
  </div>
)

export default function GlobalPresence() {
  return (
    <section className="py-32 bg-[#030303] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.3em] mb-6 uppercase"
          >
            <Globe size={12} className="animate-spin-slow" />
            <span>Escala Internacional</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Presença <span className="text-gray-600 italic">Global.</span>
          </h2>
        </div>

        {/* Mapa Container */}
        <div className="relative w-full aspect-[2/1] bg-white/[0.01] border border-white/5 rounded-[2.5rem] overflow-hidden group">
          
          {/* Efeito de Grelha de Pontos (Dots) */}
          <div 
            className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000"
            style={{
              backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '14px 14px',
              // Esta máscara usa um SVG simplificado do mundo para "cortar" os pontos
              maskImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg"><path d="M150,150 Q200,100 250,150 T350,150 M450,120 Q500,80 550,120 T650,150 M480,180 Q500,220 520,180 M200,250 Q250,300 300,250" fill="black"/></svg>')`, // Exemplo de path simplificado
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
              WebkitMaskSize: '90%',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
            }}
          />

          {/* Marcadores dos Clientes */}
          <div className="absolute inset-0 z-30">
            {locations.map((loc) => (
              <Ping key={loc.id} {...loc} />
            ))}
          </div>

          {/* Linha de Scanner Horizontal */}
          <motion.div 
            animate={{ x: ['-10%', '110%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent z-10 opacity-30"
          />

          {/* Gradiente de profundidade */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030303]/40 to-[#030303] pointer-events-none" />
          
        </div>

        {/* Stats informativos em baixo do mapa */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/5 pt-12">
            {[
                { label: 'Países Ativos', val: '04' },
                { label: 'Uptime Global', val: '99.9%' },
                { label: 'Latência Média', val: '< 40ms' },
                { label: 'Arquitetura', val: 'Edge' }
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-bold text-white tracking-tighter">{stat.val}</span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}