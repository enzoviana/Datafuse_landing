import { Metadata } from 'next'
import { getBlogPostBySlug } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Article non trouvé | DataFuse Studio',
    }
  }

  return {
    title: `${post.title} | Blog DataFuse`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      locale: 'fr_FR',
      url: `https://datafuse.fr/actualites/${post.slug}`,
      siteName: 'DataFuse Studio',
      images: post.image ? [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title
      }] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : []
    },
    alternates: {
      canonical: `https://datafuse.fr/actualites/${post.slug}`
    }
  }
}

const articleSchema = (post: any) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.image,
  "datePublished": post.date,
  "dateModified": post.date,
  "author": {
    "@type": "Person",
    "name": post.author.name,
    "jobTitle": post.author.role
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
    "@id": `https://datafuse.fr/actualites/${post.slug}`
  },
  "keywords": post.tags.join(', '),
  "articleSection": post.category,
  "timeRequired": `PT${post.readTime.replace(/[^\d]/g, '')}M`
})

const breadcrumbSchema = (post: any) => ({
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
      "name": "Actualités",
      "item": "https://datafuse.fr/actualites"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": post.title,
      "item": `https://datafuse.fr/actualites/${post.slug}`
    }
  ]
})

export default function BlogPostLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(post)) }}
      />
      {children}
    </>
  )
}
