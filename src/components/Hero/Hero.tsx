import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react'
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #8B5CF6 1px, transparent 1px),
                             linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Colorful Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent-teal/30 via-accent-blue/20 to-accent-purple/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-accent-pink/30 via-accent-purple/20 to-accent-blue/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 15, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-accent-orange/20 via-accent-pink/20 to-accent-purple/20 rounded-full blur-3xl"
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
            animate={{ y: [-5, 5, -5], rotate: [12, 10, 12] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-48 lg:w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-accent-purple/20 border border-white/50 p-3 lg:p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-pink" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-orange" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-teal" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gradient-to-r from-accent-purple/30 to-accent-blue/30 rounded w-3/4" />
              <div className="h-2 bg-primary-dark/10 rounded w-1/2" />
              <div className="flex gap-2 mt-3">
                <div className="h-8 bg-gradient-to-r from-accent-teal/30 to-accent-blue/30 rounded flex-1" />
                <div className="h-8 bg-gradient-to-r from-accent-pink/30 to-accent-purple/30 rounded flex-1" />
              </div>
              <div className="h-16 bg-gradient-to-r from-accent-teal/10 via-accent-blue/10 to-accent-purple/10 rounded mt-2" />
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
            animate={{ y: [5, -5, 5], rotate: [-8, -6, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-44 lg:w-56 bg-gradient-to-br from-primary-dark to-secondary-dark rounded-2xl shadow-2xl shadow-accent-blue/20 p-3 lg:p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-pink" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-orange" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-teal" />
            </div>
            <div className="space-y-1.5 font-mono text-[10px] lg:text-xs">
              <div className="text-accent-teal">{'<Component>'}</div>
              <div className="text-accent-purple/80 pl-3">{'  className="magic"'}</div>
              <div className="text-accent-pink/80 pl-3">{'  animate={true}'}</div>
              <div className="text-accent-blue/80 pl-3">{'  onClick={handle}'}</div>
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
            animate={{ y: [-8, 8, -8], rotate: [6, 8, 6] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="w-40 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-accent-teal/20 border border-white/50 p-4"
          >
            <div className="text-xs text-text-body mb-1">Monthly Growth</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent">+24.5%</div>
            <div className="mt-2 flex items-end gap-1 h-8">
              {[3, 5, 4, 7, 6, 8, 9].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 10}%` }}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                  className="flex-1 rounded-t"
                  style={{
                    background: `linear-gradient(to top, ${
                      i % 3 === 0 ? '#14B8A6' : i % 3 === 1 ? '#3B82F6' : '#8B5CF6'
                    }, ${
                      i % 3 === 0 ? '#14B8A680' : i % 3 === 1 ? '#3B82F680' : '#8B5CF680'
                    })`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              y: [0, -100],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.8,
              ease: 'easeOut'
            }}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + (i % 3) * 10}%`,
            }}
          >
            <Sparkles className={`w-4 h-4 ${
              i % 3 === 0 ? 'text-accent-teal' : i % 3 === 1 ? 'text-accent-purple' : 'text-accent-pink'
            }`} />
          </motion.div>
        ))}
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
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 bg-gradient-to-r from-accent-teal/10 via-accent-blue/10 to-accent-purple/10 text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-accent-blue to-accent-purple text-sm font-semibold rounded-full border border-accent-teal/30 backdrop-blur-sm"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              <span className="bg-gradient-to-r from-accent-teal via-accent-blue to-accent-purple bg-clip-text text-transparent">
                ✨ Digital Solutions Studio
              </span>
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-display-xl font-bold text-primary-dark mb-6 text-balance"
          >
            {heroContent.headline.split(' ').map((word, i) => (
              <span key={i}>
                {word === 'Digital' ? (
                  <span className="text-gradient">{word}</span>
                ) : word === 'Forward' ? (
                  <span className="text-gradient-vivid">{word}</span>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick(heroContent.primaryCTA.href)}
              className="btn-primary group"
            >
              {heroContent.primaryCTA.text}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick(heroContent.secondaryCTA.href)}
              className="btn-secondary"
            >
              {heroContent.secondaryCTA.text}
            </motion.button>
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
            className="flex flex-col items-center gap-2 text-text-body/60 hover:text-accent-purple transition-colors"
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
