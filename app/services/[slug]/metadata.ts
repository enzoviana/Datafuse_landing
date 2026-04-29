import { Metadata } from 'next'
import { servicesData } from '@/lib/services-data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    return {
      title: 'Service non trouvé | DataFuse Studio',
    }
  }

  const metaData = {
    'site-web-entreprise': {
      title: 'Développement Site Web Entreprise | À partir de 2.5k€ | DataFuse Studio',
      description: 'Site vitrine professionnel haute performance. Design unique, SEO optimisé, livraison en 2-4 semaines. Créez votre présence en ligne avec DataFuse Studio.',
      keywords: 'développement site web, création site internet, site vitrine professionnel, agence web, Next.js, site web entreprise, design web moderne',
    },
    'mvp-express': {
      title: 'MVP Express en 14 jours | 5k€ | Validation Startup | DataFuse Studio',
      description: 'Lancez votre MVP SaaS en 14 jours garantis. Application fonctionnelle avec paiements Stripe, dashboard admin. Validez votre idée rapidement. À partir de 5k€.',
      keywords: 'MVP, MVP development, startup MVP, SaaS development, développement rapide, livraison 14 jours, application SaaS, Next.js SaaS',
    },
    'applications-mobile-metier': {
      title: 'Application Mobile iOS & Android | À partir de 8k€ | DataFuse Studio',
      description: 'Développement d\'applications mobiles natives iOS et Android. Une seule codebase React Native. API REST sécurisée, synchronisation temps réel. Livraison 6-12 semaines.',
      keywords: 'développement application mobile, React Native, app iOS Android, application métier, mobile app development, développement cross-platform',
    },
  }

  const meta = metaData[slug as keyof typeof metaData] || metaData['site-web-entreprise']

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'DataFuse Studio',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `https://datafuse.studio/services/${slug}`,
      languages: {
        'fr-FR': `/services/${slug}`,
        'en-US': `/services/${slug}`,
        'pt-PT': `/services/${slug}`,
      },
    },
  }
}
