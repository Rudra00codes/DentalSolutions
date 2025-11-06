'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AppointmentData } from '@/types'
import Button from '@/components/ui/Button'
import DatePicker from '@/components/ui/DatePicker'
import TimePicker from '@/components/ui/TimePicker'
import { cn } from '@/lib/utils'

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  date?: string
  time?: string
  branch?: string
}

interface AppointmentFormProps {
  onSubmit: (data: AppointmentData) => Promise<void>
  loading?: boolean
}

export default function AppointmentForm({ onSubmit, loading = false }: AppointmentFormProps) {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    branch: 'Zirakpur',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  // Simple honeypot to reduce spam bots
  const [botTrap, setBotTrap] = useState<string>('')

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'Name is required'
    if (name.trim().length < 2) return 'Name must be at least 2 characters'
    return undefined
  }

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return 'Phone number is required'
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/
    if (!phoneRegex.test(phone.trim())) return 'Please enter a valid phone number'
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address'
    return undefined
  }

  const validateDate = (date: string): string | undefined => {
    if (!date) return 'Date is required'
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) return 'Please select a future date'
    return undefined
  }

  const validateTime = (time: string): string | undefined => {
    if (!time) return 'Time is required'
    return undefined
  }

  // Handle input changes
  const handleInputChange = (field: keyof AppointmentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  // Handle field blur for validation
  const handleBlur = (field: keyof AppointmentData) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    
    let error: string | undefined
    switch (field) {
      case 'name':
        error = validateName(formData.name)
        break
      case 'phone':
        error = validatePhone(formData.phone)
        break
      case 'email':
        error = validateEmail(formData.email)
        break
      case 'date':
        error = validateDate(formData.date)
        break
      case 'time':
        error = validateTime(formData.time)
        break
    }
    
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
      date: validateDate(formData.date),
      time: validateTime(formData.time)
    }

    setErrors(newErrors)
    setTouched({
      name: true,
      phone: true,
      email: true,
      date: true,
      time: true
    })

    return !Object.values(newErrors).some(error => error !== undefined)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Abort silently if honeypot is filled (likely a bot)
    if (botTrap) return

    try {
      await onSubmit(formData)
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }



  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          className={cn(
            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
            errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
          )}
          placeholder="Enter your full name"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!(errors.name && touched.name)}
          aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
          disabled={loading}
        />
        {errors.name && touched.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          className={cn(
            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
            errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
          )}
          placeholder="Enter your phone number"
          inputMode="tel"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={!!(errors.phone && touched.phone)}
          aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
          disabled={loading}
        />
        {errors.phone && touched.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          className={cn(
            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
            errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
          )}
          placeholder="Enter your email address"
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!(errors.email && touched.email)}
          aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
          disabled={loading}
        />
        {errors.email && touched.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Date and Time Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Field */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            📅 Preferred Date *
          </label>
          <DatePicker
            id="date"
            value={formData.date}
            onChange={(date) => handleInputChange('date', date)}
            onBlur={() => handleBlur('date')}
            minDate={getMinDate()}
            placeholder="Select your preferred date"
            disabled={loading}
            error={!!(errors.date && touched.date)}
            aria-required={true}
            aria-invalid={!!(errors.date && touched.date)}
            aria-describedby={errors.date && touched.date ? 'date-error' : undefined}
          />
          {errors.date && touched.date && (
            <p id="date-error" role="alert" className="mt-1 text-sm text-red-600">{errors.date}</p>
          )}
        </div>

        {/* Time Field */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
            🕐 Preferred Time *
          </label>
          <TimePicker
            id="time"
            value={formData.time}
            onChange={(time) => handleInputChange('time', time)}
            onBlur={() => handleBlur('time')}
            placeholder="Select time (HH:MM)"
            disabled={loading}
            error={!!(errors.time && touched.time)}
            aria-required={true}
            aria-invalid={!!(errors.time && touched.time)}
            aria-describedby={errors.time && touched.time ? 'time-error' : undefined}
          />
          {errors.time && touched.time && (
            <p id="time-error" role="alert" className="mt-1 text-sm text-red-600">{errors.time}</p>
          )}
        </div>
      </div>

      {/* Branch Selection */}
      <div>
        <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
          📍 Branch Location *
        </label>
        <div className="relative">
          <select
            id="branch"
            value={formData.branch}
            onChange={(e) => handleInputChange('branch', e.target.value as 'Zirakpur' | 'Baltana')}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200',
              'appearance-none cursor-pointer bg-white',
              'hover:border-primary-400 hover:shadow-sm',
              'disabled:bg-gray-50 disabled:cursor-not-allowed',
              'border-gray-300'
            )}
            disabled={loading}
          >
            <option value="Zirakpur">Zirakpur</option>
            <option value="Baltana">Baltana</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message Field (Optional) */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Message (Optional)
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
          placeholder="Any specific concerns or requests..."
          autoComplete="off"
          disabled={loading}
        />
      </div>

      {/* Honeypot field (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={botTrap}
          onChange={(e) => setBotTrap(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={loading}
        disabled={loading}
      >
        {loading ? 'Booking Appointment...' : 'Book Appointment'}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        * Required fields. We&apos;ll contact you to confirm your appointment.
      </p>
    </motion.form>
  )
}