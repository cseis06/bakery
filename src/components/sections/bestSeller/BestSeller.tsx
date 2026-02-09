import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductCard from '../../common/ProductCard'
import PanettoneNoBg from "../../../assets/img/products/panettone-nobg.png"
import PalmeritasNoBg from "../../../assets/img/products/palmeritas-nobg.png"
import MigaIntegralNoBg from "../../../assets/img/products/miga-integral-nobg.png"

gsap.registerPlugin(ScrollTrigger)

const BestSeller = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const bgTextRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Verificar que todos los refs existan
      if (!labelRef.current || !titleRef.current) return

      // Background text animation
      if (bgTextRef.current) {
        gsap.fromTo(
          bgTextRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 0.08,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      }

      // Label animation
      gsap.fromTo(
        labelRef.current,
        { y: 30, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: labelRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0, filter: 'blur(15px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )

      // Cards animations with stagger
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean)
      
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { 
            y: 80, 
            opacity: 0, 
            filter: 'blur(15px)',
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 85%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleConsultar = (productName: string) => {
    console.log(`Consultando: ${productName}`)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Large Background Text */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none select-none hidden md:block"
        style={{
          fontSize: 'clamp(120px, 20vw, 280px)',
          fontFamily: 'serif',
          fontWeight: 400,
          color: '#7f1d1d',
          opacity: 0.08,
          lineHeight: 0.85,
          letterSpacing: '-0.02em'
        }}
      >
        
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span 
            ref={labelRef}
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-red-950/50"
          >
            Estos son los sabores que nuestros aliados eligen con más frecuencia
          </span>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight italic text-red-900 mb-6"
          >
            Lo Más Solicitado
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start">
          {/* Card 1 - Palmeritas (#2) */}
          <div ref={card1Ref} className="h-full mt-4">
            <ProductCard
              imageSrc={PalmeritasNoBg}
              imageAlt="Palmeritas"
              title="Palmeritas"
              description="Crujientes hojas de hojaldre con azúcar caramelizado. Perfectas para acompañar café o té, elaboradas con mantequilla francesa premium."
              badgeText="Más Vendido #2"
              rating={4.5}
              buttonText="Consultar"
              onButtonClick={() => handleConsultar('Palmeritas')}
            />
          </div>

          {/* Card 2 - Panettone (#1) - Destacado */}
          <div ref={card2Ref} className="h-full">
            <div className="relative">
              <div className="transform md:scale-105">
                <ProductCard
                  imageSrc={PanettoneNoBg}
                  imageAlt="Panettone"
                  title="Panettone"
                  description="Nuestra receta del panettone italiano. Esponjoso y aromático, repleto de frutas abrillantadas y pasas jugosas, con un dulzor delicado y un toque cítrico irresistible."
                  badgeText="Más Vendido #1"
                  rating={5}
                  buttonText="Consultar"
                  onButtonClick={() => handleConsultar('Panettone')}
                />
              </div>
            </div>
          </div>

          {/* Card 3 - Miga Integral (#3) */}
          <div ref={card3Ref} className="h-full mt-4">
            <ProductCard
              imageSrc={MigaIntegralNoBg}
              imageAlt="Miga Integral"
              title="Miga Integral"
              description="Pan de miga integral con fibra natural y semillas. Textura suave y sabor nutritivo, ideal para sandwiches gourmet y catering de alto nivel."
              badgeText="Más Vendido #3"
              rating={4}
              buttonText="Consultar"
              onButtonClick={() => handleConsultar('Miga Integral')}
            />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-red-950/50 mb-6">
            ¿Encontró lo que estaba buscando? Cuéntenos más al respecto.
          </p>
          <button className="inline-flex items-center gap-2 text-red-900 font-medium tracking-wide hover:text-red-950 transition-colors group">
            <span>Contáctenos</span>
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
    </section>
  )
}

export default BestSeller