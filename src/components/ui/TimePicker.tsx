'use client'

import { useEffect, useRef } from 'react'
import flatpickr from 'flatpickr'
import { Instance } from 'flatpickr/dist/types/instance'
import { cn } from '@/lib/utils'

interface TimePickerProps {
  id?: string
  value?: string
  onChange?: (time: string) => void
  onBlur?: () => void
  placeholder?: string
  disabled?: boolean
  className?: string
  error?: boolean
  'aria-required'?: boolean
  'aria-invalid'?: boolean
  'aria-describedby'?: string
}

export default function TimePicker({
  id,
  value = '',
  onChange,
  onBlur,
  placeholder = 'HH:MM',
  disabled = false,
  className,
  error = false,
  ...ariaProps
}: TimePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const flatpickrRef = useRef<Instance | null>(null)

  useEffect(() => {
    if (!inputRef.current) return

    // Initialize Flatpickr for time picking
    flatpickrRef.current = flatpickr(inputRef.current, {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true, // Use 24-hour format (09:00, 14:30, etc.)
      minuteIncrement: 30, // 30-minute intervals to match original slots
      allowInput: false,
      clickOpens: true,
      defaultHour: 9, // Default to 9 AM
      defaultMinute: 0, // Default to :00
      onChange: (selectedDates, dateStr) => {
        if (onChange && dateStr) {
          onChange(dateStr)
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
  }, [onChange, onBlur, value])

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  )
}