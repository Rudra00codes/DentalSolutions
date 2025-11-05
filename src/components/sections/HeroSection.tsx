'use client'

import { motion } from 'framer-motion'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SplitText from '@/components/ui/SplitText'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center pt-20 lg:pt-24">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <SplitText
                text="Smile Confidently, Live Fully 😊"
                tag="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                splitType="words, chars"
                delay={80}
                duration={0.6}
                ease="power2.out"
                from={{ opacity: 0, y: 30, scale: 0.8 }}
                to={{ opacity: 1, y: 0, scale: 1 }}
                threshold={0.3}
                rootMargin="-20px"
                textAlign="left"
              />
            </div>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Advanced, gentle care and personalized treatment for a confident, worry-free smile.
            </motion.p>
            
            {/* Google Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100"
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
              <FaArrowRight className="text-gray-400 ml-auto" />
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Call Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Painless Treatment</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Advanced Technology</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}