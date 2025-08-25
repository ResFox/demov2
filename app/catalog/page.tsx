'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Share, Plus, Heart } from 'lucide-react'

export default function CatalogPage() {
  const cheatProducts = [
    {
      id: 1,
      name: 'Fortnite Ancient',
      category: 'External cheat',
      price: 'From $4.99',
      image: 'https://i.postimg.cc/Tw2JGqBd/07bb06125320879-63a0a0d012704.png',
      status: 'Undetected',
      statusColor: 'text-green-400'
    },
    {
      id: 2,
      name: 'Valorant Pro',
      category: 'External cheat',
      price: 'From $9.99',
      image: 'https://i.postimg.cc/ZqjzCmg2/gears-img-2.png',
      status: 'Updated',
      statusColor: 'text-orange'
    },
    {
      id: 3,
      name: 'CS2 Elite',
      category: 'External cheat',
      price: 'From $7.99',
      image: 'https://i.postimg.cc/2yQsNf40/gears-img-3.png',
      status: 'Private',
      statusColor: 'text-purple-400'
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-eerie-black min-h-screen">
        {/* Header Section */}
        <section className="relative bg-section-wrapper bg-cover bg-center bg-no-repeat pt-32 pb-20">
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 
              className="text-white font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-none drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Catalog
            </motion.h1>
            
            <motion.p
              className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional gaming tools for competitive advantage
            </motion.p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {cheatProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Product Image Container */}
                  <div className="relative bg-gears-card bg-contain bg-center bg-no-repeat w-full aspect-[2/1.7] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                    <div className="block w-full h-full flex items-center justify-center p-8">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={150}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Share Button */}
                    <button className="absolute top-1/4 right-[8%] w-11 h-11 bg-transparent border-2 border-onyx rounded-full flex items-center justify-center text-orange hover:border-orange transition-colors duration-300">
                      <Share size={18} />
                    </button>

                    {/* Status */}
                    <div className={`absolute top-[8%] right-[8%] flex items-center justify-center gap-2 font-oswald text-sm font-bold uppercase ${product.statusColor} bg-black/70 px-3 py-1 rounded`}>
                      <div className={`w-3 h-3 rounded-full ${
                        product.status === 'Undetected' ? 'bg-green-400' :
                        product.status === 'Updated' ? 'bg-orange' : 'bg-purple-400'
                      }`}></div>
                      <span>{product.status}</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-white font-oswald text-xl font-bold uppercase mb-1">
                        {product.name}
                      </h3>
                      <p className="text-light-gray text-sm uppercase">
                        {product.category}
                      </p>
                    </div>
                    <div className="text-white font-oswald text-lg font-bold">
                      {product.price}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="btn-primary flex-1 !text-sm !py-4 group/btn">
                      <Plus size={18} strokeWidth={3} className="group-hover/btn:scale-110 transition-transform" />
                      <span>Purchase</span>
                    </button>
                    
                    <button 
                      className="bg-orange text-white p-4 transition-colors duration-300 hover:bg-orange/90"
                      style={{ clipPath: 'polygon(75% 0, 100% 25%, 100% 100%, 25% 100%, 0 75%, 0 0)' }}
                    >
                      <Heart size={20} strokeWidth={2.5} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More Products Coming */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-raisin-black-1 p-8 rounded-lg border border-orange/20 max-w-md mx-auto">
                <h3 className="text-white font-oswald uppercase text-xl mb-3">More Products</h3>
                <p className="text-light-gray text-sm mb-4">Additional premium cheats coming soon</p>
                <div className="px-6 py-2 bg-orange/20 border border-orange/30 rounded text-orange font-oswald text-sm uppercase tracking-wide inline-block">
                  In Development
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <GoTop />
    </>
  )
}
