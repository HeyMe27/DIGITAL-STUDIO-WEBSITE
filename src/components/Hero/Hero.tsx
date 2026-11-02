import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { heroContent } from '@/data/siteConfig'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Hero() {
  const handleNavClick = (href: string) => {
    const elementId = href.replace('/#', '')
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-bg via-white to-primary-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #101B2D 1px, transparent 1px),
                             linear-gradient(to bottom, #101B2D 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Card 1 - Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="absolute top-[15%] right-[5%] lg:right-[8%] hidden md:block"
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-48 lg:w-64 bg-white rounded-xl shadow-2xl shadow-primary-dark/10 border border-primary-dark/5 p-3 lg:p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-primary-dark/10 rounded w-3/4" />
              <div className="h-2 bg-primary-dark/5 rounded w-1/2" />
              <div className="flex gap-2 mt-3">
                <div className="h-8 bg-accent-teal/20 rounded flex-1" />
                <div className="h-8 bg-accent-blue/20 rounded flex-1" />
              </div>
              <div className="h-16 bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 rounded mt-2" />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Card 2 - Code Window */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ duration: 1, delay: 1, ease: [0.19, 1, 0.22, 1] }}
          className="absolute bottom-[20%] left-[3%] lg:left-[6%] hidden md:block"
        >
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-44 lg:w-56 bg-secondary-dark rounded-xl shadow-2xl shadow-primary-dark/20 p-3 lg:p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="space-y-1.5 font-mono text-[10px] lg:text-xs">
              <div className="text-accent-teal">{'<Component>'}</div>
              <div className="text-text-body/60 pl-3">{'props={data}'}</div>
              <div className="text-accent-blue pl-3">{'onClick={handle}'}</div>
              <div className="text-accent-teal">{'</Component>'}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Card 3 - Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="absolute top-[35%] right-[2%] lg:right-[3%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="w-40 bg-white rounded-xl shadow-xl shadow-primary-dark/10 border border-primary-dark/5 p-4"
          >
            <div className="text-xs text-text-body mb-1">Monthly Growth</div>
            <div className="text-2xl font-bold text-primary-dark">+24.5%</div>
            <div className="mt-2 flex items-end gap-1 h-8">
              {[3, 5, 4, 7, 6, 8, 9].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-accent-teal to-accent-teal/50 rounded-t"
                  style={{ height: `${h * 10}%` }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-24 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex mb-6">
            <span className="px-4 py-2 bg-accent-teal/10 text-accent-teal text-sm font-medium rounded-full border border-accent-teal/20">
              Digital Solutions Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-display-xl font-bold text-primary-dark mb-6 text-balance"
          >
            {heroContent.headline.split(' ').map((word, i) => (
              <span key={i}>
                {word === 'Digital' || word === 'Forward' ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  word
                )}{' '}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-text-body max-w-2xl mx-auto mb-10"
          >
            {heroContent.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => handleNavClick(heroContent.primaryCTA.href)}
              className="btn-primary group"
            >
              {heroContent.primaryCTA.text}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNavClick(heroContent.secondaryCTA.href)}
              className="btn-secondary"
            >
              {heroContent.secondaryCTA.text}
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleNavClick('/#services')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-body/60 hover:text-accent-teal transition-colors"
            aria-label="Scroll to services"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
