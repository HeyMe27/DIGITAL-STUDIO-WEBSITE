import { motion } from 'framer-motion'
import { introContent } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { Sparkles, Shield, Handshake, Zap } from 'lucide-react'

const icons = [Sparkles, Shield, Handshake]
const iconColors = [
  { bg: 'from-accent-teal to-accent-blue', icon: 'text-accent-teal', glow: 'shadow-glow-teal' },
  { bg: 'from-accent-blue to-accent-purple', icon: 'text-accent-blue', glow: 'shadow-glow-blue' },
  { bg: 'from-accent-purple to-accent-pink', icon: 'text-accent-purple', glow: 'shadow-glow-purple' },
]

export default function Introduction() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-teal/5 via-accent-blue/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-purple/5 to-transparent pointer-events-none rounded-full blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-accent-teal/40' : i % 3 === 1 ? 'bg-accent-blue/40' : 'bg-accent-purple/40'
            }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Zap className="w-5 h-5 text-accent-orange" />
              <span className="text-sm font-semibold text-accent-orange">Our Philosophy</span>
            </motion.div>
            
            <h2 className="heading-display mb-6 text-balance">
              <span className="text-primary-dark">Technology Should </span>
              <span className="text-gradient">Solve Real</span>
              <span className="text-primary-dark"> Business Problems</span>
            </h2>
            <p className="text-body-lg text-text-body leading-relaxed">
              {introContent.description}
            </p>
          </motion.div>

          {/* Right - Principles */}
          <div className="space-y-5">
            {introContent.principles.map((principle, index) => {
              const Icon = icons[index]
              const colors = iconColors[index]

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex gap-5 p-6 rounded-2xl bg-gradient-to-r from-primary-bg/80 to-white border border-transparent hover:border-accent-teal/20 hover:shadow-xl hover:shadow-accent-teal/5 transition-all duration-500 cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center group-hover:${colors.glow} transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2 group-hover:text-gradient transition-all">
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
