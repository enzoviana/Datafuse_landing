# 🚀 Guide de Déploiement - DataFuse Studio

## Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via l'interface Vercel

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub

2. **Importer le projet**
   - Cliquez sur "New Project"
   - Sélectionnez votre repository
   - Configurez les paramètres (généralement détectés automatiquement)

3. **Variables d'environnement**
   ```
   NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
   NEXT_PUBLIC_CONTACT_EMAIL=contact@datafuse.studio
   ```

4. **Déployer**
   - Cliquez sur "Deploy"
   - Votre site sera en ligne en ~2 minutes ! 🎉

### Méthode 2 : Via CLI

```bash
# Installation
npm i -g vercel

# Connexion
vercel login

# Déploiement
vercel

# Production
vercel --prod
```

### Configuration du domaine personnalisé

1. Dans Vercel Dashboard > Settings > Domains
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

---

## Déploiement sur Netlify

### Via l'interface

1. **Build settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Environnement**
   - Node version: 18.x ou supérieure

3. **Déployer** et c'est fait !

### Via CLI

```bash
# Installation
npm install -g netlify-cli

# Déploiement
netlify deploy --prod
```

---

## Déploiement sur votre propre serveur

### 1. Build de l'application

```bash
npm run build
```

### 2. Avec PM2

```bash
# Installation de PM2
npm install -g pm2

# Démarrage
pm2 start npm --name "datafuse-studio" -- start

# Sauvegarde de la configuration
pm2 save
pm2 startup
```

### 3. Avec Docker

```dockerfile
# Créez un Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build et run
docker build -t datafuse-studio .
docker run -p 3000:3000 datafuse-studio
```

---

## Optimisations Pré-Déploiement

### ✅ Checklist

- [ ] Vérifier les métadonnées SEO
- [ ] Compresser les images
- [ ] Configurer les variables d'environnement
- [ ] Tester en production localement (`npm run build && npm start`)
- [ ] Vérifier les performances (Lighthouse)
- [ ] Configurer les redirections si nécessaire
- [ ] Ajouter robots.txt et sitemap.xml

### Performance

```bash
# Analyser le bundle
npm run build
npm run analyze # (nécessite next-bundle-analyzer)
```

### SEO

Créez `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://votre-domaine.com/sitemap.xml
```

---

## Monitoring Post-Déploiement

### Analytics

1. **Google Analytics**
   - Ajoutez votre GA ID dans `.env.local`
   - Le tracking est déjà configuré

2. **Vercel Analytics**
   - Activé automatiquement sur Vercel
   - Dashboard disponible dans Vercel

### Performance Monitoring

- Lighthouse CI
- Web Vitals
- Sentry (pour les erreurs)

---

## Rollback en cas de problème

### Sur Vercel
1. Dashboard > Deployments
2. Sélectionnez le déploiement précédent
3. Cliquez sur "Promote to Production"

### Sur Netlify
1. Deploys > Previous deploys
2. Cliquez sur "Publish deploy"

---

## Support

Problème de déploiement ?
- 📧 Email: contact@datafuse.studio
- 📚 Documentation: [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Bon déploiement ! 🚀**
