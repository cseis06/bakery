'use client'

import { useState } from 'react'
import { Metadata } from 'next'

const faqCategories = [
  {
    category: 'Pedidos y Compras',
    questions: [
      {
        question: '¿Cuál es el pedido mínimo para ser cliente mayorista?',
        answer: 'El pedido mínimo varía según la categoría de producto y la zona de entrega. Generalmente, para iniciar una relación comercial solicitamos un pedido mínimo inicial que nuestro equipo comercial le detallará según su ubicación y tipo de negocio. Contáctenos para recibir información personalizada.',
      },
      {
        question: '¿Cómo puedo realizar un pedido?',
        answer: 'Los pedidos pueden realizarse a través de varios canales: por correo electrónico a mayoristas@lunardi.com.py, llamando a nuestro departamento comercial al +595 614 123 456, o a través de su representante comercial asignado. Una vez que sea cliente activo, también podrá realizar pedidos a través de nuestro sistema de pedidos en línea.',
      },
      {
        question: '¿Con cuánta anticipación debo realizar mi pedido?',
        answer: 'Recomendamos realizar los pedidos con al menos 48 horas de anticipación para garantizar la disponibilidad de todos los productos. Para pedidos de gran volumen o productos especiales, sugerimos contactarnos con mayor anticipación.',
      },
      {
        question: '¿Puedo modificar o cancelar un pedido ya realizado?',
        answer: 'Las modificaciones o cancelaciones son posibles hasta 24 horas antes de la fecha de entrega programada. Después de este plazo, debido a la naturaleza perecedera de nuestros productos, no es posible realizar cambios.',
      },
    ],
  },
  {
    category: 'Entregas y Logística',
    questions: [
      {
        question: '¿Cuál es el área de cobertura de entregas?',
        answer: 'Actualmente realizamos entregas en Ciudad del Este y localidades cercanas. Para zonas más alejadas, trabajamos con distribuidores autorizados que pueden atender su ubicación. Consulte con nuestro equipo comercial la cobertura exacta para su zona.',
      },
      {
        question: '¿En qué horarios realizan las entregas?',
        answer: 'Las entregas se realizan de lunes a viernes entre las 6:00 AM y las 3:00 PM. El horario específico para su establecimiento se coordina al momento de establecer la relación comercial y depende de la ruta de distribución asignada.',
      },
      {
        question: '¿Qué hago si mi pedido llega incompleto o dañado?',
        answer: 'Es importante que verifique su pedido al momento de la entrega y reporte cualquier inconveniente de manera inmediata al transportista. Posteriormente, contacte a nuestro departamento de atención al cliente dentro de las primeras 24 horas para gestionar la reposición o crédito correspondiente.',
      },
      {
        question: '¿Ofrecen servicio de entrega los fines de semana?',
        answer: 'Actualmente no realizamos entregas regulares los fines de semana. Sin embargo, para eventos especiales o grandes pedidos, podemos coordinar entregas extraordinarias con previo acuerdo. Consulte disponibilidad con su representante comercial.',
      },
    ],
  },
  {
    category: 'Productos y Calidad',
    questions: [
      {
        question: '¿Cuál es la vida útil de sus productos?',
        answer: 'La vida útil varía según el tipo de producto. Los panes frescos tienen una vida útil de 2-3 días, mientras que los productos de pastelería pueden durar hasta 5 días en condiciones óptimas de almacenamiento. Cada producto viene con su fecha de elaboración y vencimiento claramente indicada.',
      },
      {
        question: '¿Cuáles son las condiciones de almacenamiento recomendadas?',
        answer: 'Recomendamos almacenar nuestros productos en un lugar fresco y seco, a temperatura ambiente entre 18-25°C. Evite la exposición directa al sol y la humedad excesiva. Para productos con crema o rellenos, se requiere refrigeración entre 2-8°C.',
      },
      {
        question: '¿Pueden elaborar productos personalizados o con recetas especiales?',
        answer: 'Sí, contamos con capacidad para desarrollar productos personalizados según las necesidades de su negocio. Esto incluye variaciones de tamaño, ingredientes especiales o productos exclusivos. Estos desarrollos requieren un volumen mínimo de compra y un proceso de prueba previo.',
      },
      {
        question: '¿Sus productos contienen alérgenos?',
        answer: 'Nuestros productos pueden contener gluten, lácteos, huevos, frutos secos y soja. Cada producto está debidamente etiquetado con la información de alérgenos según la normativa vigente. Si necesita información específica sobre algún producto, no dude en consultarnos.',
      },
    ],
  },
  {
    category: 'Precios y Pagos',
    questions: [
      {
        question: '¿Cómo se determinan los precios?',
        answer: 'Los precios se establecen mediante acuerdos comerciales individuales basados en el volumen de compra, frecuencia de pedidos y tipo de productos. Ofrecemos escalas de descuento por volumen y condiciones especiales para clientes con compras regulares.',
      },
      {
        question: '¿Qué formas de pago aceptan?',
        answer: 'Aceptamos transferencias bancarias, cheques y efectivo. Las condiciones de crédito y plazos de pago se definen al establecer la relación comercial y están sujetas a evaluación crediticia. Consulte con nuestro departamento de cobranzas para más detalles.',
      },
      {
        question: '¿Emiten factura electrónica?',
        answer: 'Sí, todas nuestras operaciones están respaldadas por facturas electrónicas según la normativa de la SET (Subsecretaría de Estado de Tributación). Las facturas se envían por correo electrónico al momento de la entrega.',
      },
      {
        question: '¿Ofrecen descuentos por volumen?',
        answer: 'Sí, contamos con una estructura de descuentos escalonada basada en el volumen de compra mensual. Además, periódicamente ofrecemos promociones especiales para productos seleccionados. Su representante comercial puede detallarle las condiciones aplicables.',
      },
    ],
  },
  {
    category: 'Cómo ser Cliente',
    questions: [
      {
        question: '¿Qué requisitos necesito para ser cliente mayorista?',
        answer: 'Para establecer una cuenta mayorista necesitamos: RUC vigente de su empresa, documentos del representante legal, referencias comerciales y comprobante de domicilio del local comercial. Nuestro equipo comercial le guiará en el proceso de alta.',
      },
      {
        question: '¿Cuánto tiempo toma el proceso de alta como cliente?',
        answer: 'Una vez recibida toda la documentación, el proceso de evaluación y alta toma entre 3 a 5 días hábiles. Posterior a la aprobación, coordinamos una visita para conocer su negocio y establecer las condiciones comerciales.',
      },
      {
        question: '¿Trabajan con distribuidores?',
        answer: 'Sí, contamos con un programa de distribuidores autorizados para expandir nuestra cobertura. Si está interesado en convertirse en distribuidor Lunardi, contáctenos para conocer los requisitos y beneficios del programa.',
      },
      {
        question: '¿Puedo visitar sus instalaciones?',
        answer: 'Sí, organizamos visitas a nuestra planta de producción para clientes potenciales y actuales. Las visitas se coordinan con anticipación y permiten conocer nuestros procesos de producción y estándares de calidad. Contáctenos para agendar una visita.',
      },
    ],
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-red-900/10 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-light pr-8 transition-colors duration-300 ${
          isOpen ? 'text-red-900' : 'text-red-950/80 group-hover:text-red-900'
        }`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center
          transition-all duration-300 ${
          isOpen 
            ? 'border-red-900 bg-red-900 text-white rotate-45' 
            : 'border-red-900/30 text-red-900/50 group-hover:border-red-900'
        }`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
      }`}>
        <p className="text-red-950/60 font-light leading-relaxed pr-16">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category)

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Header */}
      <section className="bg-red-950 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-stone-300/60 text-xs tracking-[0.3em] uppercase font-light">
            Centro de Ayuda
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-50 mt-4 leading-tight">
            Preguntas Frecuentes
          </h1>
          <p className="text-stone-300/70 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
            Encuentre respuestas a las preguntas más comunes sobre nuestros productos, 
            servicios y cómo trabajar con nosotros como socio mayorista.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-red-900/10 sticky top-0 bg-amber-50 z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex  justify-center overflow-x-auto gap-1 py-4 scrollbar-hide">
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-2.5 text-sm whitespace-nowrap transition-all duration-300 
                  ${activeCategory === cat.category
                    ? 'bg-red-900 text-amber-50'
                    : 'text-red-900/60 hover:text-red-900 hover:bg-red-900/5'
                  }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={activeCategory === category.category ? 'block' : 'hidden'}
            >
              <h2 className="text-2xl font-light text-red-900 mb-8">
                {category.category}
              </h2>
              <div className="bg-white border border-red-900/10 px-6">
                {category.questions.map((item, questionIndex) => (
                  <FAQItem
                    key={questionIndex}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems[`${categoryIndex}-${questionIndex}`] || false}
                    onClick={() => toggleItem(categoryIndex, questionIndex)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-red-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-stone-50 mb-6">
            ¿No encontró lo que buscaba?
          </h2>
          <p className="text-stone-300/70 font-light mb-8 max-w-2xl mx-auto">
            Nuestro equipo comercial está listo para responder todas sus preguntas 
            y ayudarle a encontrar la mejor solución para su negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mayoristas@lunardi.com.py"
              className="inline-flex items-center justify-center gap-2 bg-amber-50 text-red-900 px-8 py-4 
                text-sm tracking-wide hover:bg-white transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Escribir un Email
            </a>
            <a
              href="https://wa.me/595614123456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-stone-50/30 text-stone-50 px-8 py-4 
                text-sm tracking-wide hover:bg-stone-50/10 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Line */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <div className="border-t border-red-900/10 pt-8">
          <p className="text-sm text-red-900/40 font-light text-center">
            Horario de atención: Lunes a Viernes de 6:00 AM a 3:00 PM
          </p>
        </div>
      </div>
    </div>
  )
}
