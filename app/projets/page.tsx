'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Search, ChevronRight, Terminal, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { projects } from '@/lib/projects-data'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const item = itemRef.current
    if (!item || window.innerWidth < 768) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect()
      item.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      item.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    item.addEventListener('mousemove', handleMouseMove)
    return () => item.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projets/${project.slug}`}>
        <div ref={itemRef} className="group relative min-h-[500px] md:h-[580px] rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-[#0A0A0B] overflow-hidden transition-all duration-700 hover:border-blue-500/30">
          
          {/* Spotlight Effect */}
          <div className="hidden md:block pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37, 99, 235, 0.15), transparent 80%)' }}
          />

          {/* Image Area - Updated for Real Preview */}
          <div className={cn("relative h-72 md:h-[65%] overflow-hidden bg-[#111]")}>
            {/* Background Gradient Layer */}
            <div className={cn("absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700", project.gradient)} />
            
            {/* The Image Preview */}
            <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                    <Image 
                      src={project.image} // Assure-toi que project.image est une URL/Chemin
                      alt={project.title}
                      fill
                      className="object-cover object-top filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
            
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
              <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">{project.category}</span>
            </div>

            <div className="absolute bottom-4 right-4 z-10 size-10 md:size-12 rounded-full bg-blue-600 text-white flex items-center justify-center md:translate-y-20 md:group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-gradient-to-b from-transparent to-black/20">
            <div>
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="text-[8px] md:text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">{project.year}</span>
                <div className="size-1 rounded-full bg-blue-500/50" />
                <span className="text-[8px] md:text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">{project.client || 'Internal'}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/5 gap-4">
                <div className="flex -space-x-2">
                    {project.tags.slice(0,3).map((tag: string, i: number) => (
                        <div key={i} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[8px] text-gray-400 font-mono uppercase">
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-blue-400 transition-colors">
                    <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest">Build Details</span>
                    <ChevronRight size={12} />
                </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const categories = ['all', 'SaaS', 'Web App', 'Mobile', 'Site Vitrine']

  const filteredProjects = projects.filter(p => {
    const mCat = selectedCategory === 'all' || p.category === selectedCategory
    const mSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    return mCat && mSearch
  })

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <PremiumNavbar />

      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] opacity-[0.1]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-screen bg-gradient-to-b from-blue-500 via-blue-500/10 to-transparent opacity-30" />
        <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <section className="relative pt-32 md:pt-44 pb-12 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 md:mb-10"
          >
            <Sparkles size={12} className="text-blue-400 animate-pulse" />
            <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.4em] text-blue-400">Portfolio Archive v2.0</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[140px] font-bold tracking-tighter text-center leading-[0.9] md:leading-[0.8] mb-8 md:mb-12"
          >
            NOTRE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">STUDIO.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-base md:text-2xl font-light text-center max-w-2xl mb-12 md:mb-20 leading-relaxed"
          >
            Une sélection d'architectures numériques conçues pour la performance et l'impact.
          </motion.p>

          {/* --- SEARCH & FILTERS --- */}
          <div className="w-full max-w-4xl relative z-20 mb-16 md:mb-32">
            <div className="flex flex-col gap-4 p-2 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-5 md:left-6 top-1/2 -translate-y-1-2 text-gray-500" size={20} />
                <input 
                  type="text" 
                  placeholder="Rechercher..."
                  className="w-full bg-transparent pl-12 md:pl-16 pr-4 md:pr-6 py-4 md:py-6 text-lg md:text-xl outline-none placeholder:text-gray-700 font-light"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-black/40 rounded-xl md:rounded-[2rem]">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "whitespace-nowrap px-4 md:px-6 py-2 md:py-3 rounded-full text-[8px] md:text-[10px] font-mono uppercase tracking-widest transition-all",
                      selectedCategory === cat ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
                    )}
                  >
                    {cat === 'all' ? 'Archive' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project, idx) => (
                    <ProjectCard key={project.id || project.slug} project={project} index={idx} />
                ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-gray-500 font-mono uppercase tracking-widest">
                Aucun projet trouvé.
            </div>
          )}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="relative py-24 md:py-40 overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <Terminal size={40} className="mx-auto text-blue-500 mb-6 md:mb-8 opacity-50" />
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 md:mb-10">
                PRÊT À <br /> <span className="text-blue-600">BUILDER ?</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-3 md:gap-4 px-8 py-4 md:px-12 md:py-6 rounded-full bg-blue-600 text-white font-bold text-lg md:text-xl hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_15px_40px_rgba(37,99,235,0.3)]">
                Initialiser la stack
                <ChevronRight size={20} />
            </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  )
}