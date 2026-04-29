'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ChevronRight, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-data'
import PremiumNavbar from '@/components/premium/PremiumNavbar'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])

  useEffect(() => {
    const blogPost = getBlogPostBySlug(params.slug)
    if (!blogPost) {
      router.push('/actualites')
      return
    }
    setPost(blogPost)
    setRelatedPosts(getRelatedPosts(params.slug, 3))
  }, [params.slug, router])

  if (!post) return null

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-blue-500/30">
      <PremiumNavbar />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/20 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 pt-36 px-6 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/actualites">
          <motion.div whileHover={{ x: -5 }} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.3em]">
            <ArrowLeft size={12} /> Retour aux actualités
          </motion.div>
        </Link>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <Share2 size={16} className="text-gray-400" />
          </button>
          <button className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <Bookmark size={16} className="text-gray-400" />
          </button>
        </div>
      </nav>

      {/* Article Header */}
      <article className="relative z-10 pt-16 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-600/10 backdrop-blur-xl mb-8"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">{post.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 pb-8 mb-12 border-b border-white/10"
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-lg font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-gray-500 font-mono">{post.author.role}</div>
              </div>
            </div>

            <div className="size-1 rounded-full bg-gray-700" />

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>

            <div className="size-1 rounded-full bg-gray-700" />

            {/* Read Time */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={14} />
              <span>{post.readTime} de lecture</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative h-[400px] md:h-[600px] rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 mb-16 overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[200px] filter grayscale opacity-30">
                ⚡
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-5xl prose-h1:mb-8
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-white prose-strong:font-bold
              prose-code:text-blue-400 prose-code:bg-blue-500/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-[#0A0A0B] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:p-6
              prose-ul:text-gray-300 prose-ul:mb-6
              prose-ol:text-gray-300 prose-ol:mb-6
              prose-li:mb-2
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
            "
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-white/10">
            {post.tags.map((tag: string) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 font-mono uppercase tracking-wider hover:border-blue-500/30 hover:text-blue-400 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="relative py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] block mb-4">Continuez la lecture</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Articles Similaires.</h2>
              </div>
              <Link href="/actualites" className="text-xs font-mono text-gray-500 hover:text-white transition-colors underline underline-offset-8">
                Tous les articles
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/actualites/${relatedPost.slug}`} className="group">
                  <div className="h-full rounded-[2rem] border border-white/5 bg-[#0A0A0B] overflow-hidden transition-all hover:border-blue-500/30">
                    <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl filter grayscale opacity-30 group-hover:opacity-60 transition-opacity">
                          ⚡
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-blue-400">{relatedPost.category}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-[9px] font-mono text-gray-500 uppercase">
                        <Calendar size={10} />
                        <span>{new Date(relatedPost.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                        Lire l'article <ChevronRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
