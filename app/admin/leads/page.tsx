'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Mail, Phone, Building2, Calendar, MapPin, Globe,
  Filter, Search, Download, ArrowLeft, CheckCircle2,
  Clock, XCircle, Users
} from 'lucide-react'
import Link from 'next/link'

interface Lead {
  id: string
  formType: string
  name: string | null
  email: string
  phone: string | null
  company: string | null
  message: string | null
  service: string | null
  budget: string | null
  status: string
  source: string | null
  country: string | null
  createdAt: string
}

interface LeadStats {
  status: string
  count: number
}

export default function LeadsManagementPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [leads, setLeads] = useState<Lead[]>([])
  const [stats, setStats] = useState<LeadStats[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchLeads()
    }
  }, [status, statusFilter])

  const fetchLeads = async () => {
    try {
      const params = new URLSearchParams()
      if (statusFilter !== 'all') params.append('status', statusFilter)

      const res = await fetch(`/api/leads?${params.toString()}`)
      const data = await res.json()
      setLeads(data.leads || [])
      setStats(data.stats || [])
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      await fetch('/api/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus })
      })
      fetchLeads()
      setSelectedLead(null)
    } catch (error) {
      console.error('Error updating lead:', error)
    }
  }

  const exportCSV = () => {
    const headers = ['Date', 'Nom', 'Email', 'Téléphone', 'Entreprise', 'Service', 'Budget', 'Statut', 'Pays']
    const rows = filteredLeads.map(lead => [
      new Date(lead.createdAt).toLocaleDateString('fr-FR'),
      lead.name || '',
      lead.email,
      lead.phone || '',
      lead.company || '',
      lead.service || '',
      lead.budget || '',
      lead.status,
      lead.country || ''
    ])

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-[#020203] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    )
  }

  if (!session) return null

  const filteredLeads = leads.filter(lead =>
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (lead.name && lead.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-400'
      case 'contacted': return 'bg-yellow-500/10 text-yellow-400'
      case 'converted': return 'bg-green-500/10 text-green-400'
      case 'lost': return 'bg-red-500/10 text-red-400'
      default: return 'bg-gray-500/10 text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return Clock
      case 'contacted': return Mail
      case 'converted': return CheckCircle2
      case 'lost': return XCircle
      default: return Clock
    }
  }

  const statusOptions = [
    { value: 'new', label: 'Nouveau', count: stats.find(s => s.status === 'new')?.count || 0 },
    { value: 'contacted', label: 'Contacté', count: stats.find(s => s.status === 'contacted')?.count || 0 },
    { value: 'converted', label: 'Converti', count: stats.find(s => s.status === 'converted')?.count || 0 },
    { value: 'lost', label: 'Perdu', count: stats.find(s => s.status === 'lost')?.count || 0 }
  ]

  return (
    <div className="min-h-screen bg-[#020203]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Gestion des Prospects</h1>
            <p className="text-sm text-gray-400">{leads.length} prospects au total</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/admin/dashboard"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-bold hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Retour
            </Link>
            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-bold hover:bg-green-500 transition-colors flex items-center gap-2"
            >
              <Download size={18} /> Exporter CSV
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {statusOptions.map((option, index) => {
            const Icon = getStatusIcon(option.value)
            return (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  statusFilter === option.value
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/5'
                }`}
                onClick={() => setStatusFilter(statusFilter === option.value ? 'all' : option.value)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} className="text-gray-400" />
                  <span className="text-sm text-gray-400">{option.label}</span>
                </div>
                <h3 className="text-3xl font-bold text-white">{option.count}</h3>
              </motion.div>
            )
          })}
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher par nom, email ou entreprise..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>

          <button
            onClick={() => setStatusFilter('all')}
            className={`px-6 py-3 rounded-xl font-bold transition-colors ${
              statusFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
            }`}
          >
            Tous ({leads.length})
          </button>
        </div>

        {/* Leads Table */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Entreprise
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredLeads.map((lead, index) => {
                  const StatusIcon = getStatusIcon(lead.status)
                  return (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium flex items-center gap-2">
                            <Users size={16} className="text-gray-500" />
                            {lead.name || 'Sans nom'}
                          </p>
                          <p className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                            <Mail size={14} /> {lead.email}
                          </p>
                          {lead.phone && (
                            <p className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                              <Phone size={14} /> {lead.phone}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {lead.company ? (
                          <span className="flex items-center gap-2 text-gray-300">
                            <Building2 size={16} /> {lead.company}
                          </span>
                        ) : (
                          <span className="text-gray-600">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">{lead.service || '-'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-300">{lead.budget || '-'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(lead.status)}`}>
                          <StatusIcon size={14} />
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar size={16} />
                          {new Date(lead.createdAt).toLocaleDateString('fr-FR')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedLead(lead)
                          }}
                          className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-bold"
                        >
                          Voir détails
                        </button>
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {filteredLeads.length === 0 && (
            <div className="py-12 text-center">
              <Users className="mx-auto text-gray-600 mb-4" size={48} />
              <p className="text-gray-400">Aucun prospect trouvé</p>
            </div>
          )}
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLead(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl p-8 rounded-3xl bg-[#020203] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedLead.name || 'Sans nom'}</h2>
                <p className="text-gray-400">{selectedLead.email}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <XCircle size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {selectedLead.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="text-gray-500" size={20} />
                  <span className="text-white">{selectedLead.phone}</span>
                </div>
              )}
              {selectedLead.company && (
                <div className="flex items-center gap-3">
                  <Building2 className="text-gray-500" size={20} />
                  <span className="text-white">{selectedLead.company}</span>
                </div>
              )}
              {selectedLead.country && (
                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-500" size={20} />
                  <span className="text-white">{selectedLead.country}</span>
                </div>
              )}
              {selectedLead.service && (
                <div className="flex items-center gap-3">
                  <Globe className="text-gray-500" size={20} />
                  <span className="text-white">Service: {selectedLead.service}</span>
                </div>
              )}
              {selectedLead.budget && (
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">💰</span>
                  <span className="text-white">Budget: {selectedLead.budget}</span>
                </div>
              )}
              {selectedLead.message && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm font-mono text-gray-400 mb-2">MESSAGE</p>
                  <p className="text-white">{selectedLead.message}</p>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-mono text-gray-400 mb-3 uppercase">Changer le statut</p>
              <div className="grid grid-cols-2 gap-3">
                {statusOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateLeadStatus(selectedLead.id, option.value)}
                    className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                      selectedLead.status === option.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
