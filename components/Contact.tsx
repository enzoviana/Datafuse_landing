'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Globe, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: '',
    budget: '',
    projectBrief: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          fullName: '',
          email: '',
          serviceType: '',
          budget: '',
          projectBrief: ''
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <section id="contact" className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Glow effect décoratif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6">
            {t.contact.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            {t.contact.title} <span className="text-gray-600 italic">{t.contact.subtitle}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Info Side - 2 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">{t.contact.hq}</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.contact.emailLabel}</p>
                    <a href="mailto:contact@datafuse.fr" className="text-white hover:text-blue-400 transition-colors">contact@datafuse.fr</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-colors">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.contact.locationLabel}</p>
                    <p className="text-white">{t.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilité Card */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-green-500 uppercase tracking-widest">{t.contact.availableTitle}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t.contact.availableDesc }} />
              <div className="space-y-3">
                {t.contact.benefits.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side - 3 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  {t.contact.form.success}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {t.contact.form.error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">{t.contact.form.fullName}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder={t.contact.form.fullNamePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">{t.contact.form.serviceType}</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#030303]">--</option>
                    {t.contact.form.serviceOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#030303]">{option}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">{t.contact.form.budget}</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#030303]">--</option>
                    {t.contact.form.budgetOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#030303]">{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">{t.contact.form.projectBrief}</label>
                <textarea
                  name="projectBrief"
                  value={formData.projectBrief}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder={t.contact.form.projectBriefPlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}