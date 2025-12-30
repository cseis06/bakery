import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-amber-50 w-full py-4 px-24 shadow-md shadow-amber-950/10'>
			<div className='flex justify-between items-center'>
				<div>
					<h1 className='text-1xl'>Logo</h1>
				</div>
				<nav className='flex justify-between gap-4 font-light text-sm'>
					<ul className='flex justify-between gap-4'>
						<li>
							<a href="">Inicio</a>
						</li>
						<li>
							<a href="">Sobre Nosotros</a>
						</li>
						<li>
							<a href="">Productos</a>
						</li>
					</ul>
				</nav>
				<div className='font-light text-sm'>
					<a href="" className='flex gap-2 items-center'>
						<FontAwesomeIcon icon={faPhone} />
						<span>Contactanos</span>
					</a>
				</div>
			</div>
    </header>
  )
}

export default Header