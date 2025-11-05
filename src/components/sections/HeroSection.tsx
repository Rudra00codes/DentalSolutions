'use client'

import { motion } from 'framer-motion'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import PlaceholderImage from '@/components/ui/PlaceholderImage'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center pt-20 lg:pt-24">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-8 text-center sm:text-left hero-content-mobile"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-gray-900 leading-tight hero-heading-with-image"
              >
                <span className="block sm:inline">Smile Confidently,</span>
                <span className="block sm:inline">Live Fully</span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                  className="tooth-icon inline-block relative cursor-pointer"
                >
                  <Image
                    src="/assets/images/hero/headingTooth.png"
                    alt="Dental tooth icon"
                    width={80}
                    height={80}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain tooth-shadow"
                    priority
                  />
                </motion.div>
              </motion.h1>
            </div>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg text-center sm:text-left mx-auto sm:mx-0"
            >
              Advanced, gentle care and personalized treatment for a confident, worry-free smile.
            </motion.p>
            
            {/* Google Reviews */}
            <motion.a
              href="https://share.google/LDxtBIoHMq4JhsGzq"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 mx-auto sm:mx-0 max-w-fit cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">5.0</span>
              </div>
              <div className="text-gray-600">
                <span className="font-medium">Full 5 Star review on Google</span>
                <div className="text-sm text-gray-500">(259)</div>
              </div>
              <FaArrowRight className="text-gray-400 ml-auto transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 h-[600px] w-full">
                <PlaceholderImage
                  src="/assets/images/hero/HeroRight_Img.png"
                  alt="Confident woman with beautiful smile"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl -z-10"></div>
              

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}