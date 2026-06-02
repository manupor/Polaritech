import React from 'react'
import { ArrowRight, MessageCircle, Thermometer, Shield, Grid2X2, Zap } from 'lucide-react'

const badges = [
  { icon: <Thermometer size={14} />, label: 'Confort térmico' },
  { icon: <Shield size={14} />, label: 'Protección UV' },
  { icon: <Grid2X2 size={14} />, label: 'Transparencia' },
  { icon: <Zap size={14} />, label: 'Eficiencia energética' },
]

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden grain-overlay" style={{ background: '#203478' }}>
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #3EB5CC 30%, #88C140 70%, transparent)' }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(62,181,204,0.12), transparent 70%)' }}
        />
        <div
          className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(136,193,64,0.10), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(62,181,204,0.10)', border: '1px solid rgba(62,181,204,0.22)', color: '#3EB5CC' }}
          >
            <span className="glow-dot" />
            Sección Final · Costa Rica
          </div>

          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6"
            style={{ fontWeight: 900 }}
          >
            La tecnología<br />
            <span className="gradient-text">detrás del confort.</span>
          </h2>

          <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Más que polarizado — ingeniería solar aplicada a tus espacios para que
            vivas y trabajes con confort, eficiencia y tranquilidad.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: '#cbd5e1',
                }}
              >
                <span style={{ color: '#3EB5CC' }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#cotizar" className="btn-primary text-base px-10 py-4">
              Solicitar asesoría personalizada
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/50688888888?text=Hola,%20me%20interesa%20cotizar%20polarizado%20para%20mi%20espacio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
              style={{ borderColor: 'rgba(37,211,102,0.30)', color: '#4ade80' }}
            >
              <MessageCircle size={18} />
              WhatsApp directo
            </a>
          </div>

          <p className="text-slate-600 text-sm">
            Conversemos sobre tu proyecto · Sin compromiso · Respuesta en 24h
          </p>
        </div>
      </div>
    </section>
  )
}
