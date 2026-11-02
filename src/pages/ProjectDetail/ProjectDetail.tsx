import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Layers,
  BarChart3,
  Check,
  Lightbulb,
  Target,
  Puzzle,
  Palette,
  Code,
} from 'lucide-react'

const categoryIcons: Record<string, typeof Globe> = {
  'Website Development': Globe,
  'Web Application': Layers,
  Dashboard: BarChart3,
}

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  const project = projects.find((p) => p.id === projectId)
  const currentIndex = projects.findIndex((p) => p.id === projectId)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  useEffect(() => {
    if (!project) {
      navigate('/')
      return
    }
    document.title = `${project.title} | Codeflow Studio`
    window.scrollTo({ top: 0 })
  }, [project, navigate])

  if (!project) {
    return null
  }

  const Icon = categoryIcons[project.category] || Globe

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
          }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${project.color} 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="container-custom relative">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-text-body hover:text-primary-dark transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all projects</span>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Labels */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1.5 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.label}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-text-body">
                    <Icon className="w-4 h-4" />
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-display font-bold text-primary-dark mb-4">
                  {project.title}
                </h1>

                {/* Subtitle */}
                <p className="text-heading-3 text-text-body mb-6">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-body-lg text-text-body leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Project Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div
                  className="aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                  }}
                >
                  <ProjectDetailPreview project={project} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <Lightbulb className="w-5 h-5" style={{ color: project.color }} />
                  </div>
                  <h2 className="heading-2">The Challenge</h2>
                </div>
                <p className="text-body-lg text-text-body leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <Code className="w-5 h-5" style={{ color: project.color }} />
                  </div>
                  <h2 className="heading-3">Technologies</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium rounded-lg border"
                      style={{
                        borderColor: `${project.color}30`,
                        backgroundColor: `${project.color}05`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <Target className="w-5 h-5" style={{ color: project.color }} />
                </div>
                <h2 className="heading-2">The Solution</h2>
              </div>
              <p className="text-body-lg text-text-body leading-relaxed max-w-4xl">
                {project.solution}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <Puzzle className="w-5 h-5" style={{ color: project.color }} />
                </div>
                <h2 className="heading-2">Key Features</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-primary-bg"
                  >
                    <div
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: project.color }} />
                    </div>
                    <span className="text-primary-dark">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Design Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <Palette className="w-5 h-5" style={{ color: project.color }} />
                </div>
                <h2 className="heading-2">Design Approach</h2>
              </div>
              <p className="text-body-lg text-text-body leading-relaxed max-w-4xl">
                {project.designApproach}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding-sm bg-primary-bg">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-body-lg text-text-body mb-6">
                This is a concept project demonstrating our design and development capabilities.
                Looking to build something similar?
              </p>
              <Link
                to="/#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="py-12 bg-white border-t border-primary-dark/5">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to={`/work/${prevProject.id}`}
                className="group flex items-center gap-3 p-4 rounded-xl hover:bg-primary-bg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-text-body group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-text-body mb-1">Previous Project</div>
                  <div className="font-medium text-primary-dark">{prevProject.title}</div>
                </div>
              </Link>

              <Link
                to="/#work"
                className="text-text-body hover:text-primary-dark transition-colors"
              >
                View All Projects
              </Link>

              <Link
                to={`/work/${nextProject.id}`}
                className="group flex items-center gap-3 p-4 rounded-xl hover:bg-primary-bg transition-colors"
              >
                <div className="text-right">
                  <div className="text-xs text-text-body mb-1">Next Project</div>
                  <div className="font-medium text-primary-dark">{nextProject.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-text-body group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  )
}

// Detailed Project Preview Component
function ProjectDetailPreview({ project }: { project: typeof projects[0] }) {
  if (project.id === 'precision-manufacturing') {
    return <ManufacturingDetailPreview color={project.color} />
  }
  if (project.id === 'serenity-resort') {
    return <ResortDetailPreview color={project.color} />
  }
  if (project.id === 'operations-dashboard') {
    return <DashboardDetailPreview color={project.color} />
  }
  return null
}

