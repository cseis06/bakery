import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The texture is like clouds made of butter. I've never tasted a crumb so resilient and aromatic.",
    author: "Chef Elena Rossi",
    title: "Michelin Guide Contributor"
  },
  {
    id: 2,
    quote: "Every bite tells a story of tradition and passion. This is what authentic Italian baking should taste like.",
    author: "Marco Benedetti",
    title: "Food Critic, La Repubblica"
  },
  {
    id: 3,
    quote: "A masterpiece of simplicity. The flavors transport you straight to a Tuscan grandmother's kitchen.",
    author: "Sofia Martinelli",
    title: "Executive Chef, Osteria del Sole"
  },
  {
    id: 4,
    quote: "Absolutely divine. The perfect balance of crispy exterior and tender, flavorful interior.",
    author: "Alessandro Conti",
    title: "Culinary Director, Taste of Italy"
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const animateTransition = (direction: 'next' | 'prev') => {
    if (isAnimating || !contentRef.current) return
    setIsAnimating(true)

    const xDirection = direction === 'next' ? -100 : 100

    gsap.to(contentRef.current, {
      x: xDirection,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        if (direction === 'next') {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        } else {
          setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        }

        gsap.set(contentRef.current, {
          x: -xDirection,
          opacity: 0,
          filter: 'blur(10px)'
        })

        gsap.to(contentRef.current, {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => setIsAnimating(false)
        })
      }
    })
  }

  const handlePrev = () => animateTransition('prev')
  const handleNext = () => animateTransition('next')

  const currentTestimonial = testimonials[currentIndex]
  const circularText = "LUNARDI • EL ARTE DE HACER PAN • ITALIANO & ARTIGIANALE • "

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #e8dcc4 0%, #d4c4a8 25%, #c9b896 50%, #8b9a6b 75%, #7a8c5d 100%)'
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] animate-spin-slow"
        >
          <svg 
            viewBox="0 0 500 500" 
            className="w-full h-full"
          >
            <defs>
              <path
                id="circlePath"
                d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                fill="none"
              />
            </defs>
            <text 
              className="fill-current"
              style={{ 
                fill: 'rgba(139, 115, 85, 0.25)',
                fontSize: '24px',
                fontWeight: '600',
                letterSpacing: '8px',
                textTransform: 'uppercase'
              }}
            >
              <textPath href="#circlePath" startOffset="0%">
                {circularText}
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div 
          className="text-7xl md:text-8xl font-serif mb-6 text-red-900"
        >
          ❞
        </div>

        <div ref={contentRef} className="will-change-transform">
          <blockquote 
            className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-8 text-red-950/60"
          >
            "{currentTestimonial.quote}"
          </blockquote>

          <div className="space-y-1">
            <p 
              className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-red-900"
            >
              {currentTestimonial.author}
            </p>
            <p 
              className="text-xs md:text-sm tracking-wider uppercase text-red-950/50"
            >
              {currentTestimonial.title}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:text-white/50 hover:bg-red-950 disabled:opacity-50 disabled:cursor-not-allowed border-red-950/20 text-red-950/20"
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 bg-red-950' 
                    : 'bg-red-950/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:text-white/50 hover:bg-red-950 disabled:opacity-50 disabled:cursor-not-allowed border-red-950/20 text-red-950/20"
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Testimonials