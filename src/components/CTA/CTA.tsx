import { motion } from 'framer-motion'
import { ctaContent, siteConfig } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

export default function CTA() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const handleContactClick = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                             linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-display font-bold text-white mb-6 text-balance">
            {ctaContent.headline}
          </h2>

          {/* Description */}
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mb-10">
            {ctaContent.description}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleContactClick}
              className="btn px-8 py-4 bg-accent-teal text-white rounded-xl hover:bg-accent-teal/90 hover:shadow-lg hover:shadow-accent-teal/30 group"
            >
              <span>{ctaContent.buttonText}</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-4 text-white/60">
              <span className="hidden sm:inline">or reach out via</span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white"
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
