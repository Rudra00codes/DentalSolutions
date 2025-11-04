import Link from 'next/link'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Book Appointment', href: '/appointment' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'General Dentistry', href: '/services#general' },
  { name: 'Cosmetic Dentistry', href: '/services#cosmetic' },
  { name: 'Orthodontics', href: '/services#orthodontics' },
  { name: 'Oral Surgery', href: '/services#surgery' },
  { name: 'Dental Implants', href: '/services#implants' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FaFacebook },
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary-400">
              Dental Solutions
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing exceptional dental care with advanced technology and compassionate service. 
              Your smile is our priority.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>123 Main Street</p>
                  <p>Zirakpur, Punjab 140603</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <HiPhone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <Link 
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  +91 98765 43210
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <HiMail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <Link 
                  href="mailto:info@dentalsolutions.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  info@dentalsolutions.com
                </Link>
              </div>
              
              <div className="flex items-start space-x-3">
                <HiClock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dental Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}