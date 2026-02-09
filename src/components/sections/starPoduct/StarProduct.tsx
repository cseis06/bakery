import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Panettone from "../../../assets/img/panettone.jpg"

gsap.registerPlugin(ScrollTrigger)

interface PanettoneInfoProps {
  image?: string
}

const StarProduct: React.FC<PanettoneInfoProps> = ({
  image = Panettone
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background text parallax
      gsap.fromTo(
        bgTextRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 0.1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { x: -60, opacity: 0, filter: 'blur(10px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { y: 60, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.9,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { x: 50, opacity: 0, filter: 'blur(10px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Large Background Text */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none italic"
        style={{
          fontSize: 'clamp(150px, 25vw, 350px)',
          fontFamily: 'serif',
          fontWeight: 400,
          color: '#7f1d1d',
          opacity: 0.1,
          lineHeight: 0.85,
          letterSpacing: '-0.02em'
        }}
      >
        PANETTONE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Top Label */}
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-6 text-red-950/50">
          Atelier Panettone
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Title */}
          <div ref={titleRef} className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-red-950/80">
              Obrador Exclusivo
              <br />
              para{' '}
              <span className="italic text-red-900">
                Hostelería y
                <br />
                Tiendas Gourmet
              </span>
            </h2>

            {/* Description below title on mobile */}
            <p className="mt-8 text-sm md:text-base text-red-950/50 leading-relaxed max-w-md lg:hidden">
              Suministro de alta repostería artesanal para los establecimientos más exigentes de Europa. Un compromiso con la excelencia y el legado italiano.
            </p>
          </div>

          {/* Center Column - Image */}
          <div ref={imageRef} className="lg:col-span-4">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={image}
                  alt="Panettone Artesanal"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating Label */}
              <div className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-6">
                <div className="bg-red-900 text-white px-5 py-4 rounded-xl shadow-lg">
                  <p className="text-xs uppercase tracking-wider text-red-200 mb-1">
                    Compra Mínima
                  </p>
                  <p className="text-sm font-medium">
                    Pedidos a partir de 50 unidades para distribuidores certificados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div ref={descriptionRef} className="lg:col-span-3 hidden lg:block">
            <div className="space-y-6">
              <p className="text-sm text-red-950/50 leading-relaxed">
                Suministro de alta repostería artesanal para los establecimientos más exigentes de Europa. Un compromiso con la excelencia y el legado italiano.
              </p>

              {/* Product highlights */}
              <div className="space-y-4 pt-4 border-t border-red-900/10">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-red-900 mb-1">
                    Fermentación
                  </h4>
                  <p className="text-sm text-red-950/50">72 horas con masa madre centenaria</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-red-900 mb-1">
                    Ingredientes
                  </h4>
                  <p className="text-sm text-red-950/50">Mantequilla francesa, frutas confitadas artesanales</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-red-900 mb-1">
                    Vida Útil
                  </h4>
                  <p className="text-sm text-red-950/50">45 días sellado, 7 días abierto</p>
                </div>
              </div>

              {/* Price indicator */}
              <div className="bg-red-950 text-white px-5 py-4 rounded-xl mt-6">
                <p className="text-xs uppercase tracking-wider text-red-200 mb-1">
                  Desde
                </p>
                <p className="text-2xl font-serif">€24.90 <span className="text-sm text-red-200">/unidad</span></p>
                <p className="text-xs text-red-200 mt-1">*Precio mayorista, mínimo 50 uds.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div ref={ctaRef} className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <button className="inline-flex items-center gap-2 bg-red-900 text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-red-950 transition-colors group">
            <span>Solicitar Muestra de Prueba</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Bottom info line */}
        <div className="mt-8 pt-6 border-t border-red-900/10">
          <p className="text-xs text-red-950/40 uppercase tracking-wider">
            Certificaciones: ISO 22000 • IFS Food • Producto Artesanal Verificado
          </p>
        </div>
      </div>
    </section>
  )
}

export default StarProduct;