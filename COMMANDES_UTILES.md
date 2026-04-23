# 🚀 Commandes Utiles - Référence Rapide

## 📱 Développement

### Lancer le serveur de développement
```bash
npm run dev
```
Ouvre http://localhost:3000

### Build de production
```bash
npm run build
```
Crée une version optimisée pour production

### Démarrer le serveur de production
```bash
npm run start
```
Lance le build de production localement

## 🧪 Tests de Performance

### Test Lighthouse Mobile
```bash
# Installer Lighthouse (une seule fois)
npm install -g lighthouse

# Tester en local (après npm run build && npm run start)
lighthouse http://localhost:3000 --preset=mobile --view

# Tester en production
lighthouse https://votre-site.vercel.app --preset=mobile --view
```

### Analyser le Bundle JavaScript
```bash
# Installer l'analyseur
npm install -D @next/bundle-analyzer

# Modifier next.config.js pour ajouter :
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

# Analyser
ANALYZE=true npm run build
```

## 📱 Test sur Mobile Réel

### Option 1 : Ngrok (Recommandé)
```bash
# Installer ngrok (une seule fois)
npm install -g ngrok

# Terminal 1 : Lancer le serveur
npm run dev

# Terminal 2 : Exposer en public
ngrok http 3000

# Scanner le QR code avec votre téléphone
```

### Option 2 : IP Locale (même WiFi)
```bash
# Trouver votre IP
# Sur Mac/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Sur Windows
ipconfig

# Ouvrir sur mobile
http://192.168.x.x:3000
```

## 🔧 Maintenance

### Nettoyer le cache
```bash
# Supprimer .next et node_modules
rm -rf .next node_modules package-lock.json

# Réinstaller
npm install

# Rebuild
npm run build
```

### Vérifier les dépendances obsolètes
```bash
npm outdated
```

### Mettre à jour les dépendances
```bash
# Mettre à jour Next.js
npm install next@latest

# Mettre à jour React
npm install react@latest react-dom@latest

# Mettre à jour toutes les dépendances (attention !)
npm update
```

## 🚀 Déploiement Vercel

### Via Git (Automatique)
```bash
git add .
git commit -m "Votre message"
git push origin main

# Vercel déploie automatiquement !
```

### Via CLI Vercel
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 🎨 Développement de Composants

### Créer un nouveau composant optimisé
```bash
# Créer le fichier
touch components/MonNouveauComposant.tsx
```

Puis utiliser ce template :
```typescript
'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/useReducedMotion'

export default function MonNouveauComposant() {
  const { isMobile } = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: isMobile ? 0.3 : 0.6,
        ease: isMobile ? 'easeOut' : [0.16, 1, 0.3, 1]
      }}
    >
      {/* Votre contenu */}
    </motion.div>
  )
}
```

### Lazy loader un composant
```typescript
// Dans page.tsx
import dynamic from 'next/dynamic'

const MonComposant = dynamic(
  () => import('@/components/MonComposant'),
  {
    loading: () => <div>Chargement...</div>,
    ssr: false // Si le composant utilise window/document
  }
)
```

## 📊 Monitoring

### Voir les logs Vercel
```bash
# Via CLI
vercel logs

# Ou sur le dashboard
https://vercel.com/votre-projet/deployments
```

### Activer Analytics Vercel
```bash
# Dans le dashboard Vercel
1. Aller dans votre projet
2. Onglet "Analytics"
3. Cliquer "Enable"
```

## 🐛 Debug

### Voir les erreurs en temps réel
```bash
# Terminal avec les erreurs
npm run dev

# Ouvrir la console navigateur
F12 (Chrome/Firefox)
Cmd+Option+I (Safari Mac)
```

### Profiler les performances React
```typescript
// Ajouter dans votre composant
import { Profiler } from 'react'

<Profiler
  id="MonComposant"
  onRender={(id, phase, actualDuration) => {
    console.log(`${id} took ${actualDuration}ms`)
  }}
>
  <MonComposant />
</Profiler>
```

### Mesurer le temps d'exécution
```typescript
console.time('Mon opération')
// ... code ...
console.timeEnd('Mon opération')
// Affiche : "Mon opération: 123.45ms"
```

## 🔐 Variables d'Environnement

### Local (.env.local)
```bash
# Éditer les variables
nano .env.local

# Ou
code .env.local

# Redémarrer le serveur après modification
# Ctrl+C puis npm run dev
```

### Production (Vercel)
```bash
# Via CLI
vercel env add OPENAI_API_KEY

# Ou via dashboard
https://vercel.com/votre-projet/settings/environment-variables
```

## 📦 Gestion des Packages

### Installer une nouvelle dépendance
```bash
# Production
npm install nom-du-package

# Développement
npm install -D nom-du-package
```

### Désinstaller une dépendance
```bash
npm uninstall nom-du-package
```

### Vérifier la taille d'un package
```bash
npm install -g bundle-phobia-cli
bundle-phobia nom-du-package
```

## 🎯 Optimisations

### Compresser les images
```bash
# Installer sharp
npm install sharp

# Utiliser le composant Next Image
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

### Vérifier les Core Web Vitals
```bash
# PageSpeed Insights
https://pagespeed.web.dev/

# WebPageTest
https://webpagetest.org/
```

## 🔄 Git

### Commandes essentielles
```bash
# Voir le statut
git status

# Voir les modifications
git diff

# Annuler des modifications
git checkout -- fichier.tsx

# Créer une nouvelle branche
git checkout -b nouvelle-feature

# Revenir à main
git checkout main

# Fusionner une branche
git merge nouvelle-feature
```

## 🆘 En cas de problème

### Le build échoue
```bash
# 1. Nettoyer
rm -rf .next node_modules

# 2. Réinstaller
npm install

# 3. Essayer de build
npm run build

# 4. Si erreur TypeScript
npm run build 2>&1 | grep "error TS"
```

### Le site ne charge pas
```bash
# Vérifier que le serveur tourne
lsof -i :3000

# Tuer le processus si besoin
kill -9 $(lsof -t -i :3000)

# Relancer
npm run dev
```

### Erreur de mémoire
```bash
# Augmenter la mémoire Node
NODE_OPTIONS="--max_old_space_size=4096" npm run build
```

## 📚 Documentation

### Liens utiles
- Next.js : https://nextjs.org/docs
- Framer Motion : https://www.framer.com/motion/
- Tailwind CSS : https://tailwindcss.com/docs
- Vercel : https://vercel.com/docs
- Lighthouse : https://developer.chrome.com/docs/lighthouse/

### Guides internes
- `RESUME_SIMPLE.md` - Résumé rapide
- `OPTIMISATION_MOBILE.md` - Guide technique
- `GUIDE_TEST_MOBILE.md` - Tests et debug
- `CHATBOT_AI_SETUP.md` - Configuration chatbot

## 💡 Astuces

### Alias utiles (ajoutez dans ~/.bashrc ou ~/.zshrc)
```bash
alias nrd="npm run dev"
alias nrb="npm run build"
alias nrs="npm run start"
alias nuke="rm -rf .next node_modules && npm install"
alias perf="lighthouse http://localhost:3000 --preset=mobile --view"
```

Puis :
```bash
source ~/.bashrc  # ou ~/.zshrc
```

### Extensions VSCode recommandées
```bash
# ES7+ React snippets
# Tailwind CSS IntelliSense
# ESLint
# Prettier
# GitLens
```

---

**Gardez ce fichier à portée de main !** 📌

Copiez-collez les commandes dont vous avez besoin.
