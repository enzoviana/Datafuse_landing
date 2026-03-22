export interface Project {
  id: string
  slug: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  tags: string[]
  gradient: string
  client?: string
  duration?: string
  year: string
  challenges: string[]
  solutions: string[]
  results: string[]
  testimonial?: {
    text: string
    author: string
    role: string
  }
  images?: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'fintech-saas-platform',
    title: 'FinTech SaaS Platform',
    category: 'SaaS',
    shortDescription: 'Plateforme de gestion financière pour entreprises avec analytics en temps réel',
    fullDescription: 'Une solution SaaS complète permettant aux entreprises de gérer leurs finances avec des analytics en temps réel, des prévisions intelligentes et une intégration bancaire sécurisée. La plateforme traite plus de 10 000 transactions par jour et sert plus de 500 entreprises.',
    image: '🏦',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    gradient: 'from-blue-600 to-cyan-600',
    client: 'FinanceFlow Inc.',
    duration: '6 mois',
    year: '2024',
    challenges: [
      'Traitement de volumes importants de données financières en temps réel',
      'Conformité stricte aux réglementations bancaires européennes (PSD2)',
      'Sécurisation des transactions et protection des données sensibles',
      'Intégration avec multiples systèmes bancaires et APIs tierces'
    ],
    solutions: [
      'Architecture microservices scalable avec Docker et Kubernetes',
      'Mise en place d\'un pipeline de données avec Apache Kafka pour le traitement en temps réel',
      'Implémentation de l\'authentification multi-facteurs et chiffrement end-to-end',
      'Développement d\'adaptateurs bancaires standardisés pour une intégration facilitée'
    ],
    results: [
      'Réduction de 60% du temps de traitement des rapports financiers',
      'Augmentation de 45% de l\'efficacité opérationnelle des clients',
      '99.9% de disponibilité de la plateforme',
      'Conformité totale aux normes PSD2 et RGPD'
    ],
    testimonial: {
      text: 'DataFuse Studio a transformé notre vision en une plateforme robuste qui dépasse nos attentes. Leur expertise technique et leur compréhension des enjeux métiers sont exceptionnelles.',
      author: 'Marie Dubois',
      role: 'CTO, FinanceFlow Inc.'
    }
  },
  {
    id: '2',
    slug: 'e-commerce-premium',
    title: 'E-Commerce Premium',
    category: 'Web App',
    shortDescription: 'Boutique en ligne haut de gamme avec paiements sécurisés et gestion stock',
    fullDescription: 'Plateforme e-commerce premium offrant une expérience d\'achat luxueuse avec gestion intelligente des stocks, paiements sécurisés multi-devises, et personnalisation avancée. La solution gère un catalogue de plus de 5000 produits avec une performance optimale.',
    image: '🛍️',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    gradient: 'from-purple-600 to-pink-600',
    client: 'LuxeMarket',
    duration: '4 mois',
    year: '2024',
    challenges: [
      'Optimisation des performances pour un catalogue de 5000+ produits',
      'Intégration de multiples passerelles de paiement internationales',
      'Gestion en temps réel des stocks multi-entrepôts',
      'Expérience utilisateur premium et intuitive'
    ],
    solutions: [
      'Implémentation d\'une stratégie de cache avancée avec Redis',
      'Intégration unifiée des APIs Stripe, PayPal et paiements locaux',
      'Système de synchronisation en temps réel des stocks avec WebSockets',
      'Design system sur mesure avec animations fluides et interface élégante'
    ],
    results: [
      'Temps de chargement réduit de 70%',
      'Taux de conversion augmenté de 35%',
      'Taux d\'abandon de panier réduit de 25%',
      'Note moyenne de satisfaction client: 4.8/5'
    ],
    testimonial: {
      text: 'La plateforme développée par DataFuse a révolutionné notre business en ligne. Les ventes ont explosé et nos clients adorent l\'expérience d\'achat.',
      author: 'Pierre Laurent',
      role: 'CEO, LuxeMarket'
    }
  },
  {
    id: '3',
    slug: 'health-fitness-app',
    title: 'Health & Fitness App',
    category: 'Mobile',
    shortDescription: 'Application mobile de coaching sportif avec suivi personnalisé',
    fullDescription: 'Application mobile complète de coaching sportif utilisant l\'intelligence artificielle pour créer des programmes d\'entraînement personnalisés. L\'app intègre le suivi des performances, la nutrition, et une communauté active de plus de 10 000 utilisateurs.',
    image: '💪',
    tags: ['React Native', 'Firebase', 'AI/ML'],
    gradient: 'from-orange-600 to-red-600',
    client: 'FitLife Pro',
    duration: '5 mois',
    year: '2023',
    challenges: [
      'Création de programmes d\'entraînement personnalisés via IA',
      'Synchronisation en temps réel des données entre appareils',
      'Intégration avec capteurs et appareils fitness (Apple Health, Google Fit)',
      'Performances optimales malgré des vidéos et contenus multimédias lourds'
    ],
    solutions: [
      'Développement d\'un moteur de recommandation IA avec TensorFlow',
      'Architecture serverless avec Firebase pour la synchronisation temps réel',
      'SDKs natifs pour l\'intégration complète avec écosystèmes health iOS/Android',
      'Compression et streaming optimisés des vidéos avec CDN'
    ],
    results: [
      '10 000+ utilisateurs actifs mensuels en 6 mois',
      'Note de 4.7/5 sur l\'App Store et Google Play',
      '80% de taux de rétention à 30 jours',
      'Featured par Apple dans "Apps We Love"'
    ],
    testimonial: {
      text: 'DataFuse a créé bien plus qu\'une app, ils ont créé une expérience qui motive réellement les gens à atteindre leurs objectifs fitness.',
      author: 'Sophie Martin',
      role: 'Fondatrice, FitLife Pro'
    }
  },
  {
    id: '4',
    slug: 'luxury-real-estate',
    title: 'Luxury Real Estate',
    category: 'Site Vitrine',
    shortDescription: 'Site vitrine premium pour agence immobilière de prestige',
    fullDescription: 'Site vitrine haute performance pour une agence immobilière de luxe. Le site propose des visites virtuelles immersives, un système de recherche avancé, et une présentation élégante de propriétés d\'exception avec plus de 200 biens de prestige.',
    image: '🏰',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    gradient: 'from-green-600 to-emerald-600',
    client: 'Prestige Properties',
    duration: '3 mois',
    year: '2024',
    challenges: [
      'Chargement ultra-rapide malgré des images haute résolution',
      'Visites virtuelles 360° immersives',
      'Référencement naturel optimisé pour un marché concurrentiel',
      'Interface élégante reflétant le standing des propriétés'
    ],
    solutions: [
      'Optimisation d\'images avec Next.js Image et formats modernes (WebP, AVIF)',
      'Intégration de visites 360° avec Matterport et vidéos 4K',
      'SEO technique avancé avec métadonnées structurées et sitemap dynamique',
      'Design minimaliste et animations subtiles avec Framer Motion'
    ],
    results: [
      'Score Lighthouse de 98/100',
      'Augmentation de 150% du trafic organique en 3 mois',
      'Temps moyen sur le site: 8 minutes (contre 2 min auparavant)',
      'Taux de contact qualifié augmenté de 60%'
    ],
    testimonial: {
      text: 'Notre nouveau site est une véritable vitrine digitale qui reflète parfaitement l\'excellence de nos propriétés. Les retours clients sont exceptionnels.',
      author: 'Alexandre Petit',
      role: 'Directeur, Prestige Properties'
    }
  },
  {
    id: '5',
    slug: 'ai-analytics-dashboard',
    title: 'AI Analytics Dashboard',
    category: 'SaaS',
    shortDescription: 'Tableau de bord IA pour analyse prédictive de données business',
    fullDescription: 'Plateforme SaaS d\'analytics avancée utilisant l\'IA pour fournir des insights prédictifs et des recommandations automatisées. La solution traite des millions de points de données et génère des rapports intelligents pour faciliter la prise de décision.',
    image: '📊',
    tags: ['React', 'Python', 'TensorFlow', 'Docker'],
    gradient: 'from-indigo-600 to-blue-600',
    client: 'DataInsights Corp',
    duration: '8 mois',
    year: '2023',
    challenges: [
      'Traitement et visualisation de millions de points de données',
      'Modèles prédictifs précis et fiables',
      'Interface intuitive pour utilisateurs non-techniques',
      'Scalabilité pour supporter la croissance rapide'
    ],
    solutions: [
      'Architecture de data pipeline avec Apache Spark pour le traitement massif',
      'Modèles ML custom avec TensorFlow et scikit-learn pour prédictions',
      'Dashboard interactif avec visualisations D3.js et Chart.js',
      'Infrastructure containerisée avec Docker et orchestration Kubernetes'
    ],
    results: [
      'Traitement de 5M+ points de données par jour',
      'Précision des prédictions: 92%',
      'Réduction de 40% du temps d\'analyse pour les clients',
      '200+ entreprises utilisent la plateforme'
    ],
    testimonial: {
      text: 'La plateforme développée par DataFuse nous a permis de démocratiser l\'analytics avancée. Nos clients peuvent maintenant prendre des décisions basées sur de vraies données prédictives.',
      author: 'Thomas Bernard',
      role: 'VP Product, DataInsights Corp'
    }
  },
  {
    id: '6',
    slug: 'social-network-app',
    title: 'Social Network App',
    category: 'Mobile',
    shortDescription: 'Application sociale avec messagerie temps réel et partage de contenu',
    fullDescription: 'Application sociale mobile nouvelle génération avec messagerie instantanée, partage de contenu multimédia, stories, et fonctionnalités de streaming vidéo en direct. L\'app compte plus de 50 000 utilisateurs actifs avec des pics à 5000 connexions simultanées.',
    image: '💬',
    tags: ['Flutter', 'Firebase', 'WebRTC'],
    gradient: 'from-pink-600 to-rose-600',
    client: 'SocialHub',
    duration: '7 mois',
    year: '2023',
    challenges: [
      'Messagerie en temps réel avec faible latence',
      'Streaming vidéo live pour des milliers d\'utilisateurs simultanés',
      'Modération de contenu à grande échelle',
      'Performance optimale sur devices bas de gamme'
    ],
    solutions: [
      'WebRTC pour communication P2P et streaming optimisé',
      'Architecture serverless Firebase pour scalabilité automatique',
      'Système de modération hybride (IA + humain) avec TensorFlow',
      'Optimisation Flutter avec code splitting et lazy loading'
    ],
    results: [
      '50 000+ utilisateurs actifs mensuels',
      'Support de 5000 connexions simultanées',
      'Latence moyenne de messagerie < 100ms',
      '4.6/5 étoiles sur les stores (15k reviews)'
    ],
    testimonial: {
      text: 'DataFuse a construit une app robuste qui peut réellement compétitionner avec les grands acteurs du marché. La qualité technique est impressionnante.',
      author: 'Julie Rousseau',
      role: 'CEO, SocialHub'
    }
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject) return projects.slice(0, limit)

  // Trouver des projets de la même catégorie
  const sameCategory = projects
    .filter(p => p.slug !== currentSlug && p.category === currentProject.category)

  // Compléter avec d'autres projets si nécessaire
  const others = projects.filter(p =>
    p.slug !== currentSlug &&
    p.category !== currentProject.category
  )

  return [...sameCategory, ...others].slice(0, limit)
}
