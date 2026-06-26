import { portfolioData } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import FadeIn, { StaggerContainer, StaggerItem } from '../components/FadeIn'

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            label="About Me"
            title="Tentang Saya"
            subtitle="Perjalanan saya dalam dunia teknologi dan passion untuk membangun solusi digital."
          />
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3 space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-muted-light leading-relaxed text-base md:text-lg">{about.intro}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-light leading-relaxed">{about.passion}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="glass rounded-2xl p-6 border border-border">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Fokus Belajar Saat Ini
                </h3>
                <p className="text-muted-light text-sm leading-relaxed">{about.currentFocus}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="glass rounded-2xl p-6 border border-border">
                <h3 className="text-white font-semibold mb-2">Tujuan Karier</h3>
                <p className="text-muted-light text-sm leading-relaxed">{about.careerGoal}</p>
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="lg:col-span-2 grid gap-4">
            {about.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="glass rounded-2xl p-6 text-center gradient-border hover:border-accent/20 transition-all duration-300 group">
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
