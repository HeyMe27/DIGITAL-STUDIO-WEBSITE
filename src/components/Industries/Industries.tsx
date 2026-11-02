import { motion } from 'framer-motion'
import { industries } from '@/data/industries'
import { useScrollAnimation } from '@/hooks'
import { ArrowRight } from 'lucide-react'

export default function Industries() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="industries"
      ref={ref}
      className="section-padding bg-primary-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-teal/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent-blue/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-teal mb-4">Industries We Serve</span>
          <h2 className="heading-display mb-4">Digital Solutions Across Industries</h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            We understand that different industries have unique requirements. Our solutions are
            tailored to address specific business challenges.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const isTeal = industry.color === 'accent-teal'
            const iconBgClass = isTeal ? 'bg-accent-teal/10' : 'bg-accent-blue/10'
            const iconColorClass = isTeal ? 'text-accent-teal' : 'text-accent-blue'
            const dotColorClass = isTeal ? 'bg-accent-teal' : 'bg-accent-blue'
            const linkColorClass = isTeal ? 'text-accent-teal' : 'text-accent-blue'
            const cornerGradientClass = isTeal ? 'from-accent-teal/5' : 'from-accent-blue/5'

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-primary-dark/5 hover:border-accent-teal/20 hover:shadow-xl hover:shadow-accent-teal/5 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${iconBgClass} mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${iconColorClass}`} />
                </div>

                {/* Title */}
                <h3 className="heading-3 mb-3">{industry.title}</h3>

                {/* Description */}
                <p className="text-text-body text-body-sm mb-5 leading-relaxed">
                  {industry.description}
                </p>

                {/* Solutions */}
                <ul className="space-y-2 mb-6">
                  {industry.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="flex items-start gap-2 text-sm text-text-body"
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${dotColorClass} flex-shrink-0`} />
                      {solution}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${linkColorClass} hover:gap-3 transition-all`}
                >
                  <span>Discuss your needs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${cornerGradientClass} to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
