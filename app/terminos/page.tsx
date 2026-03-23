import { Metadata } from 'next'
import LegalPageLayout from '@/components/layout/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Lunardi',
  description: 'Términos y condiciones de uso de los servicios de Panadería Lunardi.',
}

export default function TerminosPage() {
  return (
    <LegalPageLayout
      title="Términos y Condiciones"
      subtitle="Legal"
      lastUpdated="15 de marzo de 2026"
    >
      <h2>1. Introducción</h2>
      <p>
        Bienvenido a Lunardi S.A. (en adelante, &quot;Lunardi&quot;, &quot;nosotros&quot;, &quot;nuestro&quot;). 
        Estos Términos y Condiciones rigen el uso de nuestro sitio web y la adquisición 
        de nuestros productos de panadería a través de canales mayoristas.
      </p>
      <p>
        Al acceder a nuestro sitio web o realizar pedidos con nosotros, usted acepta 
        estar sujeto a estos términos. Si no está de acuerdo con alguna parte de estos 
        términos, le rogamos que no utilice nuestros servicios.
      </p>

      <h2>2. Servicios y Productos</h2>
      <p>
        Lunardi es una panadería industrial especializada en la producción y distribución 
        mayorista de productos de panadería artesanal. Nuestros servicios están dirigidos 
        exclusivamente a:
      </p>
      <ul>
        <li>Supermercados y cadenas de retail</li>
        <li>Hoteles, restaurantes y servicios de catering (HORECA)</li>
        <li>Distribuidores autorizados</li>
        <li>Otros negocios del sector alimenticio</li>
      </ul>
      <p>
        <strong>No realizamos ventas directas al consumidor final.</strong> Todos nuestros 
        productos están destinados exclusivamente para reventa o uso comercial.
      </p>

      <h2>3. Pedidos y Contratos</h2>
      <h3>3.1 Proceso de Pedido</h3>
      <p>
        Los pedidos pueden realizarse a través de nuestros canales oficiales: correo 
        electrónico, teléfono o a través de nuestro representante comercial asignado. 
        Un pedido se considera confirmado únicamente cuando reciba confirmación escrita 
        de nuestro equipo comercial.
      </p>
      
      <h3>3.2 Cantidades Mínimas</h3>
      <p>
        Establecemos cantidades mínimas de pedido que varían según el tipo de producto 
        y la zona de entrega. Estas cantidades serán comunicadas durante el proceso 
        de negociación comercial.
      </p>

      <h3>3.3 Precios</h3>
      <p>
        Los precios de nuestros productos se establecen mediante acuerdos comerciales 
        individuales y pueden variar según el volumen, frecuencia de pedidos y condiciones 
        específicas del cliente. Nos reservamos el derecho de modificar los precios con 
        previo aviso de 30 días.
      </p>

      <h2>4. Entregas</h2>
      <h3>4.1 Horarios de Entrega</h3>
      <p>
        Las entregas se realizan de lunes a viernes en horarios acordados previamente 
        con cada cliente. Los horarios específicos dependerán de la ruta de distribución 
        y la ubicación del cliente.
      </p>

      <h3>4.2 Recepción de Productos</h3>
      <p>
        El cliente debe designar personal autorizado para la recepción de los productos. 
        Es responsabilidad del cliente verificar la cantidad y estado de los productos 
        al momento de la entrega y reportar cualquier discrepancia de manera inmediata.
      </p>

      <h3>4.3 Productos Perecederos</h3>
      <p>
        Dado que nuestros productos son perecederos, el cliente es responsable de 
        mantener las condiciones adecuadas de almacenamiento una vez recibida la mercancía. 
        No aceptamos devoluciones por productos mal almacenados por el cliente.
      </p>

      <h2>5. Pagos</h2>
      <p>
        Las condiciones de pago se establecen de manera individual en el contrato 
        comercial con cada cliente. El incumplimiento en los pagos puede resultar en 
        la suspensión de entregas y la aplicación de intereses moratorios según la 
        legislación paraguaya vigente.
      </p>

      <h2>6. Garantía y Calidad</h2>
      <p>
        Todos nuestros productos cumplen con las normativas sanitarias vigentes en 
        Paraguay y cuentan con los registros correspondientes del INAN (Instituto 
        Nacional de Alimentación y Nutrición). Garantizamos la calidad de nuestros 
        productos siempre que se mantengan las condiciones de almacenamiento recomendadas.
      </p>

      <h2>7. Propiedad Intelectual</h2>
      <p>
        Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, 
        gráficos, logos, imágenes, y software, son propiedad de Lunardi S.A. o de sus 
        licenciantes y están protegidos por las leyes de propiedad intelectual de Paraguay 
        y tratados internacionales.
      </p>

      <h2>8. Limitación de Responsabilidad</h2>
      <p>
        Lunardi no será responsable por daños indirectos, incidentales, especiales o 
        consecuentes que resulten del uso o la imposibilidad de usar nuestros productos 
        o servicios, excepto en casos de negligencia grave o dolo comprobado.
      </p>

      <h2>9. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier 
        momento. Las modificaciones entrarán en vigor a partir de su publicación en el 
        sitio web. El uso continuado de nuestros servicios después de cualquier cambio 
        constituye su aceptación de los nuevos términos.
      </p>

      <h2>10. Ley Aplicable y Jurisdicción</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Paraguay. Cualquier 
        disputa relacionada con estos términos será sometida a la jurisdicción exclusiva 
        de los tribunales competentes de Ciudad del Este, Alto Paraná, Paraguay.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de:
      </p>
      <ul>
        <li><strong>Email:</strong> legal@lunardi.com.py</li>
        <li><strong>Teléfono:</strong> +595 614 123 456</li>
        <li><strong>Dirección:</strong> Av. Monseñor Rodríguez, Ciudad del Este, Paraguay</li>
      </ul>
    </LegalPageLayout>
  )
}
