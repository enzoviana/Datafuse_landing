import { useEffect, useState } from 'react'

/**
 * Hook pour détecter si on doit réduire les animations
 * - Sur mobile : animations réduites pour performances
 * - Préférence système : respect du prefers-reduced-motion
 */
export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Détecter si on est sur mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 ||
                     /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      setIsMobile(mobile)
      return mobile
    }

    // Détecter la préférence utilisateur
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateMotionPreference = () => {
      const mobile = checkMobile()
      // Réduire les animations si mobile OU si préférence utilisateur
      setShouldReduceMotion(mediaQuery.matches || mobile)
    }

    updateMotionPreference()

    mediaQuery.addEventListener('change', updateMotionPreference)
    window.addEventListener('resize', updateMotionPreference)

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference)
      window.removeEventListener('resize', updateMotionPreference)
    }
  }, [])

  return { shouldReduceMotion, isMobile }
}

/**
 * Variantes d'animation optimisées pour mobile
 */
export const getOptimizedVariants = (isMobile: boolean) => {
  if (isMobile) {
    // Animations simples et rapides pour mobile
    return {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: 'easeOut'
        }
      }
    }
  }

  // Animations complètes pour desktop
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
}

/**
 * Configuration Framer Motion optimisée pour mobile
 */
export const getMobileConfig = (isMobile: boolean) => ({
  // Réduire la complexité des animations sur mobile
  type: isMobile ? 'tween' : 'spring',
  stiffness: isMobile ? undefined : 100,
  damping: isMobile ? undefined : 20,
  duration: isMobile ? 0.3 : 0.6,
})
