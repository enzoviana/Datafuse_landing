'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

interface LeadData {
  name?: string
  email?: string
  phone?: string
  service?: string
  budget?: string
}

export default function PremiumChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Bonjour! 👋 Je suis votre assistant virtuel. Comment puis-je vous aider aujourd\'hui?',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [leadData, setLeadData] = useState<LeadData>({})
  const [conversationStage, setConversationStage] = useState<'greeting' | 'service' | 'budget' | 'contact' | 'complete'>('greeting')

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const addMessage = (content: string, type: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, newMessage])
  }

  const getBotResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    switch (conversationStage) {
      case 'greeting':
        if (lowerMessage.includes('site') || lowerMessage.includes('web')) {
          setLeadData(prev => ({ ...prev, service: 'Site Web' }))
          setConversationStage('budget')
          return 'Parfait! Un site web professionnel. Notre offre démarre à 2000€ HT. Quel est votre budget approximatif?'
        } else if (lowerMessage.includes('app') || lowerMessage.includes('application') || lowerMessage.includes('mobile')) {
          setLeadData(prev => ({ ...prev, service: 'Application Mobile & Web' }))
          setConversationStage('budget')
          return 'Super! Applications mobile et web à partir de 7500€ HT. Quel budget avez-vous prévu?'
        } else if (lowerMessage.includes('mvp')) {
          setLeadData(prev => ({ ...prev, service: 'MVP Express' }))
          setConversationStage('budget')
          return 'Excellent choix! Notre MVP Express livré en 2 semaines est à 4500€ HT. Cela correspond à votre budget?'
        } else {
          setConversationStage('service')
          return 'Je peux vous aider avec:\n• Sites web professionnels (à partir de 2000€)\n• MVP Express en 2 semaines (4500€)\n• Applications mobile & web (à partir de 7500€)\n\nQuel type de projet vous intéresse?'
        }

      case 'service':
        if (lowerMessage.includes('site') || lowerMessage.includes('web') || lowerMessage.includes('1')) {
          setLeadData(prev => ({ ...prev, service: 'Site Web' }))
          setConversationStage('budget')
          return 'Parfait! Site web à partir de 2000€ HT. Quel est votre budget?'
        } else if (lowerMessage.includes('mvp') || lowerMessage.includes('2')) {
          setLeadData(prev => ({ ...prev, service: 'MVP Express' }))
          setConversationStage('budget')
          return 'Excellent! MVP Express à 4500€ HT, livré en 2 semaines. Confirmez-vous ce budget?'
        } else if (lowerMessage.includes('app') || lowerMessage.includes('mobile') || lowerMessage.includes('3')) {
          setLeadData(prev => ({ ...prev, service: 'Application Mobile & Web' }))
          setConversationStage('budget')
          return 'Super! Applications à partir de 7500€ HT. Quel budget avez-vous prévu?'
        }
        return 'Pouvez-vous choisir parmi:\n1. Site web\n2. MVP Express\n3. Application mobile & web'

      case 'budget':
        setLeadData(prev => ({ ...prev, budget: userMessage }))
        setConversationStage('contact')
        return 'Parfait! Pour vous proposer un devis personnalisé, puis-je avoir votre nom et email?'

      case 'contact':
        const emailMatch = userMessage.match(/[\w.-]+@[\w.-]+\.\w+/)
        if (emailMatch) {
          setLeadData(prev => ({ ...prev, email: emailMatch[0] }))
          setConversationStage('complete')

          try {
            await fetch('/api/leads', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...leadData,
                email: emailMatch[0],
                source: 'chatbot',
              }),
            })
          } catch (error) {
            console.error('Error saving lead:', error)
          }

          return `Merci beaucoup! 🎉\n\n✅ Service: ${leadData.service}\n✅ Budget: ${leadData.budget}\n✅ Email: ${emailMatch[0]}\n\nUn de nos experts va vous contacter sous 24h pour discuter de votre projet en détail!`
        }
        return 'Je n\'ai pas détecté d\'email valide. Pouvez-vous me donner votre adresse email? (ex: nom@example.com)'

      case 'complete':
        return 'Votre demande est déjà enregistrée! Un expert va vous recontacter bientôt. Y a-t-il autre chose que je puisse faire pour vous?'

      default:
        return 'Comment puis-je vous aider?'
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    addMessage(inputValue, 'user')
    const userMsg = inputValue
    setInputValue('')

    setIsTyping(true)
    await new Promise(resolve => setTimeout(resolve, 1000))

    const botResponse = await getBotResponse(userMsg)
    setIsTyping(false)
    addMessage(botResponse, 'bot')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-blue-500/30 transition-all border border-blue-500/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">1</span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 left-4 md:left-auto md:right-6 z-50 md:w-96 h-[600px] bg-[#0a0a0b] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-[#030303] p-6 text-white border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                  <Bot size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base font-mono tracking-wider">Assistant DataFuse</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-500 font-mono uppercase tracking-[0.2em]">En ligne</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#0a0a0b]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'bot' ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-white/5 border border-white/10 text-white'
                  }`}>
                    {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.type === 'bot' ? 'bg-white/5 border border-white/10 text-gray-300' : 'bg-blue-600 border border-blue-500/20 text-white'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/10 bg-[#0a0a0b]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500/20"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-[10px] text-gray-600 mt-2 text-center font-mono tracking-[0.2em] uppercase">Propulsé par IA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
