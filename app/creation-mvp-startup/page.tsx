'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Check,
  Clock,
  Shield,
  Sparkles,
  Rocket,
  Code2,
  Palette,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react'
import Link from 'next/link'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function CreationMVPPage() {
  const included = [
    "Design premium Figma",
    "Développement full-stack",
    "Base de données PostgreSQL",
    "Authentification utilisateur",
    "Dashboard admin",
    "Déploiement production",
    "3 mois support prioritaire",
    "Formation + Documentation"
  ]

  const notIncluded = [
    "Paiement (Stripe/PayPal)",
    "Marketplace multi-vendeurs",
    "IA custom complexe",
    "Intégrations API tierces multiples"
  ]

  const timeline = [
    {
      day: "Jour 1",
      title: "Kick-off intensif",
      tasks: ["Atelier stratégique (2h)", "Définition scope précis", "Wireframes validés"]
    },
    {
      day: "Jours 2-11",
      title: "Développement sprint",
      tasks: ["Design UI/UX finalisé", "Développement fonctionnalités", "Tests quotidiens"]
    },
    {
      day: "Jours 12-13",
      title: "Tests & polish",
      tasks: ["Tests utilisateurs", "Corrections bugs", "Optimisations performance"]
    },
    {
      day: "Jour 14",
      title: "Livraison & formation",
      tasks: ["Déploiement production", "Formation équipe", "Handover documentation"]
    }
  ]

  const useCases = [
    {
      scenario: "Tester une idée SaaS",
      desc: "Validez votre concept auprès de vrais utilisateurs en 2 semaines",
      icon: <Sparkles className="size-5" />
    },
    {
      scenario: "Lever des fonds",
      desc: "Démonstration fonctionnelle pour convaincre investisseurs",
      icon: <Rocket className="size-5" />
    },
    {
      scenario: "Remplacer no-code",
      desc: "Passez d'un prototype Bubble/Webflow à du vrai code scalable",
      icon: <Code2 className="size-5" />
    }
  ]

  const faqItems = [
    {
      question: "14 jours, c'est vraiment réaliste ?",
      answer: "Oui, avec méthodologie et cadrage précis. Notre formule MVP Express inclut : 1 journée de kick-off pour définir le scope exact, 10 jours de développement intensif (équipe dédiée), 2 jours de tests et déploiement, 1 jour de formation et handover. Ce qui n'est PAS inclus : features complexes type paiement, marketplace multi-vendeurs, IA custom."
    },
    {
      question: "Quelle est la différence avec un développement SaaS complet ?",
      answer: "Le MVP Express se concentre sur les fonctionnalités CORE uniquement. C'est un produit fonctionnel mais simplifié, parfait pour tester le marché. Si votre MVP performe, nous pouvons ensuite itérer vers une solution SaaS complète."
    },
    {
      question: "Puis-je ajouter des fonctionnalités après ?",
      answer: "Absolument ! Le code est production-ready et évolutif. Après livraison, vous pouvez soit continuer avec nous (forfait évolution), soit prendre en main en interne (nous documentons tout)."
    },
    {
      question: "Que se passe-t-il si vous ne livrez pas en 14 jours ?",
      answer: "Délai garanti contractuellement. Si nous dépassons pour une raison de notre côté, vous ne payez pas de surcoût. Seul cas de dépassement légitime : changement de scope en cours de route."
    }
  ]

  const pricingFeatures = [
    "Design sur-mesure premium",
    "Développement full-stack Next.js",
    "Base de données PostgreSQL",
    "Authentification sécurisée",
    "Dashboard administration",
    "Déploiement Vercel",
    "3 mois support prioritaire",
    "Formation & documentation",
    "Code 100% propriété"
  ]

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30">
      <PremiumNavbar />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/20 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-600/10 backdrop-blur-xl mb-8"
            >
              <Zap size={12} className="text-yellow-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-400">Offre Phare</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
            >
              Création MVP Startup <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                en 14 Jours
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
            >
              Lancez votre startup avec un MVP fonctionnel en 14 jours garantis. Design premium, code production-ready,
              déploiement inclus. Forfait 5-8k€.
            </motion.p>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-12 text-sm text-gray-500 font-mono"
            >
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-500" />
                <span>14 jours garantis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue-500" />
                <span>5-8k€ forfait fixe</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-blue-500" />
                <span>Code propriété</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2"
              >
                Démarrer mon MVP maintenant
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projets"
                className="h-14 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
              >
                Voir des MVPs livrés
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Included */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="size-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Ce qui est <span className="text-blue-400">inclus</span>
                </h2>
              </div>
              <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8">
                <ul className="space-y-4">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Not Included */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="size-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <AlertTriangle size={24} className="text-yellow-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Ce qui <span className="text-yellow-400">n'est pas</span> inclus
                </h2>
              </div>
              <div className="rounded-[2.5rem] border border-yellow-500/10 bg-yellow-500/[0.02] p-8">
                <ul className="space-y-4">
                  {notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="size-5 rounded-full border border-yellow-500/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="size-2 bg-yellow-500/50" />
                      </div>
                      <div>
                        <span className="font-light">{item}</span>
                        <p className="text-xs text-gray-600 mt-1">
                          Peut être ajouté après livraison MVP
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-yellow-500/10">
                  <p className="text-sm text-gray-400 font-light">
                    💡 <strong className="text-white">Notre philosophie :</strong> Se concentrer sur le CORE pour livrer vite.
                    Vous pourrez itérer ensuite.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase">
              <Clock size={12} />
              <span>Timeline</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              14 jours chrono <br />
              <span className="text-gray-600 italic">Voici comment</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {i < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}
                <div className="relative z-10 rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-mono text-xs text-white font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-mono">{phase.day}</p>
                      <h3 className="font-bold">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="font-light">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Cas d'usage parfaits <br />
              <span className="text-gray-600 italic">pour un MVP Express</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 hover:border-blue-500/30 transition-all"
              >
                <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {uc.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{uc.scenario}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-8 right-8 bg-yellow-500 text-black px-4 py-1 rounded-lg text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
              Le + Populaire
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-600/20 backdrop-blur-xl mb-8">
              <Rocket size={14} className="text-blue-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">MVP Express</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Forfait Tout Compris
            </h2>

            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                5-8k€
              </span>
            </div>

            <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Prix fixe selon complexité. Aucun frais caché. Livraison en 14 jours garantis.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              {pricingFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <Check size={18} className="text-blue-500 flex-shrink-0" />
                  <span className="text-gray-300 font-light">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 h-16 px-10 rounded-full bg-white text-black font-bold text-lg hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all group"
            >
              Réserver mon slot MVP
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-xs text-gray-600 font-mono mt-8">
              ⚡ Seulement 4 slots/mois disponibles
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Questions fréquentes <br />
              <span className="text-gray-600 italic">MVP Express</span>
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/5 bg-white/[0.02] rounded-2xl px-6 transition-all hover:bg-white/[0.04] hover:border-white/10 data-[state=open]:bg-white/[0.04] data-[state=open]:border-blue-500/30"
              >
                <AccordionTrigger className="py-6 text-left text-white font-semibold hover:no-underline">
                  <span className="text-lg tracking-tight">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 font-light">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Link to full SaaS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/developpement-saas-sur-mesure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all group"
            >
              <Sparkles size={16} />
              <span className="font-bold">Besoin d'une solution SaaS complète ? Découvrez notre offre →</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="contact" className="relative z-10 py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Lancez votre startup <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                en 14 jours
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12">
              Réservez votre slot. Places limitées à 4 MVP par mois.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@datafuse.fr"
                className="group h-16 px-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all flex items-center justify-center gap-2"
              >
                Réserver mon MVP Express
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-xs text-gray-600 font-mono mt-8">
              ✓ Délai garanti • ✓ Prix fixe • ✓ Satisfaction ou remboursé
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
