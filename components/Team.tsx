'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    'https://i.postimg.cc/tgCt3DKM/team-member-1.png',
    'https://i.postimg.cc/0jmpk4Sb/team-member-2.png',
    'https://i.postimg.cc/FzZHVg5T/team-member-3.png',
    'https://i.postimg.cc/LXxWknQz/team-member-4.png',
    'https://i.postimg.cc/MHXF9qgg/team-member-5.png',
    'https://i.postimg.cc/Rh8b82Bh/team-member-6.png',
    'https://i.postimg.cc/MZr4vfQw/team-member-7.png',
    'https://i.postimg.cc/hPk50Fs3/team-member-8.png',
    'https://i.postimg.cc/kgWh1jhM/team-member-9.png',
    'https://i.postimg.cc/N0YCW1W6/team-member-10.png',
    'https://i.postimg.cc/tg5vysjL/team-member-11.png',
    'https://i.postimg.cc/PxV6p0Ny/team-member-12.png',
    'https://i.postimg.cc/SQ5Ty0BN/team-member-13.png',
    'https://i.postimg.cc/W1mX6dhh/team-member-14.png',
  ]

  return (
    <section id="team" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Active Team Members
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 lg:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 120
              }}
            >
              <Link href="#" className="block relative">
                <div className="relative overflow-hidden rounded-full border-4 border-raisin-black-3 group-hover:border-orange transition-colors duration-300">
                  <Image
                    src={member}
                    alt={`Team Member ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover aspect-square"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink 
                      className="text-orange" 
                      size={32}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="btn-primary">
            View All Members
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
