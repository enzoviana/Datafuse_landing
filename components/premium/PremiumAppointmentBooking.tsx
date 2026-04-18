'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

interface TimeSlot {
  time: string
  available: boolean
}

export default function PremiumAppointmentBooking() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [step, setStep] = useState<'calendar' | 'time' | 'info' | 'confirmation'>('calendar')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '09:30', available: true },
    { time: '10:00', available: false },
    { time: '10:30', available: true },
    { time: '11:00', available: true },
    { time: '11:30', available: false },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: false },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true },
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    return days
  }

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setStep('time')
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep('info')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
          time: selectedTime,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setStep('confirmation')
      }
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    if (step === 'time') setStep('calendar')
    else if (step === 'info') setStep('time')
  }

  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today || date.getDay() === 0 || date.getDay() === 6
  }

  return (
    <section id="appointment" className="py-32 bg-[#020203] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-6 uppercase">
            CONSULTATION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Réservez votre <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">consultation gratuite</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Discutons de votre projet lors d'un appel de 30 minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden"
        >
          {/* Progress bar */}
          <div className="bg-[#030303] p-6 border-b border-white/10">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {['calendar', 'time', 'info'].map((stepName, index) => (
                <div key={stepName} className="flex items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all font-mono text-sm font-bold ${
                    step === stepName || (step === 'confirmation' && index < 3)
                      ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                      : 'border-white/10 bg-white/5 text-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                  {index < 2 && (
                    <div className={`w-12 sm:w-16 h-0.5 mx-2 ${
                      (step === 'time' && index === 0) || (step === 'info' && index <= 1) || step === 'confirmation'
                        ? 'bg-blue-500'
                        : 'bg-white/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-12">
            <AnimatePresence mode="wait">
              {/* Step 1: Calendar */}
              {step === 'calendar' && (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={handlePreviousMonth}
                        className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </h3>
                      <button
                        onClick={handleNextMonth}
                        className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
                      {dayNames.map((day) => (
                        <div key={day} className="text-center text-xs sm:text-sm font-semibold text-gray-500 py-2 font-mono">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                      {getDaysInMonth(currentMonth).map((date, index) => {
                        const disabled = isDateDisabled(date)
                        const isSelected = date && selectedDate && date.toDateString() === selectedDate.toDateString()

                        return (
                          <button
                            key={index}
                            onClick={() => date && !disabled && handleDateSelect(date)}
                            disabled={disabled || !date}
                            className={`aspect-square rounded-xl flex items-center justify-center text-xs sm:text-sm font-medium transition-all font-mono ${
                              !date
                                ? 'invisible'
                                : disabled
                                ? 'text-gray-600 cursor-not-allowed'
                                : isSelected
                                ? 'bg-blue-600 border border-blue-500/20 text-white shadow-lg scale-105'
                                : 'text-gray-300 hover:bg-white/5 hover:text-blue-400 border border-white/5'
                            }`}
                          >
                            {date?.getDate()}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Time Selection */}
              {step === 'time' && (
                <motion.div
                  key="time"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-6 text-sm font-mono tracking-wider"
                  >
                    <ChevronLeft size={20} />
                    Retour
                  </button>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-mono">
                    {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm">Sélectionnez un créneau horaire</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                        className={`py-3 px-2 sm:px-4 rounded-xl font-mono text-sm sm:text-base font-semibold transition-all ${
                          !slot.available
                            ? 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/5'
                            : selectedTime === slot.time
                            ? 'bg-blue-600 border border-blue-500/20 text-white shadow-lg'
                            : 'border border-white/10 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-white/5'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 'info' && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-6 text-sm font-mono tracking-wider"
                  >
                    <ChevronLeft size={20} />
                    Retour
                  </button>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-mono">Vos informations</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                        Notes (optionnel)
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors resize-none"
                        placeholder="Décrivez brièvement votre projet..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 border border-blue-500/20 text-white font-bold rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm uppercase tracking-wider"
                    >
                      {isSubmitting ? 'Confirmation...' : 'Confirmer le rendez-vous'}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 'confirmation' && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-400" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 font-mono">Rendez-vous confirmé!</h3>
                  <p className="text-gray-400 mb-8">
                    Nous vous attendons le{' '}
                    <span className="font-semibold text-white">
                      {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </span>{' '}
                    à <span className="font-semibold text-white">{selectedTime}</span>
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 max-w-md mx-auto">
                    <p className="text-sm text-gray-300">
                      Un email de confirmation a été envoyé à <span className="font-semibold text-white">{formData.email}</span> avec
                      le lien de visioconférence.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
