import { motion } from 'framer-motion'
import { introContent } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { Sparkles, Shield, Handshake } from 'lucide-react'

const icons = [Sparkles, Shield, Handshake]

export default function Introduction() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-bg/50 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <h2 className="heading-display mb-6 text-balance">
              {introContent.headline}
            </h2>
            <p className="text-body-lg text-text-body leading-relaxed">
              {introContent.description}
            </p>
          </motion.div>

          {/* Right - Principles */}
          <div className="space-y-6">
            {introContent.principles.map((principle, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="group flex gap-5 p-6 rounded-2xl bg-primary-bg/50 border border-transparent hover:border-accent-teal/20 hover:bg-white hover:shadow-lg hover:shadow-accent-teal/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-teal/10 to-accent-blue/10 flex items-center justify-center group-hover:from-accent-teal/20 group-hover:to-accent-blue/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent-teal" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-text-body text-body-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
