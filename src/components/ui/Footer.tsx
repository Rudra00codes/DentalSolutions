import Link from 'next/link'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Book Appointment', href: '/appointment' },
  { name: 'Contact', href: '/#contact' },
]

const services = [
  { name: 'Dental Implants', href: '/#services' },
  { name: 'Dentures', href: '/#services' },
  { name: 'Braces', href: '/#services' },
  { name: 'Root Canal Treatment', href: '/#services' },
  { name: 'Tooth Extraction', href: '/#services' },
  { name: 'Teeth Cleaning & Polishing', href: '/#services' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FaFacebook },
  { name: 'Instagram', href: 'https://www.instagram.com/dental__solutions_?igsh=MTg3Z2wzenNjNjJoZg==', icon: FaInstagram },
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
]

export default function Footer() {
  return (
    <footer className="text-gray-800 rounded-t-[50px]" style={{ backgroundColor: '#dbe9ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary-600">
              Dental Solutions
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing exceptional dental care with advanced technology and compassionate service. 
              Your smile is our priority.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                const isExternal = social.href.startsWith('http')
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                    aria-label={social.name}
                    {...(isExternal && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>SCO 2, Upper Ground Floor, VIP Central</p>
                  <p>W VIP Rd, opposite Surya Tower</p>
                  <p>Zirakpur, Punjab 140603</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <HiPhone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <Link 
                  href="tel:+919780025988"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  +91 97800 25988
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <HiMail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <Link 
                  href="mailto:info@dentalsolutions.com"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  info@dentalsolutions.com
                </Link>
              </div>
              
              <div className="flex items-start space-x-3">
                <HiClock className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <div 
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6 -mb-12"
            style={{ backgroundColor: '#0481c3' }}
          >
            <div className="text-white text-sm">
              © {new Date().getFullYear()} Dental Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap-page" className="text-blue-100 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}