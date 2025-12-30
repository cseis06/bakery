
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='relative bottom-0 z-10 bg-amber-50 w-full py-4 px-24'>
      <div className='flex justify-between text-sm'>
        <div>
          <div>
            Logo
          </div>
          <div>
            <p>
              
            </p>
          </div>
        </div>

        <div>
          <h3>Información</h3>
          <ul>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#">Términos y Condiciones</a>
            </li>
            <li>
              <a href="#">Política de Privacidad</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Navegación</h3>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contactanos</h3>
          <ul>
            <li>
              <a href="#">Calle Principal esq. Calle Secundaria Nro. 4321, Ciudad del Este - Paraguay.</a>
            </li>
            <li>
              <a href="#">cantacto@lunardi.com.py</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Nuestras Redes</h3>
          <ul className='flex'>
            <li>
              <h3></h3>
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer