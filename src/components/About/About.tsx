import { motion } from 'framer-motion'
import { aboutContent } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import { MessageSquare, Target, Eye, Cpu, TrendingUp, HeartHandshake, Sparkles } from 'lucide-react'

const valueIcons = [MessageSquare, Target, Eye, Cpu, TrendingUp, HeartHandshake]
const valueColors = [
  'from-accent-teal to-accent-blue',
  'from-accent-blue to-accent-purple',
  'from-accent-purple to-accent-pink',
  'from-accent-pink to-accent-orange',
  'from-accent-orange to-accent-yellow',
  'from-accent-cyan to-accent-teal',
]

export default function About() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.15 })

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-conic from-accent-teal/20 via-accent-blue/20 via-accent-purple/20 to-accent-teal/20 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-conic from-accent-pink/20 via-accent-orange/20 via-accent-yellow/20 to-accent-pink/20 rounded-full blur-3xl opacity-30"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className={`absolute w-1 h-1 rounded-full ${
              i % 4 === 0 ? 'bg-accent-teal' : i % 4 === 1 ? 'bg-accent-blue' : i % 4 === 2 ? 'bg-accent-purple' : 'bg-accent-pink'
            }`}
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 5) * 18}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent-teal" />
              <span className="text-sm font-semibold text-accent-teal">About the Studio</span>
            </motion.div>

            <h2 className="text-display font-bold mb-6 text-balance">
              <span className="text-white">Built Around </span>
              <span className="text-gradient">Thoughtful</span>
              <span className="text-white"> Engineering</span>
            </h2>

            <div className="space-y-4 text-white/70 text-body-lg leading-relaxed">
              {aboutContent.description.split('\n\n').map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-accent"
              >
                Start a Conversation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutContent.values.map((value, index) => {
              const Icon = valueIcons[index]
              const gradient = valueColors[index]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <p className="text-white/90 text-body-sm leading-relaxed pt-2">
                      {value}
                    </p>
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
