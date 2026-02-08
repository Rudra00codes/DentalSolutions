'use client'

import { useState, useMemo } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function ContactPreview() {
  const [branch, setBranch] = useState<'zirakpur' | 'baltana'>('zirakpur')

  const { address, mapSrc } = useMemo(() => {
    if (branch === 'baltana') {
      return {
        address:
          '1st Floor, Shop No, 37-38, Tribune Road, Saini Vihar Phase-2, Baltana, Zirakpur, Punjab 140604',
        mapSrc:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d109852.933215276!2d76.7105804!3d30.6366584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febe5a774a76b%3A0xf38246fc4bc03ca6!2sDENTAL%20SOLUTIONS%20%7C%20DENTAL%20CLINIC%20IN%20BALTANA%20%7C%20DENTAL%20IMPLANT%20CENTRE!5e0!3m2!1sen!2sin!4v1770579079908!5m2!1sen!2sin',
      }
    }
    return {
      address:
        'SCO 2, Upper Ground Floor, VIP Central, W VIP Rd, opposite Surya Tower, Zirakpur, Punjab 140603',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13731.612734289047!2d76.79143688715821!3d30.636686000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feba7825c9573%3A0xcb62c7743a59716!2sDENTAL%20SOLUTIONS%20%7C%20DENTAL%20CLINIC%20ZIRAKPUR%20%7C%20DENTAL%20IMPLANT%20CENTRE!5e0!3m2!1sen!2sin!4v1770579143972!5m2!1sen!2sin',
    }
  }, [branch])

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
              <div className="flex items-center justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary-600" />
                  <h3 className="text-lg font-semibold">Address</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 hidden sm:inline">Branch:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={branch === 'baltana'}
                      onClick={() => setBranch('baltana')}
                      className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                        branch === 'baltana'
                          ? 'bg-white border-gray-300 text-gray-900 shadow-sm'
                          : 'bg-transparent border-gray-300 text-gray-700 hover:bg-white/60'
                      }`}
                    >
                      Baltana
                    </button>
                    <button
                      type="button"
                      aria-pressed={branch === 'zirakpur'}
                      onClick={() => setBranch('zirakpur')}
                      className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                        branch === 'zirakpur'
                          ? 'bg-primary-600 text-white shadow-sm'
                          : 'bg-blue-100 text-gray-800 hover:bg-primary-100'
                      }`}
                    >
                      Zirakpur
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{address}</p>
              <div className="rounded-2xl border border-blue-200 overflow-hidden bg-blue-100">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map for ${branch}`}
                />
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-blue-50 rounded-3xl p-6 md:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-1">
                <FaPhone className="text-primary-600" />
                <h3 className="text-lg font-semibold">Phone Number</h3>
              </div>
              <a href="tel:+919780025988" className="text-gray-700 block mt-1">+91 97800 25988</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}