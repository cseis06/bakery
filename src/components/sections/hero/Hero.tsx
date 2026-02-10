import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from '../../../assets/img/bread.webp'

interface HeroProps {
  image?: string
}

const Hero: React.FC<HeroProps> = ({
  image = Image
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Verificar que todos los refs existan antes de animar
      const elements = [
        logoRef.current,
        titleRef.current,
        descriptionRef.current,
        ctaRef.current,
        imageRef.current,
        socialRef.current
      ].filter(Boolean)

      if (elements.length === 0) return

      // Initial setup
      gsap.set(elements, {
        opacity: 0
      })

      // Background text
      if (bgTextRef.current) {
        tl.fromTo(
          bgTextRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 0.08, duration: 1.2 },
          0
        )
      }

      // Logo
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { y: -20, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6 },
          0.2
        )
      }

      // Title
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 60, opacity: 0, filter: 'blur(15px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9 },
          0.4
        )
      }

      // Description
      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7 },
          0.7
        )
      }

      // CTA buttons
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6 },
          0.9
        )
      }

      // Image
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { x: 60, opacity: 0, filter: 'blur(15px)' },
          { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1 },
          0.5
        )
      }

      // Social links
      if (socialRef.current) {
        tl.fromTo(
          socialRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          1.1
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] max-h-[900px] overflow-hidden"
    >
      {/* Large Background Text */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none hidden md:block"
        style={{
          fontSize: 'clamp(150px, 25vw, 350px)',
          fontFamily: 'serif',
          fontWeight: 400,
          color: '#7f1d1d',
          opacity: 0.08,
          lineHeight: 0.85,
          letterSpacing: '-0.02em'
        }}
      >
        B2B
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full py-12 md:py-16 lg:py-0">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Label */}
            <span className="inline-block text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase mb-3 md:mb-4 text-red-950/50">
              Panadería Lunardi
            </span>

            {/* Title */}
            <div ref={titleRef}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-serif leading-[1.1] text-red-950/80 mb-4 md:mb-6">
                Obrador Exclusivo
                <br />
                para{' '}
                <span className="italic text-red-900">
                  Hostelería y
                  <br />
                  Tiendas Gourmet
                </span>
              </h1>
            </div>

            {/* Description */}
            <div ref={descriptionRef}>
              <p className="text-xs md:text-sm text-red-950/50 leading-relaxed max-w-md mb-6 md:mb-8">
                Suministro de alta repostería artesanal para los establecimientos más exigentes de Europa. Un compromiso con la excelencia y el legado italiano.
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 bg-red-900 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-medium tracking-wide hover:bg-red-950 transition-all duration-300 group">
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
          </div>

          {/* Right Column - Image */}
          <div ref={imageRef} className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative max-w-lg lg:max-w-none mx-auto lg:ml-auto">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4]">
                <img
                  src={image}
                  alt="Panettone Artesanal"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 md:-bottom-6 left-4 right-4 md:left-6 md:right-6 lg:-left-10 lg:right-auto lg:w-64">
                <div className="bg-red-900 text-white p-4 md:p-5 rounded-xl shadow-xl">
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-red-200 mb-1.5">
                    Distribución Exclusiva
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed">
                    Solo para profesionales del sector gastronómico y distribuidores certificados.
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border border-red-900/20 rounded-full hidden xl:block" />
              <div className="absolute -top-6 -right-6 w-28 h-28 border border-red-900/10 rounded-full hidden xl:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Social Links */}
      <div
        ref={socialRef}
        className="absolute bottom-4 right-4 md:bottom-6 md:right-8 z-20"
      >
        <div className="flex items-center gap-3">
          <span className="text-[10px] md:text-xs text-red-950/40 tracking-wider hidden sm:block">Síguenos</span>
          <div className="flex gap-2 md:gap-3">
            {[
              { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-red-900/30 flex items-center justify-center text-red-900/60 hover:bg-red-900 hover:text-white hover:border-red-900 transition-all duration-300"
                aria-label={social.name}
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[10px] text-red-950/40 tracking-wider">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-red-900/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero