'use client'

import { motion } from 'framer-motion'
import { Search, Calendar, Clock, ArrowRight, Sparkles, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { blogPosts } from '@/lib/blog-data'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'

const BlogCard = ({ post, index, featured = false }: { post: any; index: number; featured?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={cn(
        featured ? "md:col-span-2 md:row-span-2" : ""
      )}
    >
      <Link href={`/actualites/${post.slug}`}>
        <div className="group relative h-full min-h-[400px] rounded-[2rem] border border-white/5 bg-[#0A0A0B] overflow-hidden transition-all duration-700 hover:border-blue-500/30 flex flex-col">

          {/* Image Header */}
          <div className={cn(
            "relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20",
            featured ? "h-[400px]" : "h-[250px]"
          )}>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[100px] filter grayscale opacity-30 group-hover:opacity-60 transition-opacity">
                {post.image === '/LOGO__Datafuse_Blue.svg' ? '⚡' : post.image}
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400">{post.category}</span>
            </div>

            {featured && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-600 border border-blue-400">
                <span className="text-[9px] font-mono uppercase tracking-widest text-white">Featured</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col flex-1">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Calendar size={12} />
                <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
              <div className="size-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-2">
                <Clock size={12} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={cn(
              "font-bold text-white tracking-tight mb-3 group-hover:text-blue-400 transition-colors line-clamp-2",
              featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            )}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className={cn(
              "text-gray-400 font-light leading-relaxed mb-6 flex-1",
              featured ? "text-lg line-clamp-3" : "text-sm line-clamp-2"
            )}>
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag: string) => (
                <span key={tag} className="text-[9px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 font-mono uppercase">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author & CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-xs">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{post.author.name}</div>
                  <div className="text-[9px] text-gray-500 font-mono">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                <span className="text-[10px] font-mono uppercase tracking-widest">Lire</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ActualitesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(blogPosts.map(p => p.category)))]

  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchCategory && matchSearch
  })

  const featuredPosts = filteredPosts.filter(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <PremiumNavbar />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/20 to-transparent" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Hero */}
      <section className="relative pt-44 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 w-fit mx-auto"
          >
            <Sparkles size={14} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400">Tech News & Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[140px] font-bold tracking-tighter text-center leading-[0.8] mb-12"
          >
            ACTUALITÉS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">TECH.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-lg md:text-2xl font-light text-center max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            Les dernières innovations en IA, développement web et infrastructure cloud. Restez à jour avec les technologies qui façonnent le futur.
          </motion.p>

          {/* Search & Filters */}
          <div className="w-full max-w-4xl mx-auto relative z-20 mb-32">
            <div className="flex flex-col gap-4 p-2 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  className="w-full bg-transparent pl-16 pr-6 py-6 text-xl outline-none placeholder:text-gray-700 font-light"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 p-2 bg-black/40 rounded-[2rem] overflow-x-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "whitespace-nowrap px-6 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                      selectedCategory === cat ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
                    )}
                  >
                    {cat === 'all' ? 'Tous' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="relative pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
              <Sparkles className="text-blue-500" size={32} />
              À la Une
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, idx) => (
                <BlogCard key={post.id} post={post} index={idx} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="relative pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-12">
            Derniers Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-gray-500 font-mono uppercase tracking-widest">
              Aucun article trouvé.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10">
            BESOIN D'UN <br /> <span className="text-blue-600">EXPERT ?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Notre équipe vous accompagne sur vos projets tech complexes. IA, SaaS, Mobile, Cloud.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-blue-600 text-white font-bold text-xl hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
            Discutons de votre projet
            <ChevronRight />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
