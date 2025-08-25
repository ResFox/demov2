'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'
import { motion } from 'framer-motion'

export default function StatusPage() {
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
                Status
              </motion.h1>
              
              <motion.p
                className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Check the status of our premium gaming services and tools. System monitoring and updates...
              </motion.p>

              <motion.div 
                className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-raisin-black-2 p-6 rounded border border-green-500/30">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-white font-oswald uppercase text-lg mb-2">All Systems</h3>
                  <p className="text-green-400 text-sm">Operational</p>
                </div>
                
                <div className="bg-raisin-black-2 p-6 rounded border border-orange/30">
                  <div className="w-4 h-4 bg-orange rounded-full mx-auto mb-4"></div>
                  <h3 className="text-white font-oswald uppercase text-lg mb-2">Updates</h3>
                  <p className="text-orange text-sm">In Progress</p>
                </div>
                
                <div className="bg-raisin-black-2 p-6 rounded border border-blue-500/30">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-white font-oswald uppercase text-lg mb-2">Support</h3>
                  <p className="text-blue-400 text-sm">Available 24/7</p>
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
