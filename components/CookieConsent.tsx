'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings, Check } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const { t, language } = useTranslation()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Toujours activés
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Afficher la bannière après 1 seconde
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      // Appliquer les préférences
      applyPreferences(savedPreferences)
    }
  }, [])

  const applyPreferences = (prefs: CookiePreferences) => {
    // Ici vous pouvez activer/désactiver Google Analytics, Facebook Pixel, etc.
    if (prefs.analytics) {
      // Activer Google Analytics
      console.log('Analytics activés')
    } else {
      // Désactiver Google Analytics
      console.log('Analytics désactivés')
    }

    if (prefs.marketing) {
      // Activer les cookies marketing
      console.log('Marketing activé')
    } else {
      // Désactiver les cookies marketing
      console.log('Marketing désactivé')
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    applyPreferences(allAccepted)
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(necessaryOnly)
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly))
    applyPreferences(necessaryOnly)
    setShowBanner(false)
    setShowSettings(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    applyPreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const cookieTexts = {
    fr: {
      title: 'Nous utilisons des cookies',
      description: 'Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Vous pouvez choisir vos préférences ci-dessous.',
      acceptAll: 'Tout accepter',
      acceptNecessary: 'Nécessaires uniquement',
      customize: 'Personnaliser',
      save: 'Enregistrer',
      necessary: 'Nécessaires',
      necessaryDesc: 'Ces cookies sont essentiels au fonctionnement du site.',
      analytics: 'Analytiques',
      analyticsDesc: 'Ces cookies nous aident à comprendre comment vous utilisez notre site.',
      marketing: 'Marketing',
      marketingDesc: 'Ces cookies sont utilisés pour vous montrer des publicités pertinentes.',
      learnMore: 'En savoir plus',
      cookiePolicy: 'Politique de cookies',
    },
    en: {
      title: 'We use cookies',
      description: 'We use cookies to improve your experience, analyze traffic and personalize content. You can choose your preferences below.',
      acceptAll: 'Accept all',
      acceptNecessary: 'Necessary only',
      customize: 'Customize',
      save: 'Save',
      necessary: 'Necessary',
      necessaryDesc: 'These cookies are essential for the site to function.',
      analytics: 'Analytics',
      analyticsDesc: 'These cookies help us understand how you use our site.',
      marketing: 'Marketing',
      marketingDesc: 'These cookies are used to show you relevant ads.',
      learnMore: 'Learn more',
      cookiePolicy: 'Cookie policy',
    },
    pt: {
      title: 'Usamos cookies',
      description: 'Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo. Você pode escolher suas preferências abaixo.',
      acceptAll: 'Aceitar tudo',
      acceptNecessary: 'Apenas necessários',
      customize: 'Personalizar',
      save: 'Salvar',
      necessary: 'Necessários',
      necessaryDesc: 'Esses cookies são essenciais para o funcionamento do site.',
      analytics: 'Análise',
      analyticsDesc: 'Esses cookies nos ajudam a entender como você usa nosso site.',
      marketing: 'Marketing',
      marketingDesc: 'Esses cookies são usados para mostrar anúncios relevantes.',
      learnMore: 'Saiba mais',
      cookiePolicy: 'Política de cookies',
    },
  }

  const texts = cookieTexts[language]

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[95%] max-w-2xl"
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="size-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Cookie size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{texts.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {texts.description}{' '}
                    <a href="/politique-cookies" className="text-blue-400 hover:underline">
                      {texts.learnMore}
                    </a>
                  </p>
                </div>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-6 space-y-4 overflow-hidden"
                  >
                    {/* Nécessaires */}
                    <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-white text-sm">{texts.necessary}</h4>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/20">
                            {language === 'fr' ? 'Requis' : language === 'en' ? 'Required' : 'Obrigatório'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{texts.necessaryDesc}</p>
                      </div>
                      <div className="size-5 rounded bg-blue-600 flex items-center justify-center shrink-0 ml-4">
                        <Check size={14} className="text-white" />
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm mb-1">{texts.analytics}</h4>
                        <p className="text-xs text-gray-500">{texts.analyticsDesc}</p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className={`size-5 rounded border shrink-0 ml-4 transition-colors ${
                          preferences.analytics
                            ? 'bg-blue-600 border-blue-600'
                            : 'bg-white/5 border-white/20'
                        }`}
                      >
                        {preferences.analytics && <Check size={14} className="text-white" />}
                      </button>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm mb-1">{texts.marketing}</h4>
                        <p className="text-xs text-gray-500">{texts.marketingDesc}</p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className={`size-5 rounded border shrink-0 ml-4 transition-colors ${
                          preferences.marketing
                            ? 'bg-blue-600 border-blue-600'
                            : 'bg-white/5 border-white/20'
                        }`}
                      >
                        {preferences.marketing && <Check size={14} className="text-white" />}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {!showSettings ? (
                  <>
                    <button
                      onClick={acceptNecessaryOnly}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all text-sm"
                    >
                      {texts.acceptNecessary}
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-2"
                    >
                      <Settings size={16} />
                      {texts.customize}
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all text-sm flex-1"
                    >
                      {texts.acceptAll}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all text-sm"
                    >
                      {language === 'fr' ? 'Retour' : language === 'en' ? 'Back' : 'Voltar'}
                    </button>
                    <button
                      onClick={savePreferences}
                      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all text-sm flex-1"
                    >
                      {texts.save}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
