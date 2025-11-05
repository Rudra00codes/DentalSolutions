'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function ContactPreview() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Large rounded image */}
          <div className="overflow-hidden rounded-[32px]">
            <PlaceholderImage
              src="/assets/images/Contact/Left_Side_Img.png"
              alt="Dental procedure at Dental Solutions"
              width={900}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Right: Heading and contact cards */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>

            {/* Address card with embedded map */}
            <div className="bg-blue-50 rounded-3xl p-6 md:p-7 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-primary-600" />
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">SCO 2, Upper Ground Floor, VIP Central, W VIP Rd, opposite Surya Tower, Zirakpur, Punjab 140603</p>
              <div className="rounded-2xl border border-blue-200 overflow-hidden bg-blue-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1471.41461476935!2d76.81028875182146!3d30.636896233841398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feba7825c9573%3A0xcb62c7743a59716!2sDENTAL%20SOLUTIONS%20%7C%20DENTAL%20CLINIC%20IN%20ZIRAKPUR%20%7C%20DENTAL%20IMPLANT%20CENTRE!5e0!3m2!1sen!2sin!4v1762382152446!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-blue-50 rounded-3xl p-6 md:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-1">
                <FaPhone className="text-primary-600" />
                <h3 className="text-lg font-semibold">Phone Number</h3>
              </div>
              <a href="tel:+919888656768" className="text-gray-700 block mt-1">+91 9888656768</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}