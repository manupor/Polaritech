import React from 'react'
import { ArrowRight, Shield, Sun, Thermometer, Cpu, CheckCircle2 } from 'lucide-react'

const heroFeatures = [
  { icon: <Thermometer size={18} strokeWidth={1.6} />, label: 'Reducción térmica' },
  { icon: <Shield size={18} strokeWidth={1.6} />, label: 'Protección UV 99.5%' },
  { icon: <Sun size={18} strokeWidth={1.6} />, label: 'Transparencia sin tono' },
  { icon: <Cpu size={18} strokeWidth={1.6} />, label: 'Tecnología Nano Cerámica' },
  { icon: <CheckCircle2 size={18} strokeWidth={1.6} />, label: 'Instalación profesional' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Full-width background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Polaritech%20hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(32,52,120,0.85) 0%, rgba(32,52,120,0.70) 50%, rgba(91,161,48,0.60) 100%)',
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, #3EB5CC 0%, #88C140 50%, #5BA130 100%)',
        }}
      />

      {/* Main content — centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center py-20">
        
        {/* Tagline badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ 
            background: 'rgba(255,255,255,0.15)', 
            border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <span style={{ color: '#88C140', fontSize: '8px' }}>●</span>
          <span style={{ 
            fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Control Solar Avanzado
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-6"
          style={{
            color: '#FFFFFF',
            fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
            fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          Tecnología que reduce calor y{' '}
          <span style={{ color: '#88C140' }}>protege</span>{' '}
          sus espacios.
        </h1>

        {/* Sub-headline */}
        <p
          className="mb-8 mx-auto"
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            maxWidth: '600px',
            textShadow: '0 1px 10px rgba(0,0,0,0.2)',
          }}
        >
          Más que polarizar ventanas, ayudamos a mejorar el confort, la privacidad y la protección de
          hogares, oficinas y proyectos arquitectónicos.
        </p>

        {/* Accent line */}
        <div
          className="mx-auto mb-8"
          style={{ width: '60px', height: '3px', borderRadius: '2px', background: '#88C140' }}
        />

        {/* CTAs — centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="#cotizar" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
            style={{ 
              background: '#5BA130', 
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              boxShadow: '0 10px 40px rgba(91,161,48,0.4)'
            }}
          >
            Solicitar asesoría
            <ArrowRight size={18} />
          </a>
          <a 
            href="#soluciones" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg border-2 w-full sm:w-auto"
            style={{ 
              borderColor: 'rgba(255,255,255,0.4)', 
              color: '#FFFFFF', 
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.1)'
            }}
          >
            Ver soluciones
          </a>
        </div>

        {/* Feature icons — ConstructZilla style */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {heroFeatures.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2 text-center px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(136,193,64,0.2)', color: '#88C140', border: '1px solid rgba(136,193,64,0.3)' }}
              >
                {f.icon}
              </div>
              <span
                style={{
                  fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '85px',
                  lineHeight: 1.3,
                }}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="relative z-10 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
    </section>
  )
}
