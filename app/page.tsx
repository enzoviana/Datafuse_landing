'use client'

import { useState } from 'react'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import PremiumHero from '@/components/premium/PremiumHero'
import PremiumFeatures from '@/components/premium/PremiumFeatures'
import PremiumBentoGrid from '@/components/premium/PremiumBentoGrid'
import PremiumTimeline from '@/components/premium/PremiumTimeline'
import PremiumLogoCloud from '@/components/premium/PremiumLogoCloud'
import PremiumPricing from '@/components/premium/PremiumPricing'
import PremiumTestimonials from '@/components/premium/PremiumTestimonials'
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
      <PremiumFeatures />
      <PremiumBentoGrid />
      <PremiumTimeline />
       <PremiumMap />
      <PremiumPricing />
      <PremiumTestimonials />
      <PremiumFAQ />
      <PremiumAppointmentBooking />
      <Contact />
      
      <Footer />
    </main>
  )
}
