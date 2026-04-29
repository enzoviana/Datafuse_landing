'use client'

import { motion } from 'framer-motion'
import { ArrowRight, DollarSign, Check, AlertTriangle, TrendingUp, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'

export default function CoutDeveloppementPage() {
  const pricingGrid = [
    {
      type: "Site vitrine professionnel",
      price: "2-5k€",
      duration: "2-4 semaines",
      features: ["Design sur-mesure", "5-10 pages", "Responsive mobile", "SEO basique", "Formulaire contact"],
      examples: "Sites entreprise, portfolios, landing pages"
    },
    {
      type: "Application métier sur-mesure",
      price: "8-25k€",
      duration: "6-12 semaines",
      features: ["Dashboard complexe", "Gestion utilisateurs", "Base de données", "API intégrations", "Mobile responsive"],
      examples: "CRM, ERP, outils internes"
    },
    {
      type: "Plateforme SaaS",
      price: "15k€+",
      duration: "8-16 semaines",
      features: ["Multi-tenant", "Paiements Stripe", "API complète", "Scalabilité cloud", "Support & maintenance"],
      examples: "SaaS B2B, marketplaces, plateformes communautaires",
      highlight: true
    },
    {
      type: "Marketplace ou plateforme complexe",
      price: "25k€+",
      duration: "12-24 semaines",
      features: ["Multi-vendeurs", "Paiements avancés", "Search & filters", "Notifications temps réel", "Admin avancé"],
      examples: "Marketplaces, réseaux sociaux, plateformes booking"
    }
  ]

  const costFactors = [
    {
      factor: "Complexité fonctionnelle",
      impact: "High",
      desc: "Plus de fonctionnalités = plus de développement. Un CRUD simple vs un moteur de recommandation IA.",
      examples: ["Authentification simple: +1-2 jours", "Paiement Stripe: +3-5 jours", "Système de notifications: +5-7 jours"]
    },
    {
      factor: "Design UI/UX sur-mesure",
      impact: "Medium",
      desc: "Design template vs design from scratch. Animations, micro-interactions, responsive avancé.",
      examples: ["Template adapté: 0€", "Design sur-mesure: +2-5k€", "Design premium animations: +5-10k€"]
    },
    {
      factor: "Intégrations tierces",
      impact: "Medium",
      desc: "APIs externes, systèmes legacy, CRM, outils marketing.",
      examples: ["Mailchimp/Sendinblue: +1-2 jours", "CRM Salesforce: +5-10 jours", "ERP SAP: +15-30 jours"]
    },
    {
      factor: "Stack technique choisie",
      impact: "Low",
      desc: "Stack moderne vs legacy. Next.js vs WordPress. Impact sur maintenabilité long terme.",
      examples: ["Next.js/React: Standard", "WordPress: -20% coût initial", "Angular/Vue: Similar"]
    }
  ]

  const hiddenCosts = [
    {
      item: "Hébergement et infrastructure",
      monthly: "50-500€/mois",
      desc: "Serveurs, CDN, base de données, backups"
    },
    {
      item: "Maintenance et évolutions",
      monthly: "500-2000€/mois",
      desc: "Corrections bugs, mises à jour sécurité, nouvelles features"
    },
    {
      item: "Dette technique",
      monthly: "Variable",
      desc: "Coût accru si code mal fait initialement. Refactoring = 2-3x le coût initial"
    }
  ]

  const optimizationTips = [
    {
      tip: "Commencer par un MVP",
      saving: "40-60%",
      desc: "Focus sur le CORE. Itérer ensuite. Notre formule MVP Express : 5-8k€ en 14 jours."
    },
    {
      tip: "Prioriser les fonctionnalités (MoSCoW)",
      saving: "30-50%",
      desc: "Must-have vs Nice-to-have. Reporter les features secondaires en v2."
    },
    {
      tip: "Choisir une agence expérimentée",
      saving: "ROI x2-3",
      desc: "Code quality = moins de bugs = moins de maintenance. Évite refonte à 6 mois."
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

      {/* Hero */}
      <section className="relative z-10 pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-600/10 backdrop-blur-xl mb-8"
          >
            <DollarSign size={12} className="text-green-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-green-400">Guide Complet</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
          >
            Coût Développement <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Application Web 2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
          >
            Guide complet des prix développement web : site vitrine (2-5k€), app métier (8-25k€), SaaS (15k€+). Facteurs
            de coût, délais, ROI attendu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-8 text-sm text-gray-500 font-mono"
          >
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Grille tarifaire 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>Facteurs de coût</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              <span>ROI attendu</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grille Tarifaire */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Grille tarifaire par type <br />
              <span className="text-gray-600 italic">d'application</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pricingGrid.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-[2.5rem] border p-8 ${
                  item.highlight
                    ? 'border-blue-500/50 bg-blue-500/5'
                    : 'border-white/5 bg-white/[0.02]'
                }`}
              >
                {item.highlight && (
                  <div className="inline-flex px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-mono uppercase tracking-wider mb-4">
                    Le + demandé
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{item.type}</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-green-400">{item.price}</span>
                  <span className="text-sm text-gray-500 font-mono">• {item.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-gray-600">
                    <strong className="text-white">Exemples :</strong> {item.examples}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Facteurs qui impactent <br />
              <span className="text-gray-600 italic">le coût</span>
            </h2>
          </div>

          <div className="space-y-6">
            {costFactors.map((cf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/5 bg-[#0A0A0B] p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{cf.factor}</h3>
                      <span className={`px-3 py-1 rounded-full text-[9px] font-mono uppercase ${
                        cf.impact === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        cf.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        Impact {cf.impact}
                      </span>
                    </div>
                    <p className="text-gray-400 font-light mb-4">{cf.desc}</p>
                    <div className="space-y-2">
                      {cf.examples.map((ex, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-gray-500">
                          <ArrowRight size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                          <span className="font-light">{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/comparatif-frameworks-javascript"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all group"
            >
              <span className="font-bold">Comprendre le choix de la stack technique →</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-600/10 text-[10px] font-mono text-yellow-400 tracking-[0.2em] mb-6 uppercase">
              <AlertTriangle size={12} />
              <span>Attention</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Coûts cachés <br />
              <span className="text-gray-600 italic">du développement web</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hiddenCosts.map((cost, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-yellow-500/20 bg-yellow-500/[0.02] p-8"
              >
                <h3 className="text-xl font-bold mb-2">{cost.item}</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-4">{cost.monthly}</div>
                <p className="text-sm text-gray-400 font-light">{cost.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Tips */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Comment optimiser <br />
              <span className="text-gray-600 italic">votre budget</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {optimizationTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 hover:border-green-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="size-6 text-green-400" />
                  <span className="text-2xl font-bold text-green-400">{tip.saving}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{tip.tip}</h3>
                <p className="text-gray-400 font-light">{tip.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/creation-mvp-startup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 transition-all group"
            >
              <span className="font-bold">Découvrez notre formule MVP Express (5-8k€ en 14j) →</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            ROI attendu <br />
            <span className="text-gray-600 italic">d'une application web</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12">
            Une application bien conçue génère <strong className="text-white">3-5x son investissement initial</strong> en
            24 mois via :
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { label: "Automatisation process", value: "40-60% gain temps" },
              { label: "Acquisition clients", value: "+150-300% leads" },
              { label: "Rétention améliorée", value: "+25-40% LTV" },
              { label: "Réduction coûts opérationnels", value: "-30-50%" }
            ].map((roi, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">{roi.value}</div>
                <div className="text-sm text-gray-400">{roi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Pricing */}
      <section className="relative z-10 py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Nos forfaits développement web
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { name: "Site Entreprise", price: "2,5-5k€", link: "/creation-site-web-entreprise-sur-mesure" },
                { name: "MVP Express", price: "5-8k€", link: "/creation-mvp-startup", highlight: true },
                { name: "Plateforme SaaS", price: "15k€+", link: "/developpement-saas-sur-mesure" }
              ].map((plan, i) => (
                <Link key={i} href={plan.link}>
                  <div className={`rounded-2xl p-6 cursor-pointer transition-all ${
                    plan.highlight
                      ? 'border-2 border-blue-500 bg-blue-500/10 scale-105'
                      : 'border border-white/10 bg-white/5 hover:border-white/30'
                  }`}>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-blue-400">{plan.price}</div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 h-16 px-10 rounded-full bg-white text-black font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all group"
            >
              Obtenir un devis gratuit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
