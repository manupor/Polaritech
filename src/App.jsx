import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import ProblemSolutionCards from './components/ProblemSolutionCards'
import History from './components/History'
import Philosophy from './components/Philosophy'
import OurSolutions from './components/OurSolutions'
import Applications from './components/Applications'
import Contact from './components/Contact'
import InstagramGallery from './components/InstagramGallery'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import StickyMobileCTA from './components/StickyMobileCTA'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#EEF4F8] text-[#203478] font-sans">
      <Preloader onLoaded={() => setLoaded(true)} />
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
      <main>
        {/* HERO */}
        <Hero />
        {/* PROBLEMA + SOLUCIÓN — cards superpuestos al hero */}
        <ProblemSolutionCards />
        {/* NUESTRAS SOLUCIONES */}
        <OurSolutions />
        {/* APLICACIONES */}
        <Applications />
        {/* GALERÍA INSTAGRAM */}
        <InstagramGallery />
        {/* NUESTRA HISTORIA */}
        <History />
        {/* NUESTRA FILOSOFÍA */}
        <Philosophy />
        {/* CONTACTO */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
      </div>
    </div>
  )
}

export default App
