import { Metadata } from 'next'
import LegalPageLayout from '@/components/layout/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Lunardi',
  description: 'Política de privacidad y protección de datos personales de Panadería Lunardi.',
}

export default function PrivacidadPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      subtitle="Protección de Datos"
      lastUpdated="15 de marzo de 2026"
    >
      <h2>1. Introducción</h2>
      <p>
        En Lunardi S.A. (en adelante, &quot;Lunardi&quot;) nos comprometemos a proteger 
        la privacidad de nuestros clientes, socios comerciales y visitantes de nuestro 
        sitio web. Esta Política de Privacidad describe cómo recopilamos, utilizamos, 
        almacenamos y protegemos su información personal.
      </p>
      <p>
        Al utilizar nuestro sitio web o establecer una relación comercial con nosotros, 
        usted acepta las prácticas descritas en esta política.
      </p>

      <h2>2. Información que Recopilamos</h2>
      <h3>2.1 Información proporcionada directamente</h3>
      <p>
        Recopilamos información que usted nos proporciona voluntariamente, incluyendo:
      </p>
      <ul>
        <li>Nombre y apellidos del representante comercial</li>
        <li>Razón social y RUC de la empresa</li>
        <li>Dirección comercial y de entrega</li>
        <li>Números de teléfono y correo electrónico</li>
        <li>Información bancaria para procesamiento de pagos</li>
        <li>Historial de pedidos y preferencias comerciales</li>
      </ul>

      <h3>2.2 Información recopilada automáticamente</h3>
      <p>
        Cuando visita nuestro sitio web, podemos recopilar automáticamente:
      </p>
      <ul>
        <li>Dirección IP y ubicación geográfica aproximada</li>
        <li>Tipo de navegador y sistema operativo</li>
        <li>Páginas visitadas y tiempo de permanencia</li>
        <li>Fuente de referencia y comportamiento de navegación</li>
      </ul>

      <h2>3. Uso de la Información</h2>
      <p>
        Utilizamos la información recopilada para los siguientes fines:
      </p>
      <ul>
        <li>Procesar y gestionar pedidos de productos</li>
        <li>Coordinar entregas y logística</li>
        <li>Gestionar la facturación y cobros</li>
        <li>Comunicarnos sobre novedades, promociones y cambios en nuestros servicios</li>
        <li>Mejorar nuestros productos y servicios</li>
        <li>Cumplir con obligaciones legales y fiscales</li>
        <li>Prevenir fraudes y garantizar la seguridad</li>
      </ul>

      <h2>4. Base Legal para el Tratamiento</h2>
      <p>
        El tratamiento de sus datos personales se realiza bajo las siguientes bases legales:
      </p>
      <ul>
        <li><strong>Ejecución contractual:</strong> Para cumplir con nuestras obligaciones comerciales</li>
        <li><strong>Consentimiento:</strong> Para comunicaciones de marketing (puede retirarlo en cualquier momento)</li>
        <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y prevenir fraudes</li>
        <li><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y regulatorias</li>
      </ul>

      <h2>5. Compartir Información</h2>
      <p>
        No vendemos ni alquilamos su información personal a terceros. Solo compartimos 
        información en las siguientes circunstancias:
      </p>
      <ul>
        <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan con logística, 
        pagos y tecnología, bajo estrictos acuerdos de confidencialidad</li>
        <li><strong>Requisitos legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
        <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos, propiedad o seguridad</li>
      </ul>

      <h2>6. Seguridad de los Datos</h2>
      <p>
        Implementamos medidas de seguridad técnicas y organizativas para proteger su 
        información personal, incluyendo:
      </p>
      <ul>
        <li>Encriptación de datos sensibles</li>
        <li>Acceso restringido a personal autorizado</li>
        <li>Monitoreo regular de sistemas de seguridad</li>
        <li>Capacitación del personal en protección de datos</li>
      </ul>
      <p>
        Sin embargo, ningún método de transmisión por Internet es 100% seguro. 
        Hacemos nuestro mejor esfuerzo para proteger su información, pero no podemos 
        garantizar seguridad absoluta.
      </p>

      <h2>7. Retención de Datos</h2>
      <p>
        Conservamos su información personal durante el tiempo necesario para cumplir 
        con los fines descritos en esta política, a menos que un período de retención 
        más largo sea requerido o permitido por ley. Los criterios utilizados para 
        determinar los períodos de retención incluyen:
      </p>
      <ul>
        <li>Duración de la relación comercial</li>
        <li>Obligaciones legales de conservación de documentos</li>
        <li>Posibles reclamaciones o disputas</li>
      </ul>

      <h2>8. Sus Derechos</h2>
      <p>
        De acuerdo con la legislación aplicable, usted tiene derecho a:
      </p>
      <ul>
        <li><strong>Acceso:</strong> Solicitar información sobre los datos que tenemos sobre usted</li>
        <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
        <li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos en ciertas circunstancias</li>
        <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para ciertos fines</li>
        <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
        <li><strong>Retirar consentimiento:</strong> En cualquier momento, para tratamientos basados en consentimiento</li>
      </ul>
      <p>
        Para ejercer estos derechos, contáctenos a través de los medios indicados al final de esta política.
      </p>

      <h2>9. Menores de Edad</h2>
      <p>
        Nuestros servicios están dirigidos exclusivamente a empresas y profesionales. 
        No recopilamos intencionalmente información de menores de 18 años. Si tenemos 
        conocimiento de que hemos recopilado datos de un menor, tomaremos medidas para 
        eliminar dicha información.
      </p>

      <h2>10. Cambios en esta Política</h2>
      <p>
        Podemos actualizar esta política de privacidad periódicamente. Notificaremos 
        cualquier cambio material publicando la nueva política en nuestro sitio web 
        y, cuando sea apropiado, le notificaremos directamente.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Si tiene preguntas o inquietudes sobre esta política de privacidad o el 
        tratamiento de sus datos personales, puede contactarnos:
      </p>
      <ul>
        <li><strong>Email:</strong> privacidad@lunardi.com.py</li>
        <li><strong>Teléfono:</strong> +595 614 123 456</li>
        <li><strong>Dirección:</strong> Av. Monseñor Rodríguez, Ciudad del Este, Paraguay</li>
      </ul>
    </LegalPageLayout>
  )
}
