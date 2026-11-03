import { motion } from 'framer-motion'
import { industries } from '@/data/industries'
import { useScrollAnimation } from '@/hooks'
import { ArrowRight, Building } from 'lucide-react'

// Using inline styles for gradients to ensure they render correctly
const cardStyles = [
  { 
    iconGradient: 'linear-gradient(135deg, #14B8A6, #3B82F6)', 
    textColor: '#14B8A6', 
    dotColor: '#14B8A6',
    glowColor: 'rgba(20, 184, 166, 0.3)'
  },
  { 
    iconGradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', 
    textColor: '#3B82F6', 
    dotColor: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.3)'
  },
  { 
    iconGradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)', 
    textColor: '#8B5CF6', 
    dotColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.3)'
  },
  { 
    iconGradient: 'linear-gradient(135deg, #EC4899, #F97316)', 
    textColor: '#EC4899', 
    dotColor: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.3)'
  },
  { 
    iconGradient: 'linear-gradient(135deg, #F97316, #FBBF24)', 
    textColor: '#F97316', 
    dotColor: '#F97316',
    glowColor: 'rgba(249, 115, 22, 0.3)'
  },
  { 
    iconGradient: 'linear-gradient(135deg, #06B6D4, #14B8A6)', 
    textColor: '#06B6D4', 
    dotColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.3)'
  },
]

export default function Industries() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="industries"
      ref={ref}
      className="section-padding bg-gradient-colorful relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-accent-teal/5 via-accent-purple/5 to-accent-pink/5 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-conic from-accent-blue/5 via-accent-orange/5 to-accent-teal/5 blur-3xl"
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
            <span className="badge-teal">
              <Building className="w-3 h-3 mr-1" />
              Industries We Serve
            </span>
          </motion.div>
          <h2 className="heading-display mb-4">
            <span className="text-primary-dark">Digital Solutions </span>
            <span className="text-gradient-warm">Across Industries</span>
          </h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            We understand that different industries have unique requirements. Our solutions are
            tailored to address specific business challenges.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const styles = cardStyles[index % cardStyles.length]

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-6 lg:p-8 border-2 border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                  style={{ background: styles.iconGradient }}
                />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
                    style={{ 
                      background: styles.iconGradient,
                      boxShadow: `0 10px 30px -10px ${styles.glowColor}`
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{ 
                      backgroundImage: styles.iconGradient,
                      WebkitBackgroundClip: 'text',
                    }}
                  >
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Solutions */}
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.map((solution, solIndex) => (
                      <motion.li
                        key={solution}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + solIndex * 0.05 }}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <motion.span 
                          whileHover={{ scale: 1.5 }}
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: styles.dotColor }}
                        />
                        {solution}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: styles.textColor }}
                  >
                    <span>Discuss your needs</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
