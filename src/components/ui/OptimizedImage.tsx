'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useIntersectionObserver } from '@/lib/performance'

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  width?: number
  height?: number
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
}

export default function OptimizedImage({
  src,
  alt,
  fill = false,
  className = '',
  priority = false,
  width,
  height,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
  })

  const shouldLoad = priority || hasIntersected

  const handleLoad = () => {
    setImageLoaded(true)
  }

  const handleError = () => {
    setImageError(true)
  }

  if (imageError) {
    return (
      <div 
        ref={ref}
        className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}
      >
        <div className="text-gray-400 text-center">
          <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
      
      {shouldLoad && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes || (fill ? '100vw' : undefined)}
          className={`transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${fill ? 'object-cover' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
}