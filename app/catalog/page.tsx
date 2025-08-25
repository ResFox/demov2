'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'
import { motion } from 'framer-motion'

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="bg-eerie-black min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-section-wrapper bg-cover bg-center bg-no-repeat flex items-center justify-center text-center pt-20 lg:pt-28">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1 
                className="text-white font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-8 leading-none drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Catalog
              </motion.h1>
              
              <motion.p
                className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Browse our premium collection of gaming tools and cheats. More content coming soon...
              </motion.p>

              <motion.div 
                className="flex justify-center items-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="px-8 py-4 bg-orange/20 border border-orange/30 rounded text-orange font-oswald uppercase tracking-wide">
                  Coming Soon
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <GoTop />
    </>
  )
}
