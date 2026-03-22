import PremiumNavbar from '@/components/premium/PremiumNavbar'
import PremiumHero from '@/components/premium/PremiumHero'
import PremiumFeatures from '@/components/premium/PremiumFeatures'
import PremiumBentoGrid from '@/components/premium/PremiumBentoGrid'
import PremiumTimeline from '@/components/premium/PremiumTimeline'
import PremiumLogoCloud from '@/components/premium/PremiumLogoCloud'
import PremiumPricing from '@/components/premium/PremiumPricing'
import PremiumTestimonials from '@/components/premium/PremiumTestimonials'
import PremiumFAQ from '@/components/premium/PremiumFAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PremiumNavbar />
      <PremiumHero />
      <PremiumFeatures />
      <PremiumBentoGrid />
      <PremiumTimeline />
      <PremiumLogoCloud />
      <PremiumPricing />
      <PremiumTestimonials />
      <PremiumFAQ />
      <Contact />
      <Footer />
    </main>
  )
}
