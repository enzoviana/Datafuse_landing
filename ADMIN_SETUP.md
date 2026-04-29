# 🚀 Guide de Setup Administration DataFuse

## 📋 Ce qui a été préparé

### ✅ Base de données Prisma Schema
Le schema inclut :
- **Users** - Utilisateurs admin
- **BlogPost** - Articles de blog multilingues (FR/EN/PT) avec SEO
- **PageView** - Analytics visiteurs (pages vues, durée, device)
- **FormSubmission** - Prospects/leads des formulaires
- **VisitorSession** - Sessions visiteurs complètes
- **AIArticleQueue** - Queue pour génération automatique d'articles via IA

### ✅ Fonctionnalités principales
- 📊 Dashboard analytics (visiteurs, temps moyen, localisations)
- 📝 Gestion blog CRUD complète
- 🤖 Génération automatique d'articles via OpenAI (5/jour en brouillon)
- 📧 Gestion des prospects/leads
- 🔒 Authentification admin sécurisée
- 🌍 Traductions automatiques FR/EN/PT
- 🔗 Backlinks SEO intégrés

---

## 🛠️ Installation Étape par Étape

### 1️⃣ Setup Base de Données PostgreSQL

**Option A : Base locale (dev)**
```bash
# Installer PostgreSQL
brew install postgresql@15  # Mac
# ou suivez https://www.postgresql.org/download/

# Démarrer PostgreSQL
brew services start postgresql@15

# Créer la base
psql postgres
CREATE DATABASE datafuse_db;
\q
```

**Option B : Base cloud (prod) - RECOMMANDÉ**
```bash
# Créer une base gratuite Supabase/Neon/PlanetScale
npx create-db  # Crée automatiquement une base Prisma Postgres
```

### 2️⃣ Configuration .env

```bash
# Copier l'exemple
cp .env.example .env

# Éditer .env avec vos vraies valeurs
nano .env
```

Remplissez :
```env
DATABASE_URL="postgresql://user:pass@host:5432/datafuse_db"
NEXTAUTH_SECRET="générer-via-openssl-rand-base64-32"
OPENAI_API_KEY="sk-..." # Votre clé OpenAI
```

### 3️⃣ Migration Base de Données

```bash
# Générer le client Prisma
npx prisma generate

# Créer les tables
npx prisma db push

# Ouvrir Prisma Studio (interface DB)
npx prisma studio
```

### 4️⃣ Créer le Premier Admin

```bash
# Depuis la racine du projet
npm run create-admin
```

Ou manuellement dans Prisma Studio :
1. Ouvrir `npx prisma studio`
2. Aller dans table `User`
3. Créer un user avec :
   - email: admin@datafuse.com
   - password: utiliser `bcrypt` hash de votre mot de passe
   - name: Admin
   - role: admin

### 5️⃣ Lancer le Projet

```bash
npm run dev
```

Accédez à :
- **Frontend** : http://localhost:3000
- **Admin Login** : http://localhost:3000/admin/login
- **Dashboard** : http://localhost:3000/admin/dashboard

---

## 📁 Structure des Fichiers Admin

Voici ce qui doit être créé ensuite :

```
app/
├── admin/
│   ├── login/page.tsx          # Page connexion admin
│   ├── dashboard/page.tsx      # Dashboard analytics
│   ├── blog/
│   │   ├── page.tsx            # Liste articles
│   │   ├── new/page.tsx        # Créer article
│   │   └── [id]/edit/page.tsx  # Éditer article
│   ├── analytics/page.tsx      # Analytics détaillés
│   ├── leads/page.tsx          # Gestion prospects
│   └── ai-generator/page.tsx   # Générateur IA
├── api/
│   ├── auth/
│   │   └── [...nextauth]/route.ts  # NextAuth config
│   ├── blog/
│   │   ├── route.ts            # CRUD blog
│   │   └── [id]/route.ts
│   ├── analytics/
│   │   └── route.ts            # API analytics
│   ├── leads/
│   │   └── route.ts            # API leads
│   └── ai/
│       ├── generate/route.ts   # Générer article IA
│       └── schedule/route.ts   # Cron 5 articles/jour
```

---

## 🤖 Génération Automatique d'Articles IA

### Configuration

