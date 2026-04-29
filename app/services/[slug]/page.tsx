import { Metadata } from 'next'
import ServicePageClient from './ServicePageClient'
import { servicesData } from '@/lib/services-data'

// SEO Metadata (Server Component)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug
  const service = servicesData[slug as keyof typeof servicesData]

  const metaData = {
    'site-web-entreprise': {
      title: 'Développement Site Web Entreprise | À partir de 2.5k€ | DataFuse Studio',
      description: 'Site vitrine professionnel haute performance. Design unique, SEO optimisé, livraison en 2-4 semaines. Créez votre présence en ligne avec DataFuse Studio.',
      keywords: 'développement site web, création site internet, site vitrine professionnel, agence web, Next.js',
    },
    'mvp-express': {
      title: 'MVP Express en 14 jours | 5k€ | Validation Startup | DataFuse Studio',
      description: 'Lancez votre MVP SaaS en 14 jours garantis. Application fonctionnelle avec paiements Stripe, dashboard admin. À partir de 5k€.',
      keywords: 'MVP, startup MVP, SaaS development, développement rapide, application SaaS',
    },
    'applications-mobile-metier': {
      title: 'Application Mobile iOS & Android | À partir de 8k€ | DataFuse Studio',
      description: 'Développement d\'applications mobiles natives iOS et Android. React Native, API REST sécurisée, synchronisation temps réel.',
      keywords: 'développement application mobile, React Native, app iOS Android, application métier',
    },
  }

  const meta = metaData[slug as keyof typeof metaData] || metaData['site-web-entreprise']

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  }
}

// Server Component qui rend le Client Component
export default function ServicePage() {
  return <ServicePageClient />
}
