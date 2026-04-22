'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Cpu, Database, Layout } from 'lucide-react'

const team = [
  {
    name: 'Enzo Datafuse',
    role: 'Lead Architect',
    id: 'SYS_01',
    tags: ['Architecture', 'Scaling'],
    experience: '8+ ans',
    status: 'Ready',
    bio: 'Ancien CTO en Fintech. Expert en infrastructures Next.js scalables et sécurisées.',
    email: 'enzo@datafuse.fr'
  },
  {
    name: 'Sarah K.',
    role: 'Senior Backend Engineer',
    id: 'SYS_02',
    tags: ['Next.js', 'PostgreSQL'],
    experience: '6+ ans',
    status: 'Ready',
    bio: 'Spécialiste des systèmes distribués. Passionnée par l\'optimisation de base de données.',
    email: 'sarah@datafuse.fr'
  },
  {
    name: 'Alex M.',
    role: 'UX / Product Engineer',
    id: 'SYS_03',
    tags: ['Design', 'Conversion'],
    experience: '7+ ans',
    status: 'Ready',
    bio: 'Ex-Design lead à la Revolut. Aligne l\'esthétique sur les objectifs de croissance business.',
    email: 'alex@datafuse.fr'
  }
]

export default function TechTeam() {
  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-2 py-1 rounded border border-blue-500/20 bg-blue-500/5 text-[9px] font-mono text-blue-400 tracking-[0.3em] mb-6 uppercase"
            >
              <Cpu size={10} />
              SYSTEM_OPERATORS
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Ingénierie <br />
              <span className="text-gray-600">Seniors.</span>
            </h2>
          </div>
          <div className="text-left md:text-right max-w-xs border-l-2 md:border-l-0 md:border-r-2 border-blue-500/20 pl-6 md:pr-6 py-1">
            <p className="text-gray-500 text-sm font-mono leading-relaxed">
Engineers-only. Nous remplaçons les chefs de projet par des experts capables de scaler vos produits dès le premier commit.            </p>
          </div>
        </div>

        {/* Team Grid - Design "Chassis" */}
        <div className="grid md:grid-cols-3 gap-1">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#050505] border border-white/5 p-8 transition-all hover:bg-white/[0.02] hover:border-blue-500/30"
            >
              {/* Status Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">{member.status}</span>
                </div>
                <span className="text-[10px] font-mono text-gray-700">{member.id}</span>
              </div>

              {/* Bio Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {member.name}
                </h3>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-tighter mb-6">
                    {member.role} // {member.experience}
                </p>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {member.bio}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {member.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[9px] font-mono bg-white/5 border border-white/5 text-gray-500 rounded uppercase">
                        {tag}
                    </span>
                ))}
              </div>

              {/* Action / Socials */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-4">
                    <Github size={14} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                    <Linkedin size={14} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                    <Mail size={14} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                </div>
                <ArrowUpRight size={14} className="text-gray-800 group-hover:text-blue-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower Values - Terminal Style */}
        <div className="mt-24 grid lg:grid-cols-3 gap-12">
            {[
                { icon: Terminal, title: "01. EXECUTION", desc: "On ne discute pas de la feature pendant des semaines. On la déploie." },
                { icon: Database, title: "02. INTEGRITY", desc: "Le code est propre, documenté et vous appartient à 100%. Pas de lock-in." },
                { icon: Layout, title: "03. UX FOCUS", desc: "La technique sert le produit. On optimise pour la rétention et le revenu." }
            ].map((item, i) => (
                <div key={i} className="flex gap-4">
                    <item.icon size={20} className="text-blue-500 mt-1 shrink-0" />
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Final Deployment Bar */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-8 border border-blue-500/20 bg-blue-500/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div className="flex items-center gap-6">
                <div className="hidden md:flex flex-col items-center gap-1">
                    <div className="w-1 h-8 bg-blue-500/20" />
                    <div className="w-1 h-2 bg-blue-500" />
                </div>
                <div>
                    <div className="text-white font-bold tracking-tight">Prêt pour le déploiement ?</div>
                    <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mt-1">Disponibilité : Q2 2026</div>
                </div>
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-tighter">
                Initialiser le contact
                <ArrowUpRight size={16} />
            </button>
        </motion.div>
      </div>
    </section>
  )
}