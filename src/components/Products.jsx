import React, { useState } from 'react'
import { ArrowRight, Shield, Sun, Eye, Layers, Sparkles, Zap, Square, CircleDot } from 'lucide-react'

const products = [
  {
    icon: <Layers size={22} />,
    name: 'Lámina Polarizado Básica',
    tag: 'Más popular',
    tagColor: 'cyan',
    short: 'Protección esencial con estilo',
    desc: 'Evita el resplandor y brinda privacidad durante el día. Rechazo UV de hasta un 99%, protegiendo objetos electrónicos, pisos de madera, cortinas y roller up.',
    features: ['Privacidad diurna', 'Rechazo UV 99%', 'Reduce resplandor', 'Protege objetos'],
  },
  {
    icon: <Shield size={22} />,
    name: 'Polarizado de Seguridad',
    tag: 'Recomendado',
    tagColor: 'blue',
    short: 'Máxima protección estructural',
    desc: 'Forma una película protectora de 4 micras o más, reduciendo la posibilidad de daños personales y manteniendo los vidrios rotos en su marco en caso de accidente.',
    features: ['Película 4+ micras', 'Retiene fragmentos', 'Protección personal', 'Ideal para eventos'],
  },
  {
    icon: <Sun size={22} />,
    name: 'Anti-UV Transparente',
    tag: 'Sin cambio estético',
    tagColor: 'emerald',
    short: 'Protección invisible al 99%',
    desc: 'Protege de los rayos ultravioleta un 99% sin alterar la apariencia de la ventana. Previene el deterioro de muebles, pisos, cortinas y electrónicos.',
    features: ['100% transparente', 'UV 99% bloqueado', 'Sin cambio visual', 'Larga durabilidad'],
  },
  {
    icon: <Sparkles size={22} />,
    name: 'Nano Cerámica',
    tag: 'Alta tecnología',
    tagColor: 'violet',
    short: 'Rendimiento superior certificado',
    desc: 'Cubierta de nano cerámica entre dos películas de poliéster transparente. Partículas cerámicas microscópicas para el más alto rendimiento en control solar.',
    features: ['Nano cerámica', 'Alto rendimiento', 'Sin interferencia', 'Premium clarity'],
  },
  {
    icon: <Eye size={22} />,
    name: 'Control Solar con Privacidad',
    tag: 'Doble función',
    tagColor: 'amber',
    short: 'Privacidad y eficiencia térmica',
    desc: 'Combina privacidad durante el día y alta efectividad en el rechazo de calor. Línea High Performance metalizada: confort, privacidad y elegancia en uno.',
    features: ['Privacidad total', 'Alto rechazo calor', 'Metalizada HP', 'Confort extremo'],
  },
  {
    icon: <Zap size={22} />,
    name: 'Silver Espejo',
    tag: 'Impacto visual',
    tagColor: 'slate',
    short: 'Modernidad y privacidad total',
    desc: 'Cambia la apariencia del edificio o casa a un aspecto moderno y reflectante. Brinda privacidad, elimina el resplandor. Tonalidades plata, azul y bronce.',
    features: ['Acabado espejo', 'Plata / Azul / Bronce', 'Imagen moderna', 'Privacidad máxima'],
  },
  {
    icon: <Square size={22} />,
    name: 'Sand Blasting Decorativo',
    tag: 'Diseño personalizado',
    tagColor: 'rose',
    short: 'Arte y privacidad fusionados',
    desc: 'Películas con diseños atractivos que mejoran la imagen y privacidad en ventanas interiores y exteriores de oficinas, consultorios, casas o comercios.',
    features: ['Diseños a medida', 'Uso interior/exterior', 'Oficinas y hogares', 'Personalizable'],
  },
  {
    icon: <CircleDot size={22} />,
    name: 'Black Out / White Out',
    tag: 'Oscurecimiento total',
    tagColor: 'neutral',
    short: 'Bloqueo del 100% de la luz',
    desc: 'Bloquea el 100% de la luz en tono negro sólido o blanco. Ideal para oscurecer completamente cualquier área, impidiendo el paso de cualquier rayo de luz.',
    features: ['100% oscurecimiento', 'Negro o Blanco', 'Salas de cine', 'Dormitorios'],
  },
]

const tagStyles = {
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  violet: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
  amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  slate: 'bg-slate-400/10 text-slate-300 border-slate-400/20',
  rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  neutral: 'bg-white/5 text-slate-400 border-white/10',
}

export default function Products() {
  const [active, setActive] = useState(0)
  const p = products[active]

  return (
    <section id="productos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #080F22 0%, #0E1A38 50%, #080F22 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="section-label mb-5 justify-center">Productos</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Nuestra línea
            <span className="gradient-text"> completa</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Soluciones de polarizado para cada necesidad y presupuesto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-2">
            {products.map((prod, i) => (
              <button
                key={prod.name}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 border flex items-center gap-4 group ${
                  active === i
                    ? 'bg-cyan-500/10 border-cyan-500/30 text-white'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/3'
                }`}
              >
                <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  active === i
                    ? 'bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400 border border-cyan-400/30'
                    : 'bg-white/5 text-slate-500 border border-white/5 group-hover:text-slate-300'
                }`}>
                  {prod.icon}
                </div>
                <span className="text-sm font-medium leading-tight">{prod.name}</span>
                {active === i && (
                  <ArrowRight size={14} className="ml-auto text-cyan-400 shrink-0" />
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 reveal opacity-0 translate-y-8 transition-all duration-500">
            <div className="glass-card rounded-3xl p-8 lg:p-10 h-full border border-white/5 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none transition-all duration-500"
                style={{ background: 'radial-gradient(circle, #3EB5CC, transparent)' }}
              />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">{p.name}</h3>
                    <p className="text-slate-500 text-sm mt-0.5">{p.short}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${tagStyles[p.tagColor]}`}>
                  {p.tag}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-8 text-base font-light">
                {p.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                <a href="#cotizar" className="btn-primary">
                  Cotizar este producto
                  <ArrowRight size={15} />
                </a>
                <a href="#como-funciona" className="btn-secondary">
                  Cómo funciona
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
