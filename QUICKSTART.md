# 🚀 Guide de Démarrage Rapide - DataFuse Studio

## Installation en 3 étapes

### 1️⃣ Installation des dépendances

```bash
cd Website
npm install
```

### 2️⃣ Lancement du serveur de développement

```bash
npm run dev
```

Ouvrez [https://datafuseweb-95a5588f8542.herokuapp.com](https://datafuseweb-95a5588f8542.herokuapp.com) dans votre navigateur.

### 3️⃣ C'est parti ! 🎉

Votre landing page premium est maintenant accessible.

## 📋 Checklist de Personnalisation

- [ ] Modifier les informations de contact dans `/components/Contact.tsx`
- [ ] Ajouter vos vrais projets dans `/components/Portfolio.tsx`
- [ ] Personnaliser les témoignages dans `/components/Testimonials.tsx`
- [ ] Ajuster les tarifs dans `/components/Pricing.tsx`
- [ ] Mettre à jour les métadonnées SEO dans `/app/layout.tsx`
- [ ] Configurer les variables d'environnement `.env.local`
- [ ] Ajouter vos logos et images dans `/public`

## 🎨 Personnalisation Rapide

### Changer les couleurs principales

Éditez `tailwind.config.js`:

```js
primary: {
  600: '#VOTRE_COULEUR',
}
```

### Modifier le contenu

Tous les textes sont directement dans les composants :
- `/components/Hero.tsx` - Section d'accueil
- `/components/Services.tsx` - Vos services
- `/components/Pricing.tsx` - Vos tarifs

## 📱 Tester le Responsive

```bash
# Desktop
https://datafuseweb-95a5588f8542.herokuapp.com

# Mobile (avec DevTools)
Ouvrir DevTools > Toggle Device Toolbar (Ctrl+Shift+M)
```

## 🚀 Déploiement en 1 clic

### Sur Vercel (Gratuit)

1. Push votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Déployez ! ✨

Votre site sera en ligne en moins de 2 minutes.

## 🆘 Problèmes Courants

### Erreur de port déjà utilisé

```bash
# Utilisez un autre port
npm run dev -- -p 3001
```

### Erreurs de dépendances

```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

## 💡 Prochaines Étapes

1. ✅ Personnaliser le contenu
2. ✅ Ajouter vos vraies images
3. ✅ Configurer un formulaire de contact fonctionnel
4. ✅ Ajouter Google Analytics
5. ✅ Déployer en production

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Besoin d'aide ?** → contact@datafuse.studio
