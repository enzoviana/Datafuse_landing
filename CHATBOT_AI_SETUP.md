# 🤖 Configuration du Chatbot IA DataFuse

Votre chatbot est maintenant propulsé par **OpenAI GPT-4** pour des conversations intelligentes et naturelles qui convertissent vos visiteurs en clients !

## ✨ Fonctionnalités

- 💬 **Conversations intelligentes** : L'IA comprend le contexte et répond naturellement
- 🎯 **Conversion optimisée** : Conçu pour collecter des leads et encourager les rendez-vous
- 📊 **Connaissance des services** : L'IA connaît vos offres, tarifs et délais
- 🔄 **Collecte de données** : Extrait automatiquement les emails, noms et besoins
- 📧 **Enregistrement auto des leads** : Sauvegarde dans votre backend quand un email est collecté

## 🚀 Installation et Configuration

### 1. Obtenir une clé API OpenAI

1. Créez un compte sur [OpenAI Platform](https://platform.openai.com/)
2. Ajoutez un moyen de paiement dans [Billing](https://platform.openai.com/account/billing)
3. Créez une clé API dans [API Keys](https://platform.openai.com/api-keys)
4. Copiez votre clé API (elle commence par `sk-...`)

### 2. Configurer la clé API

Ouvrez le fichier `.env.local` et remplacez :

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

Par votre vraie clé :

```bash
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

### 3. Redémarrer le serveur

```bash
npm run dev
```

## 💰 Coûts estimés

Avec GPT-4 :
- **~$0.03 par conversation de 10 messages**
- Pour 1000 visiteurs qui chattent : ~30€
- C'est très rentable comparé à une conversation manquée !

## 🎨 Personnalisation

### Modifier le prompt système

Le comportement de l'IA est contrôlé par le prompt système dans :
```
website/app/api/chat/route.ts
```

Vous pouvez personnaliser :
- Le ton de la conversation
- Les services et tarifs
- La stratégie de conversion
- Les questions à poser

### Exemple de modification

```typescript
const SYSTEM_PROMPT = `Tu es l'assistant virtuel de DataFuse...
// Modifiez ce texte pour adapter le comportement
`
```

## 🧪 Tester le chatbot

1. Lancez votre site : `npm run dev`
2. Cliquez sur le bouton de chat en bas à droite
3. Testez différents scénarios :
   - "Je cherche à créer un site web"
   - "Quel est votre meilleur prix pour une app mobile ?"
   - "Je veux un MVP rapidement"
   - Donnez votre email pour tester la collecte de leads

## 📊 Suivi des conversations

Les leads collectés sont automatiquement envoyés à votre API `/api/leads` avec :
- Email du prospect
- Nom (si fourni)
- Service d'intérêt
- Budget mentionné
- Source : "chatbot-ai"

Vous pouvez les retrouver dans votre backend/dashboard.

## 🔧 Dépannage

### Le chatbot ne répond pas

Vérifiez :
1. Que la clé API est bien configurée dans `.env.local`
2. Que vous avez redémarré le serveur après modification
3. Qu'il n'y a pas d'erreurs dans la console (F12)
4. Que vous avez des crédits sur votre compte OpenAI

### Erreur "OpenAI API key not configured"

La clé API n'est pas détectée. Vérifiez que :
- Elle est dans `.env.local` (pas `.env.example`)
- Il n'y a pas d'espaces avant/après
- Le serveur a été redémarré

### Le chatbot répond lentement

C'est normal, GPT-4 peut prendre 2-5 secondes pour répondre.
Si vous voulez des réponses plus rapides, changez le modèle dans `route.ts` :

```typescript
model: 'gpt-3.5-turbo',  // Plus rapide et moins cher
```

## 🎯 Optimisation pour la conversion

Le chatbot est configuré pour :
1. **Qualifier rapidement** : Pose les bonnes questions sur budget et besoins
2. **Créer l'urgence** : Mentionne les délais courts et disponibilités
3. **Collecter les contacts** : Demande l'email naturellement
4. **Proposer un rendez-vous** : Encourage à prendre contact

## 🚀 Prochaines améliorations possibles

- Ajouter un système de prise de rendez-vous direct (Calendly)
- Mémoriser les conversations dans une base de données
- Ajouter des réponses rapides suggérées
- Intégrer avec votre CRM
- Analyser les conversations pour améliorer le prompt

## 📞 Support

Besoin d'aide pour personnaliser votre chatbot ?
Contactez l'équipe DataFuse : contact@datafuse.fr

---

**Note importante** : Ne partagez jamais votre clé API OpenAI publiquement (GitHub, etc.).
Ajoutez toujours `.env.local` au `.gitignore` !
