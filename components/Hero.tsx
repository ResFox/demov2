'use client'

import { PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center pt-20 lg:pt-28"
      style={{
        backgroundImage: "url('https://i.postimg.cc/XqXRdnV1/hero-banner.jpg')" // Replace this URL with your PostImage link
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-white font-oswald text-lg md:text-xl lg:text-2xl font-medium uppercase tracking-[0.5em] md:tracking-[0.75em] mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Cheats
          </motion.p>
          
          <motion.h1 
            className="text-white font-oswald text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[150px] font-black uppercase mb-8 leading-none drop-shadow-2xl tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-orange to-white bg-clip-text text-transparent">
              Pandora's
            </span>
            <br />
            <span className="text-orange font-bold tracking-[0.2em]">
              BOX
            </span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn-primary text-lg px-10 py-4 group hover:scale-105 transition-transform">
              <span>Watch Live</span>
              <PlayCircle 
                size={28} 
                className="group-hover:scale-110 transition-transform" 
              />
            </button>
            
            <button className="text-white font-oswald font-medium text-lg uppercase tracking-wide px-8 py-4 hover:text-orange transition-colors border-2 border-transparent hover:border-orange/30 rounded-sm">
              Dream Making
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-oswald uppercase tracking-wide">Scroll Down</span>
          <motion.div
            className="w-px h-12 bg-white/50"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
