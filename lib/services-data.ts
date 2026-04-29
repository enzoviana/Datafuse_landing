// Données des services pour les pages détaillées
export const servicesData = {
  'site-web-entreprise': {
    slug: 'site-web-entreprise',
    category: 'Web Development',
    deliveryTime: '2-4 semaines',
    price: '2.5k€',
    priceRange: '2,500€ - 5,000€',
  },
  'mvp-express': {
    slug: 'mvp-express',
    category: 'SaaS / Startup',
    deliveryTime: '14 jours garantis',
    price: '5k€',
    priceRange: '5,000€ - 8,000€',
  },
  'applications-mobile-metier': {
    slug: 'applications-mobile-metier',
    category: 'Mobile & Enterprise',
    deliveryTime: '6-12 semaines',
    price: '8k€',
    priceRange: '8,000€ - 25,000€',
  },
}

export type ServiceSlug = keyof typeof servicesData
