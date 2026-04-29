'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Cloud,
  Shield,
  Zap,
  Check,
  Users,
  Database,
  Lock,
  Sparkles,
  TrendingUp,
  Code2,
  Layers
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

export default function DeveloppementSaaSPage() {
  const usps = [
    {
      icon: <Zap className="size-6 text-blue-400" />,
      title: "Performance exceptionnelle",
      desc: "Architecture optimisée pour gérer des millions d'utilisateurs"
    },
    {
      icon: <Shield className="size-6 text-blue-400" />,
      title: "Sécurité enterprise",
      desc: "Conformité RGPD, ISO 27001, chiffrement end-to-end"
    },
    {
      icon: <TrendingUp className="size-6 text-blue-400" />,
      title: "Scalabilité garantie",
      desc: "Infrastructure cloud qui grandit avec votre business"
    }
  ]

  const approach = [
    {
      icon: <Database className="size-5" />,
      title: "Architecture multi-tenant scalable",
      points: [
        "Isolation des données par tenant",
        "Auto-scaling automatique",
        "CDN global pour latence minimale"
      ]
    },
    {
      icon: <Lock className="size-5" />,
      title: "Sécurité et conformité",
      points: [
        "Conformité RGPD native",
        "Chiffrement AES-256",
        "Authentification multi-facteurs"
      ]
    },
    {
      icon: <Code2 className="size-5" />,
      title: "Intégrations API et webhooks",
      points: [
        "API REST documentée",
        "Webhooks en temps réel",
        "OAuth 2.0 / SSO"
      ]
    },
    {
      icon: <Layers className="size-5" />,
      title: "Déploiement continu (CI/CD)",
      points: [
        "GitHub Actions automatisé",
        "Tests automatiques",
        "Rollback instantané"
      ]
    }
  ]

  const techStack = [
    { name: "Next.js 15", cat: "Frontend" },
    { name: "React 19", cat: "UI" },
    { name: "PostgreSQL", cat: "Database" },
    { name: "Prisma", cat: "ORM" },
    { name: "Vercel", cat: "Hosting" },
    { name: "Stripe", cat: "Paiement" }
  ]

  const caseStudies = [
    {
      title: "FinTech SaaS Platform",
      result: "+312% croissance",
      slug: "fintech-saas-platform"
    },
    {
      title: "Media Link SaaS",
      result: "500k utilisateurs",
      slug: "media-link-saas"
    },
    {
      title: "AI Analytics Dashboard",
      result: "10M requêtes/jour",
      slug: "ai-analytics-dashboard"
    }
  ]

  const process = [
    { phase: "Discovery", duration: "1 semaine", tasks: ["Atelier stratégique", "Spécifications techniques", "Architecture design"] },
    { phase: "Design", duration: "2 semaines", tasks: ["UI/UX premium", "Design system", "Prototypes interactifs"] },
    { phase: "Développement", duration: "8-10 semaines", tasks: ["Sprint Agile", "Code review", "Tests automatisés"] },
    { phase: "Launch", duration: "1 semaine", tasks: ["Déploiement production", "Formation équipe", "Documentation"] }
  ]

  const faqItems = [
    {
      question: "Quel est le délai moyen pour développer un SaaS ?",
      answer: "Le délai dépend de la complexité, mais en moyenne, un SaaS prend 8-12 semaines de développement. Pour un MVP minimal, nous proposons notre formule Express en 14 jours."
    },
    {
      question: "Quelle stack technique choisir pour mon SaaS ?",
      answer: "Nous recommandons Next.js 15 avec React pour le frontend, PostgreSQL pour la base de données, et Prisma comme ORM. Cette stack offre performance, scalabilité et excellente DX."
    },
    {
      question: "Comment assurer la scalabilité de mon SaaS ?",
      answer: "Architecture multi-tenant, auto-scaling cloud, CDN global, caching stratégique et database sharding pour les gros volumes."
    },
    {
      question: "Puis-je commencer par un MVP ?",
      answer: "Absolument ! Notre formule MVP Express (14 jours, 5-8k€) permet de tester le marché rapidement avant d'investir dans la solution complète."
    }
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-600/10 backdrop-blur-xl mb-8"
            >
              <Cloud size={12} className="text-blue-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">Service Pilier</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
            >
              Développement SaaS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Sur-Mesure
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
            >
              Créez votre plateforme SaaS avec une agence experte. Architecture scalable, sécurité B2B, intégrations API.
              Devis en 48h. Stack moderne Next.js/React.
            </motion.p>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-12 text-sm text-gray-500 font-mono"
            >
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue-500" />
                <span>500+ apps livrées</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue-500" />
                <span>98% satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue-500" />
                <span>Stack moderne</span>
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
                className="group h-14 px-8 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
              >
                Devis en 48h
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projets"
                className="h-14 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
              >
                Voir nos réalisations SaaS
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Pourquoi choisir DataFuse <br />
              <span className="text-gray-600 italic">pour votre plateforme SaaS ?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {usps.map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 hover:border-blue-500/30 transition-all"
              >
                <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {usp.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{usp.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase">
              <Sparkles size={12} />
              <span>Notre Approche</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Notre approche de <br />
              <span className="text-gray-600 italic">développement SaaS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {approach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400">
                      <Check size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                      <span className="font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Link to guide */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/comparatif-frameworks-javascript"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-mono group"
            >
              <span>Pourquoi nous utilisons cette stack technique ?</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Technologies utilisées <br />
              <span className="text-gray-600 italic">pour votre SaaS</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-gray-600 group-hover:text-blue-500 transition-colors">
                    {tech.cat}
                  </span>
                  <div className="w-px h-4 bg-white/10" />
                  <span className="font-bold text-white">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Nos réalisations SaaS
              </h2>
            </motion.div>
            <Link
              href="/projets"
              className="text-xs font-mono text-gray-500 hover:text-white transition-colors underline underline-offset-8"
            >
              Tous les projets
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <Link key={i} href={`/projets/${cs.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8 hover:border-blue-500/30 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-mono text-xs">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <ArrowRight size={18} className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {cs.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-mono text-green-400">{cs.result}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Processus de développement
            </h2>
            <p className="text-gray-500 text-lg">Timeline : 6-12 semaines</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}
                <div className="relative z-10 rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-mono text-xs text-blue-400">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold">{phase.phase}</h3>
                      <p className="text-xs text-gray-600 font-mono">{phase.duration}</p>
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

      {/* Pricing */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Tarifs & forfaits <br />
              <span className="text-gray-600 italic">développement SaaS</span>
            </h2>
            <p className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
              À partir de 15k€
            </p>
            <p className="text-gray-400 font-light text-lg mb-12">
              Le prix varie selon la complexité, les fonctionnalités et l'intégration requise.
              Demandez un devis personnalisé pour obtenir un chiffrage précis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="group h-14 px-8 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
              >
                Demander un devis personnalisé
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/cout-developpement-application-web"
                className="h-14 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
              >
                Comprendre les coûts
              </Link>
            </div>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase">
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Questions fréquentes <br />
              <span className="text-gray-600 italic">Développement SaaS</span>
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

          {/* Link to MVP */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/creation-mvp-startup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all group"
            >
              <Zap size={16} />
              <span className="font-bold">Préférez commencer par un MVP ? Découvrez notre formule Express →</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Layer */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border border-white/5 bg-[#0A0A0B] p-12 text-center"
          >
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Garantie DataFuse
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} className="text-blue-400" />
                </div>
                <h4 className="font-bold mb-2">Code quality</h4>
                <p className="text-sm text-gray-400 font-light">Architecture scalable, tests automatisés</p>
              </div>
              <div>
                <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-blue-400" />
                </div>
                <h4 className="font-bold mb-2">3 mois support inclus</h4>
                <p className="text-sm text-gray-400 font-light">Corrections bugs, monitoring, alertes</p>
              </div>
              <div>
                <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-blue-400" />
                </div>
                <h4 className="font-bold mb-2">Formation utilisateur</h4>
                <p className="text-sm text-gray-400 font-light">Documentation complète, onboarding équipe</p>
              </div>
            </div>
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
              Prêt à lancer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                votre SaaS ?
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12">
              Discutons de votre projet. Réponse sous 24h, devis en 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@datafuse.fr"
                className="group h-16 px-10 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_50px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
              >
                Demander un devis gratuit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-xs text-gray-600 font-mono mt-8">
              ✓ Satisfait ou remboursé • ✓ Code 100% propriété • ✓ Support inclus
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
