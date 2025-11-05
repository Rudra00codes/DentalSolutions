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
    image: '/assets/images/why-choose-us/laughing-gas.jpg',
    size: 'medium',
    bgColor: 'bg-blue-100',
    textColor: 'text-gray-800'
  },
  {
    id: '2',
    title: 'Painless Dentistry',
    description: 'We combine modern anaesthesia techniques and minimally invasive approaches to make dental care virtually pain-free, so you can start to finish.',
    size: 'large',
    bgColor: 'bg-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '3',
    title: 'Top-Notch Sterilization',
    description: 'Stringent sterilization with autoclave and sealed instruments for complete safety.',
    size: 'medium',
    bgColor: 'bg-blue-100',
    textColor: 'text-gray-800'
  },
  {
    id: '4',
    title: "World's Best iTero Scanner & Microscopic Dentistry",
    description: 'Advanced iTero 3D scans and microscopic precision—no messy impressions, better outcomes.',
    image: '/assets/images/why-choose-us/itero-scanner.jpg',
    size: 'large',
    bgColor: 'bg-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '5',
    title: 'Conventional And Basal Implants',
    description: 'Extensive implant stock—faster procedures, multiple brands available, minimal treatment delays.',
    size: 'medium',
    bgColor: 'bg-blue-100',
    textColor: 'text-gray-800'
  },
  {
    id: '6',
    title: 'Flexible Timings',
    description: 'Extended hours and flexible appointments to fit your busy schedule easily.',
    size: 'small',
    bgColor: 'bg-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '7',
    title: 'Walk-In Treatment',
    description: 'Walk-in appointments accepted for prompt assessments and immediate urgent care.',
    size: 'small',
    bgColor: 'bg-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '8',
    title: 'Full Mouth Rehabs',
    description: 'Comprehensive full-mouth restorations combining multidisciplinary care and lasting beautiful results.',
    image: '/assets/images/why-choose-us/full-mouth-rehab.jpg',
    size: 'medium',
    bgColor: 'bg-blue-100',
    textColor: 'text-gray-800'
  },
  {
    id: '9',
    title: 'Pediatric Dentist',
    description: 'Child-friendly pediatric dentist providing gentle, patient-focused care for young patients.',
    size: 'medium',
    bgColor: 'bg-blue-200',
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

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2'
      case 'wide':
        return 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1'
      case 'medium':
        return 'col-span-1 row-span-2'
      case 'small':
      default:
        return 'col-span-1 row-span-1'
    }
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-3 sm:gap-4 max-w-7xl mx-auto"
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
                ${getGridClasses(card.size)}
                ${card.bgColor}
                ${card.textColor}
                rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative overflow-hidden group cursor-pointer
                hover:shadow-xl transition-all duration-300
              `}
            >
              {/* Background Image */}
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

              {/* Content */}
              <div className={`relative z-10 h-full flex flex-col ${card.image ? 'text-white' : ''}`}>
                <h3 className={`
                  font-bold mb-3 leading-tight
                  ${card.size === 'large' ? 'text-2xl md:text-3xl' : 
                    card.size === 'medium' ? 'text-xl md:text-2xl' : 
                    'text-lg md:text-xl'}
                `}>
                  {card.title}
                </h3>
                
                <p className={`
                  leading-relaxed opacity-80
                  ${card.size === 'large' ? 'text-base md:text-lg' : 
                    card.size === 'medium' ? 'text-sm md:text-base' : 
                    'text-sm'}
                `}>
                  {card.description}
                </p>

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
              </div>

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