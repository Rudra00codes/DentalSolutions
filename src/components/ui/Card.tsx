'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'bordered' | 'elevated' | 'flat'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
}

export default function Card({ 
  children, 
  className, 
  hover = true, 
  variant = 'default',
  padding = 'md',
  onClick 
}: CardProps) {
  const baseClasses = 'bg-white rounded-xl overflow-hidden transition-all duration-300'
  
  const variants = {
    default: 'shadow-lg',
    bordered: 'border border-gray-200 shadow-sm',
    elevated: 'shadow-xl',
    flat: 'shadow-none border border-gray-100'
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const hoverEffects = hover ? {
    default: 'hover:shadow-xl hover:-translate-y-1',
    bordered: 'hover:shadow-md hover:border-primary-200',
    elevated: 'hover:shadow-2xl hover:-translate-y-1',
    flat: 'hover:shadow-sm hover:border-primary-200'
  } : {}

  const Component = onClick ? motion.div : 'div'
  const motionProps = onClick ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: cn(
      baseClasses,
      variants[variant],
      hover && hoverEffects[variant],
      !!onClick && 'cursor-pointer',
      className
    ),
    onClick
  } : {
    className: cn(
      baseClasses,
      variants[variant],
      hover && hoverEffects[variant],
      className
    )
  }

  return (
    <Component {...motionProps}>
      <div className={paddings[padding]}>
        {children}
      </div>
    </Component>
  )
}

// Additional Card sub-components for common patterns
export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('border-b border-gray-100 pb-4 mb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-lg font-semibold text-gray-900', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-sm text-gray-600 mt-1', className)}>
      {children}
    </p>
  )
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('text-gray-700', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('border-t border-gray-100 pt-4 mt-4', className)}>
      {children}
    </div>
  )
}