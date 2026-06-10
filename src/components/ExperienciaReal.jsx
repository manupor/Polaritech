import React from 'react'
import { ScanLine, Gauge, Building2 } from 'lucide-react'

const items = [
  {
    icon: <ScanLine size={22} />,
    title: 'Antes / Después',
    desc: 'Diferencia visible en temperatura y claridad.',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <Gauge size={22} />,
    title: 'Mediciones reales',
    desc: 'Pruebas con equipos profesionales bajo condiciones reales.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Instalaciones',
    desc: 'Proyectos reales en hogares, oficinas y comercios.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
]

export default function ExperienciaReal() {
  return (
    <section id="experiencia-real" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-10 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            className="font-black"
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 900,
              color: '#203478',
              letterSpacing: '0.01em',
            }}
          >
            EXPERIENCIA REAL
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Resultados comprobados.
          </p>
          <span className="title-accent" />
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2.5 mb-2" style={{ color: '#203478' }}>
                {item.icon}
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Rubik, sans-serif', color: '#203478' }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#6b7a99' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
