'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Terminal, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/contexts/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

interface NavbarProps {
  onOpenForm?: () => void
}

export default function Navbar({ onOpenForm }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.navbar.expertise, href: '#services' },
    { name: t.navbar.builds, href: '#portfolio' },
    { name: t.navbar.projects, href: '/projets' },
    { name: 'IA Studio', href: '/ia' },
    { name: t.navbar.process, href: '#process' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'py-3 md:py-4' : 'py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div 
          className={`flex items-center justify-between px-4 md:px-6 py-2 md:py-2.5 rounded-2xl md:rounded-full transition-all duration-500 border ${
            scrolled 
              ? 'bg-black/40 backdrop-blur-2xl border-white/10 shadow-2xl' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Section Gauche : Logo & Nav Desktop */}
          <div className="flex items-center gap-4 lg:gap-10">
            <a href="#" className="flex items-center gap-2 md:gap-3 group relative shrink-0">
              <div className="relative size-8 md:size-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-[360deg]">
                <Terminal size={18} className="text-black relative z-10 md:w-5 md:h-5" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.3em] text-white uppercase">
                  Datafuse
                </span>
                <span className="text-[8px] md:text-[10px] font-mono text-blue-500 tracking-tighter uppercase opacity-80">
                  Engineering_Studio
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 hover:text-white transition-all group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Section Droite : Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center gap-6 border-r border-white/10 pr-6">
              <LanguageSelector />
            </div>

            {/* CTA Bouton - Adaptatif Mobile */}
            <button
              onClick={onOpenForm}
              className="relative px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl bg-white text-black text-[9px] md:text-[10px] font-black tracking-[0.1em] md:tracking-[0.2em] uppercase overflow-hidden transition-all hover:scale-[1.02] active:scale-95 group shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-all" />
              <span className="relative z-10 flex items-center gap-2">
                <span className="hidden xs:inline">{t.navbar.cta}</span>
                <span className="xs:hidden">DEVIS</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform md:w-3.5 md:h-3.5" />
              </span>
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-1.5 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[98] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#050505] border-l border-white/10 z-[99] lg:hidden p-6 md:p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-[10px] font-black tracking-[0.3em] text-white opacity-50 uppercase">System.Menu</span>
                <button onClick={() => setIsOpen(false)} className="text-white p-2 hover:bg-white/5 rounded-full">
                  <X size={24}/>
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-white hover:text-blue-500 transition-colors flex items-center justify-between py-2 group"
                  >
                    {link.name}
                    <ArrowRight size={20} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex justify-center">
                   <LanguageSelector />
                </div>
                <button 
                  onClick={() => { setIsOpen(false); onOpenForm?.(); }}
                  className="w-full py-4 rounded-xl bg-blue-600 text-white font-black tracking-widest uppercase text-[10px]"
                >
                  {t.navbar.cta}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}