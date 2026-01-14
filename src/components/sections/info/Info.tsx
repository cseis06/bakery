import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap'
import Panettone from "../../../assets/img/products/panettone-nobg.png"

const accordionData = [
  {
    title: "Este es el título del item 1",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ratione magni recusandae et minima ut. Unde amet odio quas ducimus accusamus similique nostrum, fugiat incidunt reprehenderit delectus assumenda velit neque?"
  },
  {
    title: "Este es el título del item 2",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ratione magni recusandae et minima ut. Unde amet odio quas ducimus accusamus similique nostrum, fugiat incidunt reprehenderit delectus assumenda velit neque?"
  },
  {
    title: "Este es el título del item 3",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ratione magni recusandae et minima ut. Unde amet odio quas ducimus accusamus similique nostrum, fugiat incidunt reprehenderit delectus assumenda velit neque?"
  }
]

const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([])

  const toggleAccordion = (index: number) => {
    const prevIndex = openIndex
    const newIndex = openIndex === index ? null : index

    if (prevIndex !== null && prevIndex !== index) {
      const prevContent = contentRefs.current[prevIndex]
      const prevIcon = iconRefs.current[prevIndex]
      
      if (prevContent && prevIcon) {
        gsap.timeline()
          .to(prevContent, {
            height: 0,
            opacity: 0,
            filter: 'blur(8px)',
            duration: 0.4,
            ease: 'power2.inOut'
          })
          .to(prevIcon, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: 'back.out(1.7)'
          }, '<')
      }
    }

    const currentContent = contentRefs.current[index]
    const currentIcon = iconRefs.current[index]

    if (currentContent && currentIcon) {
      if (newIndex === index) {
        // Abrir
        gsap.set(currentContent, { height: 'auto', filter: 'blur(0px)' })
        const height = currentContent.offsetHeight
        gsap.set(currentContent, { height: 0, opacity: 0, filter: 'blur(8px)' })

        gsap.timeline()
          .to(currentContent, {
            height: height,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out'
          })
          .to(currentIcon, {
            rotate: 180,
            scale: 1.1,
            duration: 0.4,
            ease: 'back.out(1.7)'
          }, '<')
      } else {
        // Cerrar
        gsap.timeline()
          .to(currentContent, {
            height: 0,
            opacity: 0,
            filter: 'blur(8px)',
            duration: 0.4,
            ease: 'power2.inOut'
          })
          .to(currentIcon, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: 'back.out(1.7)'
          }, '<')
      }
    }

    setOpenIndex(newIndex)
  }

  const getItemClasses = (index: number) => {
    const isFirst = index === 0
    const isLast = index === accordionData.length - 1
    
    let classes = 'bg-amber-950/15'
    
    if (isFirst) classes += ' rounded-t-2xl'
    if (isLast) classes += ' rounded-b-2xl'
    if (!isLast) classes += ''
    
    return classes
  }

  return (
    <section className=''>
      <h3 className='text-4xl font-extrabold text-red-900 text-center pb-16'>
        Este es el título de la sección con acordeón
      </h3>
      <div className='w-full flex justify-center items-center gap-20'>
        <div>
          <img src={Panettone} alt="Panettone" className='rounded-full h-[375px] w-[375px]' />
        </div>
        <div className='w-[50dvw]'>
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index
            
            return (
              <div key={index} className={getItemClasses(index)}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className='w-full p-6 flex justify-between items-center cursor-pointer group'
                >
                  <h4 className='font-semibold text-left'>{item.title}</h4>
                  <span 
                    ref={el => iconRefs.current[index] = el}
                    className='w-8 h-8 flex items-center justify-center rounded-full'
                  >
                    <FontAwesomeIcon 
                      icon={isOpen ? faMinus : faPlus} 
                      className='text-sm text-amber-950'
                    />
                  </span>
                </button>
                <div 
                  ref={el => contentRefs.current[index] = el}
                  className='overflow-hidden h-0 opacity-0'
                >
                  <p className='px-6 pb-6'>{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Info