'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const CustomImageExample = () => {
  return (
    <div className="bg-raisin-black-1 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Custom Images Examples</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Example 1: PostImage Upload */}
          <motion.div 
            className="bg-raisin-black-2 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://i.postimg.cc/REPLACE-WITH-YOUR-IMAGE-CODE/your-image.jpg"
              alt="Custom Gaming Image"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <h3 className="text-white font-oswald uppercase mb-2">PostImage Example</h3>
              <p className="text-light-gray text-sm">Custom uploaded image from PostImage</p>
            </div>
          </motion.div>

          {/* Example 2: Background Image */}
          <div 
            className="h-64 rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: "url('https://i.postimg.cc/REPLACE-WITH-YOUR-IMAGE-CODE/background.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-oswald text-2xl uppercase">Background Style</h3>
            </div>
          </div>

          {/* Example 3: Profile/Avatar Style */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src="https://i.postimg.cc/REPLACE-WITH-YOUR-IMAGE-CODE/avatar.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full border-4 border-orange"
              />
            </div>
            <h3 className="text-white font-oswald uppercase">Profile Style</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CustomImageExample
