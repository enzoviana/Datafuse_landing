'use client'

import { motion } from 'framer-motion'
import {
  ArrowLeft, ChevronRight, Calendar, Clock, User,
  Target, Lightbulb, TrendingUp, Terminal, Zap,
  ShieldCheck, Cpu, Layout, Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getProjectBySlug, getRelatedProjects, type Project } from '@/lib/projects-api'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import { useRef, useEffect, useState } from 'react'

// --- COMPOSANT SPOTLIGHT POUR LES CARTES ---
const SpotlightCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const div = divRef.current
    if (!div) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = div.getBoundingClientRect()
      div.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      div.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    div.addEventListener('mousemove', handleMouseMove)
    return () => div.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={divRef} className={cn("group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-white/10", className)}>
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37, 99, 235, 0.1), transparent 80%)' }} />
      {children}
    </div>
  )
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true)
      try {
        const data = await getProjectBySlug(params.slug)
        if (!data) {
          router.push('/404')
          return
        }
        setProject(data)

        // Charger les projets similaires
        const related = await getRelatedProjects(params.slug, 3)
        setRelatedProjects(related)
      } catch (error) {
        console.error('Error loading project:', error)
        router.push('/404')
      } finally {
        setLoading(false)
      }
    }
    loadProject()
  }, [params.slug, router])

  if (loading) {
    return (
      <main className="min-h-screen bg-[#020203] text-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </main>
    )
  }

  if (!project) return null

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30">
      <PremiumNavbar />

      {/* --- ATMOSPHÈRE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.12]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-screen bg-gradient-to-b from-blue-500 via-blue-500/10 to-transparent opacity-30" />
        <div className="absolute top-[15%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      {/* --- TOP NAVIGATION --- */}
      <nav className="relative z-10 pt-32 px-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/projets">
          <motion.div whileHover={{ x: -5 }} className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.4em]">
            <ArrowLeft size={14} /> Back to Archive
          </motion.div>
        </Link>
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl">
            <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">Case Study v4.0</span>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-16 pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 w-fit">
            <Sparkles size={12} className="text-blue-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400">{project.category}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[130px] font-bold tracking-tighter leading-[0.85] mb-10">
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? "text-white" : "text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30"}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-gray-500 text-xl md:text-3xl font-light max-w-4xl leading-relaxed">
            {project.shortDescription}
          </motion.p>
        </div>

        {/* MAIN VISUAL CARD */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className={cn("relative h-[450px] md:h-[750px] rounded-[3.5rem] bg-gradient-to-br flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl", project.gradient)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 text-[200px] md:text-[400px] drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">
            {project.image}
          </motion.span>
          
          {/* Metadata floating on image */}
          <div className="absolute bottom-10 left-10 p-8 rounded-3xl bg-black/60 backdrop-blur-3xl border border-white/10 hidden lg:block">
             <div className="grid grid-cols-1 gap-6">
                <MetaItem icon={<User size={16}/>} label="Client" value={project.client ?? "Non spécifié"} />
                <MetaItem icon={<Clock size={16}/>} label="Durée" value={project.duration ?? "N/A"} />
                <MetaItem icon={<Calendar size={16}/>} label="Année" value={project.year ?? "2026"} />
             </div>
          </div>
        </motion.div>
      </section>

      {/* --- BODY CONTENT GRID --- */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: TECH DETAILS */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-[11px] font-mono text-blue-500 uppercase tracking-[0.4em] mb-6">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest transition-colors hover:text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/[0.05] to-transparent border border-white/5">
                <Cpu className="text-blue-500 mb-4" size={24} />
                <h4 className="text-white font-bold mb-2 tracking-tight">Architecture Scalable</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Ce projet a été construit sur une architecture micro-services optimisée pour supporter des pics de charge critiques.
                </p>
            </div>
          </div>

          {/* RIGHT: BUILD LOGS (CHALLENGES / SOLUTIONS / RESULTS) */}
          <div className="lg:col-span-8 space-y-32">
            
            {/* Full Description Text */}
            <div className="prose prose-invert max-w-none">
                <h2 className="text-4xl font-bold tracking-tighter text-white mb-8 italic">Le Manifeste.</h2>
                <p className="text-2xl text-gray-400 font-light leading-relaxed mb-12">
                   {project.fullDescription}
                </p>
            </div>

            {/* Challenges */}
            <div id="challenges">
              <SectionTitle icon={<Target />} title="The Challenges" />
              <div className="grid gap-4">
                {project.challenges.map((c, i) => (
                  <SpotlightCard key={i} className="p-8">
                    <div className="flex gap-6 items-start">
                        <span className="text-red-500/30 font-mono text-sm mt-1">0{i+1}</span>
                        <p className="text-xl text-gray-300 font-light leading-relaxed">{c}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div id="solutions">
              <SectionTitle icon={<Zap />} title="The Solution" color="text-blue-400" />
              <div className="grid gap-4">
                {project.solutions.map((s, i) => (
                  <SpotlightCard key={i} className="p-8 bg-blue-600/[0.02] border-blue-500/10">
                    <div className="flex gap-6 items-start">
                        <span className="text-blue-500/40 font-mono text-sm mt-1">0{i+1}</span>
                        <p className="text-xl text-gray-300 font-light leading-relaxed">{s}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Impact Results */}
            <div id="results">
              <SectionTitle icon={<TrendingUp />} title="Impact Metrics" color="text-green-400" />
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((r, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col justify-between h-44 hover:bg-white/[0.03] transition-colors">
                    <div className="size-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                      <ShieldCheck size={20} />
                    </div>
                    <p className="text-lg text-white font-medium tracking-tight leading-tight">{r}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL PREMIUM --- */}
      {project.testimonial && (
        <section className="py-40 px-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="relative p-12 md:p-20 rounded-[4rem] bg-[#0A0A0B] border border-white/5 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-blue-500/50 to-transparent" />
                <div className="text-6xl text-blue-500/20 font-serif mb-8 italic">“</div>
                <p className="text-2xl md:text-4xl text-white font-light leading-snug mb-12 tracking-tight italic">
                  {project.testimonial.text}
                </p>
                <div className="flex flex-col items-center">
                    <div className="size-16 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-4">👤</div>
                    <div className="font-bold text-xl tracking-tight text-white">{project.testimonial.author}</div>
                    <div className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] mt-2">{project.testimonial.role}</div>
                </div>
            </motion.div>
        </section>
      )}

      {/* --- RELATED PROJECTS --- */}
      <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-16">
                  <div>
                      <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] mb-4 block">Archive Loop</span>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Projets Similaires.</h2>
                  </div>
                  <Link href="/projets" className="text-sm font-mono text-gray-500 hover:text-white transition-colors underline underline-offset-8 decoration-blue-500/50">Voir tout</Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((p, idx) => (
                  <Link key={p.id} href={`/projets/${p.slug}`}>
                      <SpotlightCard className="h-full bg-[#050505]">
                         <div className={cn("h-48 flex items-center justify-center text-6xl", p.gradient)}>
                            <div className="absolute inset-0 bg-black/40" />
                            <span className="relative z-10">{p.image}</span>
                         </div>
                         <div className="p-8">
                            <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">{p.category}</span>
                            <h4 className="text-xl font-bold text-white mt-2 mb-4 tracking-tight">{p.title}</h4>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 group-hover:text-blue-400 transition-all uppercase tracking-widest">
                                Explorer le build <ChevronRight size={12} />
                            </div>
                         </div>
                      </SpotlightCard>
                  </Link>
                ))}
              </div>
          </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="relative py-44 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.8] mb-12">
                BESOIN DE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 text-blue-600">L'EXCELLENCE ?</span>
            </h2>
            <Link href="/contact">
                <button className="h-16 px-12 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.4)] flex items-center gap-3 mx-auto">
                    Initialiser un projet <ChevronRight />
                </button>
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// --- MICRO-COMPOSANTS ---

const MetaItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-center gap-4">
        <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
            {icon}
        </div>
        <div>
            <p className="text-[8px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-1 leading-none">{label}</p>
            <p className="text-sm text-white font-bold tracking-tight">{value || 'N/A'}</p>
        </div>
    </div>
)

const SectionTitle = ({ icon, title, color = "text-white" }: { icon: any, title: string, color?: string }) => (
    <div className="flex items-center gap-5 mb-12 border-b border-white/5 pb-8">
        <div className={cn("size-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center", color)}>
            {icon}
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">{title}</h2>
    </div>
)