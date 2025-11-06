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
    title: 'iTero Scanner',
    description: '',
    image: '/assets/images/WhyChooseUs/box3.png',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
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
    title: "World's Best iTero Scanner & Microscopic Dentistry",
    description:
      'Advanced iTero 3D scans and microscopic precision—no messy impressions, better outcomes.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '6',
    title: 'Conventional And Basal Implants',
    description:
      'Extensive implant stock—faster procedures, multiple brands available, minimal treatment delays.',
    image: '/assets/images/WhyChooseUs/box6.png',
    size: 'large',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '7',
    title: 'Flexible Timings',
    description: 'Extended hours and flexible appointments to fit your busy schedule easily.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '8',
    title: 'Full Mouth Rehabs',
    description:
      'Comprehensive full-mouth restorations combining multidisciplinary care and lasting beautiful results.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '9',
    title: 'Walk-In Treatment',
    description: 'Walk-in appointments accepted for prompt assessments and immediate urgent care.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    textColor: 'text-gray-800'
  },
  {
    id: '10',
    title: 'Pediatric Dentist',
    description:
      'Child-friendly pediatric dentist providing gentle, patient-focused care for young patients.',
    size: 'medium',
    bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
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
    // Mobile: single column layout (no forced row-span for tighter mobile rhythm)
    const mobileClasses = 'col-span-1'
    
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">
            Why Choose Us?
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-12 gap-4 md:gap-6 lg:gap-7 max-w-7xl mx-auto md:auto-rows-[minmax(150px,1fr)]"
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
                <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6">
                  {/* Text Column */}
                  <div className="order-2 md:order-1 flex flex-col justify-between h-full pr-0 md:pr-4">
                    <p className="text-sm md:text-base leading-6 text-gray-700 max-w-[48ch]">
                      {card.description}
                    </p>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 font-serif mt-6 md:mt-0">
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Image Column */}
                  {card.image && (
                    <div className="order-1 md:order-2 relative h-48 md:h-auto rounded-2xl md:rounded-l-[48px] md:rounded-r-2xl overflow-hidden">
                      <PlaceholderImage
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ) : card.id === '3' ? (
                /* Special layout for card 3 - Image only */
                <div className="relative z-10 h-48 md:h-full p-4">
                  {card.image && (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <PlaceholderImage
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ) : card.id === '2' ? (
                /* Special layout for card 2 - Painless Dentistry */
                <div className="relative z-10 h-full flex flex-col justify-start p-6">
                  {/* Large title at top */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-gray-900 mb-3 font-serif">
                    {card.title}
                  </h3>
                  
                  {/* Description below */}
                  <p className="text-[13px] md:text-sm lg:text-base leading-6 text-gray-600 max-w-[45ch]">
                    {card.description}
                  </p>
                </div>
              ) : card.id === '4' ? (
                /* Special layout for card 4 - Top-Notch Sterilization */
                <div className="relative z-10 h-full flex flex-col justify-start p-6">
                  {/* Large title at top */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-gray-900 mb-3 font-serif">
                    {card.title}
                  </h3>
                  
                  {/* Description at bottom */}
                  <p className="text-[13px] md:text-sm lg:text-base leading-6 text-gray-600 max-w-[45ch]">
                    {card.description}
                  </p>
                </div>
              ) : card.id === '6' ? (
                /* Special layout for card 6 - Implants image flush to bottom-right */
                <>
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug tracking-tight text-gray-900 font-serif mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[13px] md:text-sm lg:text-base leading-6 text-gray-600 max-w-[45ch]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  {card.image && (
                    <div className="absolute -bottom-6 -right-6 w-80 h-56 md:-bottom-8 md:-right-8 md:w-96 md:h-72 lg:w-96 lg:h-80 pointer-events-none">
                      <div className="relative w-full h-full">
                        <PlaceholderImage
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Background Image for other cards */}
                  {card.image && (
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <PlaceholderImage
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                  )}

                  {/* Content for other cards */}
                  {['7','8','9','10'].includes(card.id) ? (
                    // Large heading at top, paragraph anchored at bottom
                    <div className={`relative z-10 h-full min-h-[14rem] md:min-h-0 flex flex-col justify-between ${card.image ? 'text-white' : ''} p-4`}>
                      <h3 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-snug tracking-tight text-gray-900">
                        {card.title}
                      </h3>
                      <p className="mt-6 text-[13px] md:text-sm lg:text-base leading-6 text-gray-600 max-w-[48ch]">
                        {card.description}
                      </p>
                    </div>
                  ) : (
                    <div className={`relative z-10 h-full flex flex-col justify-start p-1 ${card.image ? 'text-white' : ''}`}>
                      <h3 className={`
                        font-bold mb-2 md:mb-3 leading-snug tracking-tight font-serif
                        ${card.id === '6' ? 'text-xl md:text-2xl lg:text-3xl' : 
                          'text-lg md:text-xl lg:text-2xl'}
                      `}>
                        {card.title}
                      </h3>
                      
                      <p className={`
                        leading-6 opacity-80 max-w-[45ch]
                        ${card.id === '6' ? 'text-sm md:text-base lg:text-base' : 
                          'text-[13px] md:text-sm lg:text-base'}
                      `}>
                        {card.description}
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/20 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section - removed per request */}
      </div>
    </section>
  )
}