import { portfolioData } from '../data/portfolioData'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const { personal, social, footer } = portfolioData

  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="container-custom section-padding !py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">
              {personal.name}
              <span className="text-accent">.</span>
            </p>
            <p className="text-muted text-sm mt-1">{footer.copyright}</p>
          </div>

          <SocialLinks links={social} />

          <p className="text-muted text-xs text-center md:text-right">
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
