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
    <section className="relative py-32 overflow-hidden" style={{ background: '#EEF4F8' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            TESTIMONIOS
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Clientes que ya transformaron sus espacios.
          </p>
          <span className="title-accent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 glass-card rounded-3xl p-7 hover:border-[rgba(62,181,204,0.40)] group flex flex-col relative overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(62,181,204,0.18), transparent)' }}
              />

              <div className="flex items-start justify-between mb-5">
                <div className="icon-lux icon-lux-sm">
                  <Quote size={18} strokeWidth={1.6} />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(32,52,120,0.07)', color: '#6b7a99', border: '1px solid rgba(32,52,120,0.12)' }}>
                  {t.type}
                </span>
              </div>

              <p className="text-sm leading-relaxed font-light flex-1 mb-6" style={{ color: '#6b7a99' }}>
                "{t.quote}"
              </p>

              <div className="pt-5 flex items-end justify-between gap-4" style={{ borderTop: '1px solid rgba(32,52,120,0.10)' }}>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#203478' }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#6b7a99' }}>{t.role}</div>
                  <div className="mt-2">
                    <Stars count={t.rating} />
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xl font-black gradient-text">{t.metric}</div>
                  <div className="text-[10px] leading-tight" style={{ color: '#6b7a99' }}>{t.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">500+</div>
              <div className="text-xs font-medium" style={{ color: '#6b7a99' }}>Proyectos</div>
            </div>
            <div className="h-10 w-px" style={{ background: 'rgba(32,52,120,0.12)' }} />
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">9+</div>
              <div className="text-xs font-medium" style={{ color: '#6b7a99' }}>Años activos</div>
            </div>
            <div className="h-10 w-px" style={{ background: 'rgba(32,52,120,0.12)' }} />
            <div className="text-center">
              <div className="text-3xl font-black text-amber-500">★ 4.9</div>
              <div className="text-xs font-medium" style={{ color: '#6b7a99' }}>Calificación</div>
            </div>
          </div>
          <a href="#cotizar" className="btn-primary shrink-0">
            Únete a nuestros clientes
          </a>
        </div>
      </div>
    </section>
  )
}
