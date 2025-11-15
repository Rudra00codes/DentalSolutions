'use client'

import { useState, useEffect } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker'
import dayjs, { Dayjs } from 'dayjs'
import { cn } from '@/lib/utils'
import { createPortal } from 'react-dom'

interface TimePickerProps {
  id?: string
  value?: string
  onChange?: (time: string) => void
  onBlur?: () => void
  placeholder?: string
  disabled?: boolean
  className?: string
  error?: boolean
  selectedDate?: string
  'aria-required'?: boolean
  'aria-invalid'?: boolean
  'aria-describedby'?: string
}

export default function TimePicker({
  id,
  value = '',
  onChange,
  onBlur,
  placeholder = 'hh:mm aa',
  disabled = false,
  className,
  error = false,
  selectedDate,
  ...ariaProps
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(
    value ? dayjs(`2000-01-01 ${value}`) : null
  )
  const [tempTime, setTempTime] = useState<Dayjs | null>(null)
  const [mounted, setMounted] = useState(false)
  const [validationError, setValidationError] = useState<string>('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const getBusinessHours = () => {
    if (!selectedDate) {
      return { start: 10, end: 22, label: 'Mon-Sat: 10:00 AM - 10:00 PM' }
    }

    const date = new Date(selectedDate)
    const dayOfWeek = date.getDay()

    if (dayOfWeek === 0) {
      return { start: 10, end: 20, label: 'Sunday: 10:00 AM - 8:00 PM' }
    } else {
      return { start: 10, end: 22, label: 'Mon-Sat: 10:00 AM - 10:00 PM' }
    }
  }

  const businessHours = getBusinessHours()

  useEffect(() => {
    if (value) {
      setSelectedTime(dayjs(`2000-01-01 ${value}`))
    } else {
      setSelectedTime(null)
    }
  }, [value])

  const handleInputClick = () => {
    if (!disabled) {
      setTempTime(selectedTime || dayjs().hour(businessHours.start).minute(0))
      setValidationError('')
      setIsOpen(true)
    }
  }

  const handleTimeChange = (newTime: Dayjs | null) => {
    if (newTime && newTime.isValid()) {
      setTempTime(newTime)
      setValidationError('')
    }
  }

  const handleAccept = () => {
    if (tempTime && tempTime.isValid()) {
      const hour = tempTime.hour()

      if (hour < businessHours.start || hour >= businessHours.end) {
        setValidationError(
          `Please select a time within business hours: ${businessHours.label}`
        )
        return
      }

      setSelectedTime(tempTime)
      if (onChange) {
        const formattedTime = tempTime.format('HH:mm')
        onChange(formattedTime)
      }
      setIsOpen(false)
      if (onBlur) onBlur()
    }
  }

  const handleCancel = () => {
    setValidationError('')
    setIsOpen(false)
    if (onBlur) onBlur()
  }

  const shouldDisableTime = (value: Dayjs, view: 'hours' | 'minutes' | 'seconds') => {
    if (view === 'hours') {
      const hour = value.hour()
      return hour < businessHours.start || hour >= businessHours.end
    }
    return false
  }

  const displayValue = selectedTime ? selectedTime.format('hh:mm A') : ''

  const modalContent = isOpen && mounted ? createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Select Time
          </h3>
          
          <p className="text-sm text-gray-600 mb-4">
            {businessHours.label}
          </p>
          
          {validationError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{validationError}</p>
            </div>
          )}
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticTimePicker
              value={tempTime}
              onChange={handleTimeChange}
              ampm={true}
              minutesStep={5}
              shouldDisableTime={shouldDisableTime}
              orientation="portrait"
              slotProps={{
                actionBar: {
                  actions: [],
                },
              }}
              sx={{
                '& .MuiPickersLayout-root': {
                  backgroundColor: 'transparent',
                },
                '& .MuiPickersLayout-contentWrapper': {
                  backgroundColor: 'transparent',
                },
                '& .MuiMultiSectionDigitalClock-root': {
                  maxHeight: '300px',
                },
                '& .MuiMenuItem-root': {
                  fontSize: '1rem',
                  padding: '12px 16px',
                },
                '& .MuiMenuItem-root.Mui-selected': {
                  backgroundColor: '#60a5fa',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#3b82f6',
                  },
                },
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: '#f3f4f6',
                },
              }}
            />
          </LocalizationProvider>

          <div className="flex justify-end gap-4 mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={handleCancel}
              className="px-6 py-2 text-blue-500 font-medium uppercase tracking-wide hover:bg-blue-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-blue-500 font-medium uppercase tracking-wide hover:bg-blue-50 rounded-lg transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null

  return (
    <>
      <div className="relative">
        <input
          id={id}
          type="text"
          value={displayValue}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          onClick={handleInputClick}
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
      
      {modalContent}
    </>
  )
}