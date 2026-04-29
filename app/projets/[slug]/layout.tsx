import { Metadata } from 'next'
import { getProjectBySlug } from '@/lib/projects-data'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Projet non trouvé | DataFuse Studio',
    }
  }

  return {
    title: `${project.title} - Étude de cas ${project.category} | DataFuse`,
    description: `Découvrez comment nous avons développé ${project.title}${project.client ? ` pour ${project.client}` : ''}. ${project.shortDescription}`,
    keywords: `${project.category}, ${project.tags.join(', ')}, étude de cas développement, portfolio agence web`,
    openGraph: {
      title: `${project.title} - Étude de cas | DataFuse Studio`,
      description: project.shortDescription,
      type: 'article',
      locale: 'fr_FR',
      url: `https://datafuse.fr/projets/${project.slug}`,
      siteName: 'DataFuse Studio',
      images: project.image ? [{
        url: project.image,
        width: 1200,
        height: 630,
        alt: project.title
      }] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Étude de cas`,
      description: project.shortDescription,
      images: project.image ? [project.image] : []
    },
    alternates: {
      canonical: `https://datafuse.fr/projets/${project.slug}`
    }
  }
}

const caseStudySchema = (project: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": project.title,
  "description": project.fullDescription,
  "image": project.image,
  "datePublished": `${project.year}-01-01`,
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
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://datafuse.fr/projets/${project.slug}`
  },
  "keywords": project.tags.join(', '),
  "articleSection": project.category
})

const breadcrumbSchema = (project: any) => ({
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
      "name": "Réalisations",
      "item": "https://datafuse.fr/projets"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": project.title,
      "item": `https://datafuse.fr/projets/${project.slug}`
    }
  ]
})

export default function ProjectLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema(project)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(project)) }}
      />
      {children}
    </>
  )
}
