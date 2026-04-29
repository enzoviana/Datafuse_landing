'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Save, ArrowLeft, Eye, Globe, Tag, Image as ImageIcon,
  FileText, Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function NewBlogPostPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    titleEn: '',
    titlePt: '',
    category: 'Intelligence Artificielle',
    excerpt: '',
    excerptEn: '',
    excerptPt: '',
    content: '',
    contentEn: '',
    contentPt: '',
    image: '',
    tags: '',
    featured: false,
    status: 'draft',
    seoTitle: '',
    seoDescription: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)

      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: tagsArray
        })
      })

      if (res.ok) {
        router.push('/admin/blog')
      } else {
        alert('Erreur lors de la création de l\'article')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Erreur lors de la création')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#020203] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/admin/login')
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

  return (
    <div className="min-h-screen bg-[#020203]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/blog"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">Nouvel Article</h1>
              <p className="text-sm text-gray-400">Créer un article de blog</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, status: 'draft' }))}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-bold hover:bg-gray-700 transition-colors"
            >
              Sauvegarder brouillon
            </button>
            <button
              type="submit"
              form="blog-form"
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <Save size={18} /> {loading ? 'Création...' : 'Publier'}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <form id="blog-form" onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Titles */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Globe size={20} /> Titres multilingues
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Titre (FR) *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Le titre de votre article en français"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      Titre (EN)
                    </label>
                    <input
                      type="text"
                      name="titleEn"
                      value={formData.titleEn}
                      onChange={handleChange}
                      placeholder="English title"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      Titre (PT)
                    </label>
                    <input
                      type="text"
                      name="titlePt"
                      value={formData.titlePt}
                      onChange={handleChange}
                      placeholder="Título em português"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Excerpts */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h2 className="text-lg font-bold text-white mb-4">Résumés</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Résumé (FR) *
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Un court résumé de votre article (150-200 caractères)"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      Résumé (EN)
                    </label>
                    <textarea
                      name="excerptEn"
                      value={formData.excerptEn}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Short excerpt in English"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      Résumé (PT)
                    </label>
                    <textarea
                      name="excerptPt"
                      value={formData.excerptPt}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Resumo breve em português"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText size={20} /> Contenu (Markdown)
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Contenu (FR) *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={15}
                    placeholder="# Votre article en Markdown&#10;&#10;## Introduction&#10;&#10;Votre contenu ici..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors resize-none font-mono text-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      Contenu (EN)
                    </label>
                    <textarea
                      name="contentEn"
                      value={formData.contentEn}
                      onChange={handleChange}
                      rows={10}
                      placeholder="# Your article in Markdown"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors resize-none font-mono text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                      Contenu (PT)
                    </label>
                    <textarea
                      name="contentPt"
                      value={formData.contentPt}
                      onChange={handleChange}
                      rows={10}
                      placeholder="# Seu artigo em Markdown"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors resize-none font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SEO */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h2 className="text-lg font-bold text-white mb-4">SEO</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seoTitle"
                    value={formData.seoTitle}
                    onChange={handleChange}
                    placeholder="Titre optimisé pour les moteurs de recherche"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    SEO Description
                  </label>
                  <textarea
                    name="seoDescription"
                    value={formData.seoDescription}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Description pour les résultats de recherche (150-160 caractères)"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category & Tags */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Classification</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Catégorie *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500/50 transition-colors"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Tags (séparés par virgules)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="IA, Tech, Innovation"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ImageIcon size={18} /> Image
              </h3>

              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  URL de l'image
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://exemple.com/image.jpg"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Options */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Options</h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-2 border-white/20 bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-colors"
                  />
                  <span className="text-white">Article à la une</span>
                </label>

                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    Statut
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500/50 transition-colors"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
