import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Création MVP Startup en 14 Jours | MVP Express 5-8k€',
  description: 'Lancez votre startup avec un MVP fonctionnel en 14 jours garantis. Design premium, code production-ready, déploiement inclus. Forfait 5-8k€.',
  keywords: 'création mvp startup, mvp 14 jours, développement mvp rapide, mvp express, mvp startup prix',
  openGraph: {
    title: 'Création MVP Startup en 14 Jours | DataFuse Studio',
    description: 'MVP fonctionnel en 14j garantis • 5-8k€ • Design + Code + Déploiement',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://datafuse.fr/creation-mvp-startup',
    siteName: 'DataFuse Studio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Création MVP Startup en 14 Jours | DataFuse Studio',
    description: 'MVP fonctionnel en 14j garantis • 5-8k€ • Design + Code + Déploiement',
  },
  alternates: {
    canonical: 'https://datafuse.fr/creation-mvp-startup'
  }
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Création MVP Startup Express",
  "provider": {
    "@type": "Organization",
    "name": "DataFuse Studio",
    "url": "https://datafuse.fr"
  },
  "description": "Création d'un MVP fonctionnel en 14 jours garantis avec design premium, développement full-stack et déploiement production.",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "5000",
      "maxPrice": "8000",
      "priceCurrency": "EUR"
    }
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Startups, Entrepreneurs, Fondateurs"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Délai de livraison",
      "value": "14 jours"
    },
    {
      "@type": "PropertyValue",
      "name": "Support inclus",
      "value": "3 mois"
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "14 jours, c'est vraiment réaliste ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, avec méthodologie et cadrage précis. Notre formule MVP Express inclut : 1 journée de kick-off pour définir le scope exact, 10 jours de développement intensif (équipe dédiée), 2 jours de tests et déploiement, 1 jour de formation et handover."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence avec un développement SaaS complet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le MVP Express se concentre sur les fonctionnalités CORE uniquement. C'est un produit fonctionnel mais simplifié, parfait pour tester le marché. Si votre MVP performe, nous pouvons ensuite itérer vers une solution SaaS complète."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je ajouter des fonctionnalités après ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument ! Le code est production-ready et évolutif. Après livraison, vous pouvez soit continuer avec nous (forfait évolution), soit prendre en main en interne (nous documentons tout)."
      }
    }
  ]
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
      "name": "Création MVP Startup",
      "item": "https://datafuse.fr/creation-mvp-startup"
    }
  ]
}

export default function CreationMVPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
