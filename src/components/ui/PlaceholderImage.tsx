'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'

interface PlaceholderImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  width?: number
  height?: number
  sizes?: string
}

export default function PlaceholderImage({ 
  src, 
  alt, 
  fill = false, 
  className = '', 
  priority = false,
  width,
  height,
  sizes
}: PlaceholderImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  // Fallback placeholder component
  const PlaceholderDiv = () => (
    <div className={`bg-gradient-to-br from-primary-100 to-blue-200 flex items-center justify-center ${className}`}>
      <div className="text-center text-primary-600">
        <FaUser className="text-6xl md:text-8xl mx-auto mb-4 opacity-50" />
        <p className="text-sm md:text-base font-medium opacity-70">Professional Dental Care</p>
      </div>
    </div>
  )

  if (imageError) {
    return <PlaceholderDiv />
  }

  const imageProps = {
    src,
    alt,
    className,
    priority,
    onError: handleImageError,
    onLoad: handleImageLoad,
    sizes,
    ...(fill ? { fill: true } : { width, height })
  } as any

  return (
    <>
      {imageLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse ${className}`} />
      )}
      <Image {...imageProps} alt={alt} />
    </>
  )
}