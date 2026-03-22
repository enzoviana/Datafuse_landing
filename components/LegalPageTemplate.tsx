'use client'

import { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface LegalPageTemplateProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalPageTemplate({ title, lastUpdated, children }: LegalPageTemplateProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#020203] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#020203]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Retour
          </button>
          <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
            Dernière mise à jour : {lastUpdated}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">{title}</h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <style jsx global>{`
            .prose {
              color: #e5e5e5;
            }
            .prose h2 {
              color: white;
              font-size: 2rem;
              font-weight: 700;
              margin-top: 3rem;
              margin-bottom: 1rem;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              padding-bottom: 0.5rem;
            }
            .prose h3 {
              color: white;
              font-size: 1.5rem;
              font-weight: 600;
              margin-top: 2rem;
              margin-bottom: 0.75rem;
            }
            .prose p {
              margin-bottom: 1.25rem;
              line-height: 1.8;
              color: #a3a3a3;
            }
            .prose ul, .prose ol {
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .prose li {
              margin-bottom: 0.5rem;
              color: #a3a3a3;
            }
            .prose strong {
              color: white;
              font-weight: 600;
            }
            .prose a {
              color: #3b82f6;
              text-decoration: none;
              transition: color 0.2s;
            }
            .prose a:hover {
              color: #60a5fa;
              text-decoration: underline;
            }
            .prose table {
              width: 100%;
              border-collapse: collapse;
              margin: 2rem 0;
            }
            .prose th {
              background: rgba(255, 255, 255, 0.05);
              padding: 0.75rem;
              text-align: left;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .prose td {
              padding: 0.75rem;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
          `}</style>

          {children}
        </div>
      </div>
    </div>
  )
}
