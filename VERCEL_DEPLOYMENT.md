# 🚀 Guide de Déploiement Vercel

Ce guide vous aide à déployer votre site DataFuse sur Vercel et à résoudre l'erreur 404.

## 📋 Prérequis

- Compte Vercel ([vercel.com](https://vercel.com))
- Repository GitHub avec votre code
- Clé API OpenAI (optionnelle, mais recommandée)

## 🔧 Configuration Vercel

### Option 1 : Si votre projet est dans un sous-dossier "website"

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Cliquez sur "Add New Project"
3. Importez votre repository GitHub
4. **IMPORTANT** : Dans les paramètres du projet, configurez :

   **Root Directory** : `website`

   Cliquez sur "Edit" à côté de "Root Directory" et entrez `website`

5. **Framework Preset** : Next.js (devrait être auto-détecté)

6. **Build & Output Settings** :
   - Build Command : `next build`
   - Output Directory : `.next`
   - Install Command : `npm install`

### Option 2 : Si votre projet est à la racine

Si le dossier `website` EST la racine de votre repository :
- Laissez Root Directory vide
- Framework Preset : Next.js

## 🔑 Variables d'Environnement

Dans les paramètres Vercel, allez dans **Environment Variables** et ajoutez :

### Variables Obligatoires

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
NEXT_PUBLIC_SITE_NAME=DataFuse Studio
NEXT_PUBLIC_CONTACT_EMAIL=contact@datafuse.fr
NEXT_PUBLIC_CONTACT_PHONE=+33123456789
NEXT_PUBLIC_BACKEND_URL=https://datafuseweb-95a5588f8542.herokuapp.com
```

### Variables pour le Chatbot IA (Optionnelles)

```bash
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

**Note** : Si vous n'ajoutez pas `OPENAI_API_KEY`, le chatbot affichera un message par défaut demandant de vous contacter par email.

### Comment ajouter les variables

1. Dans votre projet Vercel, allez dans **Settings** → **Environment Variables**
2. Ajoutez chaque variable une par une :
   - Name : `NEXT_PUBLIC_SITE_URL`
   - Value : `https://votre-domaine.vercel.app`
   - Environment : Cochez **Production**, **Preview**, et **Development**
3. Cliquez sur **Save**
4. Répétez pour chaque variable

## 🐛 Résolution de l'erreur 404

### Cas 1 : Root Directory incorrect

**Symptôme** : Page 404 immédiatement après le déploiement

**Solution** :
1. Allez dans **Settings** → **General**
2. Trouvez **Root Directory**
3. Si votre code est dans le dossier `website`, entrez `website`
4. Si votre code est à la racine, laissez vide
5. Cliquez sur **Save** et redéployez

### Cas 2 : Erreur de build

**Symptôme** : Build échoue avec des erreurs TypeScript

**Solution** :
1. Vérifiez les logs de build dans l'onglet **Deployments**
2. Corrigez les erreurs TypeScript localement
3. Committez et pushez les corrections
4. Vercel redéploiera automatiquement

### Cas 3 : Variables d'environnement manquantes

**Symptôme** : Le site se charge mais certaines fonctionnalités ne marchent pas

**Solution** :
1. Ajoutez toutes les variables d'environnement listées ci-dessus
2. Allez dans **Deployments**
3. Cliquez sur les **...** du dernier déploiement
4. Cliquez sur **Redeploy**

## 📦 Structure de déploiement recommandée

Votre structure devrait être :

```
votre-repo/
├── website/              ← Votre application Next.js
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   ├── next.config.js
│   └── vercel.json      ← Configuration Vercel
└── autres-dossiers/
```

Dans ce cas, configurez `Root Directory` = `website`

## 🔄 Redéploiement après corrections

Après avoir fait les modifications ci-dessus :

1. **Option A** - Redéploiement automatique :
   - Commitez et pushez vos changements sur GitHub
   - Vercel redéploiera automatiquement

2. **Option B** - Redéploiement manuel :
   - Allez dans **Deployments**
   - Cliquez sur **...** → **Redeploy**

## ✅ Vérification

Une fois déployé avec succès :

1. Visitez votre URL Vercel
2. Vérifiez que la page d'accueil se charge
3. Testez le chatbot (même sans clé OpenAI, il devrait s'ouvrir)
4. Vérifiez le formulaire de contact
5. Testez les différentes pages

## 🎯 Checklist de déploiement

- [ ] Root Directory correctement configuré (`website` ou vide)
- [ ] Framework Preset = Next.js
- [ ] Toutes les variables d'environnement ajoutées
- [ ] `OPENAI_API_KEY` ajoutée (optionnel)
- [ ] Build réussi sans erreurs
- [ ] Site accessible sur l'URL Vercel
- [ ] Chatbot s'ouvre correctement
- [ ] Formulaires fonctionnent

## 🆘 Toujours l'erreur 404 ?

Si après toutes ces étapes vous avez toujours une 404 :

### Vérifiez les logs

1. Allez dans **Deployments**
2. Cliquez sur le déploiement qui a échoué
3. Regardez les **Build Logs**
4. Cherchez les erreurs en rouge

### Causes courantes

1. **Fichier manquant** : Le build cherche un fichier qui n'existe pas
   - Vérifiez que tous vos imports sont corrects
   - Vérifiez que tous les fichiers sont bien commités

2. **Erreur de syntaxe** : Erreur TypeScript non détectée localement
   - Lancez `npm run build` localement
   - Corrigez toutes les erreurs avant de déployer

3. **Problème de dépendances** : Package manquant dans package.json
   - Vérifiez que toutes les dépendances sont dans `package.json`
   - Lancez `npm install` pour vérifier

## 📞 Support

Si le problème persiste :

1. Copiez l'URL du déploiement échoué
2. Copiez les logs d'erreur
3. Contactez le support Vercel ou vérifiez la documentation : [vercel.com/docs](https://vercel.com/docs)

## 🔐 Domaine personnalisé

Une fois que tout fonctionne :

1. Allez dans **Settings** → **Domains**
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les DNS

---

**Astuce** : Testez toujours localement avec `npm run build` avant de déployer sur Vercel !
