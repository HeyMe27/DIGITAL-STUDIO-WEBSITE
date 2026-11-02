import { motion } from 'framer-motion'
import { processSteps } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { Search, Map, Palette, Code, Rocket } from 'lucide-react'

const stepIcons = [Search, Map, Palette, Code, Rocket]

export default function Process() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-blue mb-4">How We Work</span>
          <h2 className="heading-display mb-4">From Idea to Implementation</h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            A structured approach that ensures clarity, quality, and successful delivery
            at every stage of your project.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-accent-teal via-accent-blue to-accent-teal" />

          {/* Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div
                    className={`relative ${
                      isEven ? 'lg:pt-20' : 'lg:pt-0 lg:pb-20'
                    }`}
                  >
                    {/* Connector Dot - Desktop */}
                    <div
                      className={`hidden lg:block absolute left-1/2 -translate-x-1/2 ${
                        isEven ? 'top-[60px]' : 'bottom-[calc(100%-60px)] -translate-y-full'
                      }`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="w-4 h-4 rounded-full bg-white border-4 border-accent-teal shadow-lg shadow-accent-teal/20"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="group bg-primary-bg rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-primary-dark/5 transition-all duration-300 border border-transparent hover:border-primary-dark/5">
                      {/* Number & Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-bold text-accent-teal/20 group-hover:text-accent-teal/30 transition-colors">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-teal/10 to-accent-blue/10 flex items-center justify-center group-hover:from-accent-teal/20 group-hover:to-accent-blue/20 transition-colors">
                          <Icon className="w-6 h-6 text-accent-teal" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-primary-dark mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-body text-body-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
