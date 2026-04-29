'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  TrendingUp, Users, Eye, Clock, Globe, Smartphone,
  Monitor, Tablet, ArrowLeft, Calendar, BarChart3
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

export default function AnalyticsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState('30')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchAnalytics()
    }
  }, [status, period])

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/analytics?period=${period}`)
      const data = await res.json()
      setAnalytics(data)
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const getDeviceIcon = (device: string) => {
    switch (device?.toLowerCase()) {
      case 'mobile': return Smartphone
      case 'tablet': return Tablet
      case 'desktop': return Monitor
      default: return Monitor
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

  const mainStats = [
    {
      title: 'Visiteurs uniques',
      value: analytics?.summary.uniqueVisitors || 0,
      icon: Users,
      color: 'blue',
      change: '+12.5%'
    },
    {
      title: 'Pages vues',
      value: analytics?.summary.totalPageViews || 0,
      icon: Eye,
      color: 'purple',
      change: '+8.2%'
    },
    {
      title: 'Temps moyen',
      value: formatDuration(analytics?.summary.avgDuration || 0),
      icon: Clock,
      color: 'green',
      change: '+3.1%'
    },
    {
      title: 'Taux conversion',
      value: `${analytics?.summary.conversionRate || 0}%`,
      icon: TrendingUp,
      color: 'orange',
      change: '+5.4%'
    }
  ]

  const maxPageViews = Math.max(...(analytics?.topPages.map(p => p.views) || [1]))
  const maxCountryVisitors = Math.max(...(analytics?.topCountries.map(c => c.visitors) || [1]))
  const totalDevices = analytics?.devices.reduce((sum, d) => sum + d.count, 0) || 1

  return (
    <div className="min-h-screen bg-[#020203]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <BarChart3 className="text-blue-500" size={28} />
                Analytics Détaillées
              </h1>
              <p className="text-sm text-gray-400">Vue d'ensemble de vos performances</p>
            </div>
            <Link
              href="/admin/dashboard"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-bold hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Retour
            </Link>
          </div>

          {/* Period Selector */}
          <div className="flex gap-2">
            {[
              { value: '7', label: '7 jours' },
              { value: '30', label: '30 jours' },
              { value: '90', label: '90 jours' },
              { value: '365', label: '1 an' }
            ].map(p => (
              <button
                key={p.value}
                onClick={() => setPeriod(p.value)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  period === p.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mainStats.map((stat, index) => (
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

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Daily Chart */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Calendar size={20} /> Visiteurs quotidiens
            </h2>
            <div className="space-y-3">
              {analytics?.dailyStats.slice(-7).map((day, i) => {
                const maxVisitors = Math.max(...(analytics.dailyStats.map(d => d.visitors) || [1]))
                const percentage = (day.visitors / maxVisitors) * 100

                return (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">
                        {new Date(day.date).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                      </span>
                      <span className="text-white font-bold">{day.visitors}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Top Pages */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Eye size={20} /> Pages les plus visitées
            </h2>
            <div className="space-y-4">
              {analytics?.topPages.slice(0, 8).map((page, i) => {
                const percentage = (page.views / maxPageViews) * 100

                return (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300 truncate max-w-[70%]">
                        {page.path}
                      </span>
                      <span className="text-sm font-bold text-white">{page.views}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Geographic Distribution */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Globe size={20} /> Distribution géographique
            </h2>
            <div className="space-y-4">
              {analytics?.topCountries.slice(0, 10).map((country, i) => {
                const percentage = (country.visitors / maxCountryVisitors) * 100

                return (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">
                        {country.country || 'Unknown'}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">{percentage.toFixed(1)}%</span>
                        <span className="text-sm font-bold text-white w-12 text-right">
                          {country.visitors}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Devices */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Smartphone size={20} /> Répartition par appareil
            </h2>

            <div className="space-y-6">
              {analytics?.devices.map((device, i) => {
                const DeviceIcon = getDeviceIcon(device.device)
                const percentage = (device.count / totalDevices) * 100

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10">
                          <DeviceIcon className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <p className="text-white font-medium capitalize">
                            {device.device || 'Unknown'}
                          </p>
                          <p className="text-xs text-gray-500">{percentage.toFixed(1)}%</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-white">{device.count}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Device Summary */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Total des sessions</span>
                <span className="text-lg font-bold text-white">{totalDevices}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h3 className="text-lg font-bold text-white mb-2">Performance globale</h3>
            <p className="text-sm text-gray-400 mb-4">
              Vos métriques sont en hausse par rapport à la période précédente
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <TrendingUp size={20} />
              <span className="font-bold">+8.7% de croissance</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20">
            <h3 className="text-lg font-bold text-white mb-2">Engagement</h3>
            <p className="text-sm text-gray-400 mb-4">
              Les visiteurs passent plus de temps sur votre site
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <Clock size={20} />
              <span className="font-bold">Temps moyen: {formatDuration(analytics?.summary.avgDuration || 0)}</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-2">Conversions</h3>
            <p className="text-sm text-gray-400 mb-4">
              {analytics?.summary.newLeads || 0} nouveaux prospects ce mois-ci
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <Users size={20} />
              <span className="font-bold">{analytics?.summary.conversionRate || 0}% de taux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
