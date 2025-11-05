'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaTooth } from 'react-icons/fa'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const [imageError, setImageError] = useState(false)

  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-lg' },
    md: { container: 'w-10 h-10 lg:w-12 lg:h-12', text: 'text-xl lg:text-2xl' },
    lg: { container: 'w-16 h-16', text: 'text-3xl' }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  // Fallback logo component
  const FallbackLogo = () => (
    <div className={`${sizes[size].container} bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg`}>
      <FaTooth className="text-white text-lg" />
    </div>
  )

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image or Fallback */}
      {imageError ? (
        <FallbackLogo />
      ) : (
        <div className={`relative ${sizes[size].container}`}>
          <Image
            src="/assets/icons/Logo.svg"
            alt="Dental Solutions Logo"
            fill
            className="object-contain"
            priority
            onError={handleImageError}
          />
        </div>
      )}
      
      {/* Brand Text */}
      {showText && (
        <div className={`${sizes[size].text} font-bold text-gray-900`}>
          Dental Solutions
          <div className="text-xs lg:text-sm font-normal text-primary-600">
            Zirakpur
          </div>
        </div>
      )}
    </div>
  )
}