'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ChevronRight, Calendar, Clock, User,
  Target, TrendingUp, Terminal, Zap,
  ShieldCheck, Cpu, Sparkles, Box
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getProjectBySlug, getRelatedProjects, type Project } from '@/lib/projects-data'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import { useRef, useEffect, useState } from 'react'
import { useTranslation } from '@/contexts/LanguageContext'

// --- SPOTLIGHT CARD ADAPTATIF ---
const SpotlightCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const div = divRef.current
    if (!div || window.innerWidth < 768) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = div.getBoundingClientRect()
      div.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      div.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    div.addEventListener('mousemove', handleMouseMove)
    return () => div.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={divRef} className={cn("group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-white/[0.01] transition-all duration-500 hover:border-blue-500/20", className)}>
      <div className="hidden md:block pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37, 99, 235, 0.1), transparent 80%)' }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const { t } = useTranslation()
  const [projectBase, setProjectBase] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])

  useEffect(() => {
    const data = getProjectBySlug(params.slug)
    if (!data) { router.push('/projets'); return }
    setProjectBase(data)
    setRelatedProjects(getRelatedProjects(params.slug, 3))
  }, [params.slug, router])

  if (!projectBase) return null

  // Mapping des traductions (Sécurisé)
  const translationKeys: any = { medialink: 'medialink', dimotec: 'dimotec', rioave: 'rioave', natureletjoli: 'natureletjoli' }
  const projectTranslation = t.portfolio.projects[translationKeys[params.slug] as keyof typeof t.portfolio.projects]

  const project = {
    ...projectBase,
    title: projectTranslation?.title || projectBase.title,
    shortDescription: projectTranslation?.shortDescription || projectTranslation?.desc || "",
    fullDescription: projectTranslation?.fullDescription || projectTranslation?.desc || "",
    challenges: projectTranslation?.challenges || [],
    solutions: projectTranslation?.solutions || [],
    results: projectTranslation?.results || [],
    testimonial: projectTranslation?.testimonial
  }

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <PremiumNavbar />

      {/* --- ATMOSPHERE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/20 to-transparent" />
      </div>

      {/* --- NAV & HEADER --- */}
      <nav className="relative z-10 pt-28 md:pt-36 px-6 max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center">
        <Link href="/projets">
          <motion.div whileHover={{ x: -5 }} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
            <ArrowLeft size={12} /> Retour Archive
          </motion.div>
        </Link>
        <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest tracking-[0.2em]">Case Study 2026</span>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative z-10 pt-12 md:pt-20 pb-12 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
            <Sparkles size={12} className="text-blue-400" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400">{project.category}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-[110px] lg:text-[130px] font-bold tracking-tighter leading-[0.9] mb-8">
            {project.title}
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
            {project.shortDescription}
          </motion.p>
        </div>

        {/* VISUAL PREVIEW */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className={cn("relative min-h-[350px] md:h-[700px] rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]", project.gradient)}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 text-[120px] sm:text-[200px] md:text-[350px] drop-shadow-2xl">
            {project.image}
          </motion.span>
          
          {/* Metadata Overlay - Hidden on mobile, shown on large screens */}
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 p-6 md:p-8 rounded-[2rem] bg-black/60 backdrop-blur-3xl border border-white/10 hidden md:block">
             <div className="flex flex-col gap-6">
                <MetaItem icon={<User size={16}/>} label="Client" value={project.client || "Studio"} />
                <MetaItem icon={<Clock size={16}/>} label="Timeframe" value={project.duration || "4 weeks"} />
                <MetaItem icon={<Calendar size={16}/>} label="Release" value={project.year || "2026"} />
             </div>
          </div>
        </motion.div>

        {/* Mobile Meta Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-[8px] font-mono text-blue-500 uppercase mb-1">Client</p>
                <p className="text-sm font-bold">{project.client}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-[8px] font-mono text-blue-500 uppercase mb-1">Year</p>
                <p className="text-sm font-bold">{project.year}</p>
            </div>
        </div>
      </section>

      {/* --- CONTENT --- */}
      <section className="relative z-10 py-16 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          <aside className="lg:col-span-4 space-y-10">
            <div className="sticky top-32">
                <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                   <Box size={14} /> Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400 uppercase tracking-widest hover:border-blue-500/40 transition-colors">
                        {tag}
                    </span>
                    ))}
                </div>
                
                <div className="p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5">
                    <Cpu className="text-blue-500 mb-4" size={24} />
                    <h4 className="text-lg font-bold mb-2">Build Intelligence</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                        Implémentation d'une logique métier scalable avec une gestion d'état réactive pour une expérience utilisateur sans latence.
                    </p>
                </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-24 md:space-y-32">
            <div className="max-w-none">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-8 italic">Le Manifeste.</h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                   {project.fullDescription}
                </p>
            </div>

            <section>
              <SectionTitle icon={<Target />} title="Les Défis" />
              <div className="space-y-4">
                {project.challenges.map((c, i) => (
                  <SpotlightCard key={i} className="p-6 md:p-8">
                    <div className="flex gap-4 md:gap-6 items-start">
                        <span className="text-red-500/40 font-mono text-xs md:text-sm mt-1">0{i+1}</span>
                        <p className="text-lg md:text-xl text-gray-300 font-light">{c}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={<Zap />} title="La Solution" color="text-blue-400" />
              <div className="space-y-4">
                {project.solutions.map((s, i) => (
                  <SpotlightCard key={i} className="p-6 md:p-8 bg-blue-600/[0.03]">
                    <div className="flex gap-4 md:gap-6 items-start">
                        <span className="text-blue-500/50 font-mono text-xs md:text-sm mt-1">0{i+1}</span>
                        <p className="text-lg md:text-xl text-gray-200 font-light">{s}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={<TrendingUp />} title="Impact Metrics" color="text-emerald-400" />
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((r, i) => (
                  <div key={i} className="p-6 md:p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-between min-h-[140px] hover:bg-white/[0.05] transition-colors">
                    <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <ShieldCheck size={20} />
                    </div>
                    <p className="text-base md:text-lg text-white font-medium tracking-tight mt-4">{r}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      {project.testimonial && (
        <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-[#0A0A0B] border border-white/5 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                <p className="text-xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed mb-10 md:mb-12 italic">
                  "{project.testimonial.text}"
                </p>
                <div className="flex flex-col items-center">
                    <div className="font-bold text-lg md:text-xl text-white">{project.testimonial.author}</div>
                    <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mt-2">{project.testimonial.role}</div>
                </div>
            </motion.div>
        </section>
      )}

      {/* --- RECOMMANDATIONS --- */}
      <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
                  <div>
                      <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] block mb-4">Architecture Loop</span>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Projets Similaires.</h2>
                  </div>
                  <Link href="/projets" className="text-xs font-mono text-gray-500 hover:text-white transition-colors underline underline-offset-8">Voir l'archive</Link>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedProjects.map((p) => (
                  <Link key={p.id} href={`/projets/${p.slug}`} className="group">
                      <SpotlightCard className="h-full bg-black/40">
                         <div className={cn("h-48 md:h-56 flex items-center justify-center text-6xl transition-transform duration-700 group-hover:scale-110", p.gradient)}>
                            <div className="absolute inset-0 bg-black/30" />
                            <span className="relative z-10 drop-shadow-xl">{p.image}</span>
                         </div>
                         <div className="p-6 md:p-8">
                            <span className="text-[8px] font-mono text-blue-400 uppercase tracking-widest">{p.category}</span>
                            <h4 className="text-xl font-bold text-white mt-2 mb-4">{p.title}</h4>
                            <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                                Details <ChevronRight size={12} />
                            </div>
                         </div>
                      </SpotlightCard>
                  </Link>
                ))}
              </div>
          </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl sm:text-7xl md:text-[90px] font-bold tracking-tighter leading-none mb-10 md:mb-12">
                UN PROJET <br />
                <span className="text-blue-600">CRITIQUE ?</span>
            </h2>
            <Link href="/contact" className="inline-block">
                <motion.button whileTap={{ scale: 0.95 }} className="h-14 md:h-16 px-8 md:px-12 rounded-full bg-blue-600 text-white font-bold text-base md:text-lg hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center gap-3">
                    Déployer maintenant <ChevronRight size={20} />
                </motion.button>
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// --- MICRO-COMPOSANTS ---
const MetaItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-center gap-4 group">
        <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            {icon}
        </div>
        <div>
            <p className="text-[8px] font-mono text-gray-600 uppercase tracking-widest mb-0.5">{label}</p>
            <p className="text-sm text-white font-bold tracking-tight">{value}</p>
        </div>
    </div>
)

const SectionTitle = ({ icon, title, color = "text-white" }: { icon: any, title: string, color?: string }) => (
    <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12 border-b border-white/5 pb-6 md:pb-8">
        <div className={cn("size-12 md:size-14 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner", color)}>
            {icon}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
    </div>
)