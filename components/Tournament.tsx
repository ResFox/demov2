'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tournament = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const winners = [
    {
      src: 'https://i.postimg.cc/CxxvFFct/winner-img-1.png',
      alt: 'Winner 1st Place',
      place: '1st Place'
    },
    {
      src: 'https://i.postimg.cc/d1jdkC19/winner-img-2.png', 
      alt: 'Winner 2nd Place',
      place: '2nd Place'
    }
  ]

  return (
    <section id="tournament" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          {/* Tournament Content */}
          <motion.div 
            className="text-center lg:text-left lg:max-w-md mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange font-oswald font-medium uppercase tracking-wide mb-3">
              Check out our next
            </p>
            <h2 className="section-title !text-left !mb-6">
              Gaming Tournaments!
            </h2>
            <p className="text-light-gray text-sm leading-relaxed mb-8 max-w-lg lg:max-w-none">
              Join our electrifying events that bring together players from around the world to compete in a variety of games, showcasing their skills and strategy in high-stakes environments
            </p>
            <button className="btn-primary mx-auto lg:mx-0">
              Join with us
            </button>
          </motion.div>

          {/* Prize Pool */}
          <motion.div 
            className="text-center mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white font-oswald text-2xl lg:text-3xl font-bold uppercase mb-5">
              Prize Pool
            </h3>
            <div className="bg-orange text-raisin-black-1 font-oswald text-2xl lg:text-3xl font-bold px-10 py-2 rounded-full inline-block mb-6 cursor-pointer hover:bg-orange/90 transition-colors">
              $80,000
            </div>
            <div className="max-w-xs mx-auto">
              <Image
                src="https://i.postimg.cc/Zn6QyVNM/prize-img.png"
                alt="Prize Trophy"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Last Winners */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-raisin-black-3 p-8 lg:p-10 rounded shadow-xl">
              <h3 className="text-white font-oswald text-2xl lg:text-3xl font-bold uppercase mb-6">
                Last Winners
              </h3>
              <div className="flex justify-center items-center gap-6">
                {winners.map((winner, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + index * 0.2,
                      type: "spring",
                      stiffness: 120
                    }}
                  >
                    <div className="w-20 lg:w-24 mb-4 mx-auto">
                      <Image
                        src={winner.src}
                        alt={winner.alt}
                        width={100}
                        height={100}
                        className="w-full h-auto rounded-full"
                      />
                    </div>
                    <div className="bg-orange text-raisin-black-1 font-oswald text-xs font-bold uppercase px-3 py-1 rounded">
                      {winner.place}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Tournament
