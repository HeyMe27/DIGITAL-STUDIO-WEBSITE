import { motion } from 'framer-motion'
import { aboutContent } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { MessageSquare, Target, Eye, Cpu, TrendingUp, HeartHandshake } from 'lucide-react'

const valueIcons = [MessageSquare, Target, Eye, Cpu, TrendingUp, HeartHandshake]

export default function About() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.15 })

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-primary-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-accent-teal text-sm font-medium rounded-full mb-6">
              About the Studio
            </span>

            <h2 className="text-display font-bold text-white mb-6 text-balance">
              {aboutContent.headline}
            </h2>

            <div className="space-y-4 text-white/80 text-body-lg leading-relaxed">
              {aboutContent.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-accent"
              >
                Start a Conversation
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutContent.values.map((value, index) => {
              const Icon = valueIcons[index]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-teal/20 flex items-center justify-center group-hover:bg-accent-teal/30 transition-colors">
                      <Icon className="w-5 h-5 text-accent-teal" />
                    </div>
                    <p className="text-white/90 text-body-sm leading-relaxed pt-2">
                      {value}
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
