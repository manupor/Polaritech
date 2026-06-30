import React from 'react'
import { CheckCircle2, Award, Users, Zap } from 'lucide-react'

const pillars = [
  { icon: <Award size={18} />, text: 'Productos de alta calidad' },
  { icon: <Users size={18} />, text: 'Asesoría personalizada' },
  { icon: <CheckCircle2 size={18} />, text: 'Transparencia y honestidad' },
  { icon: <Zap size={18} />, text: 'Instalación profesional' },
]

export default function About() {
  return (
    <section id="nosotros" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3EB5CC, transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="section-label mb-5">Sobre nosotros</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Expertos en
              <span className="gradient-text"> polarizado</span>
              <br />de vidrios
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
              Desde 2016, Polaritech es el referente en polarizado arquitectónico en Costa Rica.
              Distribuidor autorizado de marcas premium, brindamos soluciones de control solar
              con transparencia, honestidad y productos de alta calidad a precio justo.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10 font-light">
              Asesoría personalizada para cada proyecto: residencial, comercial, oficinas,
              clínicas y edificios. Instalación profesional en todo el país con materiales de alto desempeño.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {pillars.map((p) => (
                <div
                  key={p.text}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl"
                >
                  <div className="text-cyan-400 shrink-0">{p.icon}</div>
                  <span className="text-sm text-slate-300 font-medium">{p.text}</span>
                </div>
              ))}
            </div>

            <a href="#cotizar" className="btn-primary">
              Conoce nuestros servicios
            </a>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="relative">
              <div className="glass-card rounded-3xl p-1 relative z-10">
                <div
                  className="rounded-[20px] overflow-hidden aspect-[4/3] relative flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #0d1421 0%, #0a1628 50%, #050d1a 100%)',
                  }}
                >
                  {/* Subtle grid */}
                  <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(62,181,204,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(62,181,204,0.8) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  {/* Glow */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at center, rgba(62,181,204,0.10) 0%, transparent 65%)' }}
                  />
                  {/* Real logo — stacked version, white on dark */}
                  <img
                    src="/logo-white.png"
                    alt="Polaritech"
                    className="relative z-10 w-3/5 max-w-[240px] object-contain drop-shadow-[0_0_24px_rgba(62,181,204,0.35)]"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-500/20 rounded-tl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-500/20 rounded-br-lg" />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 glass-card rounded-2xl flex flex-col items-center justify-center gap-1 border border-cyan-500/20">
                <div className="text-2xl font-black gradient-text">2016</div>
                <div className="text-[10px] text-slate-500 text-center leading-tight font-medium">Fundados<br/>Costa Rica</div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-28 h-20 glass-card rounded-2xl flex flex-col items-center justify-center gap-1 border border-blue-500/20">
                <div className="text-2xl font-black gradient-text">500+</div>
                <div className="text-[10px] text-slate-500 text-center leading-tight font-medium">Proyectos<br/>completados</div>
              </div>

              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, #3EB5CC, transparent 70%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
