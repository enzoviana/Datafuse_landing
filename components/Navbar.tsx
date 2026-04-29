'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Terminal, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Expertise', href: '#services' },
    { name: 'Builds', href: '#portfolio' },
    { name: 'Process', href: '#process' },
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
<div className="size-9 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
  <img
    src="/logo.svg"
    alt="Datafuse logo"
    className="w-5 h-5 object-contain"
  />
</div>

        {/* Right: CTAs */}
        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:block text-[11px] font-mono tracking-widest uppercase text-gray-400 hover:text-blue-400 transition-colors">
            Login_
          </a>
          
          <button className="group relative px-6 py-2.5 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-widest uppercase overflow-hidden transition-all hover:pr-8">
            <span className="relative z-10 flex items-center gap-2">
              Get in touch
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}