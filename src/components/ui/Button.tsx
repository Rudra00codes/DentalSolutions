'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
  loading?: boolean
  fullWidth?: boolean
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  loading = false,
  fullWidth = false,
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center relative overflow-hidden'
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 shadow-sm hover:shadow-md',
    outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border border-primary-600 hover:border-primary-700',
    ghost: 'bg-transparent hover:bg-primary-50 text-primary-600 hover:text-primary-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
  }
  
  const sizes = {
    sm: 'py-2 px-4 text-sm min-h-[36px]',
    md: 'py-3 px-6 text-base min-h-[44px]',
    lg: 'py-4 px-8 text-lg min-h-[52px]',
    xl: 'py-5 px-10 text-xl min-h-[60px]'
  }
  
  return (
    <motion.button 
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={cn(
        baseClasses, 
        variants[variant], 
        sizes[size], 
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...(props as any)}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </motion.button>
  )
}