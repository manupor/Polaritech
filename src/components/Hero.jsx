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
    >
      {/* Full-bleed background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Polaritech%20hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Overlay — strong left, fades to transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(95deg, rgba(8,18,28,0.98) 0%, rgba(8,18,28,0.96) 38%, rgba(8,18,28,0.72) 58%, rgba(8,18,28,0.18) 80%, transparent 100%)',
        }}
      />

      {/* Layer 3 — bottom-to-top vignette for icon readability */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '45%',
          background: 'linear-gradient(to top, rgba(8,18,28,0.88) 0%, rgba(8,18,28,0.55) 40%, transparent 100%)',
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, #3EB5CC 0%, #88C140 50%, transparent 100%)',
        }}
      />

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-28 pb-10 w-full">
          <div className="max-w-[54%]">

            {/* Headline */}
            <h1
              className="text-white mb-5"
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontSize: 'clamp(2.4rem, 4.2vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.10,
                letterSpacing: '-0.02em',
              }}
            >
              Más que polarizado.{' '}
              <span className="gradient-text">Ingeniería solar</span>{' '}
              para espacios más confortables.
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-8"
              style={{
                color: 'rgba(238,244,248,0.62)',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.72,
                maxWidth: '40ch',
              }}
            >
              Especialistas en soluciones avanzadas de control solar, reducción térmica
              y protección UV para hogares y comercios.
            </p>

          </div>

          {/* CTAs + Icons — same row */}
          <div className="flex items-center justify-between gap-8 w-full">

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <a href="#cotizar" className="btn-primary">
                Solicitar asesoría
                <ArrowRight size={15} />
              </a>
              <a href="#soluciones" className="btn-secondary">
                Ver soluciones
              </a>
            </div>

            {/* Feature icons — right side, same height as CTAs */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9">
              {heroFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-2.5 text-center group"
                >
                  <div className="icon-lux icon-lux-sm icon-lux-round icon-lux-dark">
                    {f.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontSize: '9px',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: 'rgba(238,244,248,0.72)',
                      maxWidth: '72px',
                      lineHeight: 1.45,
                    }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="relative z-10 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />

    </section>
  )
}