function ManufacturingDetailPreview({ color }: { color: string }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-primary-dark/10">
        <div className="bg-primary-dark/5 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded h-6 px-3 flex items-center">
              <span className="text-xs text-text-body/50">precisionmanufacturing.com</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-dark" />
              <div className="h-3 w-32 bg-primary-dark/30 rounded" />
            </div>
            <div className="flex gap-4">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <div key={item} className="h-2 w-14 bg-primary-dark/15 rounded" />
              ))}
              <div className="h-8 w-24 rounded" style={{ backgroundColor: color }} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="space-y-3">
              <div className="h-5 w-full bg-primary-dark/80 rounded" />
              <div className="h-5 w-4/5 bg-primary-dark/60 rounded" />
              <div className="h-3 w-full bg-primary-dark/15 rounded mt-4" />
              <div className="h-3 w-3/4 bg-primary-dark/10 rounded" />
              <div className="h-10 w-32 rounded mt-4" style={{ backgroundColor: color }} />
            </div>
            <div className="rounded-xl" style={{ backgroundColor: `${color}25` }}>
              <div className="p-4 flex items-center justify-center h-full">
                <div className="text-center opacity-60">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-white/80 mb-2" />
                  <div className="h-2 w-20 mx-auto bg-white/50 rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-square rounded-lg" style={{ backgroundColor: `${color}20` }} />
                <div className="h-2 w-3/4 bg-primary-dark/20 rounded" />
                <div className="h-2 w-1/2 bg-primary-dark/10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ResortDetailPreview({ color }: { color: string }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-primary-dark/10">
        <div className="bg-primary-dark/5 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded h-6 px-3 flex items-center">
              <span className="text-xs text-text-body/50">serenityhillsresort.com</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="h-3 w-36 bg-primary-dark/30 rounded" />
            <div className="flex gap-4 items-center">
              {['Rooms', 'Dining', 'Spa', 'Gallery'].map((item) => (
                <div key={item} className="h-2 w-12 bg-primary-dark/15 rounded" />
              ))}
              <div className="h-8 w-24 rounded" style={{ backgroundColor: color }} />
            </div>
          </div>
          <div
            className="aspect-video rounded-xl mb-6 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${color}35, ${color}15)` }}
          >
            <div className="text-center">
              <div className="h-6 w-48 bg-white/90 rounded mx-auto mb-3" />
              <div className="h-3 w-32 bg-white/70 rounded mx-auto mb-4" />
              <div className="h-10 w-28 bg-white rounded mx-auto" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {['Deluxe Suite', 'Pool Villa', 'Garden Room'].map((room) => (
              <div key={room} className="space-y-2">
                <div
                  className="aspect-[4/3] rounded-lg"
                  style={{ backgroundColor: `${color}25` }}
                />
                <div className="h-2 w-3/4 bg-primary-dark/25 rounded" />
                <div className="h-2 w-1/2 bg-primary-dark/15 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardDetailPreview({ color }: { color: string }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-primary-dark/10">
        <div className="bg-primary-dark/5 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded h-6 px-3 flex items-center">
              <span className="text-xs text-text-body/50">app.operationshub.io/dashboard</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-16 bg-primary-dark p-3 space-y-3">
            <div className="w-full aspect-square rounded-lg bg-white/20" />
            <div className="w-full aspect-square rounded-lg bg-white/10" />
            <div className="w-full aspect-square rounded-lg bg-white/10" />
            <div className="w-full aspect-square rounded-lg bg-white/10" />
            <div className="w-full aspect-square rounded-lg bg-white/10" />
          </div>
          <div className="flex-1 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="h-3 w-24 bg-primary-dark/30 rounded" />
              <div className="flex gap-2">
                <div className="h-8 w-20 bg-primary-dark/10 rounded" />
                <div className="h-8 w-8 rounded-full bg-primary-dark/10" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {['Revenue', 'Orders', 'Customers', 'Growth'].map((stat, i) => (
                <div key={stat} className="p-3 rounded-lg bg-primary-bg">
                  <div className="h-2 w-12 bg-primary-dark/20 rounded mb-2" />
                  <div
                    className="h-4 w-16 rounded"
                    style={{ backgroundColor: i === 0 ? color : `${color}70` }}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary-bg">
                <div className="h-2 w-16 bg-primary-dark/20 rounded mb-3" />
                <div className="h-24 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 75, 90, 60, 85, 70, 95, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 11 ? color : `${color}50`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-primary-bg">
                <div className="h-2 w-20 bg-primary-dark/20 rounded mb-3" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((row) => (
                    <div key={row} className="flex gap-2">
                      <div className="h-3 flex-1 bg-primary-dark/10 rounded" />
                      <div className="h-3 w-12 bg-primary-dark/5 rounded" />
                      <div
                        className="h-3 w-8 rounded"
                        style={{ backgroundColor: `${color}40` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
