import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconMail } from '@tabler/icons-react'

const iconMap = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  instagram: IconBrandInstagram,
  email: IconMail,
}

export default function SocialLinks({ links, size = 'md', className = '' }) {
  const sizes = {
    sm: 18,
    md: 20,
    lg: 24,
  }

  const iconSize = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(links).map(([key, url]) => {
        const Icon = iconMap[key]
        if (!Icon || !url) return null

        return (
          <a
            key={key}
            href={url}
            target={key === 'email' ? undefined : '_blank'}
            rel={key === 'email' ? undefined : 'noopener noreferrer'}
            aria-label={key}
            className="
              flex items-center justify-center w-10 h-10 rounded-xl
              glass text-muted-light hover:text-white hover:border-accent/30
              transition-all duration-300 hover:-translate-y-0.5
            "
          >
            <Icon size={iconSize} stroke={1.5} />
          </a>
        )
      })}
    </div>
  )
}
