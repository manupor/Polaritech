import React from 'react'
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useParallax, useScrollAnimation, useParallaxScale } from '../hooks/useParallax'

export default function Contact() {
  const headerRef = useScrollAnimation(0.15)
  const methodsRef = useScrollAnimation(0.2)
  const ctaRef = useScrollAnimation(0.25)
  const scaleRef = useParallaxScale(0.9, 1.1, 0.002)
  return (
    <section id="contacto" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2
            style={{
              color: '#203478',
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(2.8rem, 4.2vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            CONTACTO
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
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Conversemos sobre su proyecto
          </h3>

          <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
            Cada espacio tiene necesidades distintas de confort, privacidad y protección.
            Nuestro equipo puede asesorarle para encontrar la solución más adecuada para su proyecto.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 rounded-2xl reveal opacity-0 translate-y-8 transition-all duration-700" style={{ background: '#F7FAFC', border: '1px solid rgba(32,52,120,0.08)' }}>
            <div className="icon-lux icon-lux-sm icon-lux-round mx-auto mb-4" style={{ color: '#5BA130' }}>
              <MessageCircle size={20} />
            </div>
            <h4 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#203478', marginBottom: '8px' }}>
              WhatsApp
            </h4>
            <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '0.9rem', color: '#6b7a99', marginBottom: '16px' }}>
              Respuesta inmediata para cotizaciones
            </p>
            <a 
              href="https://wa.me/50688888888?text=Hola,%20quiero%20cotizar%20polarizado%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ background: '#5BA130', color: '#FFFFFF' }}
            >
              Escribir ahora
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="text-center p-8 rounded-2xl reveal opacity-0 translate-y-8 transition-all duration-700" style={{ background: '#F7FAFC', border: '1px solid rgba(32,52,120,0.08)', transitionDelay: '100ms' }}>
            <div className="icon-lux icon-lux-sm icon-lux-round mx-auto mb-4" style={{ color: '#5BA130' }}>
              <Phone size={20} />
            </div>
            <h4 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#203478', marginBottom: '8px' }}>
              Llamada
            </h4>
            <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '0.9rem', color: '#6b7a99', marginBottom: '16px' }}>
              Asesoría personalizada telefónica
            </p>
            <a 
              href="tel:+50688888888"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ background: '#203478', color: '#FFFFFF' }}
            >
              +506 8888 8888
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="text-center p-8 rounded-2xl reveal opacity-0 translate-y-8 transition-all duration-700" style={{ background: '#F7FAFC', border: '1px solid rgba(32,52,120,0.08)', transitionDelay: '200ms' }}>
            <div className="icon-lux icon-lux-sm icon-lux-round mx-auto mb-4" style={{ color: '#5BA130' }}>
              <Mail size={20} />
            </div>
            <h4 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#203478', marginBottom: '8px' }}>
              Email
            </h4>
            <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', fontSize: '0.9rem', color: '#6b7a99', marginBottom: '16px' }}>
              Consultas detalladas y proyectos
            </p>
            <a 
              href="mailto:info@polaritech.cr"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ background: '#203478', color: '#FFFFFF' }}
            >
              info@polaritech.cr
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center p-12 rounded-3xl reveal opacity-0 translate-y-8 transition-all duration-700" style={{ background: 'linear-gradient(135deg, #203478 0%, #2a4390 100%)' }}>
          <h3 
            style={{
              fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '16px'
            }}
          >
            ¿Listo para transformar sus espacios?
          </h3>
          <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#E2E8F0', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Solicite una cotización sin compromiso y descubra la solución ideal para su proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#cotizar" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              style={{ background: '#5BA130', color: '#FFFFFF' }}
            >
              Solicitar cotización
              <ArrowRight size={16} />
            </a>
            <a 
              href="https://wa.me/50688888888?text=Hola,%20quiero%20cotizar%20polarizado%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              style={{ background: 'transparent', color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.3)' }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
