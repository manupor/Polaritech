import React from 'react'
import { Cpu, Grid2X2, Search, Sun, Wrench } from 'lucide-react'

const differentiators = [
  {
    icon: <Cpu size={32} strokeWidth={1.6} />,
    title: 'Tecnología Nano Cerámica',
    desc: 'Alta retención infrarroja sin depender del tinte.',
  },
  {
    icon: <Grid2X2 size={32} strokeWidth={1.6} />,
    title: 'Transparencia con reducción térmica',
    desc: 'Mantenga la estética del vidrio.',
  },
  {
    icon: <Search size={32} strokeWidth={1.6} />,
    title: 'Diagnóstico especializado',
    desc: 'Asesoría según orientación solar, privacidad y arquitectura.',
  },
  {
    icon: <Sun size={32} strokeWidth={1.6} />,
    title: 'Protección UV 99.5%',
    desc: 'Ayuda a proteger interiores, mobiliario y piel.',
  },
  {
    icon: <Wrench size={32} strokeWidth={1.6} />,
    title: 'Instalación profesional',
    desc: 'Acabados limpios y atención premium.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-4 reveal opacity-0 translate-y-8 transition-all duration-700">
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
            ¿POR QUÉ POLARITECH?
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Lo que nos diferencia.
          </p>
          <span className="title-accent" />
        </div>

        {/* 5-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mt-16">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center text-center group"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Premium icon medallion */}
              <div className="icon-lux icon-lux-lg mb-6">
                {d.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: '#203478',
                  lineHeight: 1.35,
                  marginBottom: '8px',
                }}
              >
                {d.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: '0.82rem',
                  color: '#6b7a99',
                  lineHeight: 1.55,
                  fontWeight: 400,
                }}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
