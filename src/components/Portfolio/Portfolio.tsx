import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { useScrollAnimation } from '@/hooks'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from './ProjectCard'

export default function Portfolio() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="work"
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
          <span className="badge-blue mb-4">Our Work</span>
          <h2 className="heading-display mb-4">Selected Work & Digital Experiments</h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            Explore our concept projects and experimental builds that demonstrate our design
            and development capabilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-text-body mb-4">
            These are concept projects demonstrating our capabilities.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-link inline-flex items-center gap-2"
          >
            <span>Discuss your project with us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
