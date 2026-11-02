import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'

function App() {
  // Smooth scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:projectId" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
