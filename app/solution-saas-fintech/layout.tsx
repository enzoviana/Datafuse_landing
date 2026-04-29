import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solution SaaS FinTech Sur-Mesure | Agence Spécialisée',
  description: 'Développez votre plateforme FinTech sécurisée avec une agence experte. RGPD, PCI-DSS, KYC/AML. Architecture banking-grade, conformité réglementaire intégrée.',
  keywords: 'solution saas fintech, développement fintech, plateforme paiement, néobanque, banking app',
  openGraph: {
    title: 'Solution SaaS FinTech Sur-Mesure | DataFuse Studio',
    description: 'PCI-DSS • RGPD • KYC/AML • Banking-grade security',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://datafuse.fr/solution-saas-fintech',
    siteName: 'DataFuse Studio'
  },
  alternates: {
    canonical: 'https://datafuse.fr/solution-saas-fintech'
  }
}

export default function SolutionFinTechLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
