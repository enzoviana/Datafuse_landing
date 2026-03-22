# Configuration du Site Datafuse Studio

## 📧 Configuration de l'envoi d'emails

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit
3. Vérifiez votre domaine `datafuse.fr` dans la section "Domains"
4. Ajoutez les enregistrements DNS requis (SPF, DKIM, DMARC)

### 2. Obtenir la clé API

1. Dans le tableau de bord Resend, allez dans "API Keys"
2. Créez une nouvelle clé API
3. Copiez la clé (elle commence par `re_`)

### 3. Configuration locale

1. Créez un fichier `.env.local` à la racine du projet :

```bash
cp .env.example .env.local
```

2. Ajoutez votre clé API Resend dans `.env.local` :

```env
RESEND_API_KEY=re_votre_cle_api_resend
```

3. **IMPORTANT** : Ne commitez JAMAIS le fichier `.env.local` (il est déjà dans `.gitignore`)

### 4. Tester l'envoi d'emails

1. Démarrez le serveur de développement :
```bash
npm run dev
```

2. Allez sur [http://localhost:3000](http://localhost:3000)
3. Remplissez le formulaire de contact
4. Vérifiez que vous recevez l'email à `contact@datafuse.fr`

### 5. Configuration de l'email "From"

⚠️ **Important** : Dans `app/api/contact/route.ts`, ligne 22, remplacez :

```typescript
from: 'Datafuse Contact <onboarding@resend.dev>',
```

Par votre domaine vérifié :

```typescript
from: 'Datafuse Contact <noreply@datafuse.fr>',
```

## 🍪 Système de Cookies RGPD

Le système de gestion des cookies est déjà configuré et respecte le RGPD.

### Fonctionnalités

- Bannière de consentement qui apparaît à la première visite
- Possibilité d'accepter tous les cookies
- Possibilité d'accepter uniquement les cookies nécessaires
- Personnalisation par catégorie (Nécessaires, Analytics, Marketing)
- Persistance des préférences dans le localStorage

### Catégories de cookies

1. **Nécessaires** : Toujours activés (langue, préférences de cookies)
2. **Analytics** : Google Analytics (nécessite consentement)
3. **Marketing** : Facebook Pixel, etc. (nécessite consentement)

## 🔒 Pages Légales RGPD

Toutes les pages légales requises en France ont été créées :

### Pages disponibles

1. **Mentions Légales** : `/mentions-legales`
   - ⚠️ À compléter avec vos informations (SIRET, adresse, etc.)

2. **Politique de Confidentialité** : `/politique-confidentialite`
   - Conforme RGPD
   - ⚠️ À compléter avec votre SIRET et adresse

3. **Politique de Cookies** : `/politique-cookies`
   - Explique l'utilisation des cookies
   - Liste tous les cookies utilisés

4. **CGV** (Conditions Générales de Vente) : `/cgv`
   - Pour vos prestations de service
   - ⚠️ À compléter avec vos informations légales

5. **CGU** (Conditions Générales d'Utilisation) : `/cgu`
   - Pour l'utilisation du site web
   - ⚠️ À compléter avec vos informations légales

### ⚠️ Informations à compléter

Dans chaque page légale, recherchez les mentions `(à compléter)` et remplacez-les par vos informations réelles :

- **SIRET** : Votre numéro SIRET
- **TVA** : Votre numéro de TVA intracommunautaire
- **Adresse** : Votre adresse de siège social
- **Forme juridique** : SASU, SAS, SARL, etc.
- **Capital social** : Montant du capital
- **Directeur de publication** : Nom du directeur
- **Téléphone** : Votre numéro de téléphone professionnel

## 🌍 Système de Traduction

Le site est entièrement traduit en 3 langues :

### Langues disponibles

- 🇫🇷 **Français** (langue par défaut pour le SEO)
- 🇬🇧 **Anglais**
- 🇵🇹 **Portugais**

### Détection automatique

Le système détecte automatiquement la langue du navigateur de l'utilisateur :
- Utilisateur francophone → Site en français
- Utilisateur lusophone → Site en portugais
- Utilisateur anglophone → Site en anglais

### Sélecteur de langue

Un sélecteur de langue est disponible dans la navbar (icône globe) permettant de changer manuellement la langue.

## 🚀 Déploiement en Production

### Variables d'environnement à configurer

Dans votre plateforme de déploiement (Vercel, Netlify, etc.), ajoutez :

```env
RESEND_API_KEY=re_votre_cle_api_resend
```

### Vérifications avant déploiement

- [ ] Clé API Resend configurée
- [ ] Domaine vérifié sur Resend
- [ ] Email "from" modifié dans `app/api/contact/route.ts`
- [ ] Informations légales complétées dans toutes les pages
- [ ] SIRET, TVA, adresse ajoutés
- [ ] Numéro de téléphone ajouté
- [ ] Google Analytics configuré (optionnel)
- [ ] Facebook Pixel configuré (optionnel)

## 📝 Tâches Post-Déploiement

1. **Tester le formulaire de contact** en production
2. **Vérifier la réception des emails** à contact@datafuse.fr
3. **Tester le système de cookies** sur différents navigateurs
4. **Vérifier les pages légales** et compléter les informations manquantes
5. **Configurer Google Analytics** (si souhaité)
6. **Soumettre le sitemap** à Google Search Console

## 🆘 Support

Pour toute question technique :
- Email : contact@datafuse.fr
- Repository : [votre repo GitHub]

---

**Dernière mise à jour** : 15 Mars 2026
