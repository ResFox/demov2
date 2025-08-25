'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Clock } from 'lucide-react'

export default function HelpPage() {
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
                Help
              </motion.h1>
              
              <motion.p
                className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Need assistance? Our support team is here to help you with any questions or issues...
              </motion.p>

              <motion.div 
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { 
                    icon: MessageCircle, 
                    title: 'Live Chat', 
                    desc: 'Instant support via our live chat system',
                    status: 'Available Now'
                  },
                  { 
                    icon: Mail, 
                    title: 'Email Support', 
                    desc: 'Get detailed help via email support',
                    status: 'Response in 2-4 hours'
                  },
                  { 
                    icon: Phone, 
                    title: 'Priority Support', 
                    desc: 'Premium members get priority assistance',
                    status: 'VIP Access'
                  },
                  { 
                    icon: Clock, 
                    title: '24/7 Availability', 
                    desc: 'Round-the-clock support when you need it',
                    status: 'Always Online'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-raisin-black-2 p-8 rounded border border-orange/20 hover:border-orange/50 transition-all duration-300 group cursor-pointer hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <item.icon className="text-orange w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-oswald uppercase text-xl mb-3 group-hover:text-orange transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-light-gray text-sm leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="text-orange text-xs uppercase font-oswald tracking-wide">
                      {item.status}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="bg-raisin-black-1 p-8 rounded-lg border border-orange/30 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h3 className="text-white font-oswald uppercase text-2xl mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-light-gray">
                  <p><strong>Email:</strong> support@pandorasbox.com</p>
                  <p><strong>Discord:</strong> Join our community server</p>
                  <p><strong>Response Time:</strong> Usually within 1 hour</p>
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
