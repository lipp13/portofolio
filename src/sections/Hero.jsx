import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconDownload, IconArrowRight } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolioData'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import FadeIn from '../components/FadeIn'

export default function Hero() {
  const { personal, social } = portfolioData
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [personal.roles.length])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Hello, I'm
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                {personal.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="h-8 mb-6 overflow-hidden">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl gradient-text font-medium"
                >
                  {personal.roles[roleIndex]}
                </motion.p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-muted-light text-base md:text-lg leading-relaxed max-w-lg mb-8">
                {personal.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button href={personal.cvUrl} download icon={IconDownload}>
                  Download CV
                </Button>
                <Button href="#projects" variant="secondary" icon={IconArrowRight} iconPosition="right">
                  Lihat Project
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <SocialLinks links={social} />
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl scale-110" />
              <div className="relative gradient-border rounded-3xl p-1">
                <div className="glass rounded-3xl p-2">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 hidden sm:block">
                <p className="text-xs text-muted">📍 {personal.location}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
