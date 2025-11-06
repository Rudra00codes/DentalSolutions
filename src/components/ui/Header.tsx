'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import Button from './Button'
import Logo from './Logo'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', type: 'page' },
  { name: 'About', href: '/about', type: 'page' },
  { name: 'Services', href: '/#services', type: 'section' },
  { name: 'Contact', href: '/#contact', type: 'section' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [callDropdownOpen, setCallDropdownOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (callDropdownOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('.call-dropdown')) {
          setCallDropdownOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callDropdownOpen])

  // Handle initial scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash
    if (hash && pathname === '/') {
      const sectionId = hash.substring(1) // Remove the '#'
      // Delay to ensure page is fully loaded
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset for floating header - accounting for header height + padding
      const headerOffset = 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (item: typeof navigation[0], e: React.MouseEvent) => {
    if (item.type === 'section') {
      e.preventDefault()
      
      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        window.location.href = item.href
        return
      }
      
      // Extract section ID from href (e.g., '/#services' -> 'services')
      const sectionId = item.href.split('#')[1]
      scrollToSection(sectionId)
      
      // Close mobile menu if open
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header 
      initial={{ opacity: 0.8, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="header-loading fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-50"
    >
      <nav className="header-nav mx-auto max-w-7xl bg-white/60 backdrop-blur-md shadow-xl border border-gray-200/50 rounded-3xl px-4 sm:px-6 lg:px-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo size="md" showText={true} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                    pathname === item.href
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Call Us Dropdown */}
            <div className="relative call-dropdown">
              <button
                onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors focus:outline-none"
              >
                <HiPhone className="h-5 w-5 mr-2" />
                <span className="font-medium">Call Us</span>
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    callDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {callDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                  >
                    <Link
                      href="tel:+919780025988"
                      onClick={() => setCallDropdownOpen(false)}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                    >
                      <HiPhone className="h-4 w-4 mr-3 text-primary-600" />
                      <div>
                        <div className="font-medium">Dental Solutions</div>
                        <div className="text-sm text-gray-500">+91 97800 25988</div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/appointment">
              <Button variant="primary" size="sm">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200/50 rounded-b-3xl">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className={cn(
                      'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                      pathname === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 pb-2 space-y-2">
                  {/* Mobile Call Numbers */}
                  <div className="px-3">
                    <div className="text-sm font-medium text-gray-700 mb-2">Call Us:</div>
                    <Link 
                      href="tel:+919780025988" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center px-3 py-2 text-primary-600 hover:text-primary-700 transition-colors bg-gray-50 rounded-lg mb-4"
                    >
                      <HiPhone className="h-4 w-4 mr-3" />
                      <div>
                        <div className="font-medium">Dental Solutions</div>
                        <div className="text-sm text-gray-500">+91 97800 25988</div>
                      </div>
                    </Link>
                  </div>
                  <div className="px-3">
                    <Link href="/appointment" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="primary" size="md" className="w-full">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}