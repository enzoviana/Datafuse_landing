'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Terminal, ArrowRight, Languages } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/contexts/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

interface NavbarProps {
  onOpenForm?: () => void
}

export default function Navbar({ onOpenForm }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Extraímos t para traduções, language para o estado atual e setLanguage para mudar a língua
  const { t, language, setLanguage } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.navbar.expertise, href: '#services' },
    { name: t.navbar.builds, href: '#portfolio' },
    { name: 'Actualités', href: '/actualites' },
    { name: t.navbar.process, href: '#process' },
  ]

  // Configuração das línguas para o seletor mobile
  const languages: Array<{ code: 'fr' | 'en' | 'pt'; label: string }> = [
    { code: 'fr', label: 'FR' },
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' }
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
  <img
    src="/LOGO__Datafuse_White.svg"
    alt="Datafuse logo"
    className="w-auto h-14 object-contain"
  />
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

          {/* Section Droite : Actions (PC reste inchangé) */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center gap-6 border-r border-white/10 pr-6">
              <LanguageSelector />
            </div>

            {/* CTA Bouton */}
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
              className="lg:hidden p-1.5 text-white hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Full Screen Otimizado */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[98] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#050505] border-l border-white/10 z-[99] lg:hidden p-6 md:p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-blue-500" />
                  <span className="text-[10px] font-black tracking-[0.3em] text-white opacity-50 uppercase">System.Menu</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white p-2 bg-white/5 rounded-full border border-white/10">
                  <X size={20}/>
                </button>
              </div>

              {/* Nav Links Mobile */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black text-white hover:text-blue-500 transition-colors flex items-center justify-between py-3 border-b border-white/5 group"
                  >
                    <span className="tracking-tighter uppercase">{link.name}</span>
                    <ArrowRight size={20} className="text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>

              {/* Seção Inferior: Seletor de Língua & CTA */}
              <div className="mt-auto space-y-8">
                {/* Seletor de Língua Estilo Segmented Control */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    <Languages size={12} />
                    <span>Select_Language</span>
                  </div>
                  <div className="grid grid-cols-3 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl relative">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`relative py-3 rounded-xl text-[10px] font-black transition-all duration-300 ${
                          language === lang.code ? 'text-black' : 'text-gray-500'
                        }`}
                      >
                        {language === lang.code && (
                          <motion.div 
                            layoutId="activeTabMobile" 
                            className="absolute inset-0 bg-white rounded-lg z-0"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <span className="relative z-10">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Botão de Devis Mobile */}
                <button 
                  onClick={() => { setIsOpen(false); onOpenForm?.(); }}
                  className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black tracking-[0.2em] uppercase text-[11px] shadow-[0_10px_40px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 transition-transform active:scale-95"
                >
                  {t.navbar.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}