import { useState } from 'react'
import { IconSend, IconMail, IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

const contactInfo = [
  { icon: IconMail, label: 'Email', value: portfolioData.personal.email, href: portfolioData.social.email },
  { icon: IconBrandLinkedin, label: 'LinkedIn', value: 'alifalfathar', href: portfolioData.social.linkedin },
  { icon: IconBrandGithub, label: 'GitHub', value: 'github.com/lipp13', href: portfolioData.social.github },
  { icon: IconBrandInstagram, label: 'Instagram', value: '@alfthrrr13', href: portfolioData.social.instagram },
]

export default function Contact() {
  const { contact, personal } = portfolioData
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${personal.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`
    window.location.href = mailtoLink
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            label="Contact"
            title="Hubungi Saya"
            subtitle={contact.subtitle}
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {contact.cta}
              </h3>
              <p className="text-muted-light mb-8 leading-relaxed">
                Saya selalu terbuka untuk diskusi project, kolaborasi, atau sekadar ngobrol
                seputar teknologi.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'Email' ? undefined : '_blank'}
                    rel={info.label === 'Email' ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:border-accent/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors">
                      <info.icon size={20} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 gradient-border">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-light mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="
                      w-full px-4 py-3 rounded-xl bg-surface border border-border
                      text-white placeholder:text-muted text-sm
                      focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                      transition-all duration-300
                    "
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-muted-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="
                      w-full px-4 py-3 rounded-xl bg-surface border border-border
                      text-white placeholder:text-muted text-sm
                      focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                      transition-all duration-300
                    "
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted-light mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Ceritakan tentang project atau ide Anda..."
                    className="
                      w-full px-4 py-3 rounded-xl bg-surface border border-border
                      text-white placeholder:text-muted text-sm resize-none
                      focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30
                      transition-all duration-300
                    "
                  />
                </div>

                <Button type="submit" className="w-full" icon={IconSend}>
                  Kirim Pesan
                </Button>

                {status === 'success' && (
                  <p className="text-emerald-400 text-sm text-center">
                    Pesan berhasil disiapkan! Email client Anda akan terbuka.
                  </p>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
