'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonio {
  id: number
  nombre: string
  cargo: string
  empresa: string
  testimonio: string
  imagen: string
}

const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: 'María González',
    cargo: 'Gerente de Compras',
    empresa: 'Supermercados del Este',
    testimonio: 'Llevamos más de 10 años trabajando con Lunardi. La calidad de sus productos es inigualable y nuestros clientes siempre preguntan por sus panettones en época navideña.',
    imagen: '/img/testimonials/maria-gonzalez.webp',
  },
  {
    id: 2,
    nombre: 'Carlos Benítez',
    cargo: 'Propietario',
    empresa: 'Minimarket Don Carlos',
    testimonio: 'Lo que más valoro es la puntualidad en las entregas. En este negocio, no puedes quedarte sin pan, y Lunardi nunca nos ha fallado.',
    imagen: '/img/testimonials/carlos-benitez.jpg',
  },
  {
    id: 3,
    nombre: 'Ana Fernández',
    cargo: 'Directora de Operaciones',
    empresa: 'Cadena Hotelera Guaraní',
    testimonio: 'La variedad de productos integrales nos permite ofrecer opciones saludables a nuestros huéspedes. La pastafrola es un éxito en el desayuno buffet.',
    imagen: '/img/testimonials/ana-fernandez.webp',
  },
  {
    id: 4,
    nombre: 'Roberto Martínez',
    cargo: 'Chef Ejecutivo',
    empresa: 'Restaurant La Estancia',
    testimonio: 'Como chef, soy muy exigente con los proveedores. El pan de Lunardi tiene esa textura artesanal que es imposible de replicar industrialmente.',
    imagen: '/img/testimonials/roberto-martinez.jpg',
  },
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

export default function Testimonios() {
  const headerRef = useInView(0.2)
  const cardsRef = useInView(0.1)

  return (
    <section id="clientes" className="relative py-24 lg:py-32 bg-amber-50 overflow-hidden">
      {/* Decoración de fondo */}

      {/* Comillas decorativas */}
      <div className="absolute top-32 left-8 lg:left-20 text-red-900/5 pointer-events-none">
        <svg className="w-24 h-24 lg:w-40 lg:h-40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header de la sección */}
        <div ref={headerRef.ref} className="text-center mb-16 lg:mb-20">
          <span
            className={`inline-block text-red-900/60 text-xs tracking-[0.3em] uppercase font-light
              transition-all duration-700 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Testimonios
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-red-900 mt-4 leading-[1.1]
              transition-all duration-700 delay-100 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Lo que dicen
            <span className="block italic font-normal">nuestros clientes</span>
          </h2>
          <p
            className={`text-red-950/60 mt-6 max-w-2xl mx-auto font-light
              transition-all duration-700 delay-200 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            La confianza de nuestros socios comerciales es nuestro mayor orgullo. 
            Estas son sus experiencias trabajando con nosotros.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div ref={cardsRef.ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonios.map((testimonio, index) => (
            <article
              key={testimonio.id}
              className={`group relative bg-white/80 backdrop-blur-sm p-8 lg:p-10
                border border-red-900/5 hover:border-red-900/10
                shadow-sm hover:shadow-xl
                transition-all duration-700 ease-out
                ${cardsRef.isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'}`}
              style={{
                transitionDelay: cardsRef.isInView ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Comilla decorativa */}
              <div className="absolute top-6 right-8 text-amber-200/60 transition-colors duration-300 group-hover:text-amber-300/80">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Contenido del testimonio */}
              <blockquote className="relative z-10">
                <p className="text-red-950/70 leading-relaxed font-light text-lg italic mb-8">
                  "{testimonio.testimonio}"
                </p>
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Foto de perfil */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-200/50 
                  transition-all duration-300 group-hover:ring-amber-400/70 group-hover:scale-105">
                  <Image
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info del autor */}
                <div>
                  <p className="text-red-900 font-medium tracking-wide">
                    {testimonio.nombre}
                  </p>
                  <p className="text-red-900/50 text-sm font-light">
                    {testimonio.cargo}
                  </p>
                  <p className="text-amber-600/80 text-xs tracking-wider uppercase mt-0.5">
                    {testimonio.empresa}
                  </p>
                </div>
              </div>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-900/0 via-red-900/30 to-red-900/0 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </article>
          ))}
        </div>

        {/* Stats o indicadores */}
        <div className='w-full flex items-center justify-center'>
          <div
            ref={useInView(0.3).ref}
            className={`mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center
              transition-all duration-700 delay-300 ease-out
              ${cardsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { numero: '50+', label: 'Clientes Activos' },
              { numero: '1000', label: 'Entregas Mensuales' },
              { numero: '99%', label: 'Satisfacción' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`transition-all duration-700 ease-out
                  ${cardsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: cardsRef.isInView ? `${600 + index * 100}ms` : '0ms',
                }}
              >
                <p className="text-3xl lg:text-4xl font-light text-red-900 mb-2">
                  {stat.numero}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-red-900/50 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}