'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Terminal, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/contexts/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.navbar.expertise, href: '#services' },
    { name: t.navbar.builds, href: '#portfolio' },
    { name: t.navbar.projects, href: '/projets' },
    { name: 'IA', href: '/ia' },
    { name: t.navbar.process, href: '#process' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#030303]/80 backdrop-blur-xl border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="size-9 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <Terminal size={18} />
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">
              Datafuse<span className="text-blue-500">.</span>
            </span>
          </a>

          {/* Desktop Nav - Intégrée à gauche pour un look pro */}
          <nav className="hidden md:flex items-center gap-1 border-l border-white/10 ml-4 pl-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[11px] font-mono tracking-widest uppercase text-gray-500 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: CTAs */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block text-[11px] font-mono tracking-widest uppercase text-gray-400 hover:text-blue-400 transition-colors">
            {t.navbar.login}
          </a>

          {/* Language Selector */}
          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          <button className="group relative px-6 py-2.5 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-widest uppercase overflow-hidden transition-all hover:pr-8">
            <span className="relative z-10 flex items-center gap-2">
              {t.navbar.cta}
              <ArrowRight size={14} className="absolute -right-4 opacity-0 group-hover:right-0 group-hover:opacity-100 transition-all" />
            </span>
          </button>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[73px] bg-[#030303] z-[99] md:hidden flex flex-col p-8"
          >
            <div className="space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-bold text-white border-b border-white/5 pb-4"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Language Selector Mobile */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-8"
              >
                <LanguageSelector />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}