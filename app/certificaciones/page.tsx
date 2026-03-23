import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Certificaciones | Lunardi',
  description: 'Certificaciones de calidad y seguridad alimentaria de Panadería Lunardi.',
}

const certificaciones = [
  {
    nombre: 'Registro Sanitario INAN',
    descripcion: 'Registro otorgado por el Instituto Nacional de Alimentación y Nutrición de Paraguay, que certifica que nuestras instalaciones y productos cumplen con todas las normativas sanitarias vigentes para la producción de alimentos.',
    entidad: 'Instituto Nacional de Alimentación y Nutrición',
    validez: 'Renovación anual',
    icono: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    nombre: 'BPM - Buenas Prácticas de Manufactura',
    descripcion: 'Implementación de normas y procedimientos que garantizan la higiene y la calidad en cada etapa de la producción, desde la recepción de materias primas hasta el producto terminado.',
    entidad: 'Sistema Interno de Calidad',
    validez: 'Auditoría continua',
    icono: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    nombre: 'HACCP',
    descripcion: 'Sistema de Análisis de Peligros y Puntos Críticos de Control que identifica, evalúa y controla los peligros significativos para la seguridad alimentaria en toda nuestra cadena de producción.',
    entidad: 'Estándar Internacional',
    validez: 'Certificación vigente',
    icono: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    nombre: 'Registro SENACSA',
    descripcion: 'Registro ante el Servicio Nacional de Calidad y Salud Animal para productos que contienen ingredientes de origen animal, garantizando la trazabilidad y calidad de nuestras materias primas.',
    entidad: 'SENACSA Paraguay',
    validez: 'Renovación anual',
    icono: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const compromisos = [
  {
    titulo: 'Trazabilidad Total',
    descripcion: 'Cada lote de producción puede ser rastreado desde la materia prima hasta la entrega al cliente.',
  },
  {
    titulo: 'Control de Calidad',
    descripcion: 'Inspecciones rigurosas en cada etapa del proceso productivo.',
  },
  {
    titulo: 'Capacitación Continua',
    descripcion: 'Nuestro personal recibe formación constante en seguridad alimentaria.',
  },
  {
    titulo: 'Auditorías Periódicas',
    descripcion: 'Evaluaciones internas y externas para garantizar el cumplimiento de estándares.',
  },
]

export default function CertificacionesPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Header */}
      <section className="bg-red-950 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-stone-300/60 text-xs tracking-[0.3em] uppercase font-light">
            Calidad Garantizada
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-50 mt-4 leading-tight">
            Nuestras Certificaciones
          </h1>
          <p className="text-stone-300/70 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
            Cada producto que sale de nuestro obrador cuenta con el respaldo de 
            certificaciones y estándares que garantizan la máxima calidad y seguridad alimentaria.
          </p>
        </div>
      </section>

      {/* Certificaciones Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificaciones.map((cert, index) => (
              <div
                key={cert.nombre}
                className="bg-white p-8 lg:p-10 border border-red-900/10 hover:border-red-900/30 
                  transition-colors duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="text-red-900/70 group-hover:text-red-800 transition-colors duration-300">
                    {cert.icono}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-red-900 font-medium mb-3">
                      {cert.nombre}
                    </h3>
                    <p className="text-red-950/60 font-light leading-relaxed mb-4">
                      {cert.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-red-900/50 font-light">
                        <strong className="text-red-900/70">Entidad:</strong> {cert.entidad}
                      </span>
                      <span className="text-red-900/50 font-light">
                        <strong className="text-red-900/70">Validez:</strong> {cert.validez}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisos */}
      <section className="py-16 lg:py-24 bg-red-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-stone-300/60 text-xs tracking-[0.3em] uppercase font-light">
              Más Allá de las Certificaciones
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-50 mt-4">
              Nuestro Compromiso con la Calidad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compromisos.map((compromiso, index) => (
              <div
                key={compromiso.titulo}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-stone-50/20 
                  flex items-center justify-center">
                  <span className="text-2xl text-stone-50/80 font-light">0{index + 1}</span>
                </div>
                <h3 className="text-lg text-stone-50 font-medium mb-3">
                  {compromiso.titulo}
                </h3>
                <p className="text-stone-300/60 font-light text-sm leading-relaxed">
                  {compromiso.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-red-900 mb-6">
            ¿Necesita más información sobre nuestras certificaciones?
          </h2>
          <p className="text-red-950/60 font-light mb-8 max-w-2xl mx-auto">
            Nuestro equipo comercial puede proporcionarle documentación detallada 
            y responder cualquier pregunta sobre nuestros procesos de calidad.
          </p>
          <a
            href="mailto:calidad@lunardi.com.py"
            className="inline-flex items-center gap-2 bg-red-900 text-amber-50 px-8 py-4 
              text-sm tracking-wide hover:bg-red-800 transition-colors duration-300"
          >
            Solicitar Documentación
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Decorative Bottom Line */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <div className="border-t border-red-900/10 pt-8">
          <p className="text-sm text-red-900/40 font-light text-center">
            Todas nuestras certificaciones están disponibles para verificación por parte de nuestros clientes mayoristas.
          </p>
        </div>
      </div>
    </div>
  )
}
