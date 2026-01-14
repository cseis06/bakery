import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CatalogProduct from '../../common/CatalogProduct'

gsap.registerPlugin(ScrollTrigger)

interface Product {
  id: number
  category: string
  name: string
  description: string
  image: string
}

const featuredProducts: Product[] = [
  {
    id: 1,
    category: 'Panes Artesanales',
    name: 'Focaccia Tradizionale',
    description: 'Nuestra focaccia clásica con romero fresco, aceite de oliva extra virgen y sal marina. Horneada diariamente siguiendo la receta de la nonna.',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=800&q=80'
  },
  {
    id: 2,
    category: 'Pastelería Fina',
    name: 'Cannoli Siciliani',
    description: 'Crujientes tubos de masa rellenos de ricotta cremosa, chips de chocolate y pistachos sicilianos. Un clásico del sur de Italia.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80'
  },
  {
    id: 3,
    category: 'Especialidades',
    name: 'Panettone Milanese',
    description: 'El rey de los panes dulces italianos. Elaborado con masa madre, frutas confitadas premium y un proceso de fermentación de 72 horas.',
    image: 'https://images.unsplash.com/photo-1609508280149-48e0a36e5dea?w=800&q=80'
  },
  {
    id: 4,
    category: 'Panes Rústicos',
    name: 'Ciabatta Pugliese',
    description: 'Pan rústico de corteza crujiente y miga alveolada. Perfecto para bruschetta o acompañar tus platos favoritos con aceite de oliva.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80'
  }
]

const Catalog: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
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

      // Products stagger animation
      const products = productsRef.current?.children
      if (products) {
        gsap.fromTo(
          products,
          { y: 80, opacity: 0, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: productsRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      }

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.6,
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

  const handleRequestQuote = (productName: string) => {
    // Navigate to quote page or open modal
    console.log(`Requesting quote for: ${productName}`)
    // window.location.href = `/cotizacion?producto=${encodeURIComponent(productName)}`
  }

  const handleViewAllProducts = () => {
    // Navigate to full catalog page
    console.log('Navigating to full catalog')
    // window.location.href = '/catalogo'
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span 
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-red-950/50"
          >
            Nuestras Creaciones
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-6xl font-serif font-extrabold italic mb-6 text-red-900"
          >
            Catálogo de Productos
          </h2>
          <p 
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-red-950/50"
          >
            Descubre nuestra selección de productos artesanales, elaborados con ingredientes premium y técnicas tradicionales italianas transmitidas por generaciones.
          </p>
        </div>

        {/* Products Grid */}
        <div 
          ref={productsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16"
        >
          {featuredProducts.map((product) => (
            <CatalogProduct
              key={product.id}
              category={product.category}
              name={product.name}
              description={product.description}
              image={product.image}
              onRequestQuote={() => handleRequestQuote(product.name)}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div ref={ctaRef} className="text-center">
          <button
            onClick={handleViewAllProducts}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-950 text-amber-50
                       font-medium tracking-wide transition-all duration-300
                       hover:scale-105 hover:shadow-lg group"
          >
            <span>Ver Catálogo Completo</span>
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

          {/* Additional info */}
          <p 
            className="mt-4 text-sm"
            style={{ color: '#8b7355' }}
          >
            Más de 50 productos disponibles para tu evento o negocio
          </p>
        </div>
      </div>
    </section>
  )
}

export default Catalog