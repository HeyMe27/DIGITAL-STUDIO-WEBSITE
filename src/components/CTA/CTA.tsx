import { motion } from 'framer-motion'
import { ctaContent, siteConfig } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { ArrowRight, Mail, MessageCircle, Sparkles } from 'lucide-react'

export default function CTA() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const handleContactClick = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 30%, #0F172A 60%, #1E293B 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />

        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl"
        />

        {/* Sparkle particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeOut',
            }}
            className="absolute"
            style={{
              left: `${10 + i * 9}%`,
              top: `${70 + (i % 3) * 10}%`,
            }}
          >
            <Sparkles className={`w-3 h-3 ${
              i % 3 === 0 ? 'text-accent-teal/60' : i % 3 === 1 ? 'text-accent-purple/60' : 'text-accent-pink/60'
            }`} />
          </motion.div>
        ))}
      </div>

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-display font-bold mb-6 text-balance">
            <span className="text-white">Have an Idea? </span>
            <span className="text-gradient">Let's Build</span>
            <span className="text-white"> Something </span>
            <span className="text-gradient-vivid">Meaningful</span>
          </h2>

          {/* Description */}
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-10">
            {ctaContent.description}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContactClick}
              className="group px-8 py-4 rounded-xl font-semibold text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #14B8A6, #3B82F6, #8B5CF6, #EC4899)',
                backgroundSize: '300% 300%',
                animation: 'gradient 5s ease infinite',
              }}
            >
              <span className="relative z-10 flex items-center">
                {ctaContent.buttonText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <div className="flex items-center gap-4 text-white/50">
              <span className="hidden sm:inline">or reach out via</span>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent-teal/30 transition-all text-white"
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4 text-accent-teal" />
                  <span className="text-sm">Email</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent-teal/30 transition-all text-white"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-accent-teal" />
                  <span className="text-sm">WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
