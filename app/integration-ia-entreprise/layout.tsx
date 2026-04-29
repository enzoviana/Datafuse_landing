import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intégration IA Entreprise | RAG, LLM Privé, Automatisation',
  description: 'Intégrez l\'IA dans vos processus métier : RAG sur vos données, LLM privés souverains, automatisation intelligente. Infrastructure France/EU.',
  keywords: 'intégration ia entreprise, rag entreprise, llm privé, chatbot ia sur mesure, infrastructure ia souveraine',
  openGraph: {
    title: 'Intégration IA Entreprise | DataFuse Studio',
    description: 'RAG • LLM privés • Data souveraine • Automatisation IA',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://datafuse.fr/integration-ia-entreprise',
    siteName: 'DataFuse Studio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intégration IA Entreprise | DataFuse Studio',
    description: 'RAG • LLM privés • Data souveraine • Automatisation IA',
  },
  alternates: {
    canonical: 'https://datafuse.fr/integration-ia-entreprise'
  }
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Intégration Intelligence Artificielle Entreprise",
  "provider": {
    "@type": "Organization",
    "name": "DataFuse Studio",
    "url": "https://datafuse.fr"
  },
  "description": "Intégration de solutions d'intelligence artificielle en entreprise : RAG sur données propriétaires, LLM privés souverains, chatbots personnalisés, automatisation intelligente.",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "8000",
      "priceCurrency": "EUR"
    }
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Entreprises, PME, Grands Comptes"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Mes données sont-elles utilisées pour entraîner des modèles publics ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NON. Jamais. Nous utilisons soit des modèles open-source hébergés chez vous, soit des APIs avec contrats stricts de non-réutilisation des données (Azure OpenAI, Mistral EU). Vos données restent 100% privées."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre ChatGPT et une solution sur-mesure ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChatGPT est généraliste et ne connaît pas vos données internes. Notre solution est entraînée spécifiquement sur votre documentation, process, produits. Elle donne des réponses contextuelles et précises à vos utilisateurs/employés."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte l'hébergement d'un LLM privé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dépend du volume. Pour un chatbot d'entreprise (100-500 employés), comptez 500-1500€/mois d'infra cloud. Pour des volumes élevés (millions requêtes), nous optimisons avec des modèles plus petits et efficaces."
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
      "name": "Intégration IA Entreprise",
      "item": "https://datafuse.fr/integration-ia-entreprise"
    }
  ]
}

export default function IntegrationIALayout({
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
