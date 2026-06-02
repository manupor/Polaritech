import React from 'react'
import { FileSearch, ClipboardList, FileCheck2, Car, ShieldCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: <FileSearch size={30} strokeWidth={1.6} />,
    title: 'Evaluación',
    desc: 'Analizamos su espacio, necesidades y entorno solar.',
  },
  {
    icon: <ClipboardList size={30} strokeWidth={1.6} />,
    title: 'Diagnóstico',
    desc: 'Recomendación técnica personalizada según sus objetivos.',
  },
  {
    icon: <FileCheck2 size={30} strokeWidth={1.6} />,
    title: 'Selección',
    desc: 'Definimos la mejor tecnología y tono para su proyecto.',
  },
  {
    icon: <Car size={30} strokeWidth={1.6} />,
    title: 'Instalación',
    desc: 'Instalación profesional con acabados limpios y precisos.',
  },
  {
    icon: <ShieldCheck size={30} strokeWidth={1.6} />,
    title: 'Resultado',
    desc: 'Confort térmico inmediato y protección a largo plazo.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-32 overflow-hidden" style={{ background: '#FFFFFF' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
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
            PROCESO POLARITECH
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Un proceso profesional y transparente.
          </p>
          <span className="title-accent" />
        </div>

        {/* Steps with circular icons + arrows */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-2">
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <div
                className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center text-center flex-1 w-full max-w-[200px] mx-auto group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="icon-lux icon-lux-lg icon-lux-round mb-6">
                  {step.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#203478',
                    lineHeight: 1.35,
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '0.82rem',
                    color: '#6b7a99',
                    lineHeight: 1.55,
                    fontWeight: 400,
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center shrink-0" style={{ height: '88px', color: '#94a3b8' }}>
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-20 glass-card rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div>
            <h3 className="font-bold text-2xl mb-2" style={{ color: '#203478' }}>
              ¿Listo para transformar tu espacio?
            </h3>
            <p className="font-light" style={{ color: '#6b7a99' }}>
              Visitamos tu espacio, hacemos el diagnóstico y te entregamos una cotización detallada sin costo.
            </p>
          </div>
          <a href="#cotizar" className="btn-primary shrink-0 text-base">
            Solicitar evaluación gratis
          </a>
        </div>
      </div>
    </section>
  )
}
