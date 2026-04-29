import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieConsent from '@/components/CookieConsent'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agence Développement SaaS & Web Premium | DataFuse Studio',
  description: 'Agence spécialisée développement SaaS, applications web & mobile haut de gamme. MVP en 14j, solutions sur-mesure pour startups & PME. Expertise Next.js, React, IA.',
  keywords: 'agence développement saas, création application web, développement mvp, agence web premium, développement saas france, application mobile sur mesure',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'DataFuse Studio - Agence SaaS & Applications Web Premium',
    description: 'MVP en 14 jours • Solutions SaaS sur-mesure • Apps haute performance',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://datafuse.fr',
    siteName: 'DataFuse Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataFuse Studio - Agence SaaS & Web Premium',
    description: 'MVP en 14 jours • Solutions SaaS sur-mesure • Apps haute performance',
  },
  alternates: {
    canonical: 'https://datafuse.fr'
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DataFuse Studio",
  "alternateName": "DataFuse",
  "url": "https://datafuse.fr",
  "logo": "https://datafuse.fr/logo.png",
  "description": "Agence de développement SaaS, applications web et mobile premium. Expertise Next.js, React, IA.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "contact@datafuse.fr",
    "availableLanguage": ["French", "English", "Portuguese"]
  },
  "areaServed": ["FR", "EU"],
  "serviceType": [
    "Développement SaaS",
    "Développement Web",
    "Développement Mobile",
    "Intégration IA"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <LanguageProvider>
            {children}
            <CookieConsent />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}
