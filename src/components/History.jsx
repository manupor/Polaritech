import React from 'react'
import { Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useParallax'

export default function History() {
  const contentRef = useScrollAnimation(0.15)
  const rightRef = useScrollAnimation(0.2)

  return (
    <section 
      id="historia" 
      className="relative py-16 sm:py-24 overflow-hidden" 
      style={{ background: '#F7FAFC' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            NUESTRA <span style={{ color: '#5BA130' }}>HISTORIA</span>
          </h2>
        </div>

        {/* Two column layout - adjusted proportions */}
        <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* LEFT - Text content */}
          <div 
            ref={contentRef.ref}
            className="reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{
              transform: `translateY(${contentRef.isVisible ? '0px' : '40px'})`,
              opacity: contentRef.isVisible ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
              <p className="mb-6">
                Polaritech nace en <strong style={{ color: '#203478' }}>2016</strong> con el propósito de ofrecer soluciones profesionales de control solar para
                hogares, oficinas y proyectos arquitectónicos.
              </p>
              <p className="mb-6">
                Desde entonces hemos desarrollado proyectos residenciales, comerciales y corporativos,
                construyendo una trayectoria basada en la confianza de nuestros clientes, la calidad de nuestros
                materiales y la excelencia en cada instalación.
              </p>
              <p>
                El compromiso de ofrecer productos de alta calidad y un servicio excepcional nos ha 
                permitido consolidarnos como referentes en el sector del polarizado arquitectónico en Costa Rica.
              </p>
            </div>
          </div>

          {/* RIGHT - Bullets + Image */}
          <div 
            ref={rightRef.ref}
            className="reveal opacity-0 translate-y-8 transition-all duration-700"
            style={{
              transform: `translateY(${rightRef.isVisible ? '0px' : '40px'})`,
              opacity: rightRef.isVisible ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Bullet points */}
            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>Innovación constante</strong> en soluciones de control solar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>Instalación profesional</strong> certificada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>Materiales de calidad</strong> con garantía de hasta 12 años
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#5BA130' }}>
                    <Check size={12} style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: '#5a6a82', fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                    <strong style={{ color: '#203478' }}>Cobertura nacional</strong> con servicio a domicilio
                  </span>
                </li>
              </ul>
            </div>

            {/* Mockup image - transparent, no container */}
            <img
              src="/polaritech-mockup.png"
              alt="Polaritech - Soluciones de control solar"
              className="w-full h-auto object-contain"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom color bar */}
      <div className="flex w-full mt-16" style={{ height: '6px' }}>
        <div style={{ flex: 1, background: '#203478' }} />
        <div style={{ flex: 1, background: '#5BA130' }} />
        <div style={{ flex: 1, background: '#3EB5CC' }} />
      </div>
    </section>
  )
}
