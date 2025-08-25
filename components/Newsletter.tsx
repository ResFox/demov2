'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-newsletter bg-cover bg-center rounded-xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
            {/* Newsletter Content */}
            <motion.div 
              className="text-center lg:text-left mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-8 mb-6">
                <Image
                  src="https://i.postimg.cc/Dz1WMn5S/newsletter-img.png"
                  alt="Newsletter"
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-white font-oswald text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                  Subscribe to the newsletter
                </h2>
              </div>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              className="lg:max-w-md lg:flex-shrink-0 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="w-full bg-black/20 text-white border border-white/30 px-6 py-4 pr-32 text-sm placeholder-white/70 focus:bg-black/40 focus:outline-none transition-colors"
                  style={{ clipPath: 'polygon(93% 0, 100% 30%, 100% 100%, 7% 100%, 0 63%, 0 0)' }}
                />
                
                <button
                  type="submit"
                  className="absolute top-0 right-0 btn-secondary !px-6 !py-4 hover:!bg-white hover:!text-orange"
                  style={{ clipPath: 'polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 63%, 0 0)' }}
                >
                  Subscribe
                </button>

                {/* Decorative line */}
                <div className="absolute -bottom-2 -left-1 w-6 h-px bg-white transform rotate-[52deg]"></div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
