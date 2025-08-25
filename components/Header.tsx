'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Search, LogIn, Facebook, Instagram, Github, Youtube } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.classList.toggle('menu-open')
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.classList.remove('menu-open')
  }

  const navigationLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#', label: 'Login' },
    { href: '#tournament', label: 'Tournament' },
    { href: '#team', label: 'Team' },
    { href: '#gears', label: 'Gears' },
    { href: '#contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
    { icon: Youtube, href: '#' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-raisin-black-1/95 backdrop-blur-sm' : 'bg-raisin-black-1'
      } shadow-lg`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <Link href="#" className="flex-shrink-0">
              <Image
                src="https://i.postimg.cc/h4y5jGhT/logo-1.png"
                alt="GameX Logo"
                width={120}
                height={40}
                className="h-auto"
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white text-3xl p-2 lg:hidden hover:text-orange transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu strokeWidth={3} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="navbar-link px-4"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-white hover:text-orange transition-colors p-3">
                <Search size={20} strokeWidth={2.5} />
              </button>
              
              <button className="flex items-center gap-2 bg-raisin-black-3 text-light-gray font-oswald text-xs font-medium uppercase tracking-wide py-2 px-4 border-r-4 border-orange shadow-lg hover:text-orange transition-colors relative">
                <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-1 h-10 bg-eerie-black shadow-lg"></div>
                <div className="flex items-center justify-center bg-raisin-black-2 p-2 shadow-inner">
                  <LogIn size={16} strokeWidth={2} />
                </div>
                <span className="px-2">Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Header Decoration */}
        <div className="hidden lg:block absolute -bottom-4 left-0 w-28 h-5 bg-raisin-black-3 transform -skew-x-12"></div>
        <div className="hidden lg:block absolute -bottom-4 right-0 w-28 h-5 bg-raisin-black-3 transform skew-x-12"></div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 lg:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={closeMenu}></div>

      {/* Mobile Navigation Menu */}
      <nav className={`fixed top-0 right-0 h-full w-full max-w-sm bg-raisin-black-2 z-50 transform transition-transform duration-300 shadow-2xl lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <Image
            src="https://i.postimg.cc/h4y5jGhT/logo-1.png"
            alt="GameX Logo"
            width={100}
            height={35}
            className="h-auto"
          />
          <button
            onClick={closeMenu}
            className="text-orange text-2xl p-2 hover:bg-orange/10 rounded transition-colors"
            aria-label="Close Menu"
          >
            <X strokeWidth={3} />
          </button>
        </div>

        <ul className="border-t border-white/10 mb-8">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block text-white py-3 px-6 border-b border-white/10 font-medium hover:text-orange transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-4 px-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="text-orange hover:text-white transition-colors p-2"
            >
              <social.icon size={20} />
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Header
