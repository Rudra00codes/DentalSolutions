'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AppointmentData } from '@/types'
import Button from '@/components/ui/Button'
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

  // Generate time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ]

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
          disabled={loading}
        />
        {errors.name && touched.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
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
          disabled={loading}
        />
        {errors.phone && touched.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
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
          disabled={loading}
        />
        {errors.email && touched.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Date and Time Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Field */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            onBlur={() => handleBlur('date')}
            min={getMinDate()}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
              errors.date && touched.date ? 'border-red-500' : 'border-gray-300'
            )}
            disabled={loading}
          />
          {errors.date && touched.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date}</p>
          )}
        </div>

        {/* Time Field */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Time *
          </label>
          <select
            id="time"
            value={formData.time}
            onChange={(e) => handleInputChange('time', e.target.value)}
            onBlur={() => handleBlur('time')}
            className={cn(
              'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors',
              errors.time && touched.time ? 'border-red-500' : 'border-gray-300'
            )}
            disabled={loading}
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && touched.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time}</p>
          )}
        </div>
      </div>

      {/* Branch Selection */}
      <div>
        <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
          Branch Location *
        </label>
        <select
          id="branch"
          value={formData.branch}
          onChange={(e) => handleInputChange('branch', e.target.value as 'Zirakpur' | 'Other')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          disabled={loading}
        >
          <option value="Zirakpur">Zirakpur</option>
          <option value="Other">Other</option>
        </select>
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
          disabled={loading}
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