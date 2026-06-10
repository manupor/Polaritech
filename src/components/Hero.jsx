import React, { useState } from 'react'
import { ArrowRight, Shield, Sun, Thermometer, Cpu, CheckCircle2, Phone, Mail, User, Building, MessageSquare } from 'lucide-react'

const heroFeatures = [
  { icon: <Thermometer size={18} strokeWidth={1.6} />, label: 'Reducción térmica' },
  { icon: <Shield size={18} strokeWidth={1.6} />, label: 'Protección UV 99.5%' },
  { icon: <Sun size={18} strokeWidth={1.6} />, label: 'Transparencia sin tono' },
  { icon: <Cpu size={18} strokeWidth={1.6} />, label: 'Tecnología Nano Cerámica' },
  { icon: <CheckCircle2 size={18} strokeWidth={1.6} />, label: 'Instalación profesional' },
]

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Gracias por su solicitud. Nos pondremos en contacto pronto.')
  }

  return (
    <>
    {/* Main Hero Section */}
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '90px' }}
    >
      {/* Full-width background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Polaritech%20hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(32,52,120,0.90) 0%, rgba(32,52,120,0.80) 50%, rgba(32,52,120,0.60) 100%)',
        }}
      />

      {/* Main content with two columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - Content */}
          <div className="text-white">
            {/* Tagline badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6"
              style={{ 
                background: 'rgba(91,161,48,0.2)', 
                border: '1px solid rgba(91,161,48,0.4)',
              }}
            >
              <span style={{ 
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                color: '#5BA130',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Control Solar Avanzado
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-6"
              style={{
                color: '#FFFFFF',
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Tecnología que reduce calor y{' '}
              <span style={{ color: '#5BA130' }}>protege</span>{' '}
              sus espacios.
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-8"
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                fontWeight: 400,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                maxWidth: '500px',
              }}
            >
              Más que polarizar ventanas, ayudamos a mejorar el confort, la privacidad y la protección de
              hogares, oficinas y proyectos arquitectónicos.
            </p>

            {/* Accent line */}
            <div
              className="mb-8"
              style={{ width: '60px', height: '3px', background: '#5BA130' }}
            />

            {/* CTAs - ConstructZilla skew button style */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a 
                href="#cotizar" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold transition-all duration-300 hover:opacity-90"
                style={{ 
                  background: '#5BA130', 
                  fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Solicitar asesoría
                <ArrowRight size={16} />
              </a>
              <a 
                href="#soluciones" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 hover:bg-white hover:text-[#203478] border"
                style={{ 
                  borderColor: 'rgba(255,255,255,0.5)', 
                  color: '#FFFFFF', 
                  fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: 'transparent'
                }}
              >
                Ver soluciones
              </a>
            </div>

            {/* Feature icons */}
            <div className="flex flex-wrap items-center gap-6 mt-12">
              {heroFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ background: 'rgba(91,161,48,0.2)', color: '#5BA130' }}
                  >
                    {f.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif',
                      fontSize: '10px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.7)',
                      maxWidth: '80px',
                      lineHeight: 1.3,
                    }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Quote Form */}
          <div className="hidden lg:block">
            <div 
              className="p-8"
              style={{ 
                background: 'rgba(255,255,255,0.95)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              <h3 
                className="text-center mb-6"
                style={{ 
                  fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                  color: '#203478',
                  fontSize: '1.4rem',
                  fontWeight: 500,
                }}
              >
                Solicitar Cotización
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full pl-10 pr-4 py-3 text-sm border focus:outline-none focus:border-[#5BA130]"
                      style={{ borderColor: 'rgba(32,52,120,0.15)' }}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full pl-10 pr-4 py-3 text-sm border focus:outline-none focus:border-[#5BA130]"
                      style={{ borderColor: 'rgba(32,52,120,0.15)' }}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full pl-10 pr-4 py-3 text-sm border focus:outline-none focus:border-[#5BA130]"
                      style={{ borderColor: 'rgba(32,52,120,0.15)' }}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Building size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Empresa (opcional)"
                      className="w-full pl-10 pr-4 py-3 text-sm border focus:outline-none focus:border-[#5BA130]"
                      style={{ borderColor: 'rgba(32,52,120,0.15)' }}
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-4 text-gray-400" />
                  <textarea
                    placeholder="Mensaje"
                    rows="3"
                    className="w-full pl-10 pr-4 py-3 text-sm border focus:outline-none focus:border-[#5BA130] resize-none"
                    style={{ borderColor: 'rgba(32,52,120,0.15)' }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 text-white font-semibold transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ 
                    background: '#5BA130',
                    fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Enviar solicitud
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Meet & Ask section - ConstructZilla style */}
    <section className="relative z-20 bg-white border-b border-[rgba(32,52,120,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(91,161,48,0.1)', color: '#5BA130' }}>
              <Shield size={28} />
            </div>
            <div>
              <h3 style={{ fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif', color: '#203478', fontSize: '1.2rem', fontWeight: 500, marginBottom: '4px' }}>
                ¿Necesita asesoría personalizada?
              </h3>
              <p style={{ fontFamily: '"Myriad Pro Regular", Myriad Pro, sans-serif', color: '#5a6a82', fontSize: '0.95rem' }}>
                Le ayudamos a encontrar la mejor solución para su espacio. Cotización sin compromiso.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="#cotizar" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold transition-all duration-300 hover:opacity-90"
              style={{ 
                background: '#5BA130', 
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <span>Contactar</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="#soluciones" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 hover:bg-[#203478] hover:text-white border"
              style={{ 
                borderColor: '#203478',
                color: '#203478',
                fontFamily: '"Myriad Pro Bold", Myriad Pro, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'transparent'
              }}
            >
              <span>Ver más</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
