'use client'

import { useState } from 'react'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import PremiumHero from '@/components/premium/PremiumHero'
import PremiumStats from '@/components/premium/PremiumStats'
import PremiumFeatures from '@/components/premium/PremiumFeatures'
import PremiumBentoGrid from '@/components/premium/PremiumBentoGrid'
import PremiumTimeline from '@/components/premium/PremiumTimeline'
import PremiumTeam from '@/components/premium/PremiumTeam'
import PremiumLogoCloud from '@/components/premium/PremiumLogoCloud'
import PremiumTestimonials from '@/components/premium/PremiumTestimonials'
import PremiumGuarantees from '@/components/premium/PremiumGuarantees'
import PremiumPricing from '@/components/premium/PremiumPricing'
import PremiumFAQ from '@/components/premium/PremiumFAQ'
import PremiumChatbot from '@/components/premium/PremiumChatbot'
import PremiumAppointmentBooking from '@/components/premium/PremiumAppointmentBooking'
import PremiumMultiStepForm from '@/components/premium/PremiumMultiStepForm'
import PremiumMap from '@/components/premium/PremiumMap'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
