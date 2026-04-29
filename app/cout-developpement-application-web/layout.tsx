import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coût Développement Application Web 2026 | Grille Tarifaire',
  description: 'Guide complet des prix développement web : site vitrine (2-5k€), app métier (8-25k€), SaaS (15k€+). Facteurs de coût, délais, ROI attendu.',
  keywords: 'coût développement application web, prix création application, tarif développement web, budget application sur mesure',
  openGraph: {
    title: 'Coût Développement Application Web 2026 | DataFuse Studio',
    description: 'Grille tarifaire complète • Facteurs de coût • ROI attendu',
    type: 'article',
    locale: 'fr_FR',
    url: 'https://datafuse.fr/cout-developpement-application-web',
    siteName: 'DataFuse Studio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coût Développement Application Web 2026',
    description: 'Grille tarifaire complète • Facteurs de coût • ROI attendu',
  },
  alternates: {
    canonical: 'https://datafuse.fr/cout-developpement-application-web'
  }
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Coût Développement Application Web en 2026 : Guide Complet",
  "description": "Guide complet des prix de développement d'applications web en 2026, avec grille tarifaire détaillée, facteurs de coût et conseils d'optimisation budget.",
  "author": {
    "@type": "Organization",
    "name": "DataFuse Studio"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DataFuse Studio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://datafuse.fr/logo.png"
    }
  },
  "datePublished": "2026-01-01",
  "dateModified": "2026-04-29",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://datafuse.fr/cout-developpement-application-web"
  },
  "keywords": "coût développement web, prix application web, budget développement, tarif agence web"
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://datafuse.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Coût Développement Application Web",
      "item": "https://datafuse.fr/cout-developpement-application-web"
    }
  ]
}

export default function CoutDeveloppementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
