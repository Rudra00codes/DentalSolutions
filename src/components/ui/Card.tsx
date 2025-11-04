import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl shadow-lg overflow-hidden',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}