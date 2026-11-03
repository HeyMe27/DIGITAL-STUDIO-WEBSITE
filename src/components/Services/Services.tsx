import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { useScrollAnimation } from '@/hooks'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const cardColors = [
  { gradient: 'from-accent-teal/10 via-accent-blue/5 to-transparent', border: 'hover:border-accent-teal/30', shadow: 'hover:shadow-accent-teal/10', dot: 'bg-accent-teal', icon: 'text-accent-teal' },
  { gradient: 'from-accent-blue/10 via-accent-purple/5 to-transparent', border: 'hover:border-accent-blue/30', shadow: 'hover:shadow-accent-blue/10', dot: 'bg-accent-blue', icon: 'text-accent-blue' },
  { gradient: 'from-accent-purple/10 via-accent-pink/5 to-transparent', border: 'hover:border-accent-purple/30', shadow: 'hover:shadow-accent-purple/10', dot: 'bg-accent-purple', icon: 'text-accent-purple' },
  { gradient: 'from-accent-pink/10 via-accent-orange/5 to-transparent', border: 'hover:border-accent-pink/30', shadow: 'hover:shadow-accent-pink/10', dot: 'bg-accent-pink', icon: 'text-accent-pink' },
]

export default function Services() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-gradient-section relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Colorful gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-teal/10 to-accent-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 rounded-full blur-3xl"
        />
        
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #8B5CF6 1px, transparent 0)`,
            backgroundSize: '40px 40px',
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
            <span className="badge-purple">
              <Sparkles className="w-3 h-3 mr-1" />
              Our Expertise
            </span>
          </motion.div>
          <h2 className="heading-display mb-4">
            <span className="text-primary-dark">What We </span>
            <span className="text-gradient">Build</span>
          </h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            From professional websites to custom business applications, we craft digital solutions
            tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = cardColors[index % cardColors.length]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-3xl bg-white border border-primary-dark/5 ${colors.border} hover:shadow-2xl ${colors.shadow} transition-all duration-500`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="heading-2 mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-text-body mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.capabilities.map((capability, capIndex) => (
                      <motion.div
                        key={capability}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + capIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-text-body"
                      >
                        <motion.span 
                          whileHover={{ scale: 1.5 }}
                          className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} 
                        />
                        {capability}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.icon} group/link`}
                  >
                    <span>Discuss your project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
