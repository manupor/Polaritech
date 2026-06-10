import React, { useState } from 'react'
import { Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'

const products = [
  'Lámina Polarizado Básica',
  'Polarizado de Seguridad',
  'Polarizado Anti-UV Transparente',
  'Polarizado Nano Cerámica',
  'Control Solar con Privacidad',
  'Polarizado Silver Espejo',
  'Sand Blasting Decorativo',
  'Black Out / White Out',
  'No estoy seguro / Necesito asesoría',
]

const spaces = ['Residencia', 'Oficina', 'Local comercial', 'Edificio', 'Vehículo', 'Otro']

export default function Quote() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    space: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cotizar" className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>

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
            OBTÉN TU COTIZACIÓN GRATUITA
          </h2>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: '0.85rem', color: '#6b7a99' }}>
            Recibe una propuesta personalizada en menos de 24 horas.
          </p>
          <span className="title-accent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="space-y-6 reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="glass-card rounded-2xl p-6">
              <div className="icon-lux icon-lux-sm mb-4">
                <Phone size={20} strokeWidth={1.6} />
              </div>
              <div className="text-xs mb-1 font-medium uppercase tracking-wider" style={{ color: '#6b7a99' }}>Teléfono</div>
              <div className="font-semibold" style={{ color: '#203478' }}>+1 (000) 000-0000</div>
              <div className="text-sm mt-0.5" style={{ color: '#6b7a99' }}>Lun – Vie: 8am – 6pm</div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="icon-lux icon-lux-sm mb-4">
                <Mail size={20} strokeWidth={1.6} />
              </div>
              <div className="text-xs mb-1 font-medium uppercase tracking-wider" style={{ color: '#6b7a99' }}>Email</div>
              <div className="font-semibold" style={{ color: '#203478' }}>info@polaritech.net</div>
              <div className="text-sm mt-0.5" style={{ color: '#6b7a99' }}>Respuesta en 24h</div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="icon-lux icon-lux-sm mb-4">
                <MapPin size={20} strokeWidth={1.6} />
              </div>
              <div className="text-xs mb-1 font-medium uppercase tracking-wider" style={{ color: '#6b7a99' }}>Ubicación</div>
              <div className="font-semibold" style={{ color: '#203478' }}>Servicio a domicilio</div>
              <div className="text-sm mt-0.5" style={{ color: '#6b7a99' }}>Visitamos tu espacio</div>
            </div>

            <div
              className="rounded-2xl p-6 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(62,181,204,0.10) 0%, rgba(32,52,120,0.08) 100%)', border: '1px solid rgba(62,181,204,0.15)' }}
            >
              <div className="text-3xl font-black gradient-text mb-1">24h</div>
              <div className="text-sm font-light" style={{ color: '#6b7a99' }}>Tiempo de respuesta</div>
              <div className="text-xs mt-3" style={{ color: '#6b7a99' }}>Cotización sin costo y sin compromiso</div>
            </div>
          </div>

          <div className="lg:col-span-2 reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            {sent ? (
              <div className="glass-card rounded-3xl p-10 border border-white/5 h-full flex flex-col items-center justify-center text-center gap-6">
                <div className="w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3" style={{ color: '#203478' }}>¡Mensaje enviado!</h3>
                  <p className="font-light leading-relaxed max-w-sm" style={{ color: '#6b7a99' }}>
                    Gracias por contactarnos. Nuestro equipo revisará tu solicitud
                    y te responderá en menos de 24 horas.
                  </p>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="btn-secondary-light mt-4"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 lg:p-10 border border-white/5 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: '#203478' }}>
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: 'rgba(32,52,120,0.20)', color: '#203478' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: '#203478' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: 'rgba(32,52,120,0.20)', color: '#203478' }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: '#203478' }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 000 000 0000"
                      className="w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: 'rgba(32,52,120,0.20)', color: '#203478' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: '#203478' }}>
                      Tipo de espacio
                    </label>
                    <select
                      name="space"
                      value={form.space}
                      onChange={handleChange}
                      className="w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                      style={{ borderColor: 'rgba(32,52,120,0.20)', color: '#203478' }}
                    >
                      <option value="">Selecciona...</option>
                      {spaces.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: '#203478' }}>
                    Producto de interés
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                    style={{ borderColor: 'rgba(32,52,120,0.20)', color: '#203478' }}
                  >
                    <option value="">Selecciona un producto...</option>
                    {products.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide uppercase" style={{ color: '#203478' }}>
                    Cuéntanos más
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe tu proyecto: área aproximada, número de ventanas, objetivos..."
                    className="w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: 'rgba(32,52,120,0.20)', color: '#203478' }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  <Send size={16} />
                  Enviar solicitud de cotización
                </button>

                <p className="text-center text-xs" style={{ color: '#6b7a99' }}>
                  Al enviar aceptas que nos comuniquemos contigo para responder tu consulta.
                  Sin spam, sin compromiso.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
