import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparatif Frameworks JavaScript 2026 | Next.js vs React vs Vue',
  description: 'Comparatif complet frameworks JavaScript : Next.js, React, Vue, Angular, Svelte. Performance, SEO, écosystème. Quel framework choisir en 2026 ?',
  keywords: 'comparatif frameworks javascript, nextjs vs react, nextjs vs vue, meilleur framework javascript 2026, choisir framework web',
  openGraph: {
    title: 'Comparatif Frameworks JavaScript 2026 | DataFuse Studio',
    description: 'Next.js vs React vs Vue vs Angular vs Svelte • Performance • SEO • Écosystème',
    type: 'article',
    locale: 'fr_FR',
    url: 'https://datafuse.fr/comparatif-frameworks-javascript',
    siteName: 'DataFuse Studio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparatif Frameworks JavaScript 2026',
    description: 'Next.js vs React vs Vue vs Angular vs Svelte',
  },
  alternates: {
    canonical: 'https://datafuse.fr/comparatif-frameworks-javascript'
  }
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Comparatif Frameworks JavaScript 2026 : Next.js, React, Vue, Angular, Svelte",
  "description": "Analyse comparative complète des frameworks JavaScript modernes basée sur 500+ projets livrés.",
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
    "@id": "https://datafuse.fr/comparatif-frameworks-javascript"
  },
  "keywords": "comparatif frameworks javascript, nextjs, react, vue, angular, svelte"
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
      "name": "Comparatif Frameworks JavaScript",
      "item": "https://datafuse.fr/comparatif-frameworks-javascript"
    }
  ]
}

export default function ComparatifFrameworksLayout({
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
