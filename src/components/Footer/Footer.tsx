import { siteConfig } from '@/data/siteConfig'
import { ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Website Development', href: '/#services' },
    { name: 'Web Applications', href: '/#services' },
    { name: 'Business Automation', href: '/#services' },
    { name: 'Website Support', href: '/#services' },
  ],
  company: [
    { name: 'About Us', href: '/#about' },
    // { name: 'Our Work', href: '/#work' }, // Hidden for now
    { name: 'Industries', href: '/#industries' },
    { name: 'Contact', href: '/#contact' },
  ],
}

export default function Footer() {
  const handleNavClick = (href: string) => {
    const elementId = href.replace('/#', '')
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="flex items-center gap-2 font-bold text-xl mb-4 hover:text-accent-teal transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-accent-teal to-accent-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              <span>{siteConfig.brandName}</span>
            </a>
            <p className="text-white/60 text-body-sm leading-relaxed">
              {siteConfig.shortDescription}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-white/60 hover:text-white transition-colors text-body-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-white/60 hover:text-white transition-colors text-body-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-body-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-white/60">
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
              </li>
            </ul>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('/#contact')}
              className="mt-6 px-5 py-2.5 bg-accent-teal text-white text-sm font-medium rounded-lg hover:bg-accent-teal/90 transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-body-sm">
            © {currentYear} {siteConfig.brandName}. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-body-sm"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
