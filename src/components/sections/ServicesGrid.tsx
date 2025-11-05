'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTooth, FaUserMd, FaShieldAlt, FaSmile, FaHeart, FaCrown } from 'react-icons/fa'
import Card from '@/components/ui/Card'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import Button from '@/components/ui/Button'

interface Service {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  image: string
  category: string
  features: string[]
}

const services: Service[] = [
  {
    id: '1',
    name: 'Dental Implants',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments for optimal oral health.',
    icon: <FaTooth className="text-3xl text-primary-600" />,
    image: '/assets/images/services/Dental_Implants.png',
    category: 'General',
    features: ['Regular Checkups', 'Dental Cleanings', 'Cavity Fillings', 'Preventive Care']
  },
  {
    id: '2',
    name: 'Cosmetic Dentistry',
    description: 'Transform your smile with advanced cosmetic procedures including whitening, veneers, and smile makeovers.',
    icon: <FaSmile className="text-3xl text-primary-600" />,
    image: '/assets/images/services/cosmetic-dentistry.jpg',
    category: 'Cosmetic',
    features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeover', 'Bonding']
  },
  {
    id: '3',
    name: 'Orthodontics',
    description: 'Straighten your teeth with modern orthodontic solutions including braces and clear aligners.',
    icon: <FaShieldAlt className="text-3xl text-primary-600" />,
    image: '/assets/images/services/orthodontics.jpg',
    category: 'Orthodontics',
    features: ['Metal Braces', 'Clear Aligners', 'Retainers', 'Bite Correction']
  },
  {
    id: '4',
    name: 'Oral Surgery',
    description: 'Advanced surgical procedures including extractions, implants, and jaw surgery with minimal discomfort.',
    icon: <FaUserMd className="text-3xl text-primary-600" />,
    image: '/assets/images/services/oral-surgery.jpg',
    category: 'Surgery',
    features: ['Tooth Extraction', 'Dental Implants', 'Wisdom Teeth', 'Jaw Surgery']
  },
  {
    id: '5',
    name: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a comfortable, child-friendly environment.',
    icon: <FaHeart className="text-3xl text-primary-600" />,
    image: '/assets/images/services/pediatric-dentistry.jpg',
    category: 'Pediatric',
    features: ['Child Checkups', 'Fluoride Treatments', 'Sealants', 'Early Orthodontics']
  },
  {
    id: '6',
    name: 'Restorative Dentistry',
    description: 'Restore damaged teeth with crowns, bridges, and advanced restorative techniques.',
    icon: <FaCrown className="text-3xl text-primary-600" />,
    image: '/assets/images/services/restorative-dentistry.jpg',
    category: 'Restorative',
    features: ['Dental Crowns', 'Bridges', 'Dentures', 'Root Canal']
  }
]

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...Array.from(new Set(services.map(service => service.category)))]
  const displayedServices = showAll ? services : services.slice(0, 3)
  const filteredServices = selectedCategory === 'All' 
    ? displayedServices 
    : displayedServices.filter(service => service.category === selectedCategory)

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
    <section id="services" className="section-padding bg-gray-50">
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
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care with advanced technology and personalized treatment plans for every patient.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full group cursor-pointer">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <PlaceholderImage
                    src={service.image}
                    alt={`${service.name} - Professional dental service at Dental Solutions`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 z-10">
                    {service.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {service.category}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {!showAll && services.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              View All Services ({services.length - 3} More)
            </Button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={() => setShowAll(false)}
              variant="outline"
              size="lg"
            >
              Show Less
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}