'use client'

import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  animation?: 'bounce' | 'scale' | 'slide' | 'glow' | 'ripple'
  loading?: boolean
}

export default function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  animation = 'scale',
  loading = false,
  className,
  disabled,
  ...props
}: AnimatedButtonProps) {
  const baseClasses = 'relative overflow-hidden font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const getAnimationVariants = () => {
    switch (animation) {
      case 'bounce':
        return {
          hover: { scale: 1.05, y: -2 },
          tap: { scale: 0.95, y: 0 },
        }
      case 'scale':
        return {
          hover: { scale: 1.05 },
          tap: { scale: 0.95 },
        }
      case 'slide':
        return {
          hover: { x: 2, y: -2 },
          tap: { x: 0, y: 0 },
        }
      case 'glow':
        return {
          hover: { 
            scale: 1.02,
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          },
          tap: { scale: 0.98 },
        }
      case 'ripple':
      default:
        return {
          hover: { scale: 1.02 },
          tap: { scale: 0.98 },
        }
    }
  }

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.5 },
    animate: { 
      scale: 4, 
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  }

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      variants={getAnimationVariants()}
      whileHover={!disabled && !loading ? 'hover' : undefined}
      whileTap={!disabled && !loading ? 'tap' : undefined}
      disabled={disabled || loading}
      {...props}
    >
      {/* Ripple effect for ripple animation */}
      {animation === 'ripple' && (
        <motion.span
          className="absolute inset-0 bg-white rounded-lg"
          variants={rippleVariants}
          initial="initial"
          whileTap="animate"
        />
      )}

      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}

      {/* Button content */}
      <motion.span
        className={cn('relative z-10', loading && 'opacity-0')}
        layout
      >
        {children}
      </motion.span>
    </motion.button>
  )
}