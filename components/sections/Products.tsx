'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

type Categoria = 'todos' | 'panettone' | 'panes' | 'dulces' | 'secos' | 'otros'

interface Producto {
  id: number
  nombre: string
  categoria: Categoria
  descripcion: string
  imagen: string
  destacado?: boolean
}

const categorias: { id: Categoria; nombre: string }[] = [
  { id: 'todos', nombre: 'Todos' },
  { id: 'panettone', nombre: 'Panettone' },
  { id: 'panes', nombre: 'Panes' },
  { id: 'dulces', nombre: 'Dulces' },
  { id: 'secos', nombre: 'Secos' },
  { id: 'otros', nombre: 'Otros' },
]

const productos: Producto[] = [
  // PANETTONE
  {
    id: 1,
    nombre: 'Panettone Clásico',
    categoria: 'panettone',
    descripcion: 'El auténtico pan dulce italiano con frutas confitadas y pasas',
    imagen: '/productos/panettone-clasico.jpg',
    destacado: true,
  },
  {
    id: 2,
    nombre: 'Chocottone',
    categoria: 'panettone',
    descripcion: 'Panettone con chips de chocolate belga',
    imagen: '/productos/chocottone.jpg',
  },
  // PANES
  {
    id: 3,
    nombre: 'Pan de Viena',
    categoria: 'panes',
    descripcion: 'Suave y esponjoso, perfecto para sándwiches',
    imagen: '/productos/pan-viena.jpg',
  },
  {
    id: 4,
    nombre: 'Pan de Miga Blanco',
    categoria: 'panes',
    descripcion: 'Clásico pan de miga para sándwiches tradicionales',
    imagen: '/productos/pan-miga-blanco.jpg',
  },
  {
    id: 5,
    nombre: 'Pan de Miga Integral',
    categoria: 'panes',
    descripcion: 'Pan de miga con harina integral, más fibra y sabor',
    imagen: '/productos/pan-miga-integral.jpg',
  },
  {
    id: 6,
    nombre: 'Pan Chip',
    categoria: 'panes',
    descripcion: 'Suave y versátil, ideal para todo tipo de preparaciones',
    imagen: '/productos/pan-chip.jpg',
  },
  {
    id: 7,
    nombre: 'Pan de Semillas',
    categoria: 'panes',
    descripcion: 'Rico en fibra, con mix de semillas seleccionadas',
    imagen: '/productos/pan-semillas.jpg',
  },
  {
    id: 8,
    nombre: 'Pan de Hamburguesa',
    categoria: 'panes',
    descripcion: 'Con semillas de sésamo, suave y resistente',
    imagen: '/productos/pan-hamburguesa.jpg',
  },
  // DULCES
  {
    id: 9,
    nombre: 'Pastafrola',
    categoria: 'dulces',
    descripcion: 'Clásica tarta de membrillo con masa tierna',
    imagen: '/productos/pastafrola.jpg',
    destacado: true,
  },
  {
    id: 10,
    nombre: 'Alfajores',
    categoria: 'dulces',
    descripcion: 'Rellenos de dulce de leche, bañados en chocolate',
    imagen: '/productos/alfajores.jpg',
  },
  {
    id: 11,
    nombre: 'Alfajorcitos',
    categoria: 'dulces',
    descripcion: 'Versión mini de nuestros alfajores, ideales para eventos',
    imagen: '/productos/alfajorcitos.jpg',
  },
  {
    id: 12,
    nombre: 'Palmeritas',
    categoria: 'dulces',
    descripcion: 'Crujientes hojas de hojaldre caramelizado',
    imagen: '/productos/palmeritas.jpg',
  },
  {
    id: 13,
    nombre: 'Surtido de Galletas',
    categoria: 'dulces',
    descripcion: 'Variedad de galletas artesanales',
    imagen: '/productos/surtido-galletas.jpg',
  },
  // SECOS
  {
    id: 14,
    nombre: 'Grisines Blancos',
    categoria: 'secos',
    descripcion: 'Palitos de pan crocantes, perfectos para acompañar',
    imagen: '/productos/grisines-blancos.jpg',
  },
  {
    id: 15,
    nombre: 'Grisines Integrales',
    categoria: 'secos',
    descripcion: 'Grisines con harina integral, más fibra y sabor rústico',
    imagen: '/productos/grisines-integrales.jpg',
  },
  {
    id: 16,
    nombre: 'Coquitos Blancos',
    categoria: 'secos',
    descripcion: 'Clásicos bocaditos de coco rallado y dulzura justa',
    imagen: '/productos/coquitos-blancos.jpg',
  },
  {
    id: 17,
    nombre: 'Coquitos Integrales',
    categoria: 'secos',
    descripcion: 'Coquitos con harina integral, sabor más intenso',
    imagen: '/productos/coquitos-integrales.jpg',
  },
  // OTROS
  {
    id: 18,
    nombre: 'Prepizza',
    categoria: 'otros',
    descripcion: 'Base lista para tu pizza favorita',
    imagen: '/productos/prepizza.jpg',
  },
  {
    id: 19,
    nombre: 'Galleta Molida',
    categoria: 'otros',
    descripcion: 'Para bases de tortas y postres',
    imagen: '/productos/galleta-molida.jpg',
  },
]

