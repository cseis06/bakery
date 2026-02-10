import React, { useState, useEffect } from 'react'
import Logo from '../../assets/img/logo-text.png'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  logo?: string
}

const Header: React.FC<HeaderProps> = ({
  logo = Logo
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: 'Inicio', path: '/#inicio' },
    { label: 'FAQ', path: '#faq' },
    { label: 'Catálogo', path: 'catalogo' },
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#f5ebe0]/95 backdrop-blur-md shadow-lg shadow-red-950/5'
            : 'lg:bg-[#f5ebe0]/95 lg:backdrop-blur-md lg:shadow-lg lg:shadow-red-950/5 bg-transparent 2xl:bg-transparent 2xl:backdrop-blur-none 2xl:shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/">
              <div className="max-w-[150px] p-5">
                <img
                  src={logo}
                  alt="Lunardi"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className={`text-sm transition-colors duration-300 relative group ${
                        isActive(item.path)
                          ? 'text-red-900 font-semibold'
                          : 'text-red-950/60 hover:text-red-900'
                      }`}
                    >
                      {item.label}
                      <span 
                        className={`absolute -bottom-1 left-0 h-[2px] bg-red-900 transition-all duration-300 ${
                          isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                to="/contacto"
                className="hidden md:inline-flex items-center justify-center gap-2 bg-red-900 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-red-950 transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Contacto</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-red-900/30 text-red-900 hover:bg-red-900 hover:text-white transition-all duration-300"
                aria-label="Menú"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#f5ebe0] z-40 lg:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-24">
          {/* Mobile Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    transition: `all 0.3s ease-out ${index * 0.1}s`
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-red-900 bg-red-900/10 font-semibold'
                        : 'text-red-950/80 hover:text-red-900 hover:bg-red-900/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.3s ease-out 0.4s'
            }}
          >
            <Link
              to="/contacto"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-red-900 text-white px-6 py-3.5 rounded-full text-base font-medium tracking-wide hover:bg-red-950 transition-all duration-300 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Contactar</span>
            </Link>

            {/* Social Links Mobile */}
            <div className="mt-8 pt-6 border-t border-red-900/10">
              <p className="text-xs text-red-950/40 tracking-wider mb-4 text-center">Síguenos</p>
              <div className="flex gap-3 justify-center">
                {[
                  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 rounded-full border border-red-900/30 flex items-center justify-center text-red-900/60 hover:bg-red-900 hover:text-white hover:border-red-900 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header