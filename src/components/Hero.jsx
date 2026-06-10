import React, { useState } from 'react'
import { ArrowRight, Phone, Mail, User, Building, MessageSquare } from 'lucide-react'

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

      {/* Dark overlay for text readability - gradient from dark blue to light blue */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(32,52,120,0.95) 0%, rgba(32,52,120,0.85) 40%, rgba(62,181,204,0.75) 100%)',
        }}
      />

      {/* Main content with two columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - Content */}
          <div className="text-white">
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
    </>
  )
}
