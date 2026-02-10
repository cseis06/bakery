import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FormData {
  companyName: string
  businessType: string
  monthlyVolume: string
  additionalNotes: string
}

const businessTypes = [
  'Seleccionar Categoría de Negocio',
  'Hotel / Resort',
  'Restaurante',
  'Cafetería',
  'Catering',
  'Tienda Gourmet',
  'Supermercado',
  'Distribuidor',
  'Otro'
]

const volumeOptions = [
  'Seleccionar Cantidad',
  '50 - 100 unidades/mes',
  '100 - 500 unidades/mes',
  '500 - 1000 unidades/mes',
  '1000+ unidades/mes'
]

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const mapSectionRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    businessType: '',
    monthlyVolume: '',
    additionalNotes: ''
  })

  // Initialize Leaflet map
  useEffect(() => {
    // Dynamically load Leaflet CSS
    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(linkElement)

    // Dynamically load Leaflet JS
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    scriptElement.onload = () => {
      if (mapContainerRef.current && (window as any).L) {
        const L = (window as any).L

        // Madrid coordinates (example location)
        const lat = -25.483510
        const lng = -54.659262

        const map = L.map(mapContainerRef.current).setView([lat, lng], 20)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map)

        // Custom marker icon
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="
              background-color: #7f1d1d;
              width: 40px;
              height: 40px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            ">
              <div style="
                width: 16px;
                height: 16px;
                background-color: #fef2f2;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          `,
          iconSize: [40, 40],
          iconAnchor: [20, 40]
        })

        L.marker([lat, lng], { icon: customIcon })
          .addTo(map)
          .bindPopup('<strong>Lunardi</strong><br>Ciudad del Este, Paraguays')
      }
    }
    document.head.appendChild(scriptElement)

    return () => {
      document.head.removeChild(linkElement)
      document.head.removeChild(scriptElement)
    }
  }, [])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { x: -50, opacity: 0, filter: 'blur(10px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Info animation
      gsap.fromTo(
        infoRef.current,
        { y: 40, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Form animation
      gsap.fromTo(
        formRef.current,
        { x: 50, opacity: 0, filter: 'blur(10px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Map section animation
      gsap.fromTo(
        mapSectionRef.current,
        { y: 60, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapSectionRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <section ref={sectionRef} className="overflow-hidden">
      {/* Top Section - Contact Form */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              <div ref={headerRef}>
                <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-red-950/50">
                  Establecimiento de Convenios
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-red-950 mb-6">
                  Contáctanos y
                  <br />
                  <span className="text-red-900">Trabajemos Juntos.</span>
                </h2>
                <p className="text-base text-red-950/50 leading-relaxed mb-10 max-w-md">
                  Suministrando productos premium, de fermentación larga, a hoteles de lujo, boutiques, cafés y mercados gourmet alrededor del mundo.
                </p>
              </div>

              {/* Contact Info */}
              <div ref={infoRef} className="space-y-6">
                {/* Headquarters */}
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-900 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-950 mb-1">Atelier Headquarters</h4>
                    <p className="text-sm text-red-950/50">Logística y Ventas Centrales</p>
                    <p className="text-sm text-red-950/50">
                      Calle de la Fermentación 123, Polígono Industrial
                      <br />
                      Madrid, España
                    </p>
                  </div>
                </div>

                {/* B2B Inquiries */}
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-900 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-950 mb-1">B2B Inquiries</h4>
                    <p className="text-sm text-red-950/50">wholesale@panaderia.com</p>
                    <p className="text-sm text-red-950/50">+34 91 234 5678</p>
                  </div>
                </div>

                {/* Logistics Hours */}
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-900 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-950 mb-1">Logistics Hours</h4>
                    <p className="text-sm text-red-950/50">Lun - Vie: 5:00 AM - 3:00 PM</p>
                    <p className="text-sm text-red-950/50">Entregas: Cualquier Día Laborable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              ref={formRef}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm"
            >
              <h3 className="text-xl md:text-2xl font-serif text-red-950 mb-8">
                Envíanos un correo
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-red-950/70 mb-2">
                    Nombre de la empresa
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Ingrese el nombre de su empresas"
                    className="w-full px-4 py-3 border border-red-200 rounded-xl text-red-950 placeholder:text-red-950/30 focus:outline-none focus:border-red-900 transition-colors"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-red-950/70 mb-2">
                    Tipo de negocio
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-red-200 rounded-xl text-red-950 focus:outline-none focus:border-red-900 transition-colors appearance-none bg-white cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%237f1d1d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type === businessTypes[0] ? '' : type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Monthly Volume */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-red-950/70 mb-2">
                    Volumen mensual
                  </label>
                  <select
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-red-200 rounded-xl text-red-950 focus:outline-none focus:border-red-900 transition-colors appearance-none bg-white cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%237f1d1d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    {volumeOptions.map((option) => (
                      <option key={option} value={option === volumeOptions[0] ? '' : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-red-950/70 mb-2">
                    Notas adicionales
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Requerimientos logísticos o intereses específicos."
                    rows={4}
                    className="w-full px-4 py-3 border border-red-200 rounded-xl text-red-950 placeholder:text-red-950/30 focus:outline-none focus:border-red-900 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-900 text-white py-4 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-red-950 transition-colors group"
                >
                  <span>Solicitar Catálogo y Precios</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Map */}
      <div className="py-16 md:py-20 bg-red-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div ref={mapSectionRef}>
            {/* Map Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">
                  Nuestra Ubicación
                </h3>
                <p className="text-sm text-red-200/70 max-w-lg leading-relaxed">
                  Nos encontramos en Ciudad del Este, Paraguay, en una ubicación estratégica que nos permite optimizar la producción y la logística de distribución a gran escala. Nuestras instalaciones funcionan exclusivamente como fábrica y centro de producción, diseñadas para abastecer de manera eficiente a nuestros clientes mayoristas.
                </p>
              </div>

              {/* Legend */}
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-900" />
                  <span className="text-sm text-red-200/70">Logistics Center</span>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <a href="https://www.google.com/maps/place/25%C2%B029'00.6%22S+54%C2%B039'33.3%22W/@-25.4835177,-54.6592508,51m/data=!3m1!1e3!4m4!3m3!8m2!3d-25.4835!4d-54.65925?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" target='_blank'>
                <div
                  ref={mapContainerRef}
                  className="w-full h-[400px] md:h-[500px]"
                  style={{ backgroundColor: '#e5e3df' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact