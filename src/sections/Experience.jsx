import { portfolioData } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import FadeIn from '../components/FadeIn'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            label="Experience"
            title="Proyek & Pengalaman Belajar"
            subtitle="Berikut adalah beberapa proyek dan pengalaman belajar yang telah saya lakukan, mencakup pengembangan web, manajemen proyek, dan sertifikasi terkait teknologi."
          />
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-border-light" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="relative pl-12 md:pl-20">
                  <div className="absolute left-2.5 md:left-6.5 top-6 w-3 h-3 rounded-full bg-accent border-4 border-surface z-10" />

                  <div className="glass rounded-2xl p-6 md:p-8 gradient-border hover:border-accent/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.position}</h3>
                        <p className="text-accent-light text-sm font-medium">{item.company}</p>
                      </div>
                      <span className="text-muted text-xs sm:text-sm whitespace-nowrap">
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-muted-light text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
