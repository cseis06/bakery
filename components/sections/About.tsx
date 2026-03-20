'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const valores = [
  {
    titulo: 'Tradición',
    descripcion: 'Recetas heredadas de generación en generación, con técnicas artesanales italianas que preservamos con orgullo.',
  },
  {
    titulo: 'Excelencia',
    descripcion: 'Cada producto pasa por rigurosos controles de calidad. No hay atajos cuando se trata de sabor.',
  },
  {
    titulo: 'Compromiso',
    descripcion: 'Entendemos que tu negocio depende del nuestro. Por eso, cumplimos con cada entrega, cada vez.',
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

export default function SobreNosotros() {
  const sectionRef = useInView(0.1)
  const imageRef = useInView(0.3)
  const contentRef = useInView(0.2)

  return (
    <section id="nosotros" className="relative py-24 lg:py-32 bg-amber-50 overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/50 to-transparent pointer-events-none" />
      
      <div ref={sectionRef.ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Columna de imagen */}
          <div 
            ref={imageRef.ref}
            className={`relative order-2 lg:order-1 transition-all duration-1000 ease-out
              ${imageRef.isInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
              }`}
          >
            {/* Imagen principal */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/img/hero/pan-dulce.png"
                alt="Obrador Lunardi - Panadería artesanal"
                fill
                className={`object-cover transition-transform duration-1000 delay-300
                  ${imageRef.isInView ? 'scale-100' : 'scale-110'}`}
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent" />
            </div>
            
            {/* Elemento decorativo - caja con texto */}
            <div 
              className={`absolute -bottom-8 -right-4 lg:-right-8 bg-red-900 text-amber-50 p-6 lg:p-8 max-w-[200px] lg:max-w-[240px]
                transition-all duration-700 delay-500
                ${imageRef.isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }`}
            >
              <span className="block text-4xl lg:text-5xl font-light leading-none">6</span>
              <span className="block text-sm tracking-[0.15em] uppercase mt-2 font-light">años creciendo.</span>
            </div>
            
            {/* Línea decorativa */}
            <div 
              className={`absolute -left-4 lg:-left-8 top-1/4 h-[1px] bg-red-900/30 transition-all duration-700 delay-700
                ${imageRef.isInView ? 'w-16 lg:w-24 opacity-100' : 'w-0 opacity-0'}`} 
            />
          </div>

          {/* Columna de contenido */}
          <div 
            ref={contentRef.ref}
            className="order-1 lg:order-2"
          >
            {/* Encabezado */}
            <div 
              className={`mb-12 transition-all duration-700 ease-out
                ${contentRef.isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }`}
            >
              <span className="text-red-900/60 text-xs tracking-[0.3em] uppercase font-light">
                Sobre Nosotros
              </span>
              <h2 className="flex gap-3 text-4xl md:text-5xl lg:text-6xl font-light text-red-900 mt-4 leading-[1.1]">
                El Arte de
                <span className="block italic font-normal">Hacer Pan.</span>
              </h2>
            </div>

            {/* Texto introductorio */}
            <div 
              className={`mb-12 transition-all duration-700 delay-200 ease-out
                ${contentRef.isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }`}
            >
              <p className="text-lg text-red-950/70 leading-relaxed font-light">
                En el corazón de Ciudad del Este, horneamos con la misma 
                pasión del primer día. Nuestro obrador es el lugar donde la tradición 
                italiana se encuentra con la dedicación paraguaya.
              </p>
              <p className="text-lg text-red-950/70 leading-relaxed font-light mt-4">
                No somos solo proveedores; somos el socio que tu negocio necesita 
                para ofrecer productos de panadería que tus clientes recordarán.
              </p>
            </div>

            {/* Valores */}
            <div className="space-y-8">
              {valores.map((valor, index) => (
                <div 
                  key={valor.titulo}
                  className={`group relative pl-8 border-l border-red-900/20 hover:border-red-900/60 
                    transition-all duration-700 ease-out
                    ${contentRef.isInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                    }`}
                  style={{ 
                    transitionDelay: contentRef.isInView ? `${400 + index * 150}ms` : '0ms' 
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-red-900/30 text-sm font-light">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl text-red-900 font-medium tracking-wide">
                      {valor.titulo}
                    </h3>
                  </div>
                  <p className="text-red-950/60 font-light leading-relaxed">
                    {valor.descripcion}
                  </p>
                </div>
              ))}
            </div>

            {/* Firma o detalle final */}
            <div 
              className={`mt-12 pt-8 border-t border-red-900/10 transition-all duration-700 ease-out
                ${contentRef.isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: contentRef.isInView ? '850ms' : '0ms' }}
            >
              <p className="text-sm text-red-900/50 italic font-light">
                &quot;La calidad no es un acto, es un hábito que cultivamos cada día.&quot;
              </p>
              <p className="text-xs text-red-900/40 tracking-[0.2em] uppercase mt-2">
                — Lunardi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}