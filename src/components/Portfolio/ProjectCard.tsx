import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import { ArrowUpRight, Layers, Globe, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  project: Project
  index: number
}

const categoryIcons: Record<string, typeof Globe> = {
  'Website Development': Globe,
  'Web Application': Layers,
  Dashboard: BarChart3,
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0
  const Icon = categoryIcons[project.category] || Globe

  return (
    <Link to={`/work/${project.id}`}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
        className="group relative grid md:grid-cols-5 gap-6 lg:gap-10 items-center"
      >
        {/* Project Preview */}
        <div
          className={`md:col-span-3 ${!isEven ? 'md:order-2' : ''}`}
        >
          <div
            className="relative aspect-[16/10] rounded-2xl overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
          >
            {/* Placeholder for project image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ProjectPreview project={project} />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/60 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="flex items-center gap-2 px-5 py-3 bg-white rounded-full font-medium text-primary-dark">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.div>
            </div>

            {/* Project Label */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 text-xs font-medium rounded-full backdrop-blur-md"
                style={{
                  backgroundColor: `${project.color}20`,
                  color: project.color,
                }}
              >
                {project.label}
              </span>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className={`md:col-span-2 ${!isEven ? 'md:order-1' : ''}`}>
          <div className="space-y-4">
            {/* Category */}
            <div className="flex items-center gap-2 text-text-body">
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{project.category}</span>
            </div>

            {/* Title */}
            <h3 className="heading-2 group-hover:text-accent-teal transition-colors">
              {project.title}
            </h3>

            {/* Subtitle */}
            <p className="text-lg text-text-body/80">{project.subtitle}</p>

            {/* Description */}
            <p className="text-text-body leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-primary-dark/5 text-primary-dark rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

// Project Preview Component - Creates visual mockups for each project
function ProjectPreview({ project }: { project: Project }) {
  if (project.id === 'precision-manufacturing') {
    return <ManufacturingPreview color={project.color} />
  }
  if (project.id === 'serenity-resort') {
    return <ResortPreview color={project.color} />
  }
  if (project.id === 'operations-dashboard') {
    return <DashboardPreview color={project.color} />
  }
  return null
}

// Manufacturing Website Preview
function ManufacturingPreview({ color }: { color: string }) {
  return (
    <div className="w-full max-w-lg mx-auto px-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-primary-dark/10">
        {/* Browser Bar */}
        <div className="bg-primary-dark/5 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded h-5 px-2 flex items-center">
              <span className="text-[10px] text-text-body/50">precisionmfg.com</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-4">
          {/* Nav */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary-dark" />
              <div className="h-2 w-20 bg-primary-dark/20 rounded" />
            </div>
            <div className="flex gap-3">
              <div className="h-2 w-12 bg-primary-dark/10 rounded" />
              <div className="h-2 w-12 bg-primary-dark/10 rounded" />
              <div className="h-2 w-12 bg-primary-dark/10 rounded" />
            </div>
          </div>
          {/* Hero */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="h-3 w-full bg-primary-dark/80 rounded" />
              <div className="h-3 w-3/4 bg-primary-dark/60 rounded" />
              <div className="h-2 w-full bg-primary-dark/10 rounded mt-3" />
              <div className="h-2 w-2/3 bg-primary-dark/10 rounded" />
              <div
                className="h-6 w-24 rounded mt-3"
                style={{ backgroundColor: color }}
              />
            </div>
            <div
              className="rounded-lg"
              style={{ backgroundColor: `${color}20` }}
            />
          </div>
          {/* Products Grid */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-1">
                <div
                  className="aspect-square rounded"
                  style={{ backgroundColor: `${color}15` }}
                />
                <div className="h-1.5 bg-primary-dark/20 rounded w-3/4" />
                <div className="h-1 bg-primary-dark/10 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Resort Website Preview
function ResortPreview({ color }: { color: string }) {
  return (
    <div className="w-full max-w-lg mx-auto px-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-primary-dark/10">
        {/* Browser Bar */}
        <div className="bg-primary-dark/5 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded h-5 px-2 flex items-center">
              <span className="text-[10px] text-text-body/50">serenityhills.com</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-4">
          {/* Nav */}
          <div className="flex justify-between items-center mb-4">
            <div className="h-2 w-24 bg-primary-dark/20 rounded" />
            <div className="flex gap-3">
              <div className="h-2 w-10 bg-primary-dark/10 rounded" />
              <div className="h-2 w-10 bg-primary-dark/10 rounded" />
              <div
                className="h-5 w-16 rounded"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>
          {/* Hero Image */}
          <div
            className="aspect-video rounded-lg mb-4 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)` }}
          >
            <div className="text-center">
              <div className="h-3 w-32 bg-white/80 rounded mx-auto mb-2" />
              <div className="h-2 w-20 bg-white/60 rounded mx-auto" />
            </div>
          </div>
          {/* Room Cards */}
          <div className="grid grid-cols-3 gap-2">
            {['Suite', 'Deluxe', 'Villa'].map((room) => (
              <div key={room} className="space-y-1">
                <div
                  className="aspect-[4/3] rounded"
                  style={{ backgroundColor: `${color}20` }}
                />
                <div className="h-1.5 bg-primary-dark/20 rounded w-2/3" />
                <div className="h-1 bg-primary-dark/10 rounded w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Dashboard Preview
function DashboardPreview({ color }: { color: string }) {
  return (
    <div className="w-full max-w-lg mx-auto px-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-primary-dark/10">
        {/* Browser Bar */}
        <div className="bg-primary-dark/5 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded h-5 px-2 flex items-center">
              <span className="text-[10px] text-text-body/50">app.opshub.io</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 bg-primary-dark p-2 space-y-2">
            <div className="w-full aspect-square rounded bg-white/20" />
            <div className="w-full aspect-square rounded bg-white/10" />
            <div className="w-full aspect-square rounded bg-white/10" />
            <div className="w-full aspect-square rounded bg-white/10" />
          </div>
          {/* Main */}
          <div className="flex-1 p-3">
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {['Revenue', 'Orders', 'Users', 'Growth'].map((stat, i) => (
                <div key={stat} className="p-2 rounded bg-primary-bg">
                  <div className="h-1 w-8 bg-primary-dark/20 rounded mb-1" />
                  <div
                    className="h-2 w-10 rounded"
                    style={{ backgroundColor: i === 0 ? color : `${color}60` }}
                  />
                </div>
              ))}
            </div>
            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-2">
              {/* Line Chart */}
              <div className="p-2 rounded bg-primary-bg">
                <div className="h-1 w-12 bg-primary-dark/20 rounded mb-2" />
                <div className="h-12 flex items-end gap-1">
                  {[4, 6, 3, 8, 5, 7, 9].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h * 10}%`,
                        backgroundColor: i === 6 ? color : `${color}40`,
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Data Table */}
              <div className="p-2 rounded bg-primary-bg">
                <div className="h-1 w-12 bg-primary-dark/20 rounded mb-2" />
                <div className="space-y-1">
                  {[1, 2, 3].map((row) => (
                    <div key={row} className="flex gap-1">
                      <div className="h-2 flex-1 bg-primary-dark/10 rounded" />
                      <div className="h-2 w-8 bg-primary-dark/5 rounded" />
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
