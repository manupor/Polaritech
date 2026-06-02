import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Qué tipo de polarizado necesito para mi casa en Costa Rica?',
    a: 'Depende de tu objetivo principal. Si el problema es el calor, la Nano Cerámica es la mejor opción: rechaza hasta el 85% del calor sin oscurecer el espacio. Si necesitas privacidad, el Control Solar con Privacidad o el Silver Espejo son ideales. Para proteger muebles y piel sin cambiar la apariencia de las ventanas, el Anti-UV Transparente es perfecto. Te asesoramos gratis para encontrar la solución exacta.',
  },
  {
    q: '¿Cuánto se ahorra en electricidad con polarizado arquitectónico?',
    a: 'Los clientes reportan ahorros del 20-30% en sus facturas de electricidad tras instalar control solar. En Costa Rica, donde el calor solar es intenso todo el año, el sistema de A/C trabaja mucho menos con las ventanas polarizadas. Un hogar típico puede ahorrar entre ₡65,000 y ₡120,000 colones mensuales dependiendo del tamaño y exposición solar.',
  },
  {
    q: '¿Cuál es la diferencia entre polarizado básico y Nano Cerámica?',
    a: 'El polarizado básico usa partículas metalizadas que reducen el calor pero pueden generar interferencia con WiFi y GPS. La Nano Cerámica usa tecnología de partículas cerámicas microscópicas que ofrece mayor rechazo térmico (hasta 85%), no interfiere con ninguna señal y tiene mejor claridad visual. Es la opción premium recomendada para espacios residenciales y oficinas modernas.',
  },
  {
    q: '¿Instalan polarizado en todo Costa Rica?',
    a: 'Sí, tenemos cobertura nacional. Instalamos en San José, Heredia, Alajuela, Cartago, Guanacaste, zona del Pacífico, zona Atlántica y todo el Valle Central. Contamos con equipo móvil que visita tu espacio sin costo adicional. Solo contacta para coordinar fecha y hora.',
  },
  {
    q: '¿Cuánto tiempo dura un polarizado de calidad?',
    a: 'Un polarizado profesional de alta calidad dura entre 10 y 15 años dependiendo del producto y las condiciones de exposición solar. La Nano Cerámica tiene la mayor vida útil. Todos nuestros productos cuentan con garantía de fabricante y garantía de instalación por Polaritech.',
  },
  {
    q: '¿El polarizado afecta la visibilidad desde adentro?',
    a: 'No de manera significativa. La mayoría de nuestros polarizados mantienen excelente visibilidad hacia el exterior durante el día. Solo los productos Black Out y White Out bloquean completamente la luz. La Nano Cerámica tiene claridad óptica superior: reduce el calor sin oscurecer tu espacio.',
  },
  {
    q: '¿Se puede instalar en cualquier tipo de vidrio?',
    a: 'Sí, nuestras películas son compatibles con vidrio simple, doble panel, templado y laminado. Antes de la instalación realizamos una evaluación técnica para recomendar el producto correcto y verificar compatibilidad con tu tipo de vidrio.',
  },
  {
    q: '¿Cuánto tiempo tarda la instalación?',
    a: 'Una instalación residencial típica toma entre 2 y 6 horas. Proyectos comerciales o de edificios pueden requerir uno o varios días. Trabajamos de manera eficiente para minimizar el impacto en tu rutina.',
  },
  {
    q: '¿Ofrecen cotización gratuita?',
    a: 'Sí, la cotización es completamente gratuita y sin compromiso. Puedes solicitarla por el formulario del sitio, WhatsApp o teléfono. Te respondemos en menos de 24 horas con una propuesta detallada y personalizada para tu espacio.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="relative py-32 overflow-hidden" style={{ background: '#EEF4F8' }}>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
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
            PREGUNTAS FRECUENTES
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Todo lo que necesitas saber antes de decidir.
          </p>
          <span className="title-accent" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 glass-card rounded-2xl overflow-hidden"
              style={{
                transitionDelay: `${i * 60}ms`,
                border: open === i ? '1px solid rgba(62,181,204,0.35)' : '1px solid rgba(32,52,120,0.10)',
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm sm:text-base leading-snug transition-colors duration-200" style={{ color: open === i ? '#203478' : '#4a5568' }}>
                  {faq.q}
                </span>
                <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={open === i
                    ? { background: 'rgba(62,181,204,0.12)', color: '#3EB5CC', border: '1px solid rgba(62,181,204,0.30)' }
                    : { background: 'rgba(32,52,120,0.07)', color: '#6b7a99', border: '1px solid rgba(32,52,120,0.12)' }
                  }>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px mb-5" style={{ background: 'rgba(32,52,120,0.08)' }} />
                  <p className="text-sm leading-relaxed font-light" style={{ color: '#6b7a99' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-sm mb-4" style={{ color: '#6b7a99' }}>
            ¿Tienes más preguntas? Estamos para ayudarte.
          </p>
          <a href="#cotizar" className="btn-secondary-light">
            Contactar al equipo
          </a>
        </div>
      </div>
    </section>
  )
}