Le système génère automatiquement **5 articles/jour** en brouillon avec :
- Contenu SEO optimisé (1500-2000 mots)
- Backlinks pertinents
- Images suggestions
- Traductions FR/EN/PT
- Meta descriptions
- Mots-clés ciblés

### Topics automatiques

Les sujets sont générés depuis :
- Tendances tech actuelles
- Keywords SEO planifiés
- Queue `AIArticleQueue`

### Cron Job

Ajoutez dans `package.json` :
```json
{
  "scripts": {
    "cron:articles": "node scripts/generate-daily-articles.js"
  }
}
```

Ou utilisez Vercel Cron :
```js
// vercel.json
{
  "crons": [{
    "path": "/api/ai/schedule",
    "schedule": "0 9 * * *"  // 9h chaque matin
  }]
}
```

---

## 📊 Dashboard Analytics - Métriques Disponibles

### Visiteurs
- Total visiteurs uniques
- Nouveaux vs récurrents
- Temps moyen sur site
- Pages vues moyennes/session
- Taux de rebond

### Géolocalisation
- Pays (top 10)
- Villes (top 20)
- Carte mondiale interactive

### Devices & Navigateurs
- Mobile vs Desktop vs Tablet
- Navigateurs utilisés
- OS utilisés

### Prospects/Leads
- Formulaires remplis
- Taux de conversion
- Source des leads
- Status (new, contacted, converted)

### Blog
- Articles les plus vus
- Temps de lecture moyen
- Taux de partage

---

## 🔐 Sécurité

### Authentification
- NextAuth avec credentials
- Sessions sécurisées
- CSRF protection
- Rate limiting sur API

### Données
- Mots de passe hashés (bcrypt)
- Données sensibles chiffrées
- GDPR compliant

---

## 📝 TODO Next Steps

### À créer maintenant :

1. **Pages Admin** (vous ou moi)
   - [ ] `/admin/login` - Page connexion
   - [ ] `/admin/dashboard` - Dashboard principal
   - [ ] `/admin/blog` - CRUD articles
   - [ ] `/admin/analytics` - Analytics avancées
   - [ ] `/admin/leads` - Gestion prospects

2. **API Routes**
   - [ ] `/api/auth/[...nextauth]` - Auth
   - [ ] `/api/blog/*` - CRUD blog
   - [ ] `/api/analytics` - Analytics
   - [ ] `/api/leads` - Leads
   - [ ] `/api/ai/generate` - Génération IA

3. **Scripts**
   - [ ] `create-admin.js` - Créer premier admin
   - [ ] `generate-daily-articles.js` - Cron articles IA

4. **Middleware**
   - [ ] Analytics tracking automatique
   - [ ] Session tracking
   - [ ] IP geolocation

---

## ❓ FAQ

**Q: Comment changer le mot de passe admin ?**
A: Via Prisma Studio ou créer une page `/admin/settings`

**Q: Comment désactiver la génération IA ?**
A: Supprimer le cron ou mettre `ENABLE_AI_GENERATION=false` dans .env

**Q: Combien ça coûte l'API OpenAI ?**
A: ~$0.30 par article (GPT-4). 5 articles/jour = ~$45/mois

**Q: Puis-je utiliser une autre IA (Claude, Gemini) ?**
A: Oui, modifier `/api/ai/generate` pour utiliser une autre API

---

## 🚀 Déploiement Production

### Vercel (Recommandé)

```bash
# Connecter à Vercel
vercel

# Ajouter les variables d'environnement
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add OPENAI_API_KEY

# Déployer
vercel --prod
```

### Variables d'environnement Production

```env
DATABASE_URL="postgresql://..." # Supabase/Neon
NEXTAUTH_SECRET="..." # Générer nouveau
NEXTAUTH_URL="https://votre-site.com"
OPENAI_API_KEY="sk-..."
```

---

## 📞 Support

Si vous avez besoin d'aide pour créer les pages admin, les API routes ou configurer quoi que ce soit, dites-le moi et je créerai les fichiers !

**Prochaine étape suggérée** : Voulez-vous que je crée maintenant :
1. Les pages admin complètes ?
2. Les API routes ?
3. Le système de génération IA ?
4. Tout à la fois ?

Dites-moi ce que vous préférez ! 🚀
