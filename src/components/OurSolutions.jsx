import React, { useState } from 'react'
import { ArrowRight, Shield, Sun, Eye, Layers, Sparkles, Square, CircleDot } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxScale } from '../hooks/useParallax'

const solutions = [
  {
    icon: <Sparkles size={22} />,
    name: 'NANOCERÁMICA',
    tag: 'Alto desempeño',
    tagColor: 'violet',
    short: 'Excelente control solar sin depender del oscuridad',
    desc: 'Nuestra línea Nanocerámica está diseñada para ofrecer un alto desempeño en control solar sin depender de la oscuridad del vidrio para reducir el calor. A diferencia de otras soluciones, su tecnología permite mantener un excelente rendimiento térmico tanto en versiones más transparentes como en tonos más oscuros. Esto se debe a que la reducción de calor proviene de la tecnología incorporada en la lámina y no únicamente del nivel de tinte.',
    features: ['Excelente reducción de sensación térmica', 'Protección UV hasta 99.5%', 'Menor deslumbramiento', 'Conserva la iluminación natural', 'Opciones transparentes o con distintos niveles de privacidad', 'Garantía de hasta 12 años'],
    available: 'Disponible en: 70% • 45% • 20% • 10%',
  },
  {
    icon: <Shield size={22} />,
    name: 'SEGURIDAD',
    tag: 'Protección',
    tagColor: 'blue',
    short: 'Ayuda a mantener unidos los fragmentos de vidrio',
    desc: 'Diseñada para ayudar a mantener unidos los fragmentos de vidrio en caso de rotura accidental o impacto. Es importante destacar que una lámina de seguridad no evita que el vidrio se quiebre, ya que esto depende de la fuerza del impacto y de las características del cristal. Sin embargo, ayuda a reducir la dispersión de fragmentos, contribuyendo a una mayor protección para las personas y el entorno.',
    features: ['Ayuda a contener fragmentos de vidrio', 'Mayor seguridad ante accidentes', 'Mantiene la apariencia original del cristal', 'Disponible en versiones transparentes y de control solar'],
    applications: ['Hogares', 'Oficinas', 'Locales comerciales', 'Puertas y divisiones de vidrio', 'Áreas de alto tránsito'],
  },
  {
    icon: <Square size={22} />,
    name: 'SANDBLASTING',
    tag: 'Privacidad',
    tagColor: 'rose',
    short: 'Privacidad permanente sin bloquear la luz natural',
    desc: 'Solución diseñada para brindar privacidad permanente sin bloquear la entrada de luz natural. Su acabado tipo esmerilado permite el paso de iluminación mientras limita la visibilidad en ambas direcciones.',
    features: ['Privacidad permanente', 'Mantiene la entrada de luz natural', 'Acabado elegante y uniforme', 'No requiere reemplazar el vidrio existente'],
  },
  {
    icon: <Layers size={22} />,
    name: 'ECONÓMICA',
    tag: 'Relación costo-beneficio',
    tagColor: 'cyan',
    short: 'Alternativa con excelente relación costo-beneficio',
    desc: 'Alternativa de control solar con una excelente relación costo-beneficio.',
    features: ['Reducción moderada de sensación térmica', 'Privacidad durante el día', 'Menor deslumbramiento', 'Protección UV', 'Excelente relación costo-beneficio', 'Garantía de hasta 5 años'],
  },
  {
    icon: <CircleDot size={22} />,
    name: 'WHITE OUT / BLACK OUT',
    tag: 'Control visual',
    tagColor: 'neutral',
    short: 'Soluciones orientadas al control visual y privacidad total',
    desc: 'Soluciones orientadas al control visual y la privacidad total.',
    features: ['Alto nivel de privacidad', 'Apariencia uniforme', 'Soluciones personalizadas según cada proyecto', 'Instalación sobre vidrio existente'],
  },
]

const tagStyles = {
  violet: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
  blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  neutral: 'bg-white/5 text-slate-400 border-white/10',
}

export default function OurSolutions() {
  const [active, setActive] = useState(0)
  const s = solutions[active]
  const headerRef = useScrollAnimation(0.15)
  const selectorRef = useScrollAnimation(0.2)
  const detailsRef = useScrollAnimation(0.25)
  const scaleRef = useParallaxScale(0.9, 1.1, 0.002)

  return (
    <section id="nuestras-soluciones" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#F7FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(2.8rem, 4.2vw, 3.6rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            NUESTRAS <span style={{ color: '#5BA130' }}>SOLUCIONES</span>
          </h2>

          <div
            className="my-6 mx-auto"
            style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }}
          />

          <h3
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Tecnología especializada para cada espacio
          </h3>

          <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
            Cada espacio tiene condiciones distintas de exposición solar, privacidad, iluminación y uso. Por eso contamos con diferentes líneas de producto diseñadas para responder a necesidades específicas, permitiéndonos recomendar la alternativa más adecuada para cada proyecto.
          </p>
        </div>

        {/* Solution selector and details */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-2">
            {solutions.map((sol, i) => (
              <button
                key={sol.name}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 border flex items-center gap-4 group ${
                  active === i
                    ? 'bg-green-500/10 border-green-500/30 text-gray-900'
                    : 'border-transparent text-slate-600 hover:text-slate-800 hover:bg-white/5'
                }`}
              >
                <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  active === i
                    ? 'bg-gradient-to-br from-green-400/20 to-emerald-500/20 text-green-600 border border-green-400/30'
                    : 'bg-white/5 text-slate-500 border border-white/5 group-hover:text-slate-600'
                }`}>
                  {sol.icon}
                </div>
                <span className="text-sm font-medium leading-tight">{sol.name}</span>
                {active === i && (
                  <ArrowRight size={14} className="ml-auto text-green-600 shrink-0" />
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 reveal opacity-0 translate-y-8 transition-all duration-500">
            <div className="bg-white rounded-3xl p-8 lg:p-10 h-full border border-gray-200 relative overflow-hidden shadow-sm">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none transition-all duration-500"
                style={{ background: 'radial-gradient(circle, #5BA130, transparent)' }}
              />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-600/20 border border-green-400/20 flex items-center justify-center text-green-600">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-xl leading-tight" style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif' }}>{s.name}</h3>
                    <p className="text-gray-600 text-sm mt-0.5">{s.short}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${tagStyles[s.tagColor]}`}>
                  {s.tag}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-base" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>
                {s.desc}
              </p>

              {s.available && (
                <div className="mb-6 p-4 rounded-lg" style={{ background: '#F7FAFC', border: '1px solid rgba(91,161,48,0.2)' }}>
                  <p style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '0.9rem', fontWeight: 500, color: '#5BA130' }}>
                    {s.available}
                  </p>
                </div>
              )}

              <div className="mb-8">
                <h4 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1rem', fontWeight: 500, color: '#203478', marginBottom: '12px' }}>
                  Beneficios principales:
                </h4>
                <div className="space-y-2">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                      <span className="text-sm text-gray-700" style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {s.applications && (
                <div className="mb-8">
                  <h4 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1rem', fontWeight: 500, color: '#203478', marginBottom: '12px' }}>
                    Aplicaciones recomendadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {s.applications.map((app) => (
                      <span key={app} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: '#F7FAFC', color: '#5a6a82', border: '1px solid rgba(32,52,120,0.1)' }}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                <a href="#cotizar" className="btn-primary">
                  Solicitar cotización
                  <ArrowRight size={15} />
                </a>
                <a href="#contacto" className="btn-secondary-light" style={{ borderColor: 'rgba(91,161,48,0.3)', color: '#5BA130' }}>
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
