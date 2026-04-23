'use client'

import { useState, lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'

// Composants critiques chargés immédiatement
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import PremiumHero from '@/components/premium/PremiumHero'
import PremiumChatbot from '@/components/premium/PremiumChatbot'

// Lazy loading des composants non critiques pour améliorer les performances mobile
const PremiumStats = dynamic(() => import('@/components/premium/PremiumStats'), {
  loading: () => <div className="h-32" />,
})
const PremiumFeatures = dynamic(() => import('@/components/premium/PremiumFeatures'), {
  loading: () => <div className="h-96" />,
})
const PremiumBentoGrid = dynamic(() => import('@/components/premium/PremiumBentoGrid'), {
  loading: () => <div className="h-96" />,
})
const PremiumTimeline = dynamic(() => import('@/components/premium/PremiumTimeline'), {
  loading: () => <div className="h-96" />,
})
const PremiumTeam = dynamic(() => import('@/components/premium/PremiumTeam'), {
  loading: () => <div className="h-96" />,
})
const PremiumTestimonials = dynamic(() => import('@/components/premium/PremiumTestimonials'), {
  loading: () => <div className="h-96" />,
})
const PremiumGuarantees = dynamic(() => import('@/components/premium/PremiumGuarantees'), {
  loading: () => <div className="h-96" />,
})
const PremiumPricing = dynamic(() => import('@/components/premium/PremiumPricing'), {
  loading: () => <div className="h-96" />,
})
const PremiumFAQ = dynamic(() => import('@/components/premium/PremiumFAQ'), {
  loading: () => <div className="h-64" />,
})
const PremiumAppointmentBooking = dynamic(() => import('@/components/premium/PremiumAppointmentBooking'), {
  loading: () => <div className="h-96" />,
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64" />,
})
const PremiumMultiStepForm = dynamic(() => import('@/components/premium/PremiumMultiStepForm'), {
  ssr: false,
})

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const showFormTrigger = true // Condition boolean pour afficher le formulaire

  return (
    <main className="min-h-screen bg-white">
      <PremiumChatbot />
      {showFormTrigger && (
        <PremiumMultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
      <PremiumNavbar onOpenForm={() => setIsFormOpen(true)} />
      <PremiumHero />
      <PremiumStats />
      <PremiumFeatures />
      <PremiumBentoGrid />
      <PremiumTimeline />
      <PremiumTeam />
      <PremiumTestimonials />
      <PremiumGuarantees />
      <PremiumPricing />
      <PremiumFAQ />
      <PremiumAppointmentBooking />
      <Contact />

      <Footer />
    </main>
  )
}
