'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Brain, Cpu, Network, Zap, Shield, BarChart3,TrendingUp,
  Database, ChevronRight, Terminal, Layers, 
  ArrowUpRight, Menu, X, Globe, Lock, Command
} from 'lucide-react'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6",
      isScrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all",
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Database size={18} className="text-black" />
          </div>
          <span className="font-bold tracking-tighter text-xl">DATAFUSE<span className="text-gray-500">.IA</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
          <Link href="#securite" className="hover:text-white transition-colors">Sécurité</Link>
          <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium hover:text-white transition-colors">Connexion</button>
          <button className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Start Project
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl md:hidden flex flex-col gap-6"
          >
            <Link href="#solutions" onClick={() => setMobileMenu(false)}>Solutions</Link>
            <Link href="#infra" onClick={() => setMobileMenu(false)}>Infrastructure</Link>
            <button className="w-full py-4 bg-white text-black rounded-xl font-bold">Start Project</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const GridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[#030303]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#ffffff0f_0%,transparent_50%)]" />
  </div>
)

const CodeTerminal = () => (
  <div className="w-full rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
      <span className="ml-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">datafuse-client.py</span>
    </div>
    <div className="p-6 font-mono text-xs md:text-sm leading-relaxed">
      <div className="flex gap-4">
        <span className="text-gray-700">01</span>
        <span className="text-blue-400">from</span> <span className="text-white">datafuse</span> <span className="text-blue-400">import</span> <span className="text-white">CoreAI</span>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-700">02</span>
        <span>&nbsp;</span>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-700">03</span>
        <span><span className="text-gray-400"># Initialiser l'IA sur serveur privé</span></span>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-700">04</span>
        <span><span className="text-white">ai = CoreAI(endpoint=</span><span className="text-green-400">"https://local-gpu-cluster-01"</span><span className="text-white">)</span></span>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-700">05</span>
        <span><span className="text-white">response = ai.generate(</span></span>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-700">06</span>
        <span>&nbsp;&nbsp;<span className="text-white">model=</span><span className="text-green-400">"datafuse-llama-3-70b"</span><span className="text-white">,</span></span>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-700">07</span>
        <span>&nbsp;&nbsp;<span className="text-white">prompt=</span><span className="text-green-400">"Analyser les métriques de sécurité"</span></span>
      </div>
      <div className="flex gap-4">
        <span className="text-gray-700">08</span>
        <span><span className="text-white">)</span></span>
      </div>
    </div>
  </div>
)

