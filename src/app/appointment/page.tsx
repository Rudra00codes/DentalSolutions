import type { Metadata } from 'next'
import { AppointmentFormWrapper } from '@/components/forms'
import { FiClock, FiMapPin, FiPhone, FiMail, FiCalendar, FiUsers } from 'react-icons/fi'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Book Appointment - Online Dental Booking Zirakpur',
  description: 'Schedule your dental appointment online at Dental Solutions, Zirakpur. Quick and easy booking for all dental services including cleanings, implants, and cosmetic dentistry.',
  keywords: 'book appointment, dental appointment, dentist booking, Zirakpur dentist, online appointment, dental clinic booking, schedule dental visit, emergency dental care',
  canonical: '/appointment',
})

export default function Appointment() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto container-padding py-16 md:py-20 pt-24 lg:pt-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Schedule your visit with our expert dental team. We&apos;re here to provide you with the best care using advanced technology and painless procedures.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-100">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers className="w-5 h-5" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto container-padding py-16 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Schedule Your Visit
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we&apos;ll contact you within 24 hours to confirm your appointment. All fields marked with * are required.
                </p>
              </div>
              
              <AppointmentFormWrapper />
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      SCO 2, Upper Ground Floor, VIP Central,<br />
                      W VIP Rd, opposite Surya Tower,<br />
                      Zirakpur, Punjab 140603
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a 
                      href="tel:+919780025988" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +91 97800 25988
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:info@dentalsolutions.com" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      info@dentalsolutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FiClock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Hours</p>
                    <div className="text-gray-600 text-sm">
                      <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Confirmation Call</p>
                    <p className="text-gray-600 text-sm">
                      We&apos;ll call you within 24 hours to confirm your appointment time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Consultation</p>
                    <p className="text-gray-600 text-sm">
                      Comprehensive examination and discussion of your dental needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Treatment Plan</p>
                    <p className="text-gray-600 text-sm">
                      Personalized treatment recommendations and cost estimates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">
                Dental Emergency?
              </h3>
              <p className="text-red-800 text-sm mb-4">
                If you&apos;re experiencing a dental emergency, please call us immediately for urgent care.
              </p>
              <a
                href="tel:+919780025988"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Dental Solutions?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUsers className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Experienced dentists with advanced training in modern dental techniques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiClock className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Painless Procedures</h3>
                <p className="text-gray-600">
                  Advanced technology and techniques for comfortable, pain-free treatments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMapPin className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Location</h3>
                <p className="text-gray-600">
                  Easily accessible location in Zirakpur with ample parking facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}