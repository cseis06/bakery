import React from 'react'

export interface CatalogProductProps {
  category: string
  name: string
  description: string
  image: string
  onRequestQuote?: () => void
}

const CatalogProduct: React.FC<CatalogProductProps> = ({
  category,
  name,
  description,
  image,
  onRequestQuote
}) => {
  return (
    <article className="group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 ease-out
                     grayscale group-hover:grayscale-0
                     group-hover:scale-110 group-hover:rotate-3"
        />
        
        {/* Subtle overlay that fades on hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                     opacity-50 group-hover:opacity-0 transition-opacity duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Category */}
        <span 
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
          style={{ color: '#c75d3a' }}
        >
          {category}
        </span>

        {/* Product Name */}
        <h3 
          className="text-xl md:text-2xl font-serif font-medium mb-3"
          style={{ color: '#3d2b1f' }}
        >
          {name}
        </h3>

        {/* Description - 2 lines max with ellipsis */}
        <p 
          className="text-sm md:text-base leading-relaxed mb-5 line-clamp-2"
          style={{ color: '#6b5a4a' }}
        >
          {description}
        </p>

        {/* Spacer to push button to bottom */}
        <div className="flex-grow" />

        {/* Quote Button */}
        <button
          onClick={onRequestQuote}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide 
                     transition-all duration-300 group/btn"
          style={{ color: '#8b7355' }}
        >
          <span className="relative">
            Solicitar Cotización
            <span 
              className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c75d3a] 
                         transition-all duration-300 group-hover/btn:w-full"
            />
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default CatalogProduct