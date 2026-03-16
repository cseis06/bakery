'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Productos', href: '#productos' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-amber-50/95 backdrop-blur-sm shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative block"
          >
            <Image
              src="/logo-text.png"
              alt="Lunardi - Panadería Artesanal"
              width={140}
              height={50}
              className={`h-auto transition-all duration-500 ${
                isScrolled ? 'w-28' : 'w-32 md:w-36'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-sm tracking-[0.15em] uppercase font-light
                    transition-colors duration-300
                    after:absolute after:-bottom-1.5 after:-left-px after:w-0 after:h-px 
                    after:transition-all after:duration-300
                    hover:after:w-full
                    ${isScrolled 
                      ? 'text-red-900/80 hover:text-red-900 after:bg-red-900/50' 
                      : 'text-amber-50/90 hover:text-amber-50 after:bg-amber-50/50'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="#contacto"
            className={`hidden md:inline-flex items-center gap-2 px-6 py-2.5 
              text-xs tracking-[0.2em] uppercase font-light
              transition-all duration-400 ease-out
              ${isScrolled 
                ? 'border border-red-900/30 text-red-900 hover:bg-red-900 hover:text-amber-50 hover:border-red-900' 
                : 'border border-amber-50/40 text-amber-50 hover:bg-amber-50 hover:text-red-900 hover:border-amber-50'
              }`}
          >
            Cotizar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menú"
          >
            <span
              className={`w-6 h-px transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
              } ${isScrolled ? 'bg-red-900' : 'bg-amber-50'}`}
            />
            <span
              className={`w-6 h-px transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled ? 'bg-red-900' : 'bg-amber-50'}`}
            />
            <span
              className={`w-6 h-px transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
              } ${isScrolled ? 'bg-red-900' : 'bg-amber-50'}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'max-h-80 opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className={`flex flex-col gap-6 pb-6 border-t pt-6 ${
            isScrolled ? 'border-red-900/10' : 'border-amber-50/20'
          }`}>
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                }}
                className={`transform transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-4 opacity-0'
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm tracking-[0.15em] uppercase font-light
                    transition-colors duration-300
                    ${isScrolled 
                      ? 'text-red-900/80 hover:text-red-900' 
                      : 'text-amber-50/80 hover:text-amber-50'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms' 
              }}
              className={`transform transition-all duration-300 pt-2 ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-4 opacity-0'
              }`}
            >
              <Link
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`inline-flex px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-light
                  transition-all duration-300
                  ${isScrolled 
                    ? 'border border-red-900/30 text-red-900 hover:bg-red-900 hover:text-amber-50 hover:border-red-900' 
                    : 'border border-amber-50/30 text-amber-50 hover:bg-amber-50 hover:text-red-900 hover:border-amber-50'
                  }`}
              >
                Cotizar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}