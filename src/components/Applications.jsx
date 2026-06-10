import React from 'react'
import { Home, Building2, Building, PanelsTopLeft } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxScale } from '../hooks/useParallax'

const spaces = [
  {
    icon: <Home size={22} />,
    title: 'Hogares',
    desc: 'Confort térmico y protección para toda la familia.',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Oficinas',
    desc: 'Mayor productividad con confort visual y térmico.',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <Building size={22} />,
    title: 'Condominios',
    desc: 'Soluciones que respetan reglas de construcción.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <PanelsTopLeft size={22} />,
    title: 'Comercios',
    desc: 'Protección de productos y comodidad para clientes.',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <Home size={22} />,
    title: 'Grandes ventanales',
    desc: 'Control solar de alto rendimiento para amplios espacios.',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Applications() {
  const headerRef = useScrollAnimation(0.15)
  const cardsRef = useScrollAnimation(0.2)
  const scaleRef = useParallaxScale(0.9, 1.1, 0.002)
  return (
    <section id="soluciones" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            className="font-black"
            style={{
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 700,
              color: '#203478',
              letterSpacing: '0.01em',
            }}
          >
            APLICACIONES
          </h2>
          <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Lugares donde optimizamos tu confort y privacidad.
          </p>
          <span className="title-accent" />
        </div>

        {/* 5-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {spaces.map((s, i) => (
            <div
              key={s.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2.5 mb-2" style={{ color: '#203478' }}>
                {s.icon}
                <h3 className="font-bold text-lg" style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#203478' }}>
                  {s.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed font-light" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#6b7a99' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
