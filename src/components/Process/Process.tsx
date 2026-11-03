import { motion } from 'framer-motion'
import { processSteps } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { Search, Map, Palette, Code, Rocket, Workflow } from 'lucide-react'

const stepIcons = [Search, Map, Palette, Code, Rocket]
const stepColors = [
  { gradient: 'from-accent-teal to-accent-blue', glow: 'shadow-accent-teal/30', bg: 'bg-accent-teal/10' },
  { gradient: 'from-accent-blue to-accent-purple', glow: 'shadow-accent-blue/30', bg: 'bg-accent-blue/10' },
  { gradient: 'from-accent-purple to-accent-pink', glow: 'shadow-accent-purple/30', bg: 'bg-accent-purple/10' },
  { gradient: 'from-accent-pink to-accent-orange', glow: 'shadow-accent-pink/30', bg: 'bg-accent-pink/10' },
  { gradient: 'from-accent-orange to-accent-teal', glow: 'shadow-accent-orange/30', bg: 'bg-accent-orange/10' },
]

export default function Process() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(59, 130, 246, 0.05) 25%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 75%, rgba(249, 115, 22, 0.05) 100%)',
            backgroundSize: '400% 400%',
          }}
        />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="badge-blue">
              <Workflow className="w-3 h-3 mr-1" />
              How We Work
            </span>
          </motion.div>
          <h2 className="heading-display mb-4">
            <span className="text-primary-dark">From </span>
            <span className="text-gradient">Idea</span>
            <span className="text-primary-dark"> to </span>
            <span className="text-gradient-vivid">Implementation</span>
          </h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            A structured approach that ensures clarity, quality, and successful delivery
            at every stage of your project.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop with animated gradient */}
          <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-1 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: '-100%' }}
              animate={isInView ? { x: '0%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full w-full bg-gradient-to-r from-accent-teal via-accent-blue via-accent-purple via-accent-pink to-accent-orange"
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index]
              const colors = stepColors[index]

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="relative"
                >
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group relative pt-16 lg:pt-24"
                  >
                    {/* Connector Circle */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 lg:top-[60px]">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.15, type: 'spring' }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg ${colors.glow} transition-all duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div className={`${colors.bg} rounded-3xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary-dark/5`}>
                      {/* Number */}
                      <motion.span 
                        className={`text-5xl font-bold bg-gradient-to-br ${colors.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}
                      >
                        {step.number}
                      </motion.span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-gradient transition-all">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-body text-body-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
