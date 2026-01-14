import type { ReactNode } from 'react'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger)

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none'
type ToggleMode = 'once' | 'repeat' | 'reverse' | 'restart'

interface ScrollRevealProps {
  children: ReactNode
  direction?: AnimationDirection
  delay?: number
  duration?: number
  distance?: number
  opacity?: number
  scale?: number
  rotate?: number
  blur?: number
  stagger?: number
  ease?: string
  start?: string
  end?: string
  markers?: boolean
  className?: string
  mode?: ToggleMode
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  opacity = 0,
  scale = 1,
  rotate = 0,
  blur = 10,
  stagger = 0.1,
  ease = 'power2.out',
  start = 'top 85%',
  end = 'bottom 15%',
  markers = false,
  className = '',
  mode = 'repeat',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.children

    // Configurar posición inicial según dirección
    const getInitialPosition = () => {
      switch (direction) {
        case 'up':
          return { y: distance, x: 0 }
        case 'down':
          return { y: -distance, x: 0 }
        case 'left':
          return { y: 0, x: distance }
        case 'right':
          return { y: 0, x: -distance }
        case 'none':
        default:
          return { y: 0, x: 0 }
      }
    }

    const { x, y } = getInitialPosition()

    const initialState = {
      opacity,
      y,
      x,
      scale,
      rotate,
      filter: `blur(${blur}px)`,
    }

    const animatedState = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      duration,
      delay,
      stagger,
      ease,
    }

    // Establecer estado inicial
    gsap.set(elements, initialState)

    // Función para animar entrada
    const animateIn = () => {
      gsap.to(elements, animatedState)
    }

    // Función para animar salida
    const animateOut = () => {
      gsap.to(elements, {
        ...initialState,
        duration,
        delay,
        stagger,
        ease,
      })
    }

    // Función para resetear y animar
    const resetAndAnimateIn = () => {
      gsap.set(elements, initialState)
      gsap.to(elements, animatedState)
    }

    // Configurar callbacks según el modo
    const getCallbacks = () => {
      switch (mode) {
        case 'once':
          return {
            onEnter: animateIn,
          }
        case 'repeat':
          return {
            onEnter: animateIn,
            onLeaveBack: animateOut,
          }
        case 'reverse':
          return {
            onEnter: animateIn,
            onLeave: animateOut,
            onEnterBack: animateIn,
            onLeaveBack: animateOut,
          }
        case 'restart':
          return {
            onEnter: resetAndAnimateIn,
            onLeaveBack: animateOut,
          }
        default:
          return {
            onEnter: animateIn,
            onLeaveBack: animateOut,
          }
      }
    }

    // Crear ScrollTrigger con callbacks
    const trigger = ScrollTrigger.create({
      trigger: container,
      start,
      end,
      markers,
      ...getCallbacks(),
    })

    // Cleanup
    return () => {
      trigger.kill()
    }
  }, [direction, delay, duration, distance, opacity, scale, rotate, blur, stagger, ease, start, end, markers, mode])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal