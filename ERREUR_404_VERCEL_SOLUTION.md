# 🔧 Solution Erreur 404 Vercel

## ❌ Votre erreur
```
404: NOT_FOUND
Code: NOT_FOUND
ID: cdg1::wwq5j-1776950665002-85354eca3542
```

## ✅ Solution en 3 étapes

### Étape 1 : Vérifier le Root Directory

**C'est la cause #1 de l'erreur 404 !**

1. Allez sur [vercel.com](https://vercel.com/dashboard)
2. Cliquez sur votre projet
3. Allez dans **Settings** (onglet en haut)
4. Section **General** → trouvez **Root Directory**
5. **IMPORTANT** : Cliquez sur **Edit**

#### Si votre structure est :
```
votre-repo/
├── Website/              ← Votre code Next.js est ici
│   ├── app/
│   ├── components/
│   └── package.json
└── autres-dossiers/
```

**Alors configurez** : Root Directory = `Website`
(avec un W majuscule si c'est comme ça dans votre repo)

#### Si votre structure est :
```
votre-repo/
├── app/                  ← Next.js à la racine
├── components/
└── package.json
```

**Alors configurez** : Root Directory = `` (vide)

6. Cliquez sur **Save**

### Étape 2 : Configurer les Variables d'Environnement

1. Dans **Settings** → **Environment Variables**
2. Ajoutez ces variables (OBLIGATOIRES) :

```bash
NEXT_PUBLIC_SITE_NAME=DataFuse Studio
NEXT_PUBLIC_CONTACT_EMAIL=contact@datafuse.fr
NEXT_PUBLIC_CONTACT_PHONE=+33123456789
NEXT_PUBLIC_BACKEND_URL=https://datafuseweb-95a5588f8542.herokuapp.com
```

3. Ajoutez cette variable pour le chatbot (OPTIONNELLE) :

```bash
OPENAI_API_KEY=sk-proj-votre-cle-ici
```

⚠️ **Note** : Si vous n'avez pas encore de clé OpenAI, ce n'est pas grave ! Le chatbot affichera simplement un message pour contacter par email.

4. Pour chaque variable :
   - Cochez **Production**, **Preview**, **Development**
   - Cliquez sur **Save**

### Étape 3 : Redéployer

1. Allez dans l'onglet **Deployments**
2. Trouvez le dernier déploiement
3. Cliquez sur les 3 points **...**
4. Cliquez sur **Redeploy**
5. Attendez que le build se termine (~2-3 minutes)

## 🎯 Checklist Rapide

Vérifiez que vous avez fait :

- [ ] Root Directory = `Website` (ou vide si Next.js est à la racine)
- [ ] Variables d'environnement NEXT_PUBLIC_* ajoutées
- [ ] Redéployé le projet
- [ ] Attendu que le build soit vert ✅

## 🔍 Comment savoir si c'est réussi ?

Quand le déploiement réussit :
- Le statut passe de 🟡 Building... à ✅ Ready
- Vous pouvez cliquer sur **Visit** et voir votre site
- Plus d'erreur 404 !

## 🐛 Toujours en erreur ?

### Vérifiez les logs de build

1. Allez dans **Deployments**
2. Cliquez sur le déploiement en erreur
3. Regardez les **Build Logs**
4. Cherchez les lignes en rouge

### Erreurs fréquentes

**"Cannot find module"** ou **"Module not found"**
→ Un fichier import est mal écrit
→ Vérifiez vos imports dans le code

**"Type error"** ou **"TypeScript error"**
→ Erreur de typage
→ Lancez `npm run build` localement et corrigez

**"ENOENT: no such file or directory"**
→ Root Directory incorrect
→ Retournez à l'Étape 1

## 📱 Besoin d'aide ?

Si après ces 3 étapes ça ne marche toujours pas :

1. Copiez les logs d'erreur du build
2. Vérifiez la documentation Vercel : [vercel.com/docs/deployments/troubleshoot-a-build](https://vercel.com/docs/deployments/troubleshoot-a-build)
3. Ou contactez le support Vercel avec l'ID de l'erreur

## 💡 Astuce

Pour éviter les problèmes futurs :
- Testez toujours localement avec `npm run build` avant de pusher
- Gardez vos dépendances à jour
- Commitez tous vos fichiers importants

---

**Bon déploiement ! 🚀**
