'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Search, ChevronRight, Layout, Terminal, Code2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { getProjects, type Project } from '@/lib/projects-api'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const item = itemRef.current
    if (!item) return
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
        <div ref={itemRef} className="group relative h-[550px] rounded-[2.5rem] border border-white/5 bg-[#0A0A0B] overflow-hidden transition-all duration-700 hover:border-blue-500/30">
          
          {/* Spotlight Effect */}
          <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37, 99, 235, 0.15), transparent 80%)' }}
          />

          {/* Image Area */}
          <div className={cn("relative h-[60%] overflow-hidden bg-gradient-to-br", project.gradient)}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <motion.span className="absolute inset-0 flex items-center justify-center text-[120px] filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out">
              {project.image}
            </motion.span>
            
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">{project.category}</span>
            </div>

            <div className="absolute bottom-6 right-6 size-12 rounded-full bg-blue-600 text-white flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              <ArrowUpRight size={22} />
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 flex flex-col h-[40%] justify-between bg-gradient-to-b from-transparent to-black/20">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">{project.year}</span>
                <div className="size-1 rounded-full bg-blue-500/50" />
                <span className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">{project.client || 'Internal'}</span>
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex -space-x-2">
                    {project.tags.slice(0,3).map((tag: string, i: number) => (
                        <div key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[9px] text-gray-400 font-mono uppercase">
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-blue-400 transition-colors">
                    <span className="text-[10px] font-mono uppercase tracking-widest">Build Details</span>
                    <ChevronRight size={14} />
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
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const categories = ['all', 'SaaS', 'Web App', 'Mobile', 'Site Vitrine']

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)
      try {
        // Charger uniquement les projets de type STUDIO
        const data = await getProjects('STUDIO')
        setProjects(data)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  const filteredProjects = projects.filter(p => {
    const mCat = selectedCategory === 'all' || p.category === selectedCategory
    const mSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    return mCat && mSearch
  })

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30">
      <PremiumNavbar />

      {/* --- BACKGROUND ATMOSPHERE (Style HomeHero) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-screen bg-gradient-to-b from-blue-500 via-blue-500/10 to-transparent opacity-30" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10"
          >
            <Sparkles size={14} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400">Portfolio Archive v2.0</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[140px] font-bold tracking-tighter text-center leading-[0.8] mb-12"
          >
            NOTRE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">STUDIO.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-lg md:text-2xl font-light text-center max-w-2xl mb-20 leading-relaxed"
          >
            Une sélection d'architectures numériques conçues pour la performance et l'impact.
          </motion.p>

          {/* --- SEARCH & FILTERS (Style Command Palette) --- */}
          <div className="w-full max-w-4xl relative z-20 mb-32">
            <div className="flex flex-col md:flex-row gap-4 p-2 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="text" 
                  placeholder="Rechercher une stack, un projet..."
                  className="w-full bg-transparent pl-16 pr-6 py-6 text-xl outline-none placeholder:text-gray-700 font-light"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 p-2 bg-black/40 rounded-[2rem]">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-6 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <AnimatePresence mode='popLayout'>
                  {filteredProjects.map((project, idx) => (
                      <ProjectCard key={project._id || project.slug} project={project} index={idx} />
                  ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="relative py-40 overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <Terminal size={40} className="mx-auto text-blue-500 mb-8 opacity-50" />
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10">
                PRÊT À <br /> <span className="text-blue-600">BUILDER ?</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-blue-600 text-white font-bold text-xl hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
                Initialiser la stack
                <ChevronRight />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}