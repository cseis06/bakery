import { Metadata } from 'next'
import LegalPageLayout from '@/components/layout/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Política de Cookies | Lunardi',
  description: 'Información sobre el uso de cookies en el sitio web de Panadería Lunardi.',
}

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Política de Cookies"
      subtitle="Tecnología Web"
      lastUpdated="15 de marzo de 2026"
    >
      <h2>1. ¿Qué son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo 
        (ordenador, tablet, smartphone) cuando visita un sitio web. Estas cookies permiten 
        que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, 
        para que no tenga que volver a introducirlos cada vez que regrese al sitio o 
        navegue de una página a otra.
      </p>

      <h2>2. ¿Qué Tipos de Cookies Utilizamos?</h2>
      
      <h3>2.1 Cookies Esenciales</h3>
      <p>
        Estas cookies son necesarias para el funcionamiento básico del sitio web. 
        Sin ellas, el sitio no funcionaría correctamente. Incluyen:
      </p>
      <ul>
        <li>Cookies de sesión para mantener su navegación</li>
        <li>Cookies de seguridad para proteger contra accesos no autorizados</li>
        <li>Cookies de balanceo de carga para optimizar el rendimiento del servidor</li>
      </ul>

      <h3>2.2 Cookies de Rendimiento</h3>
      <p>
        Estas cookies recopilan información sobre cómo los visitantes utilizan nuestro 
        sitio web, por ejemplo, qué páginas visitan con más frecuencia. Esta información 
        se utiliza exclusivamente para mejorar el funcionamiento del sitio. Incluyen:
      </p>
      <ul>
        <li>Google Analytics para análisis de tráfico web</li>
        <li>Cookies de medición de tiempo de carga</li>
        <li>Cookies de seguimiento de errores</li>
      </ul>

      <h3>2.3 Cookies de Funcionalidad</h3>
      <p>
        Estas cookies permiten que el sitio web recuerde las elecciones que realiza 
        (como su idioma preferido o la región en la que se encuentra) y proporcionan 
        características mejoradas y más personales:
      </p>
      <ul>
        <li>Preferencias de idioma y región</li>
        <li>Configuración de visualización</li>
        <li>Datos de formularios para agilizar futuros contactos</li>
      </ul>

      <h3>2.4 Cookies de Publicidad (Actualmente no utilizadas)</h3>
      <p>
        Actualmente, Lunardi <strong>no utiliza cookies de publicidad</strong> ni de 
        seguimiento para fines comerciales de terceros. Si esto cambiara en el futuro, 
        actualizaríamos esta política y solicitaríamos su consentimiento explícito.
      </p>

      <h2>3. Cookies de Terceros</h2>
      <p>
        Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras 
        páginas. Los principales proveedores de terceros que utilizamos son:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-red-900/20">
              <th className="text-left py-3 px-4 text-red-900 font-medium">Proveedor</th>
              <th className="text-left py-3 px-4 text-red-900 font-medium">Propósito</th>
              <th className="text-left py-3 px-4 text-red-900 font-medium">Más información</th>
            </tr>
          </thead>
          <tbody className="text-red-950/70">
            <tr className="border-b border-red-900/10">
              <td className="py-3 px-4">Google Analytics</td>
              <td className="py-3 px-4">Análisis de uso del sitio</td>
              <td className="py-3 px-4">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Política de Google
                </a>
              </td>
            </tr>
            <tr className="border-b border-red-900/10">
              <td className="py-3 px-4">Google Maps</td>
              <td className="py-3 px-4">Mapa de ubicación</td>
              <td className="py-3 px-4">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Política de Google
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. Duración de las Cookies</h2>
      <p>
        Las cookies pueden ser &quot;de sesión&quot; o &quot;persistentes&quot;:
      </p>
      <ul>
        <li>
          <strong>Cookies de sesión:</strong> Se eliminan automáticamente cuando 
          cierra su navegador.
        </li>
        <li>
          <strong>Cookies persistentes:</strong> Permanecen en su dispositivo hasta 
          que expiran o hasta que las elimine manualmente. La duración varía según 
          el tipo de cookie, desde unos minutos hasta varios años.
        </li>
      </ul>

      <h2>5. Control de Cookies</h2>
      <h3>5.1 A través de su Navegador</h3>
      <p>
        La mayoría de los navegadores web permiten controlar las cookies a través de 
        su configuración. Puede configurar su navegador para:
      </p>
      <ul>
        <li>Bloquear todas las cookies</li>
        <li>Aceptar solo cookies de sitios que visita directamente</li>
        <li>Eliminar todas las cookies al cerrar el navegador</li>
        <li>Ser notificado cuando un sitio intenta establecer una cookie</li>
      </ul>
      <p>
        Tenga en cuenta que bloquear todas las cookies puede afectar la funcionalidad 
        de muchos sitios web, incluyendo el nuestro.
      </p>

      <h3>5.2 Enlaces a Configuración de Navegadores</h3>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>6. Consecuencias de Desactivar Cookies</h2>
      <p>
        Si decide desactivar las cookies, algunas funcionalidades del sitio web 
        pueden verse afectadas:
      </p>
      <ul>
        <li>El mapa de ubicación podría no cargarse correctamente</li>
        <li>Sus preferencias de navegación no se guardarán</li>
        <li>Algunas funciones interactivas podrían no funcionar</li>
      </ul>

      <h2>7. Tecnologías Similares</h2>
      <p>
        Además de las cookies, podemos utilizar otras tecnologías similares como:
      </p>
      <ul>
        <li>
          <strong>Local Storage:</strong> Almacenamiento local del navegador para 
          guardar preferencias
        </li>
        <li>
          <strong>Web Beacons:</strong> Pequeñas imágenes que nos permiten contar 
          visitas a páginas
        </li>
      </ul>

      <h2>8. Actualizaciones de esta Política</h2>
      <p>
        Podemos actualizar esta política de cookies periódicamente para reflejar 
        cambios en las cookies que utilizamos o por otras razones operativas, 
        legales o regulatorias. Le recomendamos revisar esta página regularmente 
        para mantenerse informado sobre nuestro uso de cookies.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Si tiene preguntas sobre nuestra política de cookies, puede contactarnos:
      </p>
      <ul>
        <li><strong>Email:</strong> privacidad@lunardi.com.py</li>
        <li><strong>Teléfono:</strong> +595 614 123 456</li>
        <li><strong>Dirección:</strong> Av. Monseñor Rodríguez, Ciudad del Este, Paraguay</li>
      </ul>
    </LegalPageLayout>
  )
}
