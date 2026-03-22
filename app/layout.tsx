import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DataFuse Studio - Solutions Digitales Premium | Développement SaaS & Web',
  description: 'Nous forgeons des architectures scalables et des interfaces haute-performance. Expert en développement SaaS, applications web, mobile et sites vitrine. Transformez votre vision en expériences digitales exceptionnelles.',
  keywords: 'développement SaaS, application web, application mobile, développement web, solutions digitales, logiciel sur mesure, Next.js, React Native, architecture cloud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}
