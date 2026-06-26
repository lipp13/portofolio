import { portfolioData } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import SkillIcon from '../components/SkillIcon'
import FadeIn, { StaggerContainer, StaggerItem } from '../components/FadeIn'

export default function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            label="Skills"
            title="Skills & Tech Stack"
            subtitle="Teknologi dan tools yang saya gunakan untuk membangun produk digital."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.categories.map((category, catIndex) => (
            <FadeIn key={category.name} delay={catIndex * 0.1}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full gradient-border">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-accent rounded-full" />
                  {category.name}
                </h3>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.items.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <div
                        className="
                          flex items-center gap-3 p-3 rounded-xl
                          bg-white/[0.02] border border-border
                          hover:border-accent/20 hover:bg-accent/5
                          transition-all duration-300 group
                        "
                      >
                        <SkillIcon icon={skill.icon} name={skill.name} />
                        <span className="text-sm text-muted-light group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
