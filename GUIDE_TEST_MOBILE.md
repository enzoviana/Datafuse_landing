# 📱 Guide de Test Mobile - Checklist Complète

## 🎯 Tests à Faire Immédiatement

### 1. Test Chrome DevTools (2 min)

```bash
# Lancer le serveur
npm run dev
```

1. Ouvrir Chrome DevTools (F12)
2. Cliquer sur l'icône mobile en haut à gauche
3. Sélectionner **iPhone 12 Pro** ou **Pixel 5**
4. **Important** : Activer le throttling réseau
   - Network tab > Slow 3G
5. Recharger la page (Cmd+R)

**À vérifier** :
- ⚡ Page charge en <3s
- 📱 Pas de débordement horizontal
- 🎨 Animations fluides (pas de lag)
- 👆 Boutons faciles à cliquer (min 44x44px)
- 📝 Texte lisible sans zoom

### 2. Test Lighthouse Mobile (3 min)

```bash
# Depuis Chrome DevTools
# Lighthouse tab > Mobile > Analyze page load
```

**Scores minimums attendus** :
- 🟢 Performance : >85
- 🟢 Accessibility : >90
- 🟢 Best Practices : >90
- 🟢 SEO : >90

**Si score <85** :
1. Regarder les suggestions Lighthouse
2. Vérifier les "Opportunities" (plus gros gains)
3. Corriger les problèmes critiques en rouge

### 3. Test sur Appareil Réel (5 min)

**Option A : Via ngrok (recommandé)**

```bash
# Installer ngrok
npm install -g ngrok

# Terminal 1 : Lancer le dev server
npm run dev

# Terminal 2 : Exposer en public
ngrok http 3000
```

Copier l'URL `https://xxxx.ngrok.io` et l'ouvrir sur votre téléphone.

**Option B : Même réseau WiFi**

```bash
# Trouver votre IP locale
# Mac/Linux
ifconfig | grep "inet "
# Windows
ipconfig

# Ouvrir sur mobile
http://192.168.x.x:3000
```

**À tester sur téléphone** :
- 🎨 Scroll fluide (60 FPS)
- 👆 Tap sur tous les boutons
- 📱 Rotation portrait/paysage
- ⌨️ Formulaires (clavier mobile)
- 🤖 Chatbot (ouverture/fermeture)
- 🎬 Animations (pas de saccades)

## 📊 Outils de Mesure des Performances

### 1. Lighthouse CLI (le plus précis)

```bash
# Installer
npm install -g lighthouse

# Test local (dev)
lighthouse http://localhost:3000 \
  --preset=mobile \
  --view \
  --output=html \
  --output-path=./lighthouse-report.html

# Test production
lighthouse https://votre-site.vercel.app \
  --preset=mobile \
  --view
```

### 2. WebPageTest (test réel)

