'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Users, FileText, Eye, TrendingUp, Globe, Smartphone,
  Mail, Clock, BarChart3, Activity
} from 'lucide-react'
import Link from 'next/link'

interface Analytics {
  summary: {
    uniqueVisitors: number
    totalPageViews: number
    avgDuration: number
    newLeads: number
    conversionRate: string
  }
  topPages: Array<{ path: string; views: number }>
  topCountries: Array<{ country: string; visitors: number }>
  devices: Array<{ device: string; count: number }>
  dailyStats: Array<{ date: string; visitors: number }>
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchAnalytics()
    }
  }, [status])

  const fetchAnalytics = async () => {
    try {
      const res = await fetch('/api/analytics?period=30')
      const data = await res.json()
      setAnalytics(data)
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-[#020203] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    )
  }

  if (!session) return null

  const stats = [
    {
      title: 'Visiteurs',
      value: analytics?.summary.uniqueVisitors || 0,
      icon: Users,
      change: '+12%',
      color: 'blue'
    },
    {
      title: 'Pages vues',
      value: analytics?.summary.totalPageViews || 0,
      icon: Eye,
      change: '+8%',
      color: 'purple'
    },
    {
      title: 'Nouveaux prospects',
      value: analytics?.summary.newLeads || 0,
      icon: Mail,
      change: '+24%',
      color: 'green'
    },
    {
      title: 'Taux conversion',
      value: `${analytics?.summary.conversionRate || 0}%`,
      icon: TrendingUp,
      change: '+5%',
      color: 'orange'
    }
  ]

  return (
    <div className="min-h-screen bg-[#020203]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-sm text-gray-400">Bienvenue, {session.user?.name}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/admin/blog"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors"
            >
              Gérer le blog
            </Link>
            <Link
              href="/admin/ai-generator"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-bold hover:bg-purple-500 transition-colors"
            >
              Générer article IA
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-${stat.color}-500/10`}>
                  <stat.icon className={`text-${stat.color}-500`} size={24} />
                </div>
                <span className="text-xs text-green-500 font-bold">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Top Pages */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Activity size={20} /> Pages les plus vues
            </h2>
            <div className="space-y-3">
              {analytics?.topPages.slice(0, 5).map((page, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">{page.path}</span>
                  <span className="text-sm font-bold text-white">{page.views}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Countries */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Globe size={20} /> Top Pays
            </h2>
            <div className="space-y-3">
              {analytics?.topCountries.slice(0, 5).map((country, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">{country.country || 'Unknown'}</span>
                  <span className="text-sm font-bold text-white">{country.visitors}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/admin/blog" className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 transition-colors">
            <FileText className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Gérer le Blog</h3>
            <p className="text-sm text-gray-400">Créer, éditer, publier des articles</p>
          </Link>

          <Link href="/admin/leads" className="p-6 rounded-2xl bg-green-600/10 border border-green-500/20 hover:bg-green-600/20 transition-colors">
            <Mail className="text-green-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Prospects</h3>
            <p className="text-sm text-gray-400">Voir et gérer les leads</p>
          </Link>

          <Link href="/admin/analytics" className="p-6 rounded-2xl bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600/20 transition-colors">
            <BarChart3 className="text-purple-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
            <p className="text-sm text-gray-400">Statistiques détaillées</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
