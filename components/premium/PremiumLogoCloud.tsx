'use client'

import React from "react"
import { PlusIcon, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"
import { useTranslation } from "@/contexts/LanguageContext"

type Logo = {
  name: string
  text: string
  color: string 
}

// Utilisation d'une interface propre pour éviter la pollution des types HTML natifs
interface LogoCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  logo: Logo
  isLastInRow?: boolean
  children?: React.ReactNode
}

function LogoCard({ logo, className, children, isLastInRow, ...props }: LogoCardProps) {
  return (
    <motion.div
      {...props}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
      className={cn(
        "group relative flex items-center justify-center bg-transparent px-4 py-12 border-white/5 border-r border-b transition-colors duration-500",
        isLastInRow && "md:border-r-0",
        className
      )}
    >
      <div className="relative z-10">
        <span className={cn(
          "text-xl md:text-2xl font-bold tracking-tighter transition-all duration-500",
          "text-white/20 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
          logo.color
        )}>
          {logo.text}
        </span>
      </div>
      
      {/* Correction de l'erreur : 
          On utilise une div standard (non-motion) pour les effets de style statiques 
          afin d'éviter les conflits de types MotionValue sur 'opacity'
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      
      {children}
    </motion.div>
  )
}

export default function PremiumLogoCloud() {
  const { t } = useTranslation()

  const logos: Logo[] = [
    { name: "aws", text: "AWS", color: "group-hover:text-orange-400" },
    { name: "google-cloud", text: "GCP", color: "group-hover:text-blue-400" },
    { name: "vercel", text: "Vercel", color: "group-hover:text-white" },
    { name: "github", text: "GitHub", color: "group-hover:text-white" },
    { name: "stripe", text: "Stripe", color: "group-hover:text-indigo-400" },
    { name: "openai", text: "OpenAI", color: "group-hover:text-emerald-400" },
    { name: "supabase", text: "Supabase", color: "group-hover:text-emerald-500" },
    { name: "cloudflare", text: "Cloudflare", color: "group-hover:text-orange-500" },
  ]

  return (
    <section className="py-32 bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-blue-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4"
          >
            <Zap size={12} fill="currentColor" />
            <span>{t.logoCloud.badge}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t.logoCloud.title}
          </h2>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 border-l border-t border-white/5 rounded-2xl overflow-hidden shadow-2xl bg-black/20">
          {logos.map((logo, index) => {
            const isLastInRow = (index + 1) % 4 === 0
            const hasPlusIcon = [0, 1, 2, 4, 5, 6].includes(index)

            return (
              <LogoCard 
                key={logo.name} 
                logo={logo} 
                isLastInRow={isLastInRow}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {hasPlusIcon && (
                  <PlusIcon
                    className="absolute -right-[12px] -bottom-[12px] z-20 size-6 text-white/10 group-hover:text-blue-500/50 transition-colors duration-500"
                    strokeWidth={0.5}
                  />
                )}
              </LogoCard>
            )
          })}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="mt-12 text-center text-gray-500 font-mono text-[10px] uppercase tracking-widest"
        >
          {t.logoCloud.description}
        </motion.p>
      </div>
    </section>
  )
}