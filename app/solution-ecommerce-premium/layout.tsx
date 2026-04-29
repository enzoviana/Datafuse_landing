import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solution E-commerce Premium | Performance & Conversion Optimisée',
  description: 'Boutique en ligne ultra-rapide avec taux de conversion optimisé. Stripe, PayPal, gestion stock, analytics. Score 98/100 mobile, +45% conversion.',
  keywords: 'solution ecommerce premium, boutique en ligne performante, ecommerce nextjs, site ecommerce rapide',
  openGraph: {
    title: 'Solution E-commerce Premium | DataFuse Studio',
    description: 'Score 98/100 • +45% conversion • Stripe & PayPal',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://datafuse.fr/solution-ecommerce-premium',
    siteName: 'DataFuse Studio'
  },
  alternates: {
    canonical: 'https://datafuse.fr/solution-ecommerce-premium'
  }
}

export default function SolutionEcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
