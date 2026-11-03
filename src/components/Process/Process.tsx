import { motion } from 'framer-motion'
import { processSteps } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { Search, Map, Palette, Code, Rocket, Workflow } from 'lucide-react'

const stepIcons = [Search, Map, Palette, Code, Rocket]

// Using inline styles for reliable gradient rendering
const stepStyles = [
  { gradient: 'linear-gradient(135deg, #14B8A6, #3B82F6)', glow: 'rgba(20, 184, 166, 0.3)', bgLight: 'rgba(20, 184, 166, 0.1)' },
  { gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', glow: 'rgba(59, 130, 246, 0.3)', bgLight: 'rgba(59, 130, 246, 0.1)' },
  { gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)', glow: 'rgba(139, 92, 246, 0.3)', bgLight: 'rgba(139, 92, 246, 0.1)' },
  { gradient: 'linear-gradient(135deg, #EC4899, #F97316)', glow: 'rgba(236, 72, 153, 0.3)', bgLight: 'rgba(236, 72, 153, 0.1)' },
  { gradient: 'linear-gradient(135deg, #F97316, #14B8A6)', glow: 'rgba(249, 115, 22, 0.3)', bgLight: 'rgba(249, 115, 22, 0.1)' },
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
          <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-1 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              initial={{ x: '-100%' }}
              animate={isInView ? { x: '0%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full w-full"
              style={{ background: 'linear-gradient(90deg, #14B8A6, #3B82F6, #8B5CF6, #EC4899, #F97316)' }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index]
              const styles = stepStyles[index]

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
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300"
                        style={{ 
                          background: styles.gradient,
                          boxShadow: `0 10px 30px -10px ${styles.glow}`
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div 
                      className="rounded-3xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-100"
                      style={{ backgroundColor: styles.bgLight }}
                    >
                      {/* Number */}
                      <span 
                        className="text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ 
                          background: styles.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {step.number}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
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
