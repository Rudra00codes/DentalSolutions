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
    name: 'Dr. Rajesh Kumar',
    title: 'Chief Dental Officer & Founder',
    specialization: 'Oral & Maxillofacial Surgery',
    image: ASSET_PATHS.AVATARS.RAJESH,
    credentials: ['BDS, MDS', '15+ Years Experience', 'Implant Specialist', 'Advanced Oral Surgery']
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    title: 'Senior Dental Consultant',
    specialization: 'Cosmetic & Restorative Dentistry',
    image: ASSET_PATHS.AVATARS.PRIYA,
    credentials: ['BDS, MDS', '12+ Years Experience', 'Cosmetic Dentistry Expert', 'Smile Makeover Specialist']
  },
  {
    id: '3',
    name: 'Dr. Vikram Singh',
    title: 'Orthodontist',
    specialization: 'Orthodontics & Dentofacial Orthopedics',
    image: ASSET_PATHS.AVATARS.VIKRAM,
    credentials: ['BDS, MDS Orthodontics', '10+ Years Experience', 'Invisalign Certified', 'Braces Specialist']
  },
  {
    id: '4',
    name: 'Dr. Anjali Gupta',
    title: 'Pediatric Dentist',
    specialization: 'Pediatric Dentistry',
    image: ASSET_PATHS.AVATARS.ANJALI,
    credentials: ['BDS, MDS Pedodontics', '8+ Years Experience', 'Child Psychology Certified', 'Preventive Care Expert']
  },
  {
    id: '5',
    name: 'Dr. Meera Patel',
    title: 'Endodontist',
    specialization: 'Root Canal & Endodontic Therapy',
    image: ASSET_PATHS.AVATARS.MEERA,
    credentials: ['BDS, MDS Endodontics', '9+ Years Experience', 'Microscopic Endodontics', 'Pain Management Expert']
  },
  {
    id: '6',
    name: 'Dr. Arjun Malhotra',
    title: 'Periodontist',
    specialization: 'Periodontics & Gum Disease Treatment',
    image: ASSET_PATHS.AVATARS.ARJUN,
    credentials: ['BDS, MDS Periodontics', '11+ Years Experience', 'Laser Therapy Specialist', 'Gum Surgery Expert']
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
              className="relative flex justify-center overflow-hidden px-4 py-8 lg:py-0"
            >
              <BounceCards
                images={[
                  '/assets/images/AboutUs/Image1.png',
                  '/assets/images/AboutUs/Image2.png',
                  '/assets/images/AboutUs/Image3.png',
                ]}
                className="w-full max-w-[280px] h-[200px] sm:max-w-[380px] sm:h-[260px] md:max-w-[480px] md:h-[300px] lg:max-w-[560px] lg:h-[340px]"
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

      {/* Facility Images Gallery - removed per request */}

      {/* Team Profiles Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced dental professionals are committed to providing exceptional care with 
              advanced expertise and a compassionate approach to your oral health needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full group">
                  <CardContent className="text-center">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <PlaceholderImage
                          src={member.image}
                          alt={`${member.name} - ${member.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Professional Badge */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaStethoscope className="text-white text-sm" />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>

                    {/* Credentials */}
                    <div className="space-y-2">
                      {member.credentials.map((credential, credIndex) => (
                        <div
                          key={credIndex}
                          className="flex items-center justify-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                          <span>{credential}</span>
                        </div>
                      ))}
                    </div>

                    {/* Education Icon */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-center gap-2 text-primary-600">
                        <FaGraduationCap className="text-lg" />
                        <span className="text-sm font-medium">Certified Professional</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">6+</div>
              <div className="text-gray-600 text-sm md:text-base">Expert Dentists</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">60+</div>
              <div className="text-gray-600 text-sm md:text-base">Years Combined Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600 text-sm md:text-base">Specializations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">5000+</div>
              <div className="text-gray-600 text-sm md:text-base">Happy Patients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - removed per request */}
    </main>
  )
}