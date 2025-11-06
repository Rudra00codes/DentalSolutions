"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Card from '@/components/ui/Card'
import PlaceholderImage from '@/components/ui/PlaceholderImage'

interface Service {
  id: string
  name: string
  description: string
  image: string
}

const services: Service[] = [
  {
    id: '1',
    name: 'Dental Implants',
    description:
      'A dental implant is an artificial tooth root placed into your jaw to support a replacement tooth. Precise, stable, and natural-looking results by specialists.',
  image: '/assets/images/services/Dental_Implant.png'
  },
  {
    id: '2',
    name: 'Dentures',
    description:
      'A removable replacement for missing teeth. Designed for comfort and function by experienced prosthodontists.',
  image: '/assets/images/services/Dentures.png'
  },
  {
    id: '3',
    name: 'Braces',
    description:
      'Modern braces to straighten and align your teeth. Multiple options available with specialist orthodontists.',
  image: '/assets/images/services/Braces.png'
  },
  {
    id: '4',
    name: 'Root Canal Treatment',
    description:
      'Root canal therapy to treat infection and save a badly damaged or infected tooth—performed by skilled endodontists.',
  image: '/assets/images/services/RCT.png'
  },
  {
    id: '5',
    name: 'Tooth Extraction',
    description:
      'Safe, precise extraction of damaged or decayed teeth using modern techniques for comfort and quick healing.',
  image: '/assets/images/services/Tooth_Extractn.png'
  },
  {
    id: '6',
    name: 'Teeth Cleaning & Polishing',
    description:
      'Gently removes plaque, tartar, and stains using advanced ultrasonic tools for a fresher, healthier smile.',
  image: '/assets/images/services/Tooth_clean_n_Polish.png'
  }
]

export default function ServicesGrid() {
  // Figma layout shows all services without category filters
  const filteredServices = services
  const [showAll, setShowAll] = useState(false)
  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, 3)

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
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-[#DBE9FF]">
      <div className="container mx-auto container-padding">
        {/* Section Header (Figma) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-300/70 bg-white/70 text-sm text-gray-700 mb-3">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-gray-900 uppercase">
            Dental Treatments
          </h2>
          <p className="mt-2 text-gray-700 md:text-lg">At Dental Solutions Zirakpur</p>
        </motion.div>

        {/* Services Grid (initially 3 items in one row on large screens) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8"
        >
          <AnimatePresence>
          {visibleServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Card className="h-full group cursor-pointer border border-black shadow-sm bg-white rounded-xl p-2 md:p-3">
                {/* Service Image */}
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden ring-1 ring-black/10 bg-white">
                  <PlaceholderImage
                    src={service.image}
                    alt={`${service.name} at Dental Solutions`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Service Content */}
                <div className="pt-2 px-1 pb-0">
                  <h3 className="text-lg md:text-2xl font-extrabold text-gray-900 mb-1 tracking-tight leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-[13px] md:text-sm text-gray-700 leading-6">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 bg-white/80 text-gray-900 hover:bg-white shadow-sm"
            >
              View More
              <FaExternalLinkAlt className="text-sm" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}