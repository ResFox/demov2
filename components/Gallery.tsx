'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const galleryImages = [
    'https://i.postimg.cc/Z5zdcjdL/gallery-img-1.jpg',
    'https://i.postimg.cc/RZ1nbf1x/gallery-img-2.jpg', 
    'https://i.postimg.cc/N0grhMb9/gallery-img-3.jpg',
    'https://i.postimg.cc/BvMPJ0wh/gallery-img-4.jpg',
  ]

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-6" style={{ minWidth: 'max-content' }}>
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 md:w-96"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-oswald font-medium uppercase tracking-wide">
                        Gaming Gallery
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Gallery
