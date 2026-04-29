'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Smartphone, Globe, Layout, Zap, Code2, ArrowUpRight, ArrowRight, FileText } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'
import Link from 'next/link'

const ProjectCard = ({ className, title, description, badge, tags, image, icon: Icon, slug }: {
  className?: string;
  title: string;
  description: string;
  badge?: string;
  tags: string[];
  image?: string;
  icon: any;
  slug: string;
}) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const item = itemRef.current
    if (!item) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      item.style.setProperty('--mouse-x', `${x}px`)
      item.style.setProperty('--mouse-y', `${y}px`)
    }

    item.addEventListener('mousemove', handleMouseMove)
    return () => item.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Link href={`/projets/${slug}`}>
      <div
        ref={itemRef}
        className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#080808] p-8 transition-all hover:border-blue-500/30 cursor-pointer ${className}`}
      >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(37, 99, 235, 0.08), transparent 80%)',
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500">
            <Icon size={24} />
          </div>
          {badge && (
            <span className="text-[10px] font-mono py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
              {badge}
            </span>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight flex items-center gap-2">
            {title}
            <ArrowUpRight size={18} className="text-white/20 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed font-light max-w-sm">
            {description}
          </p>
        </div>

        {/* Visual Preview / Placeholder for Image */}
        <div className="mt-auto relative w-full h-40 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 overflow-hidden group-hover:border-blue-500/20 transition-colors">
            {/* Ici on simule un rendu de code ou d'UI */}
            <div className="absolute inset-0 p-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2 mb-2">
                    <div className="size-2 rounded-full bg-red-500/50" />
                    <div className="size-2 rounded-full bg-yellow-500/50" />
                    <div className="size-2 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2 font-mono text-[10px] text-blue-400">
                    <p>{`> Initializing build...`}</p>
                    <p className="text-gray-600">{`> Optimization: 100%`}</p>
                    <p className="text-white">{`> Status: Operational`}</p>
                </div>
            </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[9px] font-mono text-gray-500 px-2 py-1 rounded bg-white/5 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default function PremiumBentoPortfolio() {
  const { t } = useTranslation()

  return (
    <section id="portfolio" className="py-32 bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-500 font-mono text-[10px] mb-6 tracking-[0.4em] uppercase"
            >
              <Layout size={14} />
              <span>{t.portfolio.badge}</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              {t.portfolio.title} <br />
              <span className="text-gray-600 italic">{t.portfolio.subtitle}</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm font-light max-w-[280px] md:text-right">
            {t.portfolio.description}
          </p>
        </div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center"
        >
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">127</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">projets livrés</div>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">98/100</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">score moyen</div>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-2">-87%</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">load time</div>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">satisfaits</div>
          </div>
        </motion.div>

        {/* Bento Grid layout */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">
  
  {/* Media Link SAAS - Occupant 2 colonnes pour l'aspect système complet */}
  <ProjectCard
    className="md:col-span-2"
    title={t.portfolio.projects.medialink.title}
    icon={Layout} // Icône Dashboard/CMS
    description={t.portfolio.projects.medialink.desc}
    badge={t.portfolio.projects.medialink.badge}
    tags={t.portfolio.projects.medialink.tags}
    slug="medialink"
  />

  {/* Rio Ave FC - Mobile */}
  <ProjectCard
    title={t.portfolio.projects.rioave.title}
    icon={Smartphone} // Icône App Mobile
    description={t.portfolio.projects.rioave.desc}
    badge={t.portfolio.projects.rioave.badge}
    tags={t.portfolio.projects.rioave.tags}
    slug="rioave"
  />

  {/* Dimotec - App Métier */}
  <ProjectCard
    title={t.portfolio.projects.dimotec.title}
    icon={FileText} // Icône Document/Devis
    description={t.portfolio.projects.dimotec.desc}
    badge={t.portfolio.projects.dimotec.badge}
    tags={t.portfolio.projects.dimotec.tags}
    slug="dimotec"
  />

  {/* Naturel & Joli - Site Vitrine & Booking */}
  <ProjectCard
    className="md:col-span-2"
    title={t.portfolio.projects.natureletjoli.title}
    icon={Zap} // Icône Performance/SEO
    description={t.portfolio.projects.natureletjoli.desc}
    badge={t.portfolio.projects.natureletjoli.badge}
    tags={t.portfolio.projects.natureletjoli.tags}
    slug="natureletjoli"
  />
</div>


      </div>
    </section>
  )
}