const BentoCard = ({ children, className, title, subtitle, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={cn(
      "relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-10 hover:border-white/10 transition-colors group",
      className
    )}
  >
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
        <Icon size={22} />
      </div>
      <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-base text-gray-500 font-light leading-relaxed max-w-[280px]">{subtitle}</p>
      <div className="mt-4">{children}</div>
    </div>
  </motion.div>
)

export default function DatafuseIAPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-white/20 font-sans antialiased">
      <Navbar />
      <GridBackground />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border border-[#030303] bg-gray-800" />
              ))}
            </div>
            <span className="text-[11px] font-medium uppercase tracking-widest text-gray-300">
              Trusted by 50+ Tech Leaders
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[100px] font-medium tracking-tighter text-center leading-[0.85] mb-10"
          >
            L'IA de demain sera <br />
            <span className="text-gray-600">votre propriété.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl text-center font-light mb-12 leading-relaxed"
          >
            Datafuse déploie des infrastructures d'intelligence artificielle souveraines. 
            Gardez vos données, maîtrisez vos modèles, réduisez vos coûts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="h-14 px-10 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
              Démarrer le déploiement
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="h-14 px-10 rounded-full border border-white/10 bg-white/5 font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
              Voir la documentation
            </button>
          </motion.div>

          {/* Code Preview Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-24 w-full max-w-4xl px-4"
          >
            <CodeTerminal />
          </motion.div>
        </div>
      </section>

      {/* --- BENTO SECTION --- */}
      <section id="solutions" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">Ingénierie de pointe.</h2>
              <p className="text-gray-500 text-lg font-light">
                Une suite complète d'outils pour intégrer l'IA au cœur de vos processus critiques sans jamais compromettre la confidentialité.
              </p>
            </div>
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
              <button className="px-4 py-2 text-xs font-medium bg-white/10 rounded-lg">Overview</button>
              <button className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-white transition-colors">Technical Specs</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <BentoCard 
              className="md:col-span-7"
              title="Souveraineté Totale"
              subtitle="Vos modèles LLM sont hébergés on-premise. Vos secrets restent chez vous."
              icon={Lock}
            >
              <div className="mt-12 flex items-center gap-4">
                <div className="h-1 bg-white/20 flex-1 rounded-full overflow-hidden">
                  <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition={{ duration: 1.5 }} className="h-full bg-white" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em]">SECURED</span>
              </div>
            </BentoCard>

            <BentoCard 
              className="md:col-span-5"
              title="Multi-Cloud Sync"
              subtitle="Distribuez la charge d'inférence sur plusieurs régions."
              icon={Globe}
            >
              <div className="relative h-20 mt-8">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-dashed border-white/20 animate-spin-slow" />
                 </div>
              </div>
            </BentoCard>

            <BentoCard 
              className="md:col-span-4"
              title="GPU Orchestration"
              subtitle="Optimisation dynamique de la VRAM pour un débit maximal."
              icon={Cpu}
            >
              <div className="text-4xl font-medium tracking-tighter mt-10">98.2% <span className="text-sm text-gray-600 font-normal italic">eff.</span></div>
            </BentoCard>

            <BentoCard 
              className="md:col-span-8"
              title="RAG natif & Vector DB"
              subtitle="Connectez vos documents (PDF, Wiki, Code) à votre IA privée en quelques minutes."
              icon={Layers}
            >
               <div className="grid grid-cols-3 gap-4 mt-8">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-16 rounded-2xl bg-white/[0.02] border border-white/5" />
                  ))}
               </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* --- REASSURANCE (TRUST) --- */}
      <section className="relative z-10 py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Latence Réduite", desc: "Temps de réponse divisé par 3 par rapport aux API traditionnelles.", icon: Zap },
              { title: "Coûts Prévisibles", desc: "Plus de facturation au token. Un coût fixe d'infrastructure.", icon: BarChart3 },
              { title: "Scalabilité", desc: "Passez de 1 à 1000 instances sans modifier une ligne de code.", icon: TrendingUp }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="text-white"><feature.icon size={28} strokeWidth={1.5} /></div>
                <h4 className="text-xl font-medium tracking-tight">{feature.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="py-24 px-6 border-t border-white/5">
  <div className="max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12">
      <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10">
        <h4 className="text-red-500 font-mono text-xs uppercase mb-6 italic">Modèles Publics (SaaS)</h4>
        <ul className="space-y-4 text-sm text-gray-500">
          <li className="flex gap-3">✕ Données utilisées pour l'entraînement</li>
          <li className="flex gap-3">✕ Latence instable selon l'usage mondial</li>
          <li className="flex gap-3">✕ Dépendance critique aux prix d'API</li>
        </ul>
      </div>
      <div className="p-8 rounded-3xl bg-green-500/5 border border-green-500/10">
        <h4 className="text-green-500 font-mono text-xs uppercase mb-6 italic">Datafuse (Private)</h4>
        <ul className="space-y-4 text-sm text-gray-300">
          <li className="flex gap-3">✓ Isolation totale des données (RGPD+)</li>
          <li className="flex gap-3">✓ Performance garantie par vos propres GPU</li>
          <li className="flex gap-3">✓ Coûts fixes et prévisibles</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* --- FAQ SECTION --- */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-medium tracking-tighter mb-4">Questions techniques</h2>
             <p className="text-gray-500 font-light">Tout ce que vos ingénieurs ont besoin de savoir.</p>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { q: "Quelles architectures LLM supportez-vous ?", a: "Nous supportons nativement toutes les architectures via vLLM et HuggingFace Transformers, incluant Llama 3, Mistral, Qwen et Mixtral." },
              { q: "Comment se passe l'intégration avec nos données ?", a: "Nous installons des connecteurs sécurisés (S3, SQL, Notion, Slack) qui alimentent une base de données vectorielle locale (Milvus ou Qdrant)." },
              { q: "Quelle est la configuration matérielle minimale ?", a: "Pour l'inférence légère, un seul GPU A10G suffit. Pour des modèles 70B+, nous recommandons des clusters de H100 ou A100." }
            ].map((item, i) => (
              <button 
                key={i} 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full py-8 text-left group"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className={cn("text-lg transition-colors", activeFaq === i ? "text-white" : "text-gray-400 group-hover:text-gray-200")}>{item.q}</span>
                  <div className={cn("w-6 h-6 flex items-center justify-center rounded-full border border-white/10 transition-transform", activeFaq === i ? "rotate-180 bg-white text-black" : "")}>
                    <ChevronRight size={14} />
                  </div>
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.p 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-gray-500 font-light leading-relaxed overflow-hidden"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative z-10 py-40 px-6">
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-12 md:p-24 text-center">
            <Command size={48} className="mx-auto mb-10 text-gray-700" />
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-10 leading-tight">
              Prêt pour l'indépendance <br /> technologique ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-16 px-12 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
                Réserver une démo technique
              </button>
              <button className="h-16 px-12 rounded-full border border-white/10 bg-white/5 font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                Contacter Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-2 md:col-span-1">
              <div className="font-bold tracking-tighter text-xl mb-6 italic">DATAFUSE.IA</div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                L'infrastructure IA souveraine pour les entreprises qui ne font pas de compromis sur la sécurité.
              </p>
            </div>
            <div>
              <h5 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 mb-6">Produit</h5>
              <ul className="space-y-4 text-sm text-gray-500 font-light">
                <li><Link href="#" className="hover:text-white transition-colors">Modèles Privés</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Infrastructure GPU</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Data Connectors</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 mb-6">Compagnie</h5>
              <ul className="space-y-4 text-sm text-gray-500 font-light">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Sécurité</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 mb-6">Legal</h5>
              <ul className="space-y-4 text-sm text-gray-500 font-light">
                <li><Link href="#" className="hover:text-white transition-colors">Confidentialité</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[11px] font-mono text-gray-600 uppercase tracking-widest">
            <div className="flex gap-8">
              <span>Status: All Systems Operational</span>
              <span>Uptime: 99.99%</span>
            </div>
            <span>©2026 Datafuse AI Laboratory</span>
          </div>
        </div>
      </footer>
    </main>
  )
}