function useInView(threshold = 0.1) {
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

export default function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('todos')
  const [productosVisibles, setProductosVisibles] = useState(productos)
  const [isAnimating, setIsAnimating] = useState(false)
  const headerRef = useInView(0.2)
  const filtrosRef = useInView(0.2)
  const gridRef = useInView(0.1)
  const ctaRef = useInView(0.3)

  const filtrarProductos = (categoria: Categoria) => {
    if (categoria === categoriaActiva) return
    
    setIsAnimating(true)
    
    setTimeout(() => {
      setCategoriaActiva(categoria)
      if (categoria === 'todos') {
        setProductosVisibles(productos)
      } else {
        setProductosVisibles(productos.filter(p => p.categoria === categoria))
      }
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section id="productos" className="relative py-24 lg:py-32 bg-red-950 overflow-hidden">
      {/* Textura de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header de la sección */}
        <div 
          ref={headerRef.ref}
          className="text-center mb-16"
        >
          <span 
            className={`inline-block text-amber-200/60 text-xs tracking-[0.3em] uppercase font-light
              transition-all duration-700 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Nuestro Catálogo
          </span>
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-amber-50 mt-4 leading-[1.1]
              transition-all duration-700 delay-100 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Productos
            <span className="block italic font-normal text-amber-200/80">de calidad superior</span>
          </h2>
          <p 
            className={`text-amber-100/60 mt-6 max-w-2xl mx-auto font-light
              transition-all duration-700 delay-200 ease-out
              ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Cada producto que sale de nuestro obrador lleva consigo décadas de tradición 
            y el compromiso de mantener los más altos estándares de calidad.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div 
          ref={filtrosRef.ref}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categorias.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => filtrarProductos(cat.id)}
              className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300
                ${filtrosRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${categoriaActiva === cat.id
                  ? 'bg-amber-200/80 text-red-950 font-medium'
                  : 'bg-transparent text-amber-100/70 border border-amber-100/20 hover:border-amber-100/40 hover:text-amber-100'
                }`}
              style={{ 
                transitionDelay: filtrosRef.isInView ? `${300 + index * 50}ms` : '0ms' 
              }}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div 
          ref={gridRef.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-300
            ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          {productosVisibles.map((producto, index) => (
            <article
              key={producto.id}
              className={`group relative bg-red-900/30 backdrop-blur-sm overflow-hidden
                transition-all duration-700 ease-out hover:bg-red-900/50
                ${gridRef.isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              style={{ 
                transitionDelay: gridRef.isInView ? `${index * 60}ms` : '0ms' 
              }}
            >
              {/* Imagen */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent 
                  opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Badge destacado */}
                {producto.destacado && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-amber-200/80 text-red-950 text-[10px] tracking-[0.2em] uppercase font-medium">
                    Destacado
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                <h3 className="text-lg text-amber-50 font-medium mb-1 group-hover:text-amber-200 transition-colors">
                  {producto.nombre}
                </h3>
                <p className="text-amber-100/50 text-sm font-light line-clamp-2 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform 
                  translate-y-2 group-hover:translate-y-0">
                  {producto.descripcion}
                </p>
              </div>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-200/80 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </article>
          ))}
        </div>

        {/* CTA inferior */}
        <div 
          ref={ctaRef.ref}
          className="text-center mt-16"
        >
          <p 
            className={`text-amber-100/50 text-sm mb-6 font-light transition-all duration-700 ease-out
              ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            ¿Interesado en nuestros productos para tu negocio?
          </p>
          <a
            href="#contacto"
            className={`inline-flex items-center gap-3 px-8 py-4 bg-amber-200/80 text-red-950 
              text-xs tracking-[0.2em] uppercase font-medium
              hover:bg-amber-200/60 transition-all duration-500 delay-150 ease-out
              ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Solicitar Catálogo Completo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}