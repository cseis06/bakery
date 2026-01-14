import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Pillar {
  number: string
  icon: React.ReactNode
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="currentColor">
        {/* Wheat icon */}
        <path d="M32 4c-1 0-2 .5-2.5 1.5L27 12l-3-2c-.5-.3-1.2-.2-1.6.3-.4.5-.3 1.2.2 1.6l3.5 2.5-2 4-3.5-2c-.5-.3-1.2-.2-1.6.3-.4.5-.3 1.2.2 1.6l4 2.5-2 4-4-2c-.5-.3-1.2-.2-1.6.3-.4.5-.3 1.2.2 1.6l4.5 2.5-2 4-4.5-2c-.5-.3-1.2-.2-1.6.3-.4.5-.3 1.2.2 1.6l5 3L15 38l-5-2.5c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l5.5 3L12 46l-5.5-2.5c-.5-.2-1.2 0-1.4.5-.2.5 0 1.2.5 1.4l6 2.8-1.5 5.5c-.2.6.2 1.2.8 1.3.6.2 1.2-.2 1.3-.8l1.5-5.2 6 2c.1 0 .2.1.3.1.4 0 .9-.3 1-.7.2-.5 0-1.2-.5-1.4l-6-2 2-5.5 6 2c.1 0 .2.1.3.1.4 0 .9-.3 1-.7.2-.5 0-1.2-.5-1.4l-6-2 2-5.5 5.5 2c.1 0 .2.1.4.1.4 0 .8-.2 1-.6.2-.5 0-1.2-.5-1.4l-5.5-2 2-5 5 2c.1 0 .3.1.4.1.4 0 .8-.2 1-.6.2-.5.1-1.1-.4-1.4l-5-2 2-5 4.5 2c.1.1.3.1.4.1.4 0 .8-.2 1-.6.2-.5.1-1.1-.4-1.4l-4.5-2 2-4.5 4 1.5c.1.1.3.1.4.1.4 0 .8-.2 1-.6.2-.5.1-1.1-.4-1.4l-4-1.5 2-4.5 3 1c.1 0 .3.1.4.1.5 0 .9-.3 1-.8.2-.5 0-1.1-.5-1.3l-2.5-.8L32 4z"/>
        <path d="M34.5 5.5c.5-1 1.5-1.5 2.5-1.5l2.5 8 2.5.8c.5.2.7.8.5 1.3-.1.5-.5.8-1 .8-.1 0-.3 0-.4-.1l-3-1-2 4.5 4 1.5c.5.3.6.9.4 1.4-.2.4-.6.6-1 .6-.1 0-.3 0-.4-.1l-4-1.5-2 4.5 4.5 2c.5.3.6.9.4 1.4-.2.4-.6.6-1 .6-.1 0-.3 0-.4-.1l-4.5-2-2 5 5 2c.5.3.6.9.4 1.4-.2.4-.6.6-1 .6-.1 0-.3 0-.4-.1l-5-2-2 5 5.5 2c.5.2.7.9.5 1.4-.2.4-.6.6-1 .6-.1 0-.3 0-.4-.1l-5.5-2-2 5.5 6 2c.5.2.7.9.5 1.4-.1.4-.6.7-1 .7-.1 0-.2 0-.3-.1l-6-2-2 5.5 6 2c.5.2.7.9.5 1.4-.1.4-.6.7-1 .7-.1 0-.2 0-.3-.1l-6-2-1.5 5.2c-.1.6-.7 1-1.3.8-.6-.1-1-.7-.8-1.3l1.5-5.5-6-2.8c-.5-.2-.7-.9-.5-1.4.2-.5.9-.7 1.4-.5l5.5 2.5 2.5-5.5-5.5-3c-.5-.3-.7-.9-.4-1.5.3-.5.9-.7 1.5-.4l5 2.5 2.5-6-5-3c-.5-.3-.6-.9-.2-1.4.4-.5 1.1-.6 1.6-.3l4.5 2.5 2-4-4.5-2.5c-.5-.3-.6-1-.2-1.6.4-.5 1.1-.6 1.6-.3l4 2 2-4-4-2.5c-.5-.3-.6-1-.2-1.6.4-.5 1.1-.6 1.6-.3l3.5 2 2-4-3.5-2.5c-.5-.4-.6-1.1-.2-1.6.4-.5 1.1-.6 1.6-.3l3 2 2.5-6.5z"/>
      </svg>
    ),
    title: 'EL TRIGO',
    description: 'Granos italianos molidos a piedra, cosechados en el punto máximo del verano, proporcionando la integridad estructural para nuestra miga característica.'
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="currentColor">
        {/* Mother yeast / circles icon */}
        <circle cx="32" cy="20" r="8" />
        <circle cx="20" cy="38" r="8" />
        <circle cx="44" cy="38" r="8" />
        <circle cx="32" cy="52" r="5" />
      </svg>
    ),
    title: 'LA MASA MADRE',
    description: 'Un cultivo de levadura transmitido a través de tres generaciones. Mantenido vivo diariamente con agua fresca y harina, guardián de nuestro sabor único.'
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="currentColor">
        {/* Hourglass icon */}
        <path d="M16 8h32v4H16zM16 52h32v4H16z"/>
        <path d="M20 12v8c0 6 4 10 8 12l4 2-4 2c-4 2-8 6-8 12v8h24v-8c0-6-4-10-8-12l-4-2 4-2c4-2 8-6 8-12v-8H20zm20 8c0 4-3 7-6 9l-2 1-2-1c-3-2-6-5-6-9v-4h16v4zm-16 28c0-4 3-7 6-9l2-1 2 1c3 2 6 5 6 9v4H24v-4z"/>
      </svg>
    ),
    title: 'LAS 72 HORAS',
    description: 'Fermentación lenta y rítmica durante tres días, desarrollando la textura compleja y una miga de longevidad incomparable en cada pieza.'
  }
]

const Info: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      // Quote animation
      gsap.fromTo(
        quoteRef.current,
        { x: 50, opacity: 0, filter: 'blur(10px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Cards stagger animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-16 md:mb-20">
          {/* Left - Title */}
          <div ref={headerRef} className="lg:max-w-md">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-red-900">
              Manifiesto
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-red-950/50">
              Tres Soles,
              <br />
              Un <span className="italic text-red-900">Alma</span>.
            </h2>
          </div>

          {/* Right - Quote */}
          <div
            ref={quoteRef}
            className="lg:max-w-sm lg:text-right lg:pt-8"
          >
            <p className="text-sm md:text-base italic leading-relaxed text-red-950/50">
              "El tiempo es nuestro ingrediente secreto.
              No solo horneamos pan, cultivamos un legado vivo."
            </p>
          </div>
        </div>

        {/* Pillars Cards - Aligned Layout */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex-grow">
                {/* Number */}
                <span className="text-5xl md:text-6xl font-serif italic block mb-6 text-red-900/20">
                  {pillar.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-red-50 text-red-900">
                  {pillar.icon}
                </div>
              </div>

              {/* Text Content - Outside Card */}
              <div className="pt-6 px-2">
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase mb-3 text-red-900">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-red-950/50">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Info