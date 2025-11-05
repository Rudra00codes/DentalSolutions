'use client'

import { motion } from 'framer-motion'
import Card, { CardContent } from '@/components/ui/Card'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
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
              className="relative"
            >
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <PlaceholderImage
                  src={ASSET_PATHS.HERO.OFFICE}
                  alt="Modern dental clinic interior at Dental Solutions"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to transforming smiles and improving lives through exceptional dental care, 
              advanced technology, and a patient-centered approach that prioritizes comfort and trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="bordered" className="h-full">
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaHeart className="text-2xl text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center">
                    To provide comprehensive, high-quality dental care in a comfortable and welcoming environment. 
                    We strive to educate our patients about oral health while delivering personalized treatments 
                    that exceed expectations and build lasting relationships based on trust and excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="bordered" className="h-full">
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaAward className="text-2xl text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center">
                    To be the leading dental practice in Zirakpur, recognized for our commitment to innovation, 
                    patient care, and community health. We envision a future where everyone has access to 
                    exceptional dental care that promotes overall wellness and confident, healthy smiles.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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

      {/* Facility Images Gallery */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Take a Virtual Tour</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our modern dental facility designed for your comfort and equipped with advanced technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2"
            >
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg group">
                <PlaceholderImage
                  src={ASSET_PATHS.HERO.OFFICE}
                  alt="Main treatment room with modern dental equipment"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold">Treatment Rooms</h4>
                    <p className="text-sm opacity-90">Modern equipment for comfortable care</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <PlaceholderImage
                  src={ASSET_PATHS.HERO.BACKGROUND}
                  alt="Comfortable waiting area with modern seating"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <h5 className="font-semibold">Waiting Area</h5>
                    <p className="text-xs opacity-90">Relaxing environment</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <PlaceholderImage
                  src={ASSET_PATHS.TESTIMONIALS.BACKGROUND}
                  alt="Reception area with friendly staff"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <h5 className="font-semibold">Reception</h5>
                    <p className="text-xs opacity-90">Welcoming entrance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

      {/* Values Section */}
      <section className="section-padding bg-primary-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do at Dental Solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Patient-Centered Care',
                description: 'Every decision we make is focused on what\'s best for our patients\' health, comfort, and satisfaction.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                title: 'Continuous Innovation',
                description: 'We stay at the forefront of dental technology and techniques to provide the most effective treatments.',
                color: 'bg-green-100 text-green-600'
              },
              {
                title: 'Integrity & Trust',
                description: 'We build lasting relationships through honest communication, transparency, and ethical practice.',
                color: 'bg-purple-100 text-purple-600'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="flat" className="h-full text-center bg-white">
                  <CardContent>
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <div className="w-8 h-8 bg-current rounded-full opacity-20"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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