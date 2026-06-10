import React from 'react'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    num: '01',
    tag: 'Glosario',
    title: '¿Qué significa IRR?',
    teaser: 'El índice que realmente influye en la sensación térmica.',
    desc: 'El IRR (Infrared Rejection) indica qué porcentaje de radiación infrarroja puede rechazar una tecnología. Entenderlo permite comparar soluciones más allá del color o la oscuridad.',
  },
  {
    num: '02',
    tag: 'Privacidad',
    title: '¿Por qué de noche se pierde privacidad?',
    teaser: 'El efecto espejo explicado de forma sencilla.',
    desc: 'Durante el día, cuando afuera hay más luz, el vidrio refleja hacia el exterior y mantiene privacidad parcial. En la noche, al encender luces interiores, el efecto puede invertirse y permitir visibilidad hacia adentro.',
  },
  {
    num: '03',
    tag: 'Comparativa',
    title: '¿Nano cerámica vs. convencional?',
    teaser: 'Más que oscuridad: tecnología y desempeño.',
    desc: 'La nano cerámica trabaja mediante partículas tecnológicas diseñadas para rechazar infrarrojo sin depender del tinte, permitiendo opciones claras u oscuras con alto desempeño térmico y mejor estabilidad en el tiempo.',
  },
  {
    num: '04',
    tag: 'Guía',
    title: '¿Qué tono elegir para mi espacio?',
    teaser: 'La elección ideal depende del proyecto.',
    desc: 'No existe un tono universal. La selección adecuada depende del nivel de privacidad deseado, entrada de luz natural, orientación solar, estética arquitectónica y necesidades térmicas del espacio.',
  },
  {
    num: '05',
    tag: 'Protección UV',
    title: '¿Cómo proteger muebles e interiores del sol?',
    teaser: 'La decoloración también es radiación.',
    desc: 'La exposición constante al sol puede deteriorar pisos, muebles, cortinas, obras de arte y superficies interiores. La protección UV ayuda a reducir este desgaste progresivo, preservando materiales.',
  },
]

export default function EducationalBlog() {
  return (
    <section id="centro-educativo" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontWeight: 900,
              color: '#203478',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
            }}
          >
            Conocimiento<br />
            <span style={{ color: '#5BA130' }}>que te da confianza.</span>
          </h2>
          <div className="my-6" style={{ width: '56px', height: '3px', borderRadius: '2px', background: '#5BA130' }} />
          <p style={{ color: '#5a6a82', fontSize: '1.02rem', lineHeight: 1.7, maxWidth: '56ch' }}>
            Artículos técnicos y guías prácticas para que tomes decisiones informadas
            y protejas lo que más importa.
          </p>
        </div>

        <div className="flex flex-col">
          {articles.map((a, i) => (
            <a
              key={a.num}
              href="#cotizar"
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group grid sm:grid-cols-[auto_1fr_auto] items-start gap-5 sm:gap-8 py-8"
              style={{ transitionDelay: `${i * 70}ms`, borderTop: '1px solid rgba(32,52,120,0.10)' }}
            >
              {/* number + tag */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 sm:w-28">
                <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', color: '#6b7a99', textTransform: 'uppercase' }}>
                  {a.tag}
                </span>
                <span style={{ fontFamily: 'Rubik, sans-serif', fontSize: '2.4rem', fontWeight: 900, color: '#5BA130', lineHeight: 1 }}>
                  {a.num}
                </span>
              </div>

              {/* content */}
              <div>
                <h3 style={{ fontFamily: 'Rubik, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#203478', marginBottom: '4px' }}>
                  {a.title}
                </h3>
                <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#5BA130', marginBottom: '8px' }}>
                  {a.teaser}
                </p>
                <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.92rem', color: '#6b7a99', lineHeight: 1.65 }}>
                  {a.desc}
                </p>
              </div>

              {/* leer más */}
              <span className="hidden sm:flex items-center gap-1.5 self-center text-xs font-semibold" style={{ fontFamily: 'Rubik, sans-serif', color: '#5BA130' }}>
                Leer más
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
