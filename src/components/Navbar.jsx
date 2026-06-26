import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-semibold text-white hover:text-accent-light transition-colors"
        >
          liftech
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {portfolioData.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-4 py-2 text-sm text-muted-light hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 text-sm font-medium rounded-xl bg-accent/10 text-accent-light border border-accent/20 hover:bg-accent/20 transition-all duration-300"
        >
          Hire Me
        </a>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-muted-light hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {portfolioData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMobile}
                    className="block px-4 py-3 text-muted-light hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="block text-center px-4 py-3 text-sm font-medium rounded-xl bg-accent/10 text-accent-light border border-accent/20"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
