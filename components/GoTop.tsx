'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 btn-primary !p-4 transition-all duration-300 ${
        isVisible 
          ? 'opacity-100 visible pointer-events-auto translate-y-0' 
          : 'opacity-0 invisible pointer-events-none translate-y-4'
      } hover:!bg-white hover:!text-orange hover:scale-110`}
      style={{ clipPath: 'polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%, 0 0)' }}
      aria-label="Go to top"
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  )
}

export default GoTop
