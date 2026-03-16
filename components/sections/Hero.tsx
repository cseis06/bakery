'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Parallax suave
  const contentOpacity = Math.max(0, 1 - scrollY / 500)
  const contentTranslateY = scrollY * 0.3
  const imageScale = 1 + scrollY * 0.0003

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Imagen de fondo con parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(${imageScale})`,
        }}
      >
        <Image
          src="/img/hero/bg.png"
          alt="Productos artesanales Lunardi"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </div>

      {/* Overlay degradado - más oscuro arriba para legibilidad */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/30" />
      
      {/* Viñeta sutil en los bordes */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />

      {/* Contenido principal */}
      <div
        className="relative z-20 h-full flex flex-col justify-center items-center px-6 lg:px-12"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`,
        }}
      >
        {/* Tagline superior */}
        <p className="text-amber-100/80 text-xs md:text-sm tracking-[0.4em] uppercase mb-8 font-light">
          Ciudad del Este
        </p>

        {/* Título principal */}
        <h1 className="text-center mb-6">
          <span 
            className="block text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extrabold italic text-amber-200/80 leading-[0.85] tracking-tight"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.3)',
            }}
          >
            Lunardi
          </span>
        </h1>

        {/* Subtítulo elegante */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl text-amber-100/90 font-light italic tracking-wide">
            Tradición italiana,
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-amber-50 font-normal tracking-wide mt-1">
            excelencia garantizada.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="#productos"
            className="group px-8 py-4 bg-red-900 text-amber-50 text-xs md:text-sm tracking-[0.2em] uppercase
              hover:bg-red-950 transition-all duration-300
              flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            Ver Catálogo
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-4 border border-amber-50/40 text-amber-50 text-xs md:text-sm tracking-[0.2em] uppercase
              hover:bg-amber-50 hover:text-red-900 hover:border-amber-50
              transition-all duration-300 backdrop-blur-sm"
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* Decoración lateral izquierda */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-amber-50/20" />
          <span className="text-[10px] text-amber-50/50 tracking-[0.2em] uppercase [writing-mode:vertical-lr] rotate-180">
            Sabor Artesanal
          </span>
          <div className="w-[1px] h-20 bg-amber-50/20" />
        </div>
      </div>

      {/* Decoración lateral derecha */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-amber-50/20" />
          <span className="text-[10px] text-amber-50/50 tracking-[0.2em] uppercase [writing-mode:vertical-lr]">
            B2B · Mayoristas
          </span>
          <div className="w-[1px] h-20 bg-amber-50/20" />
        </div>
      </div>
    </section>
  )
}