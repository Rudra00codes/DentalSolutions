'use client'

import { motion } from 'framer-motion'
import PlaceholderImage from '@/components/ui/PlaceholderImage'

interface BentoCard {
  id: string
  title: string
  description: string
  image?: string
  size: 'small' | 'medium' | 'large' | 'wide'
  bgColor: string
  textColor: string
}

const bentoCards: BentoCard[] = [
  {
    id: '1',
    title: 'Laughing Gas',
    description: 'Safe nitrous oxide sedation to keep you calm and pain-free.',
    image: '/assets/images/WhyChooseUs/box1.png',
    size: 'large',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '2',
    title: 'Painless Dentistry',
    description: 'We combine modern anaesthesia techniques and minimally invasive approaches to make dental care virtually pain-free. Your comfort is our priority from start to finish.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '3',
    title: 'Expert Team',
    description: 'Highly qualified and experienced dental professionals dedicated to your care.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
    textColor: 'text-gray-800'
  },
  {
    id: '4',
    title: 'Top-Notch Sterilization',
    description: 'Stringent sterilization with autoclaves and sealed instruments for complete safety.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '5',
    title: 'Flexible Timings',
    description: 'Extended hours and flexible appointments to fit your busy schedule.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
    textColor: 'text-gray-800'
  },
  {
    id: '6',
    title: 'Comprehensive Care',
    description: 'Full range of dental services from preventive care to complex procedures under one roof.',
    image: '/assets/images/why-choose-us/comprehensive-care.jpg',
    size: 'large',
    bgColor: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
    textColor: 'text-gray-800'
  },
  {
    id: '7',
    title: 'Walk-In Treatment',
    description: 'Walk-in appointments accepted for urgent care and immediate assessments.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200',
    textColor: 'text-gray-800'
  },
  {
    id: '8',
    title: 'Affordable Pricing',
    description: 'Competitive pricing with flexible payment options and insurance acceptance.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
    textColor: 'text-gray-800'
  },
  {
    id: '9',
    title: 'Patient Comfort',
    description: 'Comfortable environment with amenities designed for patient relaxation and ease.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-red-100 to-red-200',
    textColor: 'text-gray-800'
  },
  {
    id: '10',
    title: 'Follow-up Care',
    description: 'Comprehensive follow-up care and maintenance programs for lasting results.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-cyan-100 to-cyan-200',
    textColor: 'text-gray-800'
  }
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const getGridClasses = (cardId: string) => {
    // Mobile: single column layout
    const mobileClasses = 'col-span-1 row-span-2'
    
    // Desktop: specific bento grid layout
    const desktopClasses = (() => {
      switch (cardId) {
        case '1': // Large card spanning 2 columns, 3 rows
          return 'md:col-span-2 md:row-span-3'
        case '2': // Medium card, 3 rows, column 3
          return 'md:row-span-3 md:col-start-3'
        case '3': // Medium card, 3 rows, column 2, row 4
          return 'md:row-span-3 md:col-start-2 md:row-start-4'
        case '4': // Medium card, 3 rows, column 1, row 4
          return 'md:row-span-3 md:col-start-1 md:row-start-4'
        case '5': // Medium card, 3 rows, row 4 (column 3)
          return 'md:row-span-3 md:row-start-4 md:col-start-3'
        case '6': // Large card, 6 rows, row 7 (column 1)
          return 'md:row-span-6 md:row-start-7 md:col-start-1'
        case '7': // Medium card, 3 rows, row 7 (column 2)
          return 'md:row-span-3 md:row-start-7 md:col-start-2'
        case '8': // Medium card, 3 rows, column 2, row 10
          return 'md:row-span-3 md:col-start-2 md:row-start-10'
        case '9': // Medium card, 3 rows, column 3, row 7
          return 'md:row-span-3 md:col-start-3 md:row-start-7'
        case '10': // Medium card, 3 rows, column 3, row 10
          return 'md:row-span-3 md:col-start-3 md:row-start-10'
        default:
          return 'md:col-span-1 md:row-span-3'
      }
    })()
    
    return `${mobileClasses} ${desktopClasses}`
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Why Choose Us?
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-12 gap-4 md:gap-6 lg:gap-7 max-w-7xl mx-auto"
          style={{ gridAutoRows: 'minmax(150px, 1fr)' }}
        >
          {bentoCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 }
              }}
              className={`
                ${getGridClasses(card.id)}
                ${card.bgColor}
                ${card.textColor}
                rounded-2xl md:rounded-3xl p-4 md:p-6 relative overflow-hidden group cursor-pointer
                hover:shadow-xl transition-all duration-300
              `}
            >
              {/* Special layout for card 1 - image on right */}
              {card.id === '1' ? (
                <div className="relative z-10 h-full flex items-center p-6">
                  {/* Text Content on Left */}
                  <div className="flex-1 pr-6 flex flex-col justify-center">
                    {/* Description at top */}
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 mb-4">
                      {card.description}
                    </p>
                    {/* Title below description */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Image on Right */}
                  {card.image && (
                    <div className="flex-1 h-full rounded-2xl overflow-hidden relative">
                      <PlaceholderImage
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              ) : card.id === '2' ? (
                /* Special layout for card 2 - Painless Dentistry */
                <div className="relative z-10 h-full flex flex-col justify-center p-6">
                  {/* Large title at top */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-6">
                    {card.title}
                  </h3>
                  
                  {/* Description below */}
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>
              ) : card.id === '4' ? (
                /* Special layout for card 4 - Top-Notch Sterilization */
                <div className="relative z-10 h-full flex flex-col justify-center p-6">
                  {/* Large title at top */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-6">
                    {card.title}
                  </h3>
                  
                  {/* Description at bottom */}
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>
              ) : (
                <>
                  {/* Background Image for other cards */}
                  {card.image && (
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <PlaceholderImage
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                  )}

                  {/* Content for other cards */}
                  <div className={`relative z-10 h-full flex flex-col justify-center ${card.image ? 'text-white' : ''}`}>
                    <h3 className={`
                      font-bold mb-3 leading-tight
                      ${card.id === '6' ? 'text-xl md:text-2xl lg:text-3xl' : 
                        'text-lg md:text-xl lg:text-2xl'}
                    `}>
                      {card.title}
                    </h3>
                    
                    <p className={`
                      leading-relaxed opacity-80
                      ${card.id === '6' ? 'text-sm md:text-base lg:text-lg' : 
                        'text-xs md:text-sm lg:text-base'}
                    `}>
                      {card.description}
                    </p>
                  </div>
                </>
              )}

              {/* Decorative Elements for specific cards */}
              {card.id === '1' && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
              )}
              
              {card.id === '8' && (
                <div className="absolute bottom-4 left-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                </div>
              )}

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/20 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust us with their dental care. Book your consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300"
            >
              Call: +91 98765 43210
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}