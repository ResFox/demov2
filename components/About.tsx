'use client'

import Image from 'next/image'
import { ArrowRightCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const characters = [
    {
      src: 'https://i.postimg.cc/MKyM3Vxb/character-1.png',
      alt: 'Game Character 1',
      className: 'absolute top-28 -left-32 w-32 z-10 hidden md:block game-character',
    },
    {
      src: 'https://i.postimg.cc/NfwLXFTy/character-2.png',
      alt: 'Game Character 2', 
      className: 'absolute top-16 left-40 w-36 z-0 hidden md:block game-character',
    },
    {
      src: 'https://i.postimg.cc/15cXrScv/character-3.png',
      alt: 'Game Character 3',
      className: 'absolute top-0 -right-28 w-32 z-10 hidden md:block game-character',
    },
  ]

  return (
    <section 
      id="about" 
      className="py-20 lg:py-32 bg-about-shadow bg-center bg-no-repeat" 
      style={{ backgroundSize: '55%' }}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:gap-24 xl:gap-32">
          {/* Banner */}
          <motion.div 
            className="relative mb-12 lg:mb-0 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <Image
                src="https://i.postimg.cc/Kc3gLCHW/about-img.png"
                alt="M Shape"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
              />

              {/* Floating Characters */}
              {characters.map((character, index) => (
                <motion.div
                  key={index}
                  className={character.className}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    stiffness: 120
                  }}
                >
                  <Image
                    src={character.src}
                    alt={character.alt}
                    width={150}
                    height={150}
                    className="w-full h-auto drop-shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-raisin-black-1 p-8 md:p-12 rounded shadow-xl">
              <motion.p 
                className="text-orange font-oswald text-sm font-medium uppercase tracking-wide mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Find Team Member
              </motion.p>
              
              <motion.h2 
                className="text-white font-oswald text-3xl md:text-4xl xl:text-5xl font-bold uppercase leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Experience just for gamers{' '}
                <strong className="text-orange">offer</strong>
              </motion.h2>
              
              <motion.p 
                className="text-light-gray text-sm leading-relaxed mb-6 text-justify tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                In a world where gaming transcends mere entertainment, we invite you to immerse yourself in a vibrant universe tailored specifically for those who crave adventure, challenge, and camaraderie
              </motion.p>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <ArrowRightCircle 
                  className="text-orange flex-shrink-0 mt-1" 
                  size={24}
                  strokeWidth={2.5}
                />
                <span className="text-light-gray text-sm leading-relaxed tracking-wide">
                  Will sharpen your brain and focus
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
