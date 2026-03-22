'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getProjects, type Project } from '@/lib/projects-api'
import Image from 'next/image'

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        // Filtrer seulement les projets actifs et limiter à 6
        const activeProjects = data.filter(p => p.active !== false).slice(0, 6)
        setProjects(activeProjects)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="gradient-text">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projets qui ont transformé des visions en succès digitaux
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Chargement des projets...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                {/* Image Avant (Thumbnail) ou fallback emoji/gradient */}
                {project.thumbnailImage ? (
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={project.thumbnailImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                    {project.image}
                  </div>
                )}

              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                  Voir le projet
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ExternalLink className="w-5 h-5 text-primary-600" />
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
            Voir tous nos projets
          </button>
        </motion.div>
      </div>
    </section>
  )
}
