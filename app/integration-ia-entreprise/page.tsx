'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Check,
  Shield,
  Sparkles,
  Database,
  Lock,
  Zap,
  MessageSquare,
  FileSearch,
  Bot,
  TrendingUp,
  Globe
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

export default function IntegrationIAPage() {
  const solutions = [
    {
      icon: <MessageSquare className="size-6" />,
      title: "Chatbot IA personnalisé",
      desc: "Assistant conversationnel entraîné sur vos données, disponible 24/7",
      useCases: ["Support client automatisé", "FAQ intelligente", "Onboarding utilisateurs"]
    },
    {
      icon: <FileSearch className="size-6" />,
      title: "RAG sur vos données",
      desc: "Recherche sémantique et analyse de documents avec IA générative",
      useCases: ["Knowledge base intelligente", "Analyse de contrats", "Documentation technique"]
    },
    {
      icon: <Bot className="size-6" />,
      title: "Automatisation IA",
      desc: "Workflows intelligents qui apprennent et s'adaptent",
      useCases: ["Classification automatique", "Extraction de données", "Prédictions métier"]
    }
  ]

  const why = [
    {
      icon: <Globe className="size-5" />,
      title: "Souveraineté des données",
      points: [
        "Infrastructure France/EU uniquement",
        "Données jamais partagées avec OpenAI/tiers",
        "Conformité RGPD native"
      ]
    },
    {
      icon: <Lock className="size-5" />,
      title: "LLM privés & sécurisés",
      points: [
        "Modèles hébergés sur votre infra",
        "Fine-tuning sur vos données métier",
        "Chiffrement end-to-end"
      ]
    },
    {
      icon: <Zap className="size-5" />,
      title: "Performance & coûts",
      points: [
        "Latence <500ms garantie",
        "Coûts prévisibles (pas de pay-per-token)",
        "Scaling automatique"
      ]
    }
  ]

  const techStack = [
    { name: "OpenAI GPT-4", cat: "LLM Public" },
    { name: "Mistral AI", cat: "LLM EU" },
    { name: "Llama 3", cat: "Open Source" },
    { name: "LangChain", cat: "Framework" },
    { name: "Pinecone", cat: "Vector DB" },
    { name: "PostgreSQL pgvector", cat: "Vector DB" }
  ]

  const process = [
    {
      phase: "Audit IA",
      duration: "1 semaine",
      tasks: ["Analyse besoins métier", "Audit données existantes", "POC recommandations"]
    },
    {
      phase: "Préparation données",
      duration: "2 semaines",
      tasks: ["Nettoyage dataset", "Embeddings génération", "Indexation vectorielle"]
    },
    {
      phase: "Développement",
      duration: "3-4 semaines",
      tasks: ["Fine-tuning modèle", "API développement", "Interface utilisateur"]
    },
    {
      phase: "Déploiement",
      duration: "1 semaine",
      tasks: ["Mise en production", "Monitoring IA", "Formation équipe"]
    }
  ]

  const faqItems = [
    {
      question: "Mes données sont-elles utilisées pour entraîner des modèles publics ?",
      answer: "NON. Jamais. Nous utilisons soit des modèles open-source hébergés chez vous, soit des APIs avec contrats stricts de non-réutilisation des données (Azure OpenAI, Mistral EU). Vos données restent 100% privées."
    },
    {
      question: "Quelle est la différence entre ChatGPT et une solution sur-mesure ?",
      answer: "ChatGPT est généraliste et ne connaît pas vos données internes. Notre solution est entraînée spécifiquement sur votre documentation, process, produits. Elle donne des réponses contextuelles et précises à vos utilisateurs/employés."
    },
    {
      question: "Combien coûte l'hébergement d'un LLM privé ?",
      answer: "Dépend du volume. Pour un chatbot d'entreprise (100-500 employés), comptez 500-1500€/mois d'infra cloud. Pour des volumes élevés (millions requêtes), nous optimisons avec des modèles plus petits et efficaces."
    },
    {
      question: "Puis-je commencer avec une API publique puis migrer vers du privé ?",
      answer: "Absolument ! C'est même notre recommandation. Commencez avec Azure OpenAI (conforme RGPD) pour valider l'usage, puis migrez vers du self-hosted si volumes importants."
    }
  ]

  const caseStudy = {
    title: "Chatbot Support Client IA",
    client: "SaaS B2B (150 employés)",
    results: [
      "-73% tickets support",
      "Satisfaction 4.6/5",
      "ROI 6 mois"
    ]
  }

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-purple-500/30">
      <PremiumNavbar />

      {/* Background avec effet IA */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500/20 to-transparent" />
        {/* Glow IA */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-600/10 backdrop-blur-xl mb-8"
            >
              <Brain size={12} className="text-purple-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">Intelligence Artificielle</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
            >
              Intégration IA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
                Entreprise
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
            >
              Intégrez l'IA dans vos processus métier : RAG sur vos données, LLM privés souverains, automatisation
              intelligente. Infrastructure France/EU.
            </motion.p>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-12 text-sm text-gray-500 font-mono"
            >
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-purple-500" />
                <span>Data souveraine</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-purple-500" />
                <span>LLM privés</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-purple-500" />
                <span>Conformité RGPD</span>
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
                className="group h-14 px-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Audit IA gratuit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ia"
                className="h-14 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
              >
                Voir Datafuse.IA →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions IA */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-mono text-purple-400 tracking-[0.2em] mb-6 uppercase">
              <Sparkles size={12} />
              <span>Nos Solutions IA</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Solutions d'intelligence artificielle <br />
              <span className="text-gray-600 italic">pour votre entreprise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 hover:border-purple-500/30 transition-all"
              >
                <div className="size-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{solution.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">{solution.desc}</p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">Cas d'usage</p>
                  {solution.useCases.map((uc, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="size-1 rounded-full bg-purple-500" />
                      <span className="font-light">{uc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Pourquoi choisir DataFuse <br />
              <span className="text-gray-600 italic">pour votre IA ?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {why.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400">
                      <Check size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                      <span className="font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack IA */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Technologies IA <br />
              <span className="text-gray-600 italic">que nous maîtrisons</span>
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
                className="group px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-gray-600 group-hover:text-purple-500 transition-colors">
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

      {/* Case Study */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-12 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-600/10 text-[10px] font-mono text-purple-400 tracking-[0.2em] mb-6 uppercase">
                  <TrendingUp size={12} />
                  <span>Case Study</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-400 font-light mb-8">{caseStudy.client}</p>
                <div className="space-y-4">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <Check size={18} className="text-green-400" />
                      </div>
                      <span className="text-2xl font-bold text-green-400">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 flex items-center justify-center">
                  <Brain size={120} className="text-purple-400 opacity-20" />
                </div>
              </div>
            </div>
          </motion.div>
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
              Processus d'intégration IA
            </h2>
            <p className="text-gray-500 text-lg">Timeline : 6-8 semaines</p>
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
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-500/50 to-transparent z-0" />
                )}
                <div className="relative z-10 rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-mono text-xs text-white">
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
                        <span className="text-purple-500 mt-1">•</span>
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
              Tarifs intégration IA
            </h2>
            <p className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
              À partir de 8k€
            </p>
            <p className="text-gray-400 font-light text-lg mb-12 max-w-2xl mx-auto">
              Prix selon complexité : chatbot simple (8-12k€), RAG avancé (15-25k€), LLM privé fine-tuné (25k€+).
              Audit gratuit pour estimer précisément.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="group h-14 px-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Demander un audit IA gratuit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ia"
                className="h-14 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
              >
                En savoir plus sur Datafuse.IA
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Questions fréquentes <br />
              <span className="text-gray-600 italic">Intégration IA</span>
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/5 bg-white/[0.02] rounded-2xl px-6 transition-all hover:bg-white/[0.04] hover:border-white/10 data-[state=open]:bg-white/[0.04] data-[state=open]:border-purple-500/30"
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
              Prêt à intégrer l'IA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                dans votre entreprise ?
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12">
              Commençons par un audit gratuit de vos besoins. Réponse sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@datafuse.fr"
                className="group h-16 px-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center gap-2"
              >
                Demander un audit IA gratuit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-xs text-gray-600 font-mono mt-8">
              ✓ Data souveraine • ✓ RGPD compliant • ✓ Infrastructure EU
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
