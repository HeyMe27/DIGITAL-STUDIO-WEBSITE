import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { useScrollAnimation } from '@/hooks'
import { ArrowUpRight } from 'lucide-react'

export default function Services() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-primary-bg relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #101B2D 1px, transparent 0)`,
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
          <span className="badge-teal mb-4">Our Expertise</span>
          <h2 className="heading-display mb-4">What We Build</h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            From professional websites to custom business applications, we craft digital solutions
            tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const Icon = service.icon
            const accentColorClass = service.accentColor === 'accent-teal' ? 'text-accent-teal' : 'text-accent-blue'
            const dotColorClass = service.accentColor === 'accent-teal' ? 'bg-accent-teal' : 'bg-accent-blue'

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
                className={`group grid md:grid-cols-2 gap-6 lg:gap-12 items-center ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  <div className="p-8 lg:p-10">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                    >
                      <Icon className={`w-7 h-7 ${accentColorClass}`} />
                    </div>

                    <h3 className="heading-2 mb-4">{service.title}</h3>
                    <p className="text-text-body mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <button
                      onClick={() => {
                        const element = document.getElementById('contact')
                        if (element) element.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="btn-link group/link inline-flex items-center gap-2"
                    >
                      <span>Discuss your project</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Capabilities Side */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <div
                    className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 lg:p-10 border border-primary-dark/5`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.capabilities.map((capability, capIndex) => (
                        <motion.div
                          key={capability}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + capIndex * 0.05,
                          }}
                          className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white shadow-sm group-hover:shadow-md transition-shadow"
                        >
                          <div className={`w-2 h-2 rounded-full ${dotColorClass}`} />
                          <span className="text-sm font-medium text-primary-dark">
                            {capability}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
