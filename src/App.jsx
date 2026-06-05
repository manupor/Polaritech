import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import SolarRadiation from './components/SolarRadiation'
import Applications from './components/Applications'
import Comparison from './components/Comparison'
import ExperienciaReal from './components/ExperienciaReal'
import BeforeAfter from './components/BeforeAfter'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import EducationalBlog from './components/EducationalBlog'
import CTABanner from './components/CTABanner'
import FAQ from './components/FAQ'
import Quote from './components/Quote'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import StickyMobileCTA from './components/StickyMobileCTA'

function App() {
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
      <Navbar />
      <main>
        {/* 1. Hero — Más que polarizado. Ingeniería solar */}
        <Hero />
        {/* 2. Solar Radiation — ¿Sabías que el calor no siempre es visible? (única sección de ciencia) */}
        <SolarRadiation />
        {/* 3. Benefits — ¿Por qué Polaritech? */}
        <Benefits />
        {/* 5. Applications — Nuestras Soluciones para cada espacio */}
        <Applications />
        {/* 6. Comparison — Nano cerámica vs. polarizado convencional */}
        <Comparison />
        {/* 7. Experiencia Real — Antes/Después, Mediciones, Instalaciones, Testimonios */}
        <ExperienciaReal />
        {/* 8. Before/After — Comparador visual interactivo */}
        <BeforeAfter />
        {/* 8. Process — Proceso Polaritech (5 pasos) */}
        <HowItWorks />
        {/* 9. Testimonials — Clientes reales */}
        <Testimonials />
        {/* 10. Centro Educativo — Blog / artículos educativos */}
        <EducationalBlog />
        {/* 11. CTA Final — La tecnología detrás del confort */}
        <CTABanner />
        {/* 12. FAQ — Preguntas frecuentes */}
        <FAQ />
        {/* 13. Quote Form — Captura de leads */}
        <Quote />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  )
}

export default App
