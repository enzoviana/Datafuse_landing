import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développement SaaS Sur-Mesure | Agence Experte France',
  description: 'Créez votre plateforme SaaS avec une agence experte. Architecture scalable, sécurité B2B, intégrations API. Devis en 48h. Stack moderne Next.js/React.',
  keywords: 'développement saas sur mesure, création plateforme saas, agence saas france, développement logiciel saas',
  openGraph: {
    title: 'Développement SaaS Sur-Mesure | DataFuse Studio',
    description: 'Architecture scalable • Multi-tenant • Sécurité entreprise',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://datafuse.fr/developpement-saas-sur-mesure',
    siteName: 'DataFuse Studio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développement SaaS Sur-Mesure | DataFuse Studio',
    description: 'Architecture scalable • Multi-tenant • Sécurité entreprise',
  },
  alternates: {
    canonical: 'https://datafuse.fr/developpement-saas-sur-mesure'
  }
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Développement SaaS Sur-Mesure",
  "provider": {
    "@type": "Organization",
    "name": "DataFuse Studio",
    "url": "https://datafuse.fr"
  },
  "description": "Développement de plateformes SaaS sur-mesure avec architecture scalable, sécurité entreprise et stack moderne.",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "15000",
      "priceCurrency": "EUR"
    }
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Startups, PME, Entreprises"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le délai moyen pour développer un SaaS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le délai dépend de la complexité, mais en moyenne, un SaaS prend 8-12 semaines de développement. Pour un MVP minimal, nous proposons notre formule Express en 14 jours."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle stack technique choisir pour mon SaaS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous recommandons Next.js 15 avec React pour le frontend, PostgreSQL pour la base de données, et Prisma comme ORM. Cette stack offre performance, scalabilité et excellente DX."
      }
    },
    {
      "@type": "Question",
      "name": "Comment assurer la scalabilité de mon SaaS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Architecture multi-tenant, auto-scaling cloud, CDN global, caching stratégique et database sharding pour les gros volumes."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je commencer par un MVP ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument ! Notre formule MVP Express (14 jours, 5-8k€) permet de tester le marché rapidement avant d'investir dans la solution complète."
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
      "name": "Développement SaaS Sur-Mesure",
      "item": "https://datafuse.fr/developpement-saas-sur-mesure"
    }
  ]
}

export default function DeveloppementSaaSLayout({
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
