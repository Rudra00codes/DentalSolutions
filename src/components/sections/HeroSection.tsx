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
            className="space-y-8 text-center sm:text-left hero-content-mobile lg:order-1"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-gray-900 leading-tight hero-heading-with-image"
              >
                <span className="block">A complete family</span>
                <span className="block">
                  dental care{' '}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                    className="tooth-icon inline-block align-middle relative cursor-pointer"
                  >
                    <Image
                      src="/assets/images/hero/headingTooth.png"
                      alt="Dental tooth icon"
                      width={80}
                      height={80}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain tooth-shadow"
                      priority
                    />
                  </motion.span>
                </span>
              </motion.h1>
            </div>
            
            {/* Google Reviews - Hidden on mobile, shown on desktop */}
            <motion.a
              href="https://share.google/LDxtBIoHMq4JhsGzq"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="group hidden lg:flex flex-row items-center gap-4 p-5 bg-white rounded-xl shadow-md border border-gray-100 max-w-fit cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              {/* Stars + Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">5.0</span>
              </div>
              
              {/* Text + Arrow */}
              <div className="flex items-center gap-3">
                <div className="text-gray-600">
                  <span className="font-medium">Full 5 Star review on Google</span>
                  <div className="text-sm text-gray-500">(259)</div>
                </div>
                <FaArrowRight className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
              </div>
            </motion.a>

          </motion.div>

          {/* Right Column - Image with Overlapping Google Reviews on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 h-[600px] w-full">
                <PlaceholderImage
                  src="/assets/images/hero/Hero_Girl_Img.png"
                  alt="Confident woman with beautiful smile"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl -z-10"></div>
              
              {/* Subtitle - Overlapping on Mobile */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-4 left-4 right-4 z-20 lg:hidden text-base font-bold text-grey-600 leading-relaxed text-center bg-white/65 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 rounded-lg p-3"
              >
                Advanced, gentle care and personalized treatment for a confident, worry-free smile.
              </motion.p>

              {/* Google Reviews - Overlapping on Mobile */}
              <motion.a
                href="https://share.google/LDxtBIoHMq4JhsGzq"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="group absolute top-32 right-12 z-20 lg:hidden flex flex-col-reverse items-center gap-2 p-3 bg-white/65 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 max-w-[280px]"
              >
                {/* Stars + Rating (bottom on mobile) */}
                <div className="flex items-center gap-2 w-full justify-start">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">5.0</span>
                </div>
                
                {/* Text + Arrow (top on mobile) */}
                <div className="flex items-center gap-2 w-full justify-between">
                  <div className="text-gray-600 text-left">
                    <span className="font-medium text-sm">Full 5 Star review on Google</span>
                    <div className="text-xs text-gray-500">(259)</div>
                  </div>
                  <FaArrowRight className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0 text-sm" />
                </div>
              </motion.a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}