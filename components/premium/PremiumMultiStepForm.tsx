'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Euro, Clock, FileText, Phone, Mail, User,
  CheckCircle2, ArrowRight, ArrowLeft, X
} from 'lucide-react'

interface FormData {
  service: string
  budget: string
  deadline: string
  description: string
  name: string
  email: string
  phone: string
  honeypot: string
  timestamp: number
}

interface PremiumMultiStepFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function PremiumMultiStepForm({ isOpen, onClose }: PremiumMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    service: '',
    budget: '',
    deadline: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    honeypot: '',
    timestamp: Date.now(),
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalSteps = 6

  useEffect(() => {
    setFormData(prev => ({ ...prev, timestamp: Date.now() }))
  }, [])

  const services = [
    'Site Web Vitrine',
    'E-commerce',
    'Application Mobile',
    'Application Web',
    'MVP / Prototype',
    'Refonte de site',
    'Autre',
  ]

  const budgets = [
    'Moins de 2000€',
    '2000€ - 5000€',
    '5000€ - 10000€',
    '10000€ - 20000€',
    'Plus de 20000€',
  ]

  const deadlines = [
    'Urgent (moins d\'1 mois)',
    'Court terme (1-3 mois)',
    'Moyen terme (3-6 mois)',
    'Long terme (6+ mois)',
    'Pas de contrainte',
  ]

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.service) newErrors.service = 'Veuillez sélectionner un service'
        break
      case 2:
        if (!formData.budget) newErrors.budget = 'Veuillez sélectionner un budget'
        break
      case 3:
        if (!formData.deadline) newErrors.deadline = 'Veuillez sélectionner un délai'
        break
      case 4:
        if (!formData.description.trim() || formData.description.length < 20) {
          newErrors.description = 'Veuillez décrire votre projet (minimum 20 caractères)'
        }
        break
      case 5:
        if (!formData.name.trim()) newErrors.name = 'Veuillez entrer votre nom'
        if (!formData.email.trim()) {
          newErrors.email = 'Veuillez entrer votre email'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Email invalide'
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Veuillez entrer votre téléphone'
        } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
          newErrors.phone = 'Numéro de téléphone invalide'
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    setErrors({})
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    if (formData.honeypot) {
      console.log('Bot detected')
      return
    }

    const timeTaken = Date.now() - formData.timestamp
    if (timeTaken < 5000) {
      console.log('Form submitted too quickly')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/project-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: formData.service,
          budget: formData.budget,
          deadline: formData.deadline,
          description: formData.description,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          source: 'multi-step-form',
          submittedAt: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setCurrentStep(totalSteps)
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setCurrentStep(1)
      setFormData({
        service: '',
        budget: '',
        deadline: '',
        description: '',
        name: '',
        email: '',
        phone: '',
        honeypot: '',
        timestamp: Date.now(),
      })
      setSubmitSuccess(false)
      setErrors({})
    }, 300)
  }

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none"
          >
            <div className="bg-[#0a0a0b] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden pointer-events-auto">
              {/* Header */}
              <div className="bg-[#030303] p-4 sm:p-6 text-white relative border-b border-white/10">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 pr-10 font-mono tracking-wider">Démarrez votre projet</h2>
                <p className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-[0.2em] uppercase">Réponse sous 24h garantie</p>

                <div className="mt-6 bg-white/5 border border-white/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs text-gray-500 font-mono tracking-[0.2em] uppercase">
                  Étape {currentStep} sur {totalSteps - 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-12 overflow-y-auto max-h-[calc(95vh-220px)] sm:max-h-[calc(90vh-200px)]">
                <AnimatePresence mode="wait">
                  {/* Step 1: Service */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                          <Search className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">Quel service recherchez-vous?</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <button
                            key={service}
                            onClick={() => setFormData({ ...formData, service })}
                            className={`p-3 sm:p-4 rounded-xl border text-left text-sm sm:text-base font-semibold transition-all ${
                              formData.service === service
                                ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                                : 'border-white/10 text-gray-300 hover:border-blue-500/50 hover:bg-white/5'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                      {errors.service && <p className="text-red-400 text-sm mt-2">{errors.service}</p>}
                    </motion.div>
                  )}

                  {/* Step 2: Budget */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                          <Euro className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">Quel est votre budget?</h3>
                      </div>

                      <div className="space-y-3">
                        {budgets.map((budget) => (
                          <button
                            key={budget}
                            onClick={() => setFormData({ ...formData, budget })}
                            className={`w-full p-4 rounded-xl border text-left font-semibold transition-all ${
                              formData.budget === budget
                                ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                                : 'border-white/10 text-gray-300 hover:border-blue-500/50 hover:bg-white/5'
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                      {errors.budget && <p className="text-red-400 text-sm mt-2">{errors.budget}</p>}
                    </motion.div>
                  )}

                  {/* Step 3: Deadline */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                          <Clock className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">Quel est votre délai?</h3>
                      </div>

                      <div className="space-y-3">
                        {deadlines.map((deadline) => (
                          <button
                            key={deadline}
                            onClick={() => setFormData({ ...formData, deadline })}
                            className={`w-full p-4 rounded-xl border text-left font-semibold transition-all ${
                              formData.deadline === deadline
                                ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                                : 'border-white/10 text-gray-300 hover:border-blue-500/50 hover:bg-white/5'
                            }`}
                          >
                            {deadline}
                          </button>
                        ))}
                      </div>
                      {errors.deadline && <p className="text-red-400 text-sm mt-2">{errors.deadline}</p>}
                    </motion.div>
                  )}

                  {/* Step 4: Description */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                          <FileText className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">Décrivez votre projet</h3>
                      </div>

                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none"
                        placeholder="Décrivez votre projet en détail: objectifs, fonctionnalités souhaitées, public cible..."
                      />
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500 font-mono">
                          {formData.description.length} / 20 caractères minimum
                        </span>
                        {errors.description && <p className="text-red-400 text-sm">{errors.description}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Contact Info */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                          <User className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">Vos coordonnées</h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Nom complet</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                              placeholder="John Doe"
                            />
                          </div>
                          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                              placeholder="john@example.com"
                            />
                          </div>
                          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Téléphone</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                              placeholder="+33 6 12 34 56 78"
                            />
                          </div>
                          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <input
                          type="text"
                          name="website"
                          value={formData.honeypot}
                          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                          className="absolute opacity-0 pointer-events-none"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 6: Success */}
                  {currentStep === 6 && submitSuccess && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-green-400" size={40} />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 font-mono">Demande envoyée!</h3>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Merci pour votre demande! Notre équipe va l'étudier et vous recontacter dans les 24h.
                      </p>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 max-w-md mx-auto">
                        <p className="text-sm text-gray-300">
                          Un email de confirmation a été envoyé à{' '}
                          <span className="font-semibold text-white">{formData.email}</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {currentStep < 6 && (
                <div className="p-4 sm:p-6 border-t border-white/10 flex items-center justify-between gap-2">
                  {currentStep > 1 ? (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-xl font-semibold transition-colors font-mono tracking-wider"
                    >
                      <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Retour</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 5 ? (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-1 sm:gap-2 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-all font-mono tracking-wider border border-blue-500/20"
                    >
                      Suivant
                      <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-mono tracking-wider border border-blue-500/20"
                    >
                      {isSubmitting ? 'Envoi...' : 'Envoyer'}
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
