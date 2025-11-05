'use client'

import { motion } from 'framer-motion'

interface LoadingAnimationProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'wave'
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export default function LoadingAnimation({
  type = 'spinner',
  size = 'md',
  color = 'text-primary-600',
}: LoadingAnimationProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const dotSizes = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  }

  if (type === 'spinner') {
    return (
      <motion.div
        className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full ${color}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    )
  }

  if (type === 'dots') {
    return (
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${dotSizes[size]} ${color} bg-current rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    )
  }

  if (type === 'pulse') {
    return (
      <motion.div
        className={`${sizeClasses[size]} ${color} bg-current rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    )
  }

  if (type === 'wave') {
    return (
      <div className="flex items-end space-x-1">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={`w-1 ${color} bg-current rounded-full`}
            animate={{
              height: ['8px', '24px', '8px'],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    )
  }

  return null
}