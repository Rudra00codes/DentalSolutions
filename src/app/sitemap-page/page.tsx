/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Sitemap - Dental Solutions',
  description: 'Browse all pages and sections of Dental Solutions website. Find dental services, appointment booking, and contact information.',
  keywords: 'sitemap, website navigation, dental services, dental clinic pages',
  canonical: '/sitemap-page',
})

interface SitemapSection {
  title: string
  links: {
    name: string
    href: string
    description?: string
  }[]
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/', description: 'Welcome to Dental Solutions - Professional dental care in Zirakpur' },
      { name: 'About Us', href: '/about', description: 'Learn about our experienced dental team and state-of-the-art facility' },
      { name: 'Book Appointment', href: '/appointment', description: 'Schedule your dental appointment online' },
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'All Services', href: '/#services', description: 'Browse our comprehensive dental treatment options' },
      { name: 'Dental Implants', href: '/#services', description: 'Permanent tooth replacement solutions' },
      { name: 'Dentures', href: '/#services', description: 'Removable replacement for missing teeth' },
      { name: 'Braces', href: '/#services', description: 'Orthodontic treatment for teeth straightening' },
      { name: 'Root Canal Treatment', href: '/#services', description: 'Save infected or damaged teeth' },
      { name: 'Tooth Extraction', href: '/#services', description: 'Safe removal of damaged teeth' },
      { name: 'Teeth Cleaning & Polishing', href: '/#services', description: 'Professional dental hygiene services' },
    ]
  },
  {
    title: 'Information',
    links: [
      { name: 'Why Choose Us', href: '/#why-choose-us', description: 'Discover what makes Dental Solutions special' },
      { name: 'Contact Us', href: '/#contact', description: 'Get in touch with our dental clinic' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy', description: 'How we protect your personal information' },
      { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions for using our services' },
      { name: 'Sitemap', href: '/sitemap-page', description: 'Navigate all pages on our website' },
    ]
  },
  {
    title: 'Contact Information',
    links: [
      { name: 'Phone: +91 97800 25988', href: 'tel:+919780025988', description: 'Call us for appointments and inquiries' },
      { name: 'Email: info@dentalsolutions.com', href: 'mailto:info@dentalsolutions.com', description: 'Send us an email' },
      { name: 'Location: Zirakpur, Punjab', href: '/#contact', description: 'Visit our clinic' },
    ]
  }
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto container-padding py-16 md:py-20 pt-24 lg:pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigate through all pages and sections of Dental Solutions website. Find everything you need quickly and easily.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sitemapSections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="group block"
                      >
                        <div className="flex items-start">
                          <svg 
                            className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <div>
                            <span className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors duration-200">
                              {link.name}
                            </span>
                            {link.description && (
                              <p className="text-sm text-gray-600 mt-1">
                                {link.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              If you can't find what you're looking for, please don't hesitate to contact us. Our team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/appointment"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Book Appointment
              </Link>
              <Link 
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Business Hours
            </h3>
            <div className="max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-gray-700">
                <span className="font-medium">Monday - Saturday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="font-medium">Sunday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
