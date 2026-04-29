/**
 * 📝 PROJETS À AJOUTER DANS projects-data.ts
 *
 * Ces 4 projets correspondent au portfolio affiché sur la page d'accueil.
 * Copiez ce code et ajoutez-le dans projects-data.ts après le dernier projet.
 */

import { Project } from './projects-data'

export const portfolioProjects: Project[] = [
  {
    id: '7',
    slug: 'medialink',
    title: 'Media Link SAAS',
    category: 'SaaS',
    shortDescription: 'Écosystème complet de gestion de file d\'attente multi-tenant',
    fullDescription: 'Solution SaaS multi-tenant complète pour la gestion de files d\'attente. Système incluant un SuperAdmin pour la gestion globale, interfaces pour points de vente multiples, écrans d\'affichage personnalisables en temps réel, et bornes Kiosk avec CMS dédié. Architecture scalable supportant 10k+ files simultanées avec synchronisation temps réel.',
    image: 'LOGO__Datafuse_Blue.svg',
    tags: ['Next.js', 'PostgreSQL', 'WebSocket', 'Stripe', 'AWS', 'TypeScript'],
    gradient: 'from-blue-600 to-cyan-600',
    client: 'Media Link',
    duration: '4 mois',
    year: '2025',
    challenges: [
      'Architecture multi-tenant avec isolation complète des données par client',
      'Synchronisation temps réel entre écrans d\'affichage, bornes et dashboards',
      'CMS headless pour personnalisation totale des interfaces',
      'Gestion de 10 000+ files d\'attente simultanées',
      'Performance optimale sur hardware varié (écrans, kiosks)',
    ],
    solutions: [
      'Architecture SaaS avec isolation des données par tenant via row-level security PostgreSQL',
      'WebSocket et Server-Sent Events pour synchronisation en temps réel sub-seconde',
      'CMS custom avec interface drag & drop et preview live',
      'Cache Redis multi-niveau pour performances optimales',
      'CDN pour distribution des assets vers les points de vente',
    ],
    results: [
      '12 000+ utilisateurs actifs quotidiens',
      '47 points de vente équipés en 6 mois',
      '99.9% de disponibilité mesurée',
      'Temps d\'attente moyen réduit de 62%',
      'Satisfaction client: 4.8/5 (2300 avis)',
    ],
    testimonial: {
      text: 'DataFuse a transformé notre concept en une solution SaaS robuste et scalable. La plateforme supporte maintenant des milliers d\'utilisateurs simultanés sans aucun problème de performance. Le ROI a été atteint en 4 mois.',
      author: 'Jean Dupont',
      role: 'CEO & Founder, Media Link',
    },
  },
  {
    id: '8',
    slug: 'dimotec',
    title: 'Dimotec Platform',
    category: 'Web App',
    shortDescription: 'Plateforme de mise en relation pour diagnostiqueurs immobiliers',
    fullDescription: 'Plateforme métier LegalTech pour la mise en relation entre diagnostiqueurs immobiliers et clients. Système complet avec gestion de devis automatisée, signature électronique intégrée via DocuSign, suivi automatisé des ordres de mission, et matching intelligent entre diagnostiqueurs et missions selon compétences et disponibilités.',
    image: 'LOGO__Datafuse_Blue.svg',
    tags: ['React', 'Node.js', 'MongoDB', 'DocuSign', 'Stripe', 'AWS S3'],
    gradient: 'from-indigo-600 to-purple-600',
    client: 'Dimotec',
    duration: '5 mois',
    year: '2024',
    challenges: [
      'Workflow complexe avec validation multi-étapes et signatures légales',
      'Intégration DocuSign pour signatures électroniques conformes',
      'Système de matching intelligent entre missions et diagnostiqueurs',
      'Gestion de documents sensibles avec traçabilité complète',
      'Interface intuitive pour utilisateurs non-techniques',
    ],
    solutions: [
      'Workflow automatisé avec state machine pour gestion des états',
      'Intégration complète API DocuSign pour signatures légalement valides',
      'Algorithme de matching basé sur compétences, localisation et disponibilités',
      'Stockage sécurisé AWS S3 avec chiffrement et versioning',
      'Interface wizard multi-étapes avec validation progressive',
    ],
    results: [
      '3 200+ missions traitées en 12 mois',
      'Temps de traitement réduit de 75%',
      '127 diagnostiqueurs actifs sur la plateforme',
      'Taux de satisfaction: 4.8/5',
      'Conformité 100% aux normes légales',
    ],
    testimonial: {
      text: 'La plateforme développée par DataFuse a révolutionné notre processus métier. Ce qui prenait 3 jours prend maintenant quelques heures. L\'intégration DocuSign est parfaite et nos clients adorent la simplicité.',
      author: 'Marie Lambert',
      role: 'Directrice Générale, Dimotec',
    },
  },
  {
    id: '9',
    slug: 'rioave',
    title: 'Rio Ave FC Official App',
    category: 'Mobile',
    shortDescription: 'Application mobile officielle du club de football Rio Ave FC',
    fullDescription: 'Application mobile native iOS et Android pour le club de football Rio Ave FC. Features incluant statistiques des joueurs en temps réel, suivi des matchs avec timeline live, notifications push pour événements importants, galerie photos/vidéos, calendrier complet, et système de gamification pour l\'engagement des supporters.',
    image: 'LOGO__Datafuse_Blue.svg',
    tags: ['React Native', 'Expo', 'Firebase', 'REST API', 'Push Notifications'],
    gradient: 'from-green-600 to-emerald-600',
    client: 'Rio Ave FC',
    duration: '3 mois',
    year: '2024',
    challenges: [
      'Intégration API sports pour statistiques en temps réel',
      'Performance optimale sur devices bas/moyen de gamme',
      'Notifications push pertinentes sans spam',
      'Engagement continu des supporters hors saison',
      'App multilingue (PT, EN, ES)',
    ],
    solutions: [
      'Intégration API FootballAPI pour stats live avec fallback',
      'Optimisation React Native avec memo, lazy loading et code splitting',
      'Système de notifications intelligent basé sur préférences utilisateur',
      'Gamification avec points, badges et classements supporters',
      'i18n avec react-native-localize pour traductions automatiques',
    ],
    results: [
      '23 000+ téléchargements en 4 mois',
      '67% d\'engagement quotidien (vs 12% avant)',
      'Note App Store & Play Store: 4.7/5',
      'Temps moyen de session: 8.2 minutes',
      '85% de rétention à 30 jours',
    ],
    testimonial: {
      text: 'L\'application a dépassé toutes nos attentes. Nos supporters sont maintenant connectés au club 24/7. L\'engagement a explosé et on voit un vrai impact sur la billetterie et le merchandising.',
      author: 'Pedro Silva',
      role: 'Directeur Marketing, Rio Ave FC',
    },
  },
  {
    id: '10',
    slug: 'natureletjoli',
    title: 'Naturel & Joli',
    category: 'Site Vitrine',
    shortDescription: 'Plateforme e-business pour institut d\'esthétique avec booking en ligne',
    fullDescription: 'Site web et plateforme e-business complète pour institut d\'esthétique. Système de prise de rendez-vous en ligne avec gestion d\'agenda multi-employés et multi-services, paiement en ligne sécurisé Stripe, CRM pour suivi client, email & SMS automatiques, et optimisation SEO local pour visibilité Google My Business.',
    image: 'LOGO__Datafuse_Blue.svg',
    tags: ['Next.js', 'Stripe', 'Calendly API', 'Google Maps', 'PostgreSQL'],
    gradient: 'from-pink-600 to-rose-600',
    client: 'Naturel & Joli',
    duration: '2 mois',
    year: '2025',
    challenges: [
      'Système de booking complexe avec disponibilités multi-employés',
      'SEO local ultra-compétitif (esthétique Paris)',
      'Interface élégante reflétant le positionnement premium',
      'Réduction des no-shows et optimisation du planning',
      'Paiements en ligne pour acomptes et forfaits',
    ],
    solutions: [
      'Système de booking custom avec gestion intelligente des créneaux',
      'SEO technique avancé avec schema.org LocalBusiness et rich snippets',
      'Design sur-mesure avec animations subtiles et photos professionnelles',
      'Email & SMS automatiques de rappel + option pré-paiement',
      'Intégration Stripe pour paiements sécurisés et abonnements',
    ],
    results: [
      'Réservations en ligne: +312% en 3 mois',
      'Trafic organique: +280% (position moyenne Google: Top 3)',
      'Score Lighthouse: 98/100',
      'No-shows réduits de 65%',
      'Taux de conversion booking: 42%',
    ],
    testimonial: {
      text: 'Notre site est devenu notre meilleur commercial. Les clientes réservent à toute heure et on a réduit drastiquement le temps passé au téléphone. Le ROI a été immédiat.',
      author: 'Sophie Beaumont',
      role: 'Gérante, Naturel & Joli',
    },
  },
]

/**
 * INSTRUCTIONS :
 *
 * 1. Ouvrir /lib/projects-data.ts
 * 2. Copier les 4 projets ci-dessus
 * 3. Les ajouter à la fin du tableau `projects`
 * 4. Sauvegarder
 * 5. Tester : npm run dev
 * 6. Visiter :
 *    - http://localhost:3000/projets/medialink
 *    - http://localhost:3000/projets/dimotec
 *    - http://localhost:3000/projets/rioave
 *    - http://localhost:3000/projets/natureletjoli
 */
