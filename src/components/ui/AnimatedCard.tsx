'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: 'lift' | 'glow' | 'tilt' | 'scale' | 'none'
  clickable?: boolean
  onClick?: () => void
}

export default function AnimatedCard({
  children,
  className,
  hoverEffect = 'lift',
  clickable = false,
  onClick,
}: AnimatedCardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300'

  const getHoverVariants = () => {
    switch (hoverEffect) {
      case 'lift':
        return {
          hover: {
            y: -8,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            transition: { duration: 0.3, ease: 'easeOut' },
          },
        }
      case 'glow':
        return {
          hover: {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
            scale: 1.02,
            transition: { duration: 0.3, ease: 'easeOut' },
          },
        }
      case 'tilt':
        return {
          hover: {
            rotateY: 5,
            rotateX: 5,
            scale: 1.05,
            transition: { duration: 0.3, ease: 'easeOut' },
          },
        }
      case 'scale':
        return {
          hover: {
            scale: 1.05,
            transition: { duration: 0.3, ease: 'easeOut' },
          },
        }
      case 'none':
      default:
        return {}
    }
  }

  const tapVariants = clickable
    ? {
        tap: {
          scale: 0.98,
          transition: { duration: 0.1 },
        },
      }
    : {}

  return (
    <motion.div
      className={cn(
        baseClasses,
        clickable && 'cursor-pointer',
        className
      )}
      variants={{ ...getHoverVariants(), ...tapVariants }}
      whileHover={hoverEffect !== 'none' ? 'hover' : undefined}
      whileTap={clickable ? 'tap' : undefined}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}