'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Smartphone, Globe, Layout, Zap, Code2, ArrowUpRight, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'
import Link from 'next/link'

const ProjectCard = ({ className, title, description, badge, tags, image, icon: Icon }: { 
  className?: string; 
  title: string;
  description: string;
  badge?: string;
  tags: string[];
  image?: string;
  icon: any;
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
    <div
      ref={itemRef}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#080808] p-8 transition-all hover:border-blue-500/30 ${className}`}
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

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">

          {/* Projet Principal - SaaS */}
          <ProjectCard
            className="md:col-span-2"
            title={t.portfolio.projects.nexus.title}
            icon={Layout}
            description={t.portfolio.projects.nexus.desc}
            badge={t.portfolio.projects.nexus.badge}
            tags={t.portfolio.projects.nexus.tags}
          />

          {/* Projet Mobile */}
          <ProjectCard
            title={t.portfolio.projects.luxe.title}
            icon={Smartphone}
            description={t.portfolio.projects.luxe.desc}
            badge={t.portfolio.projects.luxe.badge}
            tags={t.portfolio.projects.luxe.tags}
          />

          {/* Projet Fintech */}
          <ProjectCard
            title={t.portfolio.projects.vault.title}
            icon={Code2}
            description={t.portfolio.projects.vault.desc}
            badge={t.portfolio.projects.vault.badge}
            tags={t.portfolio.projects.vault.tags}
          />

          {/* Projet Dashboard */}
          <ProjectCard
            className="md:col-span-2"
            title={t.portfolio.projects.etheria.title}
            icon={Zap}
            description={t.portfolio.projects.etheria.desc}
            badge={t.portfolio.projects.etheria.badge}
            tags={t.portfolio.projects.etheria.tags}
          />
        </div>

        {/* CTA to view all projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projets">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-2xl hover:shadow-blue-500/20 transition-all inline-flex items-center gap-3">
              Voir tous nos projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}