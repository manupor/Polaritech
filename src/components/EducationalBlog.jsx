import React from 'react'
import { Thermometer, BarChart2, Moon, Layers, Sliders, Shield, ArrowRight } from 'lucide-react'

const articles = [
  {
    icon: <Thermometer size={22} />,
    title: '¿Por qué una lámina transparente reduce calor?',
    desc: 'Descubre cómo la nano cerámica bloquea el infrarrojo sin oscurecer tu vidrio.',
    tag: 'Tecnología',
    accent: '#3EB5CC',
    accentBg: 'rgba(62,181,204,0.10)',
    accentBorder: 'rgba(62,181,204,0.18)',
  },
  {
    icon: <BarChart2 size={22} />,
    title: '¿Qué significa IRR?',
    desc: 'El Índice de Rechazo de Calor: la métrica clave que deberías pedir siempre.',
    tag: 'Glosario',
    accent: '#3EB5CC',
    accentBg: 'rgba(62,181,204,0.10)',
    accentBorder: 'rgba(62,181,204,0.18)',
  },
  {
    icon: <Moon size={22} />,
    title: '¿Por qué de noche se pierde privacidad?',
    desc: 'El efecto espejo explicado: cómo la luz interior cambia la dinámica del polarizado.',
    tag: 'Privacidad',
    accent: '#88C140',
    accentBg: 'rgba(136,193,64,0.10)',
    accentBorder: 'rgba(136,193,64,0.18)',
  },
  {
    icon: <Layers size={22} />,
    title: '¿Nano cerámica vs. convencional?',
    desc: 'Comparativa detallada: rendimiento, durabilidad y estética de cada tecnología.',
    tag: 'Comparativa',
    accent: '#88C140',
    accentBg: 'rgba(136,193,64,0.10)',
    accentBorder: 'rgba(136,193,64,0.18)',
  },
  {
    icon: <Sliders size={22} />,
    title: '¿Qué tono elegir para mi espacio?',
    desc: 'Guía práctica para seleccionar el tono ideal según privacidad, luz y orientación solar.',
    tag: 'Guía',
    accent: '#3EB5CC',
    accentBg: 'rgba(62,181,204,0.10)',
    accentBorder: 'rgba(62,181,204,0.18)',
  },
  {
    icon: <Shield size={22} />,
    title: '¿Cómo proteger muebles del sol?',
    desc: 'UV, infrarrojos y decoloración: lo que debes saber para preservar tus interiores.',
    tag: 'Protección UV',
    accent: '#88C140',
    accentBg: 'rgba(136,193,64,0.10)',
    accentBorder: 'rgba(136,193,64,0.18)',
  },
]

export default function EducationalBlog() {
  return (
    <section id="centro-educativo" className="relative py-32 overflow-hidden" style={{ background: '#FFFFFF' }}>

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
            CENTRO EDUCATIVO
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Información para tomar mejores decisiones.
          </p>
          <span className="title-accent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 glass-card-hover rounded-2xl p-6 group flex flex-col cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: a.accentBg, border: `1px solid ${a.accentBorder}`, color: a.accent }}
                >
                  {a.icon}
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: a.accentBg, color: a.accent }}
                >
                  {a.tag}
                </span>
              </div>

              <h3 className="font-bold text-base leading-snug mb-3" style={{ color: '#203478' }}>
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed font-light flex-1" style={{ color: '#6b7a99' }}>{a.desc}</p>

              <div className="flex items-center gap-1.5 mt-5 text-xs font-semibold transition-colors duration-300"
                style={{ color: a.accent }}
              >
                Leer artículo <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${a.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10 reveal opacity-0 translate-y-8 transition-all duration-700" style={{ color: '#6b7a99' }}>
          Educamos para generar confianza y posicionarnos como expertos en control solar.
        </p>
      </div>
    </section>
  )
}
