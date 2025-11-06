'use client'

import { motion } from 'framer-motion'
import Card, { CardContent } from '@/components/ui/Card'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import BounceCards from '@/components/ui/BounceCards'
import { ASSET_PATHS } from '@/constants/assets'
import { FaAward, FaHeart, FaShieldAlt, FaUsers, FaMicroscope, FaClock, FaGraduationCap, FaStethoscope } from 'react-icons/fa'
import { TeamMember } from '@/types'

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Harsh Kohli',
    title: 'Oro-Dental Surgeon & Implantologist',
    specialization: 'General Dentistry & Implants',
    image: '/assets/images/AboutUs/avatars/Harsh.png',
    credentials: ['BDS, MDS']
  },
  {
    id: '2',
    name: 'Dr. Ritika Arora',
    title: 'BDS, MDS (Periodontist Surgeon & Implantologist)',
    specialization: 'Periodontics & Implantology',
    image: '/assets/images/AboutUs/avatars/Ritika.png',
    credentials: ['BDS, MDS']
  },
  {
    id: '3',
    name: 'Dr. Vandana Rattu',
    title: 'General Dentist',
    specialization: 'Preventive & Restorative Dentistry',
    image: '/assets/images/AboutUs/avatars/Vandana.png',
    credentials: ['BDS']
  },
  {
    id: '4',
    name: 'Dr. Anmol Sharma',
    title: 'General Dentist',
    specialization: 'Comprehensive Dental Care',
    image: '/assets/images/AboutUs/avatars/Anmol.png',
    credentials: ['BDS']
  }
]

const facilityFeatures = [
  {
    icon: FaMicroscope,
    title: 'Advanced Technology',
    description: 'State-of-the-art equipment including digital X-rays, intraoral cameras, and laser dentistry for precise treatments.'
  },
  {
    icon: FaShieldAlt,
    title: 'Sterilization Standards',
    description: 'Highest standards of infection control and sterilization protocols to ensure patient safety and peace of mind.'
  },
  {
    icon: FaHeart,
    title: 'Comfortable Environment',
    description: 'Relaxing atmosphere with modern amenities designed to reduce anxiety and enhance your dental experience.'
  },
  {
    icon: FaClock,
    title: 'Flexible Hours',
    description: 'Convenient scheduling options including evening and weekend appointments to fit your busy lifestyle.'
  },
  {
    icon: FaUsers,
    title: 'Family-Friendly',
    description: 'Comprehensive dental care for patients of all ages, from pediatric dentistry to senior dental health.'
  },
  {
    icon: FaAward,
    title: 'Excellence in Care',
    description: 'Committed to delivering the highest quality dental treatments with personalized attention for every patient.'
  }
]

export default function AboutContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 py-16 md:py-20 pt-24 lg:pt-28">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-balance">About Dental Solutions</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your trusted partner in oral health, providing comprehensive dental care with 
                advanced technology and a compassionate approach in the heart of Zirakpur.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>15+ Years of Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>5000+ Happy Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Advanced Technology</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center px-4 py-8 lg:py-0"
            >
              <BounceCards
                images={[
                  '/assets/images/AboutUs/Image1.png',
                  '/assets/images/AboutUs/Image2.png',
                  '/assets/images/AboutUs/Image3.png',
                ]}
                className="w-full h-auto max-w-[320px] sm:max-w-[380px] md:max-w-[480px] md:h-[300px] lg:max-w-[560px] lg:h-[340px]"
                animationDelay={0.4}
                animationStagger={0.12}
                easeType="power3.out"
                transformStyles={[
                  'rotate(6deg) translate(-40px) scale(0.9)',
                  'rotate(0deg) scale(1)',
                  'rotate(-6deg) translate(40px) scale(0.9)'
                ]}
                enableHover
                stackOnMobile
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - removed per request */}

      {/* Team Profiles Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-300/70 bg-white/70 text-sm text-gray-700 mb-3">About Us</div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-gray-900">Our Team</h2>
          </motion.div>

          {/* Team grid – Figma style: image on top, name + designation below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group">
                  {/* Photo */}
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                    <PlaceholderImage
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(min-width: 1024px) 240px, (min-width: 768px) 25vw, 50vw"
                    />
                  </div>

                  {/* Name and designation */}
                  <div className="mt-3">
                    <h3 className="font-serif text-base md:text-lg text-gray-900 leading-snug">{member.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">{member.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Our State-of-the-Art Facility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience dental care in a modern, comfortable environment equipped with the latest technology 
              and designed with your comfort and safety in mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full text-center">
                  <CardContent>
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="text-2xl text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}