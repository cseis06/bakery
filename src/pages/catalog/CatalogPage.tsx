import React, { useRef, useEffect, useState, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {  
  categories, 
  getProductsByCategory, 
  searchProducts,
  type Product 
} from './data/Products'

gsap.registerPlugin(ScrollTrigger)

// CSS for slow spin animation
const styles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 30s linear infinite;
  }
`

const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let result = getProductsByCategory(selectedCategory)
    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery)
      result = result.filter(p => searchResults.some(sr => sr.id === p.id))
    }
    return result
  }, [selectedCategory, searchQuery])

  // Animaciones GSAP
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
        }
      )

      // Filters animation
      gsap.fromTo(
        filtersRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: 'power2.out',
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animación de productos cuando cambian
  useEffect(() => {
    if (productsRef.current) {
      const products = productsRef.current.children
      gsap.fromTo(
        products,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      )
    }
  }, [filteredProducts])

  const handleRequestQuote = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  /*const getCategoryName = (categoryId: string): string => {
    const category = categories.find(c => c.id === categoryId)
    return category?.name || categoryId
  }*/

  return (
    <section ref={sectionRef} className="min-h-screen bg-amber-50/30">
      <style>{styles}</style>
      {/* Hero Header */}
      <div className="relative overflow-hidden opacity-90" style={{
        background: 'linear-gradient(135deg, #d4c5a9 0%, #c9b896 25%, #b8a978 50%, #9a9b6a 75%, #8b9a6b 100%)'
      }}>

        <div ref={headerRef} className="relative max-w-7xl mx-auto px-6 md:px-8 text-center py-20 md:py-28">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-red-900/60 mb-4">
            Tradición Italiana desde 1985
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic mb-6 text-red-900">
            Nuestro Catálogo
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-red-950/60">
            Más de 50 productos artesanales elaborados con ingredientes premium 
            y técnicas tradicionales italianas transmitidas por generaciones.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-full bg-white/40 backdrop-blur-sm
                        text-red-950 placeholder-red-900/40
                         focus:outline-none focus:bg-white/60
                         transition-all duration-300 shadow-sm"
              />
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-red-900/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-red-900/50 
                           hover:text-red-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Category Filters */}
        <div ref={filtersRef} className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-red-900 text-amber-50 shadow-lg shadow-red-900/20'
                    : 'bg-red-950/20 text-red-900 hover:bg-red-950/30'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Results count */}
          <p className="text-center mt-6 text-sm text-red-950/50">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
            {searchQuery && ` para "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            ref={productsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestQuote={() => handleRequestQuote(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-900/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif italic text-red-900 mb-2">
              No encontramos productos
            </h3>
            <p className="text-red-950/50">
              Intenta con otra búsqueda o categoría
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-red-900 text-amber-50 
                       font-medium text-sm hover:bg-red-950 transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white 
                      rounded-3xl p-10 md:p-16">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-red-950/50 mb-4">
            ¿Tienes un evento especial?
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-red-900 mb-4">
            Pedidos al por Mayor
          </h2>
          <p className="max-w-xl mx-auto text-red-950/60 mb-8">
            Ofrecemos precios especiales para eventos, restaurantes, cafeterías y negocios. 
            Contáctanos para una cotización personalizada.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-900 text-amber-50
                     font-medium tracking-wide transition-all duration-300
                     hover:bg-red-950 group"
          >
            <span>Solicitar Cotización</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  )
}

// Product Card Component
interface ProductCardProps {
  product: Product
  onRequestQuote: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onRequestQuote }) => {
  const getCategoryLabel = (categoryId: string): string => {
    const category = categories.find(c => c.id === categoryId)
    return category?.name || categoryId
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl 
                      transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 
                   group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
              Nuevo
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-red-900 text-amber-50 text-xs font-semibold rounded-full">
              Popular
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <button
          onClick={onRequestQuote}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 
                   bg-white/95 backdrop-blur-sm text-red-900 font-medium text-sm rounded-full
                   opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-300 hover:bg-red-900 hover:text-amber-50"
        >
          Ver Detalles
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium tracking-wider uppercase text-red-950/40">
          {getCategoryLabel(product.category)}
        </span>
        <h3 className="text-lg font-serif italic text-red-900 mt-1 mb-2 
                     group-hover:text-red-950 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-red-950/60 line-clamp-2 mb-4">
          {product.description}
        </p>
        
        {/* Action */}
        <div className="flex items-center justify-end pt-3 border-t border-red-100">
          <button
            onClick={onRequestQuote}
            className="text-sm font-medium text-red-900 hover:text-red-950 
                     flex items-center gap-1 transition-colors"
          >
            Cotizar
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

// Product Modal Component
interface ProductModalProps {
  product: Product
  onClose: () => void
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate in
    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )
    gsap.fromTo(
      contentRef.current,
      { scale: 0.9, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
    )

    // Lock scroll
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleClose = () => {
    gsap.to(modalRef.current, { opacity: 0, duration: 0.2 })
    gsap.to(contentRef.current, { 
      scale: 0.9, 
      opacity: 0, 
      y: 20, 
      duration: 0.2,
      onComplete: onClose 
    })
  }

  const getCategoryLabel = (categoryId: string): string => {
    const category = categories.find(c => c.id === categoryId)
    return category?.name || categoryId
  }

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 
               bg-red-950/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative aspect-video">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm
                     flex items-center justify-center text-red-900 hover:bg-red-900 
                     hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.isNew && (
              <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                Nuevo
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-3 py-1 bg-red-900 text-amber-50 text-xs font-semibold rounded-full">
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh]">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-red-950/40">
            {getCategoryLabel(product.category)}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif italic text-red-900 mt-2 mb-4">
            {product.name}
          </h2>
          <p className="text-red-950/70 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {product.weight && (
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <span className="block text-xs text-red-950/50 mb-1">Peso</span>
                <span className="font-medium text-red-900">{product.weight}</span>
              </div>
            )}
            {product.servings && (
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <span className="block text-xs text-red-950/50 mb-1">Porciones</span>
                <span className="font-medium text-red-900">{product.servings}</span>
              </div>
            )}
          </div>

          {/* Ingredients */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-red-900 mb-3">Ingredientes Principales</h4>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-amber-100/50 text-red-900/80 text-sm rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-red-100">
            <a
              href={`/cotizacion?producto=${encodeURIComponent(product.name)}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 
                       rounded-full bg-red-900 text-amber-50 font-medium
                       hover:bg-red-950 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Solicitar Cotización
            </a>
            <a
              href="https://wa.me/595981123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 
                       rounded-full bg-green-600 text-white font-medium
                       hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage