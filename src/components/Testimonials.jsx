import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rodrigo Jiménez',
    role: 'Propietario · San José',
    type: 'Residencial',
    quote: 'Instalamos Nano Cerámica en toda la sala y los cuartos. La diferencia de temperatura es increíble: antes con el A/C al máximo sudábamos, ahora está apagado la mitad del tiempo. La factura bajó ₡85,000 el primer mes.',
    rating: 5,
    metric: '↓ ₡85K/mes',
    metricLabel: 'en electricidad',
  },
  {
    name: 'María Fernanda Solís',
    role: 'Gerente · Torre Oficentro',
    type: 'Comercial',
    quote: 'Nuestras oficinas tienen vidrios del piso al techo orientados al oeste. El calor y el reflejo hacían imposible trabajar. Con el control solar de Polaritech eliminamos el problema completamente y la imagen de la fachada quedó espectacular.',
    rating: 5,
    metric: '100%',
    metricLabel: 'reflejo eliminado',
  },
  {
    name: 'Dr. Andrés Monge',
    role: 'Director Médico · Clínica San Rafael',
    type: 'Salud',
    quote: 'Para nosotros era crítico proteger a los pacientes y el equipo médico de los rayos UV. Polaritech instaló lámina anti-UV transparente y láminas de seguridad en las ventanas principales. Profesionalismo total desde la cotización hasta el acabado.',
    rating: 5,
    metric: '99% UV',
    metricLabel: 'protección total',
  },
  {
    name: 'Laura Vargas',
    role: 'Propietaria · Escazú',
    type: 'Residencial',
    quote: 'El cambio en la casa fue increíble: el calor disminuyó muchísimo y seguimos viendo todo claro hacia el jardín. El equipo fue puntual, limpio y muy profesional. Recomendaría Polaritech sin pensarlo dos veces.',
    rating: 5,
    metric: '↓ 8°C',
    metricLabel: 'menos calor',
  },
]

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#1a1a2e' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/Polaritech hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            LO QUE DICEN <span style={{ color: '#5BA130' }}>NUESTROS CLIENTES</span>
          </h2>
          <div className="my-6 mx-auto" style={{ width: '60px', height: '3px', background: '#5BA130' }} />
          <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
            Clientes que ya transformaron sus espacios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white p-6 flex flex-col relative overflow-hidden group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
                  <Quote size={18} strokeWidth={1.6} />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130', border: '1px solid rgba(91,161,48,0.2)' }}>
                  {t.type}
                </span>
              </div>

              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
                "{t.quote}"
              </p>

              <div className="pt-4 flex items-end justify-between gap-4" style={{ borderTop: '1px solid rgba(32,52,120,0.10)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#203478', fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#6b7a99', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>{t.role}</div>
                  <div className="mt-2">
                    <Stars count={t.rating} />
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xl font-bold" style={{ color: '#5BA130', fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>{t.metric}</div>
                  <div className="text-[10px] leading-tight" style={{ color: '#6b7a99' }}>{t.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#5BA130', fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>500+</div>
              <div className="text-xs font-medium" style={{ color: '#6b7a99' }}>Proyectos</div>
            </div>
            <div className="h-10 w-px" style={{ background: 'rgba(32,52,120,0.12)' }} />
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#5BA130', fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>9+</div>
              <div className="text-xs font-medium" style={{ color: '#6b7a99' }}>Años activos</div>
            </div>
            <div className="h-10 w-px" style={{ background: 'rgba(32,52,120,0.12)' }} />
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500" style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>★ 4.9</div>
              <div className="text-xs font-medium" style={{ color: '#6b7a99' }}>Calificación</div>
            </div>
          </div>
          <a 
            href="#cotizar" 
            className="inline-flex items-center justify-center text-white font-semibold transition-all duration-300 hover:opacity-90 shrink-0"
            style={{ 
              background: '#5BA130',
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif'
            }}
          >
            Únete a nuestros clientes
          </a>
        </div>
      </div>
    </section>
  )
}
