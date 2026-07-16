import { useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useActiveSection } from './hooks/useActiveSection'

import LoadingScreen from './components/LoadingScreen'
import ScrollToTop  from './components/ScrollToTop'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import TechStack    from './components/TechStack'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Services     from './components/Services'
// import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import NotFound     from './pages/NotFound'

const SECTION_IDS = ['hero', 'about', 'techstack', 'skills', 'projects', 'services', 'testimonials', 'contact']

function Portfolio() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <ThemeProvider>
      <BrowserRouter>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
