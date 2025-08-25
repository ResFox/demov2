'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Share, Clock, Plus, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Gears = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const gearItems = [
    {
      id: 1,
      name: 'Headphone',
      category: 'e-sports',
      price: '$18',
      image: 'https://i.postimg.cc/28YGXW3d/gears-img-1.png',
      timeLeft: 'In 4 days'
    },
    {
      id: 2,
      name: 'Controller',
      category: 'e-sports', 
      price: '$29',
      image: 'https://i.postimg.cc/ZqjzCmg2/gears-img-2.png',
      timeLeft: 'In 4 days'
    },
    {
      id: 3,
      name: 'Gaming Mask',
      category: 'e-sports',
      price: '$45', 
      image: 'https://i.postimg.cc/2yQsNf40/gears-img-3.png',
      timeLeft: 'In 4 days'
    },
  ]

  return (
    <section id="gears" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Check our Gears
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {gearItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Product Image Container */}
              <div className="relative bg-gears-card bg-contain bg-center bg-no-repeat w-full aspect-[2/1.7] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                <Link href="#" className="block w-full h-full flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={150}
                    className="w-2/5 h-auto object-contain"
                  />
                </Link>

                {/* Share Button */}
                <button className="absolute top-1/4 right-[8%] w-11 h-11 bg-transparent border-2 border-onyx rounded-full flex items-center justify-center text-orange hover:border-orange transition-colors duration-300">
                  <Share size={18} />
                </button>

                {/* Time Left */}
                <div className="absolute top-[2%] right-[5%] flex items-center gap-1 text-orange font-oswald text-xs font-medium uppercase">
                  <Clock size={16} strokeWidth={2.5} />
                  <span>{item.timeLeft}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-white font-oswald text-xl font-bold uppercase mb-1">
                    {item.name}
                  </h3>
                  <p className="text-light-gray text-sm uppercase">
                    {item.category}
                  </p>
                </div>
                <div className="text-white font-oswald text-xl font-bold">
                  {item.price}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="btn-primary flex-1 !text-sm !py-4 group/btn">
                  <Plus size={18} strokeWidth={3} className="group-hover/btn:scale-110 transition-transform" />
                  <span>Add to Cart</span>
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
      </div>
    </section>
  )
}

export default Gears
