'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'
import { motion } from 'framer-motion'

export default function GuidePage() {
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
                Guide
              </motion.h1>
              
              <motion.p
                className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Learn how to use our premium gaming tools effectively and safely. Comprehensive guides and tutorials...
              </motion.p>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { title: 'Getting Started', desc: 'Basic setup and installation guide' },
                  { title: 'Advanced Features', desc: 'Unlock the full potential of our tools' },
                  { title: 'Safety Guidelines', desc: 'Best practices for secure usage' },
                  { title: 'Troubleshooting', desc: 'Common issues and solutions' },
                  { title: 'Updates & Patches', desc: 'Stay current with the latest versions' },
                  { title: 'FAQ', desc: 'Frequently asked questions answered' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-raisin-black-2 p-6 rounded border border-orange/20 hover:border-orange/50 transition-colors duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <h3 className="text-white font-oswald uppercase text-lg mb-3 group-hover:text-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-light-gray text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
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