1. Aller sur [webpagetest.org](https://webpagetest.org)
2. Entrer votre URL
3. **Test Settings** :
   - Location : Europe (Paris ou Londres)
   - Browser : Chrome Mobile
   - Connection : 3G ou 4G
4. Cliquer **Start Test**

**Métriques clés** :
- First Contentful Paint : <1.8s
- Speed Index : <3.4s
- Largest Contentful Paint : <2.5s
- Time to Interactive : <3.8s
- Total Blocking Time : <200ms
- Cumulative Layout Shift : <0.1

### 3. Chrome User Experience Report

```bash
# Vérifier les Core Web Vitals
# PageSpeed Insights
https://pagespeed.web.dev/

# Entrer votre URL production
# Regarder "Field Data" (données réelles utilisateurs)
```

## 🐛 Problèmes Courants et Solutions

### ❌ Problème : Animations saccadées

**Diagnostic** :
```javascript
// Chrome DevTools > Performance
// Enregistrer 10s de scroll
// Chercher les frames >16ms (rouge)
```

**Solutions** :
1. Réduire `backdrop-filter` et `blur()`
2. Utiliser `transform` au lieu de `top/left`
3. Ajouter `will-change: transform` aux éléments animés

### ❌ Problème : Chargement lent

**Diagnostic** :
```javascript
// Chrome DevTools > Network
// Trier par Size
// Chercher les fichiers >100KB
```

**Solutions** :
1. Lazy load les composants
2. Optimiser les images (WebP, AVIF)
3. Code splitting agressif
4. Supprimer les dépendances inutilisées

### ❌ Problème : Layout Shifts (CLS élevé)

**Diagnostic** :
```javascript
// Lighthouse > CLS score rouge
// Regarder les "Avoid large layout shifts"
```

**Solutions** :
1. Définir width/height sur toutes les images
2. Réserver l'espace pour les composants lazy
3. Éviter d'injecter du contenu au-dessus du viewport

### ❌ Problème : Bundle JS trop gros

**Diagnostic** :
```bash
# Analyser le bundle
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

**Solutions** :
1. Dynamic imports pour composants lourds
2. Tree shaking des librairies inutilisées
3. Remplacer les grosses libs par des alternatives légères

## 🎯 Benchmarks de Performance

### Excellent (90-100)
```
✅ FCP : <1.2s
✅ LCP : <2.0s
✅ TTI : <2.5s
✅ CLS : <0.05
✅ TBT : <150ms
```

### Bon (75-89)
```
🟡 FCP : 1.2-2.0s
🟡 LCP : 2.0-3.0s
🟡 TTI : 2.5-4.0s
🟡 CLS : 0.05-0.15
🟡 TBT : 150-350ms
```

### À améliorer (<75)
```
🔴 FCP : >2.0s
🔴 LCP : >3.0s
🔴 TTI : >4.0s
🔴 CLS : >0.15
🔴 TBT : >350ms
```

## 📱 Test Matrix Recommandée

### Appareils Prioritaires

| Appareil | OS | Navigateur | Pourquoi |
|----------|----|-----------|-----------
| iPhone SE (2020) | iOS 15+ | Safari | Petit écran, perf limitée |
| iPhone 12/13 | iOS 16+ | Safari | Most common iOS |
| Samsung Galaxy A52 | Android 11+ | Chrome | Mid-range Android courant |
| Pixel 5 | Android 12+ | Chrome | Reference Android |

### Conditions Réseau

- ✅ WiFi (fibre) : Test baseline
- ✅ 4G : Condition normale
- ⚠️ 3G Slow : Worst case scenario
- ⚠️ Offline : Test PWA/cache

## 🔍 Commandes Utiles de Debug

### Vérifier les re-renders

```typescript
// Ajouter dans le composant
useEffect(() => {
  console.log('Component rendered')
})
```

### Profiler les performances React

```typescript
import { Profiler } from 'react'

function onRenderCallback(id, phase, actualDuration) {
  console.log(`${id} (${phase}) took ${actualDuration}ms`)
}

<Profiler id="MyComponent" onRender={onRenderCallback}>
  <MyComponent />
</Profiler>
```

### Mesurer le temps d'exécution

```typescript
console.time('monOperation')
// ... code ...
console.timeEnd('monOperation')
```

### Vérifier la taille du bundle

```bash
# Après build
du -sh .next/static/chunks/*
# Ou
ls -lh .next/static/chunks/
```

## 🎨 Tester les Animations

### Forcer 30 FPS (simuler mobile lent)

```javascript
// Chrome DevTools > Performance
// Cliquer sur l'icône ⚙️
// Cocher "CPU: 6x slowdown"
```

### Activer "Paint Flashing"

```javascript
// Chrome DevTools > More Tools > Rendering
// Cocher "Paint flashing"
// Les zones vertes = re-paint (à minimiser)
```

### Mesurer le framerate réel

```javascript
// Dans la console
let lastTime = performance.now()
let frames = 0

function measureFPS() {
  frames++
  const currentTime = performance.now()

  if (currentTime >= lastTime + 1000) {
    console.log(`FPS: ${frames}`)
    frames = 0
    lastTime = currentTime
  }

  requestAnimationFrame(measureFPS)
}

measureFPS()
```

## ✅ Checklist Avant Production

### Performance
- [ ] Lighthouse mobile score >85
- [ ] Bundle JS <300KB
- [ ] Images optimisées (WebP/AVIF)
- [ ] Lazy loading implémenté
- [ ] Code splitting configuré
- [ ] Animations <300ms sur mobile
- [ ] Pas de layout shifts

### UX Mobile
- [ ] Testé sur iPhone réel
- [ ] Testé sur Android réel
- [ ] Touch targets >44x44px
- [ ] Formulaires utilisables
- [ ] Scroll fluide (60 FPS)
- [ ] Pas de débordement horizontal
- [ ] Zoom désactivé si nécessaire

### Fonctionnel
- [ ] Chatbot fonctionne
- [ ] Formulaires soumettent
- [ ] Navigation fonctionne
- [ ] Images chargent
- [ ] Vidéos si présentes
- [ ] Analytics trackent

### SEO Mobile
- [ ] Meta viewport configuré
- [ ] Taille texte >16px
- [ ] Contraste suffisant
- [ ] Alt sur images
- [ ] Headings hiérarchiques
- [ ] Schema markup

## 🚀 Déploiement sur Vercel

Avant de pusher en production :

```bash
# 1. Tester le build localement
npm run build
npm run start

# 2. Tester Lighthouse sur le build local
lighthouse http://localhost:3000 --preset=mobile

# 3. Si tout OK, déployer
git add .
git commit -m "Mobile optimizations"
git push origin main

# 4. Vérifier le déploiement Vercel
# https://votre-site.vercel.app

# 5. Re-tester Lighthouse en production
lighthouse https://votre-site.vercel.app --preset=mobile
```

## 📊 Suivi des Performances

### Setup Analytics

```typescript
// Ajouter dans _app.tsx ou layout.tsx
export function reportWebVitals(metric) {
  console.log(metric)

  // Envoyer à votre analytics
  if (metric.label === 'web-vital') {
    gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_label: metric.id,
    })
  }
}
```

### Vercel Analytics

1. Aller sur [vercel.com](https://vercel.com)
2. Projet > Analytics
3. Activer Web Analytics (gratuit)
4. Voir les métriques temps réel

## 🆘 Si Tout Est Lent

### Reset et Debug

```bash
# 1. Nettoyer le cache
rm -rf .next node_modules package-lock.json

# 2. Réinstaller
npm install

# 3. Rebuild
npm run build

# 4. Tester
npm run start
```

### Identifier le coupable

```bash
# Utiliser bundle analyzer
npm install -D @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Build avec analyse
ANALYZE=true npm run build
```

---

**Note** : Gardez ce guide à portée de main et testez régulièrement ! Les performances doivent être surveillées en continu, pas juste une fois.
