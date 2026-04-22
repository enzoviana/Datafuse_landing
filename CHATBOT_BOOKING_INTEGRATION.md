# 📅 Intégration de la prise de rendez-vous dans le chatbot

Ce guide explique comment ajouter un système de prise de rendez-vous directement dans votre chatbot IA.

## Option 1 : Calendly (Recommandé - Simple)

### Installation

```bash
npm install react-calendly
```

### Modification du prompt système

Dans `app/api/chat/route.ts`, ajoutez à la fin du `SYSTEM_PROMPT` :

```typescript
**PRISE DE RENDEZ-VOUS :**
- Quand un prospect est intéressé et que tu as son email, propose-lui de prendre rendez-vous
- Utilise cette phrase exacte : "Je vous propose de prendre rendez-vous avec notre équipe : [BOOKING_LINK]"
- Le système détectera automatiquement ce mot-clé et affichera le calendrier
```

### Modification du composant PremiumChatbot

1. Installez react-calendly :
```bash
npm install react-calendly
```

2. Ajoutez l'import au début du fichier `components/premium/PremiumChatbot.tsx` :

```tsx
import { InlineWidget } from 'react-calendly'
```

3. Ajoutez un state pour le calendrier :

```tsx
const [showCalendar, setShowCalendar] = useState(false)
```

4. Dans la fonction `handleSendMessage`, après avoir reçu la réponse du bot :

```tsx
// Détecter si le bot propose un rendez-vous
if (botResponse.includes('[BOOKING_LINK]')) {
  setShowCalendar(true)
  // Remplacer le lien par un message
  botResponse = botResponse.replace('[BOOKING_LINK]', 'ci-dessous 👇')
}
```

5. Ajoutez le widget Calendly dans le JSX, juste avant `</div>` de la liste des messages :

```tsx
{showCalendar && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    className="rounded-lg overflow-hidden border border-white/10"
  >
    <InlineWidget
      url="https://calendly.com/votre-username/30min"
      styles={{ height: '400px' }}
    />
  </motion.div>
)}
```

6. Créez votre compte Calendly sur [calendly.com](https://calendly.com) et remplacez l'URL.

## Option 2 : Cal.com (Open Source)

Cal.com est une alternative open-source à Calendly.

### Installation

```bash
npm install @calcom/embed-react
```

### Utilisation

```tsx
import Cal, { getCalApi } from "@calcom/embed-react"

// Dans votre composant
useEffect(() => {
  (async function () {
    const cal = await getCalApi()
    cal("ui", {"theme":"dark"})
  })()
}, [])

// Dans le JSX
{showCalendar && (
  <Cal
    calLink="votre-username/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
  />
)}
```

## Option 3 : API de rendez-vous personnalisée

Si vous avez votre propre système de rendez-vous, créez une route API :

### 1. Créer `/app/api/appointments/available-slots/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Logique pour récupérer les créneaux disponibles
  const slots = [
    { date: '2024-04-23', time: '10:00', available: true },
    { date: '2024-04-23', time: '14:00', available: true },
    // ...
  ]

  return NextResponse.json({ slots })
}
```

### 2. Créer `/app/api/appointments/book/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email, date, time, name, message } = await request.json()

  // Sauvegarder le rendez-vous dans votre base de données
  // Envoyer un email de confirmation

  return NextResponse.json({ success: true, appointmentId: '...' })
}
```

### 3. Créer un composant BookingWidget

```tsx
'use client'
import { useState, useEffect } from 'react'

export default function BookingWidget({ email }: { email: string }) {
  const [slots, setSlots] = useState([])
  const [selectedSlot, setSelectedSlot] = useState(null)

  useEffect(() => {
    fetch('/api/appointments/available-slots')
      .then(res => res.json())
      .then(data => setSlots(data.slots))
  }, [])

  const handleBook = async () => {
    const res = await fetch('/api/appointments/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        ...selectedSlot
      })
    })

    if (res.ok) {
      alert('Rendez-vous confirmé !')
    }
  }

  return (
    <div className="p-4">
      <h3 className="font-bold mb-3">Choisissez un créneau</h3>
      <div className="space-y-2">
        {slots.map((slot, i) => (
          <button
            key={i}
            onClick={() => setSelectedSlot(slot)}
            className={`w-full p-3 rounded-lg border ${
              selectedSlot === slot
                ? 'bg-blue-500 text-white'
                : 'bg-white/5 border-white/10'
            }`}
          >
            {slot.date} à {slot.time}
          </button>
        ))}
      </div>
      {selectedSlot && (
        <button
          onClick={handleBook}
          className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg"
        >
          Confirmer le rendez-vous
        </button>
      )}
    </div>
  )
}
```

## Intégration dans le chatbot

### Modifier le prompt système pour détecter l'intention

```typescript
const SYSTEM_PROMPT = `...

**DÉTECTION DE L'INTENTION DE RENDEZ-VOUS :**
Quand le prospect dit des phrases comme :
- "Je veux prendre rendez-vous"
- "Puis-je parler à quelqu'un ?"
- "Quand êtes-vous disponible ?"

Réponds avec : "Parfait ! Je vous propose de choisir un créneau directement : [SHOW_BOOKING]"
`
```

### Dans PremiumChatbot.tsx

```tsx
const [showBooking, setShowBooking] = useState(false)

// Dans handleSendMessage
if (botResponse.includes('[SHOW_BOOKING]')) {
  setShowBooking(true)
  botResponse = botResponse.replace('[SHOW_BOOKING]', '👇')
}

// Dans le JSX
{showBooking && leadData.email && (
  <BookingWidget email={leadData.email} />
)}
```

## Statistiques et Analytics

Ajoutez un tracking pour mesurer :
- Nombre de fois où le calendrier est affiché
- Taux de conversion (chat → rendez-vous pris)
- Créneaux les plus populaires

```tsx
// Quand le calendrier s'affiche
useEffect(() => {
  if (showCalendar) {
    // Google Analytics
    gtag('event', 'booking_calendar_shown', {
      email: leadData.email,
      source: 'chatbot'
    })

    // Ou votre propre API
    fetch('/api/analytics/track', {
      method: 'POST',
      body: JSON.stringify({
        event: 'booking_calendar_shown',
        email: leadData.email
      })
    })
  }
}, [showCalendar])
```

## Conclusion

L'option **Calendly** est la plus simple et rapide à mettre en place.
L'option **personnalisée** vous donne plus de contrôle et s'intègre mieux à votre système.

Choisissez selon vos besoins et votre infrastructure !
