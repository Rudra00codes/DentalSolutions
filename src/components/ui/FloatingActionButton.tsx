'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { FaPhone, FaWhatsapp, FaCalendarAlt, FaPlus, FaTimes } from 'react-icons/fa'

interface FloatingAction {
  icon: ReactNode
  label: string
  onClick: () => void
  color?: string
}

interface FloatingActionButtonProps {
  actions?: FloatingAction[]
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}

const defaultActions: FloatingAction[] = [
  {
    icon: <FaPhone className="w-5 h-5" />,
    label: 'Call Zirakpur',
    onClick: () => window.open('tel:+917888327471'),
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    icon: <FaWhatsapp className="w-5 h-5" />,
    label: 'WhatsApp',
    onClick: () => window.open('https://wa.me/917888327471'),
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    icon: <FaCalendarAlt className="w-5 h-5" />,
    label: 'Book Appointment',
    onClick: () => window.location.href = '/appointment',
    color: 'bg-primary-600 hover:bg-primary-700',
  },
]

export default function FloatingActionButton({
  actions = defaultActions,
  position = 'bottom-right',
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  }

  const getActionPosition = (index: number) => {
    const spacing = 70
    const isBottom = position.includes('bottom')
    const isRight = position.includes('right')
    
    return {
      y: isBottom ? -(index + 1) * spacing : (index + 1) * spacing,
      x: isRight ? 0 : 0,
    }
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, ...getActionPosition(0) }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  ...getActionPosition(index),
                  transition: { delay: index * 0.1, type: 'spring', stiffness: 300 }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0, 
                  ...getActionPosition(0),
                  transition: { delay: (actions.length - index - 1) * 0.05 }
                }}
                className="flex items-center space-x-3"
              >
                {/* Label */}
                <motion.div
                  className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  {action.label}
                </motion.div>
                
                {/* Action Button */}
                <motion.button
                  className={`w-12 h-12 rounded-full text-white shadow-lg ${
                    action.color || 'bg-primary-600 hover:bg-primary-700'
                  } transition-colors duration-200`}
                  onClick={action.onClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {action.icon}
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <FaPlus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}