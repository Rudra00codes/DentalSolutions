'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

interface BounceCardsProps {
  className?: string
  images?: string[]
  containerWidth?: number
  containerHeight?: number
  animationDelay?: number
  animationStagger?: number
  easeType?: string
  transformStyles?: string[]
  enableHover?: boolean
  stackOnMobile?: boolean
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth,
  containerHeight,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true,
  stackOnMobile = true
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      '.bounce-card',
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    )
  }, [animationDelay, animationStagger, easeType])

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr)
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)')
    } else if (transformStr === 'none') {
      return 'rotate(0deg)'
    } else {
      return `${transformStr} rotate(0deg)`
    }
  }

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/
    const match = baseTransform.match(translateRegex)
    if (match) {
      const currentX = parseFloat(match[1])
      const newX = currentX + offsetX
      return baseTransform.replace(translateRegex, `translate(${newX}px)`)
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`
    }
  }

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return

    images.forEach((_, i) => {
      const selector = `.bounce-card-${i}`
      gsap.killTweensOf(selector)

      const baseTransform = transformStyles[i] || 'none'

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform)
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        })
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160
        const pushedTransform = getPushedTransform(baseTransform, offsetX)

        const distance = Math.abs(hoveredIdx - i)
        const delay = distance * 0.05

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        })
      }
    })
  }

  const resetSiblings = () => {
    if (!enableHover) return

    images.forEach((_, i) => {
      const selector = `.bounce-card-${i}`
      gsap.killTweensOf(selector)

      const baseTransform = transformStyles[i] || 'none'
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      })
    })
  }

  const containerStyle: React.CSSProperties = {}
  if (containerWidth) containerStyle.width = containerWidth
  if (containerHeight) containerStyle.height = containerHeight

  return (
    <>
      {/* Mobile: stacked cards to prevent overflow */}
      {stackOnMobile && (
        <div className={`md:hidden w-full ${className}`}>
          <div className="flex flex-col items-center gap-4">
            {images.map((src, idx) => (
              <div
                key={`m-${idx}`}
                className="relative w-full max-w-[340px] h-40 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-md"
              >
                <Image
                  src={src}
                  alt={`Dental Solutions facility ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 340px, 50vw"
                  priority={idx === 1}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop/tablet: animated overlapped cards */}
      <div
        className={`hidden md:flex relative items-center justify-center ${className}`}
        style={containerStyle}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`bounce-card bounce-card-${idx} absolute w-[140px] md:w-[160px] lg:w-[180px] aspect-square border-6 md:border-8 border-white rounded-[24px] md:rounded-[30px] overflow-hidden`}
            style={{
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transform: transformStyles[idx] || 'none'
            }}
            onMouseEnter={() => pushSiblings(idx)}
            onMouseLeave={resetSiblings}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Dental Solutions facility ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 160px, 140px"
                priority={idx === 1}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
