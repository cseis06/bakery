'use client'

import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.2) {
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

export default function VideoProduccion() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const headerRef = useInView(0.2)
  const videoContainerRef = useInView(0.1)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative bg-amber-50 overflow-hidden">
      {/* Header con fondo claro */}
      <div ref={headerRef.ref} className="py-16 lg:py-20 text-center">
        <span
          className={`inline-block text-red-900/60 text-xs tracking-[0.3em] uppercase font-light
            transition-all duration-700 ease-out
            ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Producción confiable, sabor inigualable
        </span>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-light text-red-900 mt-4 leading-[1.1] italic
            transition-all duration-700 delay-100 ease-out
            ${headerRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          La técnica detrás del sabor
        </h2>
      </div>

      {/* Contenedor del video */}
      <div 
        ref={videoContainerRef.ref}
        className={`relative transition-all duration-1000 ease-out
          ${videoContainerRef.isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {/* Video container con aspect ratio */}
        <div className="relative w-full h-[85dvh] aspect-video bg-black overflow-hidden">
          {/* Video local o placeholder */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/video/produccion-poster.jpg"
            playsInline
            loop
            muted={!isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/vid/bakery-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* Overlay oscuro cuando no está reproduciendo */}
          <div 
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500
              ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          />

          {/* Botón de play central */}
          <button
            onClick={handlePlayVideo}
            className={`absolute inset-0 flex items-center justify-center
              transition-all duration-500 group
              ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
          >
            <div className="relative">
              {/* Círculo animado exterior */}
              <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full border border-amber-50/30 
                animate-ping opacity-20" />
              
              {/* Círculo principal */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-amber-50/10 backdrop-blur-sm
                border border-amber-50/40 flex items-center justify-center
                group-hover:bg-amber-50/20 group-hover:border-amber-50/60 group-hover:scale-110
                transition-all duration-300">
                <svg 
                  className="w-10 h-10 md:w-12 md:h-12 text-amber-50 ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>

          {/* Controles en hover cuando está reproduciendo */}
          <div 
            className={`absolute inset-0 flex items-center justify-center
              transition-opacity duration-300 cursor-pointer
              ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handlePlayVideo}
          >
            <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm
              flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <svg 
                className="w-8 h-8 text-amber-50" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </div>
          </div>

          {/* Badge en la esquina */}
          <div 
            className={`absolute top-8 right-8 md:top-12 md:right-12 z-10
              transition-all duration-700 delay-400
              ${videoContainerRef.isInView && !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <div className="flex items-center gap-2 text-amber-50/60">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs tracking-[0.2em] uppercase">Nuestro obrador</span>
            </div>
          </div>
        </div>

        {/* Gradiente inferior para transición suave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-50 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}