'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUp, Zap, Globe } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Blue line glow top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-white fill-current" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter uppercase">
                Datafuse<span className="text-gray-500 italic">Studio</span>
              </span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
              {t.footer.description}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="size-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all group"
                >
                  <social.icon size={18} />
                </a>
              ))}
              <a
                href="mailto:contact@datafuse.fr"
                className="h-10 px-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              >
                <Mail size={14} />
                contact@datafuse.fr
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(t.footer.sections).map(([sectionKey, section]) => (
              <div key={sectionKey} className="space-y-6">
                <h4 className="text-[10px] font-mono text-white uppercase tracking-[0.2em] opacity-50">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link: { name: string; href: string }) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1 group"
                      >
                        <span className="size-1 bg-gray-800 rounded-full group-hover:bg-blue-500 transition-colors" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              {t.footer.copyright}
            </span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600">
              <Globe size={12} />
              <span>{t.footer.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 text-[10px] font-mono text-gray-400 hover:text-white transition-all group"
            >
              {t.footer.scrollTop}
              <div className="size-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}