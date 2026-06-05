import React from 'react'
import { MessageCircle, Home, MapPin, Building2, CalendarCheck, CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Cotización inicial',
    lead: 'Nos envías:',
    bullets: ['Medidas aproximadas (alto x ancho)', 'Zona o provincia', 'Fotografías del área'],
  },
  {
    num: '02',
    title: 'Evaluación técnica',
    desc: 'Analizamos orientación solar, privacidad y necesidades del espacio.',
  },
  {
    num: '03',
    title: 'Recomendación',
    desc: 'Le sugerimos el ideal según la estética y necesidad que requiera.',
  },
  {
    num: '04',
    title: 'Instalación profesional',
    desc: 'Instalación con acabados limpios y precisión técnica.',
  },
  {
    num: '05',
    title: 'Resultado',
    desc: 'Confort térmico inmediato y protección a largo plazo.',
  },
]

const visitas = [
  {
    icon: <Home size={20} strokeWidth={1.7} />,
    title: 'Dentro del GAM',
    desc: 'A partir de 5 ventanas o 5 m².',
  },
  {
    icon: <MapPin size={20} strokeWidth={1.7} />,
    title: 'Fuera del GAM',
    desc: 'Visita técnica con costo según ubicación.',
  },
  {
    icon: <Building2 size={20} strokeWidth={1.7} />,
    title: 'Proyectos fuera del GAM',
    desc: 'Proyecto mayor a 5 m².',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-32 overflow-hidden" style={{ background: '#FFFFFF' }}>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontWeight: 900,
              color: '#203478',
              letterSpacing: '-0.01em',
            }}
          >
            ¿Cómo <span style={{ color: '#5BA130' }}>trabajamos</span>?
          </h2>
          <p className="mt-3" style={{ fontFamily: 'Rubik, sans-serif', fontSize: '1rem', color: '#6b7a99' }}>
            Un proceso profesional y transparente.
          </p>
          <span className="title-accent" />
        </div>

        {/* Steps — cards: vertical on mobile, 3 top / 2 bottom on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 relative flex flex-col items-center text-center glass-card rounded-2xl p-6 lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* number */}
              <span
                className="relative inline-flex items-center justify-center mb-4"
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  color: '#5BA130',
                  lineHeight: 1,
                }}
              >
                {step.num}
              </span>

              <h3
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#203478',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h3>
              {step.lead && (
                <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#5BA130', marginBottom: '6px' }}>
                  {step.lead}
                </p>
              )}
              {step.bullets && (
                <ul className="space-y-1.5">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center justify-center gap-2" style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.88rem', color: '#6b7a99' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5BA130', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {step.desc && (
                <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.88rem', color: '#6b7a99', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp card */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-12 flex justify-center">
          <a
            href="https://wa.me/50688888888?text=Hola,%20quiero%20mi%20cotizaci%C3%B3n%20inicial%20de%20polarizado"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover rounded-2xl p-5 flex items-center gap-4 max-w-md"
          >
            <div className="icon-lux icon-lux-sm icon-lux-round" style={{ color: '#128c7e' }}>
              <MessageCircle size={20} />
            </div>
            <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.9rem', color: '#203478', lineHeight: 1.5 }}>
              Envíanos tu cotización inicial{' '}
              <strong style={{ color: '#128c7e' }}>por WhatsApp</strong>
            </span>
          </a>
        </div>

        {/* Note: rectificación el día de instalación */}
        <div
          className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-6 flex items-center justify-center gap-3 rounded-xl px-5 py-4"
          style={{ border: '1px solid rgba(32,52,120,0.12)', background: '#F7FAFC' }}
        >
          <CalendarCheck size={20} style={{ color: '#5BA130', flexShrink: 0 }} />
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.92rem', color: '#203478' }}>
            <strong style={{ color: '#5BA130' }}>El día de la instalación</strong> se rectifican las medidas.
          </p>
        </div>

        {/* Visitas técnicas y validación */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-8 glass-card rounded-2xl p-8">
          <h3 className="text-center mb-8" style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', color: '#203478', textTransform: 'uppercase' }}>
            Visitas técnicas y validación
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {visitas.map((v) => (
              <div key={v.title} className="flex flex-col items-center text-center gap-3">
                <div className="icon-lux icon-lux-sm icon-lux-round" style={{ color: '#5BA130' }}>
                  {v.icon}
                </div>
                <div>
                  <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.92rem', fontWeight: 700, color: '#203478' }}>{v.title}</p>
                  <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99', lineHeight: 1.5 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center text-center gap-2 mt-8 pt-6" style={{ borderTop: '1px solid rgba(32,52,120,0.10)' }}>
            <CheckCircle2 size={18} style={{ color: '#5BA130', flexShrink: 0 }} />
            <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.88rem', color: '#6b7a99' }}>
              La rectificación final de medidas se realiza el{' '}
              <strong style={{ color: '#5BA130' }}>día de la instalación</strong>.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/50688888888?text=Hola,%20quiero%20cotizar%20polarizado"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-light justify-center"
            style={{ borderColor: 'rgba(18,140,126,0.45)', color: '#128c7e' }}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a href="#cotizar" className="btn-primary justify-center">
            Cotizar mi proyecto
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
