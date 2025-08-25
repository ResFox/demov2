'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    setSearchQuery('')
  }

  const footerMenuLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#tournament', label: 'Tournament' },
    { href: '#team', label: 'Team' },
    { href: '#gears', label: 'Gears' },
    { href: '#contact', label: 'Contact' },
  ]

  const quickLinks = [
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Help Center' },
    { href: '#', label: 'Terms of use' },
    { href: '#', label: 'Privacy' },
  ]

  const socialLinks = [
    { 
      href: '#', 
      label: 'Discord',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    },
    {
      href: '#',
      label: 'Twitch', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
        </svg>
      )
    },
    {
      href: '#',
      label: 'Xbox',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.102 21.033A11.956 11.956 0 0012 24a11.956 11.956 0 007.898-2.967c-2.42-1.621-4.99-4.31-7.898-8.03-2.909 3.72-5.479 6.409-7.898 8.03zM.19 12.518a11.95 11.95 0 001.464 4.386c2.022-1.35 4.273-3.47 6.71-6.904C5.927 6.666 3.676 4.546 1.654 3.196A11.95 11.95 0 00.19 12.518zm22.156 4.386A11.95 11.95 0 0023.81 12.518a11.95 11.95 0 00-1.464-4.322c-2.022 1.35-4.273 3.47-6.71 6.904 2.437 3.434 4.688 5.554 6.71 6.904z"/>
          <path d="M12 1.105a11.956 11.956 0 00-9.526 4.663c1.975 1.27 4.273 3.084 6.526 5.813 2.253-2.729 4.551-4.543 6.526-5.813A11.956 11.956 0 0012 1.105z"/>
        </svg>
      )
    },
    {
      href: '#',
      label: 'YouTube',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ]

  return (
    <footer id="contact" className="bg-footer bg-cover bg-center">
      {/* Footer Top */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="text-center mb-12">
            <Link href="#" className="inline-block">
              <Image
                src="https://i.postimg.cc/h4y5jGhT/logo-1.png"
                alt="Pandora's Box Logo"
                width={150}
                height={50}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Footer Content */}
          <div className="border-b border-gray-800 pb-8 mb-12 relative">
            <div className="lg:flex lg:justify-between lg:items-start">
              {/* Menu Links */}
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mb-6">
                  {footerMenuLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-platinum font-oswald text-lg font-medium uppercase tracking-wide hover:text-orange transition-colors px-2 py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Search Form */}
                <div className="relative max-w-xs mx-auto lg:mx-0">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Find Here Now"
                      className="w-full bg-xiketic text-white text-sm px-6 py-4 pr-16 focus:outline-none"
                      style={{ clipPath: 'polygon(93% 0, 100% 30%, 100% 100%, 7% 100%, 0 63%, 0 0)' }}
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 btn-primary !px-4 !py-4 hover:!bg-white hover:!text-orange"
                      style={{ clipPath: 'polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 63%, 0 0)' }}
                    >
                      <Search size={16} />
                    </button>
                  </form>
                </div>
              </div>

              {/* Quick Links & Social */}
              <div className="text-center">
                <ul className="flex flex-wrap justify-center items-center gap-4 mb-6">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-light-gray font-oswald text-xs font-medium uppercase tracking-wide hover:text-orange transition-colors px-2 py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="flex justify-center items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <Link
                        href={social.href}
                        className="bg-xiketic text-light-gray w-9 h-9 rounded-full flex items-center justify-center hover:text-orange transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom border decoration */}
            <div className="absolute -bottom-1 left-0 w-full h-px bg-black/20"></div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-xiketic py-6">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between md:items-center text-center">
            <p className="text-light-gray font-oswald text-sm font-medium uppercase mb-4 md:mb-0">
              Copyright © 2024{' '}
              <Link href="#" className="text-orange hover:underline">
                ULTRA CODE
              </Link>
              . All rights reserved
            </p>

            <div className="max-w-xs mx-auto md:mx-0">
              <Image
                src="https://i.postimg.cc/432bbz4J/footer-bottom-img.png"
                alt="Payment Methods"
                width={300}
                height={50}
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
