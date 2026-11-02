import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Services from '@/components/Services'
// import Portfolio from '@/components/Portfolio' // Hidden for now
import Industries from '@/components/Industries'
import Process from '@/components/Process'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  // Update document title
  useEffect(() => {
    document.title = 'Codeflow Studio | Digital Solutions That Move Businesses Forward'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        {/* <Portfolio /> */} {/* Hidden for now */}
        <Industries />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
