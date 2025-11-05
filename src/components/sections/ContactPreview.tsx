'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedCard from '@/components/ui/AnimatedCard'

export default function ContactPreview() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your smile? Contact us today to schedule your consultation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center">
            <FaPhone className="text-3xl text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-4">+91 97800 25988</p>
            <Button size="sm" className="w-full">Call Now</Button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center">
            <FaWhatsapp className="text-3xl text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-4">Quick Consultation</p>
            <Button size="sm" variant="outline" className="w-full">Chat Now</Button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center">
            <FaEnvelope className="text-3xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-4">info@dentalsolutions.com</p>
            <Button size="sm" variant="outline" className="w-full">Send Email</Button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center">
            <FaMapMarkerAlt className="text-3xl text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm mb-4">Zirakpur, Punjab</p>
            <Button size="sm" variant="outline" className="w-full">Get Directions</Button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Appointment?</h3>
          <p className="text-blue-100 mb-6">Join thousands of satisfied patients who trust us with their dental care.</p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
            <FaCalendarAlt className="mr-2" />
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}