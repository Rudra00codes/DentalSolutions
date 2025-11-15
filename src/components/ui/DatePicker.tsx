'use client'

import { useEffect, useRef } from 'react'
import flatpickr from 'flatpickr'
import { Instance } from 'flatpickr/dist/types/instance'
import { cn } from '@/lib/utils'

interface DatePickerProps {
  id?: string
  value?: string
  onChange?: (date: string) => void
  onBlur?: () => void
  placeholder?: string
  disabled?: boolean
  className?: string
  minDate?: string
  error?: boolean
  'aria-required'?: boolean
  'aria-invalid'?: boolean
  'aria-describedby'?: string
}

export default function DatePicker({
  id,
  value = '',
  onChange,
  onBlur,
  placeholder = 'Select a date',
  disabled = false,
  className,
  minDate,
  error = false,
  ...ariaProps
}: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const flatpickrRef = useRef<Instance | null>(null)

  useEffect(() => {
    if (!inputRef.current) return

    // Initialize Flatpickr
    flatpickrRef.current = flatpickr(inputRef.current, {
      dateFormat: 'd/m/Y', // Display format for better mobile UX
      altInput: true, // Use alternate input for display
      altFormat: 'd/m/Y', // Alternate display format
      minDate: minDate || 'today',
      allowInput: false,
      clickOpens: true,
      onChange: (selectedDates) => {
        if (selectedDates.length > 0 && onChange) {
          const formattedDate = selectedDates[0].toISOString().split('T')[0]
          onChange(formattedDate)
        }
      },
      onClose: () => {
        if (onBlur) onBlur()
      },
    })

    // Set initial value if provided
    if (value) {
      flatpickrRef.current.setDate(value, false)
    }

    // Cleanup function
    return () => {
      if (flatpickrRef.current) {
        flatpickrRef.current.destroy()
      }
    }
  }, [minDate, onChange, onBlur, value])

  // Update value when prop changes
  useEffect(() => {
    if (flatpickrRef.current && value !== flatpickrRef.current.input.value) {
      flatpickrRef.current.setDate(value || '', false)
    }
  }, [value])

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        type="text"
        placeholder={placeholder}
        readOnly
        disabled={disabled}
        className={cn(
          'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200',
          'cursor-pointer bg-white',
          'hover:border-primary-400 hover:shadow-sm',
          'disabled:bg-gray-50 disabled:cursor-not-allowed',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...ariaProps}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  )
}