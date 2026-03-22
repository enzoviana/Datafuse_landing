'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

type Language = 'fr' | 'en' | 'pt'
type Translations = typeof fr

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translations> = {
  fr,
  en,
  pt,
}

// Fonction pour détecter la langue du navigateur/région
const detectLanguage = (): Language => {
  if (typeof window === 'undefined') return 'fr' // Par défaut côté serveur

  // Récupérer la langue du localStorage si elle existe
  const savedLanguage = localStorage.getItem('language') as Language
  if (savedLanguage && ['fr', 'en', 'pt'].includes(savedLanguage)) {
    return savedLanguage
  }

  // Détecter la langue du navigateur
  const browserLang = navigator.language.toLowerCase()

  // Portugais
  if (browserLang.startsWith('pt')) {
    return 'pt'
  }

  // Anglais
  if (browserLang.startsWith('en')) {
    return 'en'
  }

  // Français par défaut (pour le SEO)
  return 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const detectedLang = detectLanguage()
    setLanguageState(detectedLang)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      // Mettre à jour l'attribut lang du HTML pour le SEO
      document.documentElement.lang = lang
    }
  }

  // Utiliser le français par défaut pendant le chargement initial (pour le SEO)
  const currentTranslations = mounted ? translations[language] : translations.fr

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
