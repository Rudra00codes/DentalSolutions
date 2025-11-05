'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
  date: string
  treatment: string
  location: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    review: 'Absolutely amazing experience! The painless root canal treatment was beyond my expectations. Dr. and the team made me feel comfortable throughout the procedure. Highly recommend!',
    date: 'October 2024',
    treatment: 'Root Canal Treatment',
    location: 'Zirakpur',
    avatar: '/assets/images/avatars/priya.jpg'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    rating: 5,
    review: 'Best dental clinic in Zirakpur! The advanced technology and professional staff made my dental implant procedure smooth and painless. Thank you for giving me my confidence back!',
    date: 'September 2024',
    treatment: 'Dental Implants',
    location: 'Zirakpur',
    avatar: '/assets/images/avatars/rajesh.jpg'
  },
  {
    id: '3',
    name: 'Anjali Gupta',
    rating: 5,
    review: 'Excellent service and care! My teeth whitening results exceeded expectations. The clinic is very clean and the staff is incredibly friendly. Will definitely return for future treatments.',
    date: 'October 2024',
    treatment: 'Teeth Whitening',
    location: 'Chandigarh',
    avatar: '/assets/images/avatars/anjali.jpg'
  },
  {
    id: '4',
    name: 'Vikram Singh',
    rating: 5,
    review: 'Outstanding orthodontic treatment! My braces journey was comfortable and the results are perfect. The team kept me informed at every step. Truly professional service!',
    date: 'August 2024',
    treatment: 'Orthodontics',
    location: 'Mohali',
    avatar: '/assets/images/avatars/vikram.jpg'
  },
  {
    id: '5',
    name: 'Meera Patel',
    rating: 5,
    review: 'Fantastic experience with my smile makeover! The cosmetic dentistry work is exceptional. I can\'t stop smiling now. Thank you for the amazing transformation!',
    date: 'September 2024',
    treatment: 'Smile Makeover',
    location: 'Zirakpur',
    avatar: '/assets/images/avatars/meera.jpg'
  },
  {
    id: '6',
    name: 'Arjun Malhotra',
    rating: 5,
    review: 'Professional and caring team! My wisdom tooth extraction was completely painless. The post-care instructions were clear and healing was quick. Highly satisfied!',
    date: 'October 2024',
    treatment: 'Oral Surgery',
    location: 'Panchkula',
    avatar: '/assets/images/avatars/arjun.jpg'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } text-lg`}
      />
    ))
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real patients who trust us with their dental care.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div className="relative h-96 md:h-80 overflow-hidden rounded-2xl bg-white shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-4xl text-primary-200 mb-6" />
                
                {/* Review Text */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>
                
                {/* Patient Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    
                    {/* Patient Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentIndex].treatment} • {testimonials[currentIndex].location}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonials[currentIndex].date}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            {isAutoPlaying ? 'Auto-playing • Hover to pause' : 'Paused • Move cursor away to resume'}
          </p>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-2xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-2xl font-bold text-primary-600 mb-2 flex items-center justify-center gap-1">
              4.9 <FaStar className="text-yellow-400 text-lg" />
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-2xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Recommend Us</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}