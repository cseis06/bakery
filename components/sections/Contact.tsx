'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

// ⚠️ CONFIGURAR ESTAS VARIABLES CON TUS CREDENCIALES DE EMAILJS
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY'

const tiposConsulta = [
  { value: '', label: 'Seleccionar tipo de consulta' },
  { value: 'cotizacion', label: 'Solicitar cotización' },
  { value: 'catalogo', label: 'Solicitar catálogo' },
  { value: 'distribucion', label: 'Información de distribución' },
  { value: 'otro', label: 'Otra consulta' },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold, rootMargin: '-50px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const headerRef = useInView(0.2)
  const formContainerRef = useInView(0.1)
  const infoRef = useInView(0.2)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('Error al enviar:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden">
      {/* Decoración de fondo */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header de la sección */}
        <div ref={headerRef.ref} className="text-center mb-16 lg:mb-20">
          <span
            className={`inline-block text-red-900/60 text-xs tracking-[0.3em] uppercase font-light
              transition-all duration-700 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Contacto
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-red-900 mt-4 leading-[1.1]
              transition-all duration-700 delay-100 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Trabajemos
            <span className="block italic font-normal">juntos</span>
          </h2>
          <p
            className={`text-red-950/60 mt-6 max-w-2xl mx-auto font-light
              transition-all duration-700 delay-200 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            ¿Interesado en ofrecer nuestros productos en tu negocio? 
            Completá el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Formulario */}
          <div 
            ref={formContainerRef.ref}
            className={`lg:col-span-3 transition-all duration-700 ease-out
              ${formContainerRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Fila 1: Nombre y Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`transition-all duration-700 delay-100 ease-out
                    ${formContainerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <label htmlFor="nombre" className="block text-xs tracking-[0.15em] uppercase text-red-900/70 mb-2 font-light">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-red-900/10 
                      text-red-950 placeholder:text-red-900/30
                      focus:outline-none focus:border-red-900/30 focus:bg-white
                      transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div
                  className={`transition-all duration-700 delay-150 ease-out
                    ${formContainerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-red-900/70 mb-2 font-light">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-red-900/10 
                      text-red-950 placeholder:text-red-900/30
                      focus:outline-none focus:border-red-900/30 focus:bg-white
                      transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Fila 2: Teléfono y Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`transition-all duration-700 delay-200 ease-out
                    ${formContainerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <label htmlFor="telefono" className="block text-xs tracking-[0.15em] uppercase text-red-900/70 mb-2 font-light">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-red-900/10 
                      text-red-950 placeholder:text-red-900/30
                      focus:outline-none focus:border-red-900/30 focus:bg-white
                      transition-all duration-300"
                    placeholder="+595 XXX XXX XXX"
                  />
                </div>

                <div
                  className={`transition-all duration-700 delay-250 ease-out
                    ${formContainerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <label htmlFor="empresa" className="block text-xs tracking-[0.15em] uppercase text-red-900/70 mb-2 font-light">
                    Empresa / Negocio *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-red-900/10 
                      text-red-950 placeholder:text-red-900/30
                      focus:outline-none focus:border-red-900/30 focus:bg-white
                      transition-all duration-300"
                    placeholder="Nombre de tu negocio"
                  />
                </div>
              </div>

              {/* Tipo de consulta */}
              <div
                className={`transition-all duration-700 delay-300 ease-out
                  ${formContainerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <label htmlFor="tipo_consulta" className="block text-xs tracking-[0.15em] uppercase text-red-900/70 mb-2 font-light">
                  Tipo de consulta *
                </label>
                <select
                  id="tipo_consulta"
                  name="tipo_consulta"
                  required
                  className="w-full px-4 py-3 bg-white/70 border border-red-900/10 
                    text-red-950 
                    focus:outline-none focus:border-red-900/30 focus:bg-white
                    transition-all duration-300 appearance-none cursor-pointer"
                  defaultValue=""
                >
                  {tiposConsulta.map((tipo) => (
                    <option key={tipo.value} value={tipo.value} disabled={tipo.value === ''}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div
                className={`transition-all duration-700 delay-350 ease-out
                  ${formContainerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <label htmlFor="mensaje" className="block text-xs tracking-[0.15em] uppercase text-red-900/70 mb-2 font-light">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/70 border border-red-900/10 
                    text-red-950 placeholder:text-red-900/30 resize-none
                    focus:outline-none focus:border-red-900/30 focus:bg-white
                    transition-all duration-300"
                  placeholder="Contanos sobre tu negocio y qué productos te interesan..."
                />
              </div>

              {/* Botón de envío */}
              <div
                className={`transition-all duration-700 delay-400 ease-out
                  ${formContainerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full md:w-auto px-10 py-4 
                    text-xs tracking-[0.2em] uppercase font-medium
                    transition-all duration-300
                    flex items-center justify-center gap-3
                    ${isSubmitting 
                      ? 'bg-red-950/50 text-amber-50 cursor-not-allowed' 
                      : 'bg-red-950 text-amber-50 hover:bg-red-950/80'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
                    ✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
                    ✗ Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Info de contacto */}
          <div 
            ref={infoRef.ref}
            className={`lg:col-span-2 transition-all duration-700 delay-200 ease-out
              ${infoRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="bg-red-950 text-amber-50 p-8 lg:p-10 h-full">
              <h3 
                className={`text-xl font-light tracking-wide mb-8 transition-all duration-700 delay-300
                  ${infoRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                Información de contacto
              </h3>

              <div className="space-y-8">
                {/* Dirección */}
                <div 
                  className={`flex items-start gap-4 transition-all duration-700 delay-400
                    ${infoRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-amber-400/70 mb-1">Dirección</p>
                    <p className="text-amber-50/80 font-light">Av. República del Perú</p>
                    <p className="text-amber-50/80 font-light">Ciudad del Este, Paraguay</p>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className={`flex items-start gap-4 transition-all duration-700 delay-500
                    ${infoRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-amber-400/70 mb-1">Email</p>
                    <a href="mailto:mayoristas@lunardi.com.py" className="text-amber-50/80 font-light hover:text-amber-300 transition-colors">
                      mayoristas@lunardi.com.py
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div 
                  className={`flex items-start gap-4 transition-all duration-700 delay-600
                    ${infoRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-amber-400/70 mb-1">Teléfono</p>
                    <a href="tel:+595614123456" className="text-amber-50/80 font-light hover:text-amber-300 transition-colors">
                      +595 614 123 456
                    </a>
                  </div>
                </div>

                {/* Horario */}
                <div 
                  className={`flex items-start gap-4 transition-all duration-700 delay-700
                    ${infoRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-amber-400/70 mb-1">Horario de atención</p>
                    <p className="text-amber-50/80 font-light">Lunes a Viernes</p>
                    <p className="text-amber-50/80 font-light">6:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Línea decorativa */}
              <div className="my-8 border-t border-amber-50/10" />

              {/* Redes sociales */}
              <div 
                className={`transition-all duration-700 delay-800
                  ${infoRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <p className="text-xs tracking-[0.15em] uppercase text-amber-400/70 mb-4">Síguenos</p>
                <div className="flex gap-3">
                  {[
                    { name: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                    { name: 'WhatsApp', href: '#', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
                    { name: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-amber-50/20 flex items-center justify-center
                        text-amber-50/60 hover:text-amber-400 hover:border-amber-400/50
                        transition-all duration-300"
                      aria-label={social.name}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}