import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconArrowUp } from '@tabler/icons-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl
            glass flex items-center justify-center
            text-muted-light hover:text-white hover:border-accent/30
            transition-colors duration-300
          "
        >
          <IconArrowUp size={20} stroke={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
