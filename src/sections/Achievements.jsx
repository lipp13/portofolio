import { IconExternalLink, IconCertificate, IconTrophy, IconBook, IconAward } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import FadeIn, { StaggerContainer, StaggerItem } from '../components/FadeIn'

const typeIcons = {
  Certificate: IconCertificate,
  Competition: IconTrophy,
  Course: IconBook,
  Award: IconAward,
}

export default function Achievements() {
  const { achievements } = portfolioData

  return (
    <section id="achievements" className="section-padding bg-surface-elevated">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            label="Achievements"
            title="Achievements & Certificates"
            subtitle="Sertifikasi, kompetisi, dan pencapaian yang membentuk perjalanan saya."
          />
        </FadeIn>

        <StaggerContainer className="flex flex-wrap justify-center gap-6">
          {achievements.map((item) => {
            const Icon = typeIcons[item.type] || IconCertificate

            return (
              <StaggerItem key={item.id} className="w-full sm:w-80 lg:w-96">
                <div className="glass rounded-2xl p-6 h-full gradient-border hover:border-accent/20 transition-all duration-300 group flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light">
                      <Icon size={20} stroke={1.5} />
                    </div>
                    <Badge variant={item.type}>{item.type}</Badge>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-accent-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-accent/80 text-xs font-medium mb-3">
                    {item.issuer} · {item.date}
                  </p>
                  <p className="text-muted-light text-sm leading-relaxed flex-1 mb-4">
                    {item.description}
                  </p>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors mt-auto"
                    >
                      View Details
                      <IconExternalLink size={14} />
                    </a>
                  )}
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}