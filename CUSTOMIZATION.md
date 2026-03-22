# 🎨 Guide de Personnalisation - DataFuse Studio

## 📝 Contenu Textuel

### 1. Informations de Contact

Fichier: `/components/Contact.tsx`

```tsx
// Ligne 52-54
<a href="mailto:VOTRE_EMAIL@exemple.com">
  VOTRE_EMAIL@exemple.com
</a>

// Ligne 66-68
<a href="tel:+33XXXXXXXXX">
  +33 X XX XX XX XX
</a>

// Ligne 80
<div className="opacity-90">Paris, France</div>
// Remplacez par votre ville
```

### 2. Métadonnées SEO

Fichier: `/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Votre Titre - Votre Slogan',
  description: 'Votre description optimisée SEO (150-160 caractères)',
  keywords: 'vos, mots, clés, pertinents',
}
```

### 3. Statistiques du Hero

Fichier: `/components/Hero.tsx` (lignes 61-76)

```tsx
{ value: '50+', label: 'Projets livrés' },
{ value: '98%', label: 'Satisfaction client' },
{ value: '24/7', label: 'Support dédié' },
{ value: '5★', label: 'Note moyenne' },
```

Modifiez ces valeurs selon vos vraies statistiques.

---

## 🎨 Design & Couleurs

### Couleurs Principales

Fichier: `tailwind.config.js`

```js
primary: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  // ...
  600: '#0284c7', // Couleur principale
  // ...
}
```

**Générateur de palette**: [tailwindshades.com](https://www.tailwindshades.com/)

### Polices d'écriture

Fichier: `/app/layout.tsx`

```tsx
// Remplacez Inter par votre police Google Fonts
import { Inter, Montserrat, Poppins } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
// Puis utilisez montserrat.className
```

---

## 📦 Contenu Dynamique

### Services

Fichier: `/components/Services.tsx` (lignes 8-43)

Modifiez l'array `services` :

```tsx
{
  icon: VotreIcon, // Import depuis lucide-react
  title: 'Votre Service',
  description: 'Description de votre service',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  gradient: 'from-blue-500 to-cyan-500',
}
```

### Portfolio/Projets

Fichier: `/components/Portfolio.tsx` (lignes 8-59)

```tsx
{
  title: 'Nom du Projet',
  category: 'Catégorie',
  description: 'Description courte',
  image: '🎨', // Emoji ou remplacez par <Image />
  tags: ['React', 'Node.js', 'etc'],
  gradient: 'from-blue-600 to-cyan-600',
}
```

### Témoignages

Fichier: `/components/Testimonials.tsx` (lignes 8-59)

```tsx
{
  name: 'Nom Client',
  role: 'Fonction',
  company: 'Entreprise',
  content: 'Témoignage du client...',
  rating: 5,
  image: '👤', // Emoji ou image
}
```

### Tarifs

Fichier: `/components/Pricing.tsx` (lignes 8-74)

```tsx
{
  name: 'Nom du Plan',
  icon: VotreIcon,
  price: '2 500',
  period: 'À partir de',
  description: 'Description',
  features: ['Feature 1', 'Feature 2', ...],
  gradient: 'from-blue-500 to-cyan-500',
  popular: false, // true pour le mettre en avant
}
```

### FAQ

Fichier: `/components/FAQ.tsx` (lignes 10-65)

```tsx
{
  question: 'Votre question ?',
  answer: 'Votre réponse détaillée...',
}
```

---

## 🖼️ Images & Médias

### Ajouter des images

1. Placez vos images dans `/public/images/`
2. Importez et utilisez le composant Next Image :

```tsx
import Image from 'next/image'

<Image
  src="/images/votre-image.jpg"
  alt="Description"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### Remplacer les emojis par des images

Dans Portfolio.tsx :

```tsx
// Avant
image: '🏦',

// Après
<Image src="/images/projet1.jpg" alt="Projet" ... />
```

---

## 🔧 Fonctionnalités Avancées

### Formulaire de contact fonctionnel

Fichier: `/components/Contact.tsx`

Option 1 - Avec FormSpree (gratuit) :

```tsx
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
  {/* vos champs */}
</form>
```

Option 2 - Avec API Route Next.js :

Créez `/app/api/contact/route.ts` :

```ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  // Logique d'envoi d'email (Resend, SendGrid, etc.)

  return NextResponse.json({ success: true })
}
```

### Google Analytics

1. Créez `/app/components/Analytics.tsx` :

```tsx
'use client'

export default function Analytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `,
        }}
      />
    </>
  )
}
```

2. Ajoutez dans `/app/layout.tsx` :

```tsx
import Analytics from '@/components/Analytics'

// Dans le body
<Analytics />
```

---

## 🌐 Internationalisation (i18n)

Pour ajouter plusieurs langues :

```bash
npm install next-intl
```

Suivez la [documentation next-intl](https://next-intl-docs.vercel.app/)

---

## 📱 Social Media Links

Fichier: `/components/Footer.tsx` (lignes 33-38)

```tsx
const socialLinks = [
  { icon: Github, href: 'https://github.com/VOTRE_COMPTE', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/VOTRE_PAGE', label: 'LinkedIn' },
  // ...
]
```

---

## ✅ Checklist Finale

Avant la mise en production :

- [ ] Toutes les coordonnées sont mises à jour
- [ ] Les statistiques reflètent la réalité
- [ ] Les projets du portfolio sont réels
- [ ] Les témoignages sont authentiques
- [ ] Les tarifs sont corrects
- [ ] Le formulaire de contact fonctionne
- [ ] Google Analytics est configuré
- [ ] Les liens sociaux pointent vers vos profils
- [ ] Le domaine est configuré dans `.env.local`
- [ ] Les images sont optimisées
- [ ] Le SEO est vérifié (meta tags, etc.)

---

## 🆘 Besoin d'aide ?

Des questions sur la personnalisation ?

- 📧 Email: contact@datafuse.studio
- 💬 Support: Disponible 24/7

---

**Faites de ce template le vôtre ! 🎨**
