'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Sparkles, ArrowLeft, Clock, CheckCircle2, XCircle,
  Zap, FileText, Send, RefreshCw
} from 'lucide-react'
import Link from 'next/link'

interface QueueItem {
  id: string
  topic: string
  keywords: string[]
  status: string
  generatedAt: string | null
  blogPostId: string | null
  error: string | null
  createdAt: string
}

export default function AIGeneratorPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [queueLoading, setQueueLoading] = useState(true)
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [topic, setTopic] = useState('')
  const [keywords, setKeywords] = useState('')
  const [category, setCategory] = useState('Intelligence Artificielle')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchQueue()
    }
  }, [status])

  const fetchQueue = async () => {
    try {
      // For now, simulating queue data since we don't have a queue API yet
      // In production, this would fetch from /api/ai/queue
      setQueue([])
    } catch (error) {
      console.error('Error fetching queue:', error)
    } finally {
      setQueueLoading(false)
    }
  }

  const generateArticle = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const keywordsArray = keywords.split(',').map(k => k.trim()).filter(Boolean)

      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          keywords: keywordsArray,
          category
        })
      })

      if (res.ok) {
        const data = await res.json()
        alert(`Article généré avec succès ! ID: ${data.id}`)
        setTopic('')
        setKeywords('')
        fetchQueue()
      } else {
        const error = await res.json()
        alert(`Erreur: ${error.error || 'Impossible de générer l\'article'}`)
      }
    } catch (error) {
      console.error('Error generating article:', error)
      alert('Erreur lors de la génération')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#020203] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return null
  }

  const categories = [
    'Intelligence Artificielle',
    'Développement Web',
    'Cloud Computing',
    'Cybersécurité',
    'DevOps',
    'Data Science',
    'Mobile',
    'UI/UX Design'
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/10 text-yellow-400'
      case 'generating': return 'bg-blue-500/10 text-blue-400'
      case 'completed': return 'bg-green-500/10 text-green-400'
      case 'failed': return 'bg-red-500/10 text-red-400'
      default: return 'bg-gray-500/10 text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock
      case 'generating': return RefreshCw
      case 'completed': return CheckCircle2
      case 'failed': return XCircle
      default: return Clock
    }
  }

  return (
    <div className="min-h-screen bg-[#020203]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              <Sparkles className="text-purple-500" size={28} />
              Générateur d'Articles IA
            </h1>
            <p className="text-sm text-gray-400">Créez des articles de qualité avec GPT-4</p>
          </div>
          <Link
            href="/admin/dashboard"
            className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-bold hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Retour
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Generator Form */}
          <div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="text-purple-500" size={24} />
                Générer un nouvel article
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                L'IA va créer un article optimisé SEO de 1500-2000 mots avec des backlinks pertinents
              </p>

              <form onSubmit={generateArticle} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Sujet de l'article *
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                    placeholder="Ex: Les nouvelles fonctionnalités de React 19"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Mots-clés SEO (séparés par virgules)
                  </label>
                  <input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="React, Hooks, Performance, TypeScript"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Catégorie *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50 transition-colors"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={20} className="animate-spin" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Générer l'article
                    </>
                  )}
                </button>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm text-blue-400">
                    <strong>Note:</strong> La génération prend environ 30-60 secondes.
                    L'article sera créé en brouillon pour que vous puissiez le relire avant publication.
                  </p>
                </div>
              </form>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">✨ Contenu généré</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 1500-2000 mots</li>
                  <li>• Optimisé SEO</li>
                  <li>• Multilingue (FR/EN/PT)</li>
                  <li>• Backlinks pertinents</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">🤖 Génération auto</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 5 articles/jour</li>
                  <li>• Tous les jours à 9h</li>
                  <li>• Topics aléatoires tech</li>
                  <li>• Statut: Brouillon</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Queue/History */}
          <div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Historique de génération</h2>
                <button
                  onClick={fetchQueue}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <RefreshCw size={18} />
                </button>
              </div>

              {queueLoading ? (
                <div className="text-center py-12">
                  <RefreshCw className="mx-auto text-gray-600 mb-4 animate-spin" size={32} />
                  <p className="text-gray-400">Chargement...</p>
                </div>
              ) : queue.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="mx-auto text-gray-600 mb-4" size={48} />
                  <p className="text-gray-400 mb-2">Aucun article en cours de génération</p>
                  <p className="text-sm text-gray-500">
                    Utilisez le formulaire pour générer votre premier article
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {queue.map((item, index) => {
                    const StatusIcon = getStatusIcon(item.status)
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-white font-medium">{item.topic}</h3>
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                            <StatusIcon size={14} />
                            {item.status}
                          </span>
                        </div>

                        {item.keywords && item.keywords.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {item.keywords.map((keyword, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{new Date(item.createdAt).toLocaleDateString('fr-FR')}</span>
                          {item.blogPostId && (
                            <Link
                              href={`/admin/blog/${item.blogPostId}/edit`}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              Voir l'article →
                            </Link>
                          )}
                        </div>

                        {item.error && (
                          <div className="mt-2 p-2 rounded bg-red-500/10 border border-red-500/20">
                            <p className="text-xs text-red-400">{item.error}</p>
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
              <h3 className="text-lg font-bold text-white mb-3">💡 Conseils pour de meilleurs articles</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Soyez spécifique dans le sujet (ex: "GPT-4 Vision" plutôt que "IA")</li>
                <li>• Ajoutez 3-5 mots-clés pertinents pour le SEO</li>
                <li>• Relisez toujours l'article avant de publier</li>
                <li>• Les articles générés sont en brouillon par défaut</li>
                <li>• Vous pouvez modifier le contenu après génération</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
