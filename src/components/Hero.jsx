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
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #FBF7F0 0%, #EEF4F8 55%, #E4EEF4 100%)',
      }}
    >
      {/* Photo — full-bleed on mobile, right half on desktop */}
      <div
        className="absolute inset-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[52%]"
        style={{
          backgroundImage: "url('/Polaritech%20hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Feature icons at bottom right of image on desktop */}
        <div className="hidden lg:flex absolute bottom-8 right-8">
          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            {heroFeatures.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-2 text-center group"
              >
                <div className="icon-lux icon-lux-sm icon-lux-round">
                  {f.icon}
                </div>
                <span
                  style={{
                    fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: '#203478',
                    maxWidth: '80px',
                    lineHeight: 1.4,
                  }}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-only white veil for text readability */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(95deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 38%, rgba(255,255,255,0.70) 58%, rgba(255,255,255,0.20) 80%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none lg:hidden"
        style={{
          height: '45%',
          background: 'linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.45) 40%, transparent 100%)',
        }}
      />

      {/* Desktop-only curved divider — light panel bleeds into photo */}
      <svg
        className="hidden lg:block absolute inset-y-0 left-0 h-full pointer-events-none"
        style={{ width: '60%' }}
        viewBox="0 0 800 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FBF7F0" />
            <stop offset="60%" stopColor="#EEF4F8" />
            <stop offset="100%" stopColor="#E7F0F5" />
          </linearGradient>
        </defs>
        <path d="M0,0 L660,0 C760,260 760,640 660,900 L0,900 Z" fill="url(#heroPanel)" />
      </svg>

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, #3EB5CC 0%, #88C140 50%, transparent 100%)',
        }}
      />

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-10 w-full">
          <div className="max-w-full lg:max-w-[48%]">

            {/* Headline */}
            <h1
              className="mb-6"
              style={{
                color: '#203478',
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                fontSize: 'clamp(2.6rem, 4.6vw, 4.2rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              Tecnología que reduce calor y{' '}
              <span style={{ color: '#5BA130' }}>protege</span>{' '}
              sus espacios.
            </h1>

            {/* Accent line */}
            <div
              className="mb-5"
              style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }}
            />

            {/* Lead */}
            <p
              className="mb-1"
              style={{ color: '#5BA130', fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}
            >
              Más confort. Menos calor. Más protección.
            </p>

            {/* Sub-headline */}
            <p
              className="mb-8"
              style={{
                color: '#5a6a82',
                fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.72,
                maxWidth: '40ch',
              }}
            >
              Más que polarizar ventanas, ayudamos a mejorar el confort, la privacidad y la protección de
              hogares, oficinas y proyectos arquitectónicos mediante soluciones avanzadas de control solar.
            </p>

          </div>

          {/* CTAs + Icons — constrained to left panel on desktop */}
          <div className="flex flex-col gap-8 w-full lg:max-w-[48%]">

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              <a href="#cotizar" className="btn-primary w-full sm:w-auto justify-center">
                Solicitar asesoría
                <ArrowRight size={15} />
              </a>
              <a href="#soluciones" className="btn-secondary-light w-full sm:w-auto justify-center">
                Ver soluciones
              </a>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="relative z-10 h-px" style={{ background: 'rgba(32,52,120,0.10)' }} />

    </section>
  )
}
