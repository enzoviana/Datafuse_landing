'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Check, Star, TrendingUp, Zap, Trophy } from 'lucide-react'
import Link from 'next/link'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'

export default function ComparatifFrameworksPage() {
  const frameworks = [
    {
      name: "Next.js 15",
      rating: 5,
      recommended: true,
      pros: ["SSR performant", "SEO excellent", "App Router moderne", "Vercel integration", "TypeScript first"],
      cons: ["Courbe apprentissage", "Opinionated"],
      useCases: ["SaaS", "E-commerce", "Blogs", "Applications entreprise"],
      performance: "98/100",
      popularity: "Leader 2026",
      verdict: "Notre choix pour 90% des projets"
    },
    {
      name: "React 19",
      rating: 4.5,
      pros: ["Flexible", "Grande communauté", "Écosystème riche", "Server Components", "Concurrent mode"],
      cons: ["Pas de SSR natif", "Nécessite configuration"],
      useCases: ["SPAs", "Dashboards", "Applications complexes"],
      performance: "95/100",
      popularity: "Très populaire",
      verdict: "Excellent choix pour SPAs pures"
    },
    {
      name: "Vue.js 3",
      rating: 4,
      pros: ["Facile à apprendre", "Léger", "Composition API", "Documentation excellente"],
      cons: ["Communauté + petite", "Écosystème moins riche"],
      useCases: ["Prototypes rapides", "Applications moyennes"],
      performance: "93/100",
      popularity: "Populaire",
      verdict: "Bon pour démarrer rapidement"
    },
    {
      name: "Angular 18",
      rating: 3.5,
      pros: ["Framework complet", "TypeScript natif", "Enterprise-ready", "Structure forte"],
      cons: ["Verbeux", "Courbe apprentissage élevée", "Performance moyenne"],
      useCases: ["Applications entreprise legacy", "Projets structurés"],
      performance: "88/100",
      popularity: "Déclin",
      verdict: "Seulement si contrainte interne"
    },
    {
      name: "Svelte 5",
      rating: 4.5,
      pros: ["Performance native", "Pas de Virtual DOM", "Bundle size minimal", "Syntaxe élégante"],
      cons: ["Communauté + petite", "Écosystème en croissance", "Moins de ressources"],
      useCases: ["Applications haute performance", "Sites légers"],
      performance: "99/100",
      popularity: "En croissance",
      verdict: "Alternative prometteuse"
    }
  ]

  const comparisonTable = [
    {
      criteria: "Performance",
      nextjs: "98/100",
      react: "95/100",
      vue: "93/100",
      angular: "88/100",
      svelte: "99/100"
    },
    {
      criteria: "SEO",
      nextjs: "Excellent",
      react: "Moyen (CSR)",
      vue: "Bon (Nuxt)",
      angular: "Moyen",
      svelte: "Bon (SvelteKit)"
    },
    {
      criteria: "Courbe apprentissage",
      nextjs: "Moyenne",
      react: "Facile",
      vue: "Facile",
      angular: "Difficile",
      svelte: "Facile"
    },
    {
      criteria: "Écosystème",
      nextjs: "Excellent",
      react: "Excellent",
      vue: "Bon",
      angular: "Bon",
      svelte: "Moyen"
    },
    {
      criteria: "Recrutement",
      nextjs: "Facile",
      react: "Très facile",
      vue: "Moyen",
      angular: "Facile",
      svelte: "Difficile"
    }
  ]

  const ourChoice = {
    title: "Pourquoi nous recommandons Next.js 15 ?",
    reasons: [
      {
        point: "Performance exceptionnelle",
        desc: "+40% plus rapide que Next.js 14. Server Components natifs, optimisations automatiques."
      },
      {
        point: "SEO natif",
        desc: "SSR/SSG intégré, métadonnées dynamiques, sitemap auto-généré. Google adore."
      },
      {
        point: "Developer Experience",
        desc: "TypeScript first, Hot reload instantané, File-based routing, API routes intégrées."
      },
      {
        point: "Déploiement trivial",
        desc: "Vercel = 0 config. Aussi compatible avec AWS, Docker, Node.js classique."
      },
      {
        point: "Écosystème React",
        desc: "Accès à tout l'écosystème React (Radix UI, Framer Motion, etc.)"
      }
    ]
  }

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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-600/10 backdrop-blur-xl mb-8"
          >
            <Code2 size={12} className="text-blue-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">Comparatif Technique</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8"
          >
            Comparatif Frameworks <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              JavaScript 2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
          >
            Next.js, React, Vue, Angular, Svelte : quel framework choisir pour votre projet ? Comparatif complet basé
            sur 500+ projets livrés.
          </motion.p>
        </div>
      </section>

      {/* Frameworks Cards */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Les 5 frameworks <br />
              <span className="text-gray-600 italic">analysés en détail</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {frameworks.map((fw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-[2.5rem] border p-8 ${
                  fw.recommended
                    ? 'border-blue-500/50 bg-blue-500/5'
                    : 'border-white/5 bg-white/[0.02]'
                }`}
              >
                {fw.recommended && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-mono uppercase tracking-wider mb-4">
                    <Trophy size={12} />
                    <span>Notre Recommandation #1</span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{fw.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          className={j < fw.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{fw.rating}/5</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 font-mono mb-1">Performance</div>
                    <div className="text-2xl font-bold text-green-400">{fw.performance}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs text-green-500 font-mono uppercase tracking-wider mb-3">Avantages</p>
                    <ul className="space-y-2">
                      {fw.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="font-light">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-red-500 font-mono uppercase tracking-wider mb-3">Inconvénients</p>
                    <ul className="space-y-2">
                      {fw.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="size-3.5 rounded-full border border-red-500/30 mt-0.5 flex-shrink-0" />
                          <span className="font-light">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-gray-600 mb-2">
                    <strong className="text-white">Cas d'usage :</strong> {fw.useCases.join(', ')}
                  </p>
                  <p className="text-sm font-bold text-white mt-4">
                    🎯 {fw.verdict}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Tableau comparatif
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 font-mono text-xs text-gray-600 uppercase tracking-wider">Critère</th>
                  <th className="text-center p-4 font-bold text-blue-400">Next.js</th>
                  <th className="text-center p-4 font-bold">React</th>
                  <th className="text-center p-4 font-bold">Vue</th>
                  <th className="text-center p-4 font-bold">Angular</th>
                  <th className="text-center p-4 font-bold">Svelte</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-bold text-white">{row.criteria}</td>
                    <td className="p-4 text-center text-blue-400 font-mono text-sm">{row.nextjs}</td>
                    <td className="p-4 text-center text-gray-300 font-mono text-sm">{row.react}</td>
                    <td className="p-4 text-center text-gray-300 font-mono text-sm">{row.vue}</td>
                    <td className="p-4 text-center text-gray-300 font-mono text-sm">{row.angular}</td>
                    <td className="p-4 text-center text-gray-300 font-mono text-sm">{row.svelte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Choice */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-12 md:p-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="size-16 rounded-2xl bg-blue-600 flex items-center justify-center">
                <Trophy size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                {ourChoice.title}
              </h2>
            </div>

            <div className="space-y-6">
              {ourChoice.reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="size-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.point}</h3>
                    <p className="text-gray-400 font-light">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500/20">
              <p className="text-lg text-gray-300 font-light mb-6">
                <strong className="text-white">Résultat :</strong> Next.js est notre stack par défaut pour 90% des
                projets. Seules exceptions : SPAs pures (React), contraintes legacy (Angular), ou ultra-performance
                (Svelte).
              </p>
              <Link
                href="/developpement-saas-sur-mesure"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all group"
              >
                Découvrez nos services développement
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Besoin d'aide pour choisir <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              votre stack technique ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12">
            Nous analysons vos besoins et recommandons la meilleure stack pour votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@datafuse.fr"
              className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
            >
              Demander un conseil technique gratuit
              <ArrowRight size={18} />
            </a>
            <Link
              href="/cout-developpement-application-web"
              className="h-14 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
            >
              Voir les coûts de développement
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
