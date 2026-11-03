import { motion } from 'framer-motion'
import { industries } from '@/data/industries'
import { useScrollAnimation } from '@/hooks'
import { ArrowRight, Building } from 'lucide-react'

const cardGradients = [
  { bg: 'from-accent-teal/5 to-accent-blue/5', border: 'border-accent-teal/20', icon: 'from-accent-teal to-accent-blue', text: 'text-accent-teal', dot: 'bg-accent-teal' },
  { bg: 'from-accent-blue/5 to-accent-purple/5', border: 'border-accent-blue/20', icon: 'from-accent-blue to-accent-purple', text: 'text-accent-blue', dot: 'bg-accent-blue' },
  { bg: 'from-accent-purple/5 to-accent-pink/5', border: 'border-accent-purple/20', icon: 'from-accent-purple to-accent-pink', text: 'text-accent-purple', dot: 'bg-accent-purple' },
  { bg: 'from-accent-pink/5 to-accent-orange/5', border: 'border-accent-pink/20', icon: 'from-accent-pink to-accent-orange', text: 'text-accent-pink', dot: 'bg-accent-pink' },
  { bg: 'from-accent-orange/5 to-accent-yellow/5', border: 'border-accent-orange/20', icon: 'from-accent-orange to-accent-yellow', text: 'text-accent-orange', dot: 'bg-accent-orange' },
  { bg: 'from-accent-cyan/5 to-accent-teal/5', border: 'border-accent-cyan/20', icon: 'from-accent-cyan to-accent-teal', text: 'text-accent-cyan', dot: 'bg-accent-cyan' },
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
            const colors = cardGradients[index % cardGradients.length]

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
                className={`group relative bg-white rounded-3xl p-6 lg:p-8 border-2 border-transparent hover:${colors.border} hover:shadow-2xl transition-all duration-500`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colors.icon} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.icon} mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="heading-3 mb-3 group-hover:text-gradient transition-all duration-300">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-body text-body-sm mb-5 leading-relaxed">
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
                        className="flex items-start gap-2 text-sm text-text-body"
                      >
                        <motion.span 
                          whileHover={{ scale: 1.5 }}
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} 
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
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text}`}
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
