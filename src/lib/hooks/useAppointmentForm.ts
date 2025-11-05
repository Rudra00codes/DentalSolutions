'use client'

import { useState, useCallback } from 'react'
import { AppointmentData } from '@/types'
import { sendAppointmentEmail, EmailJSResponse, initEmailJS } from '@/lib/emailjs'

interface UseAppointmentFormState {
  loading: boolean
  success: boolean
  error: string | null
  message: string | null
}

interface UseAppointmentFormReturn extends UseAppointmentFormState {
  submitAppointment: (data: AppointmentData) => Promise<void>
  resetState: () => void
}

export const useAppointmentForm = (): UseAppointmentFormReturn => {
  const [state, setState] = useState<UseAppointmentFormState>({
    loading: false,
    success: false,
    error: null,
    message: null,
  })

  // Initialize EmailJS on first use
  const initializeEmailJS = useCallback(() => {
    try {
      initEmailJS()
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error)
    }
  }, [])

  // Submit appointment form
  const submitAppointment = useCallback(async (data: AppointmentData) => {
    setState({
      loading: true,
      success: false,
      error: null,
      message: null,
    })

    try {
      // Initialize EmailJS if not already done
      initializeEmailJS()

      // Send appointment email
      const result: EmailJSResponse = await sendAppointmentEmail(data)

      if (result.success) {
        setState({
          loading: false,
          success: true,
          error: null,
          message: result.message,
        })
      } else {
        setState({
          loading: false,
          success: false,
          error: result.message,
          message: null,
        })
      }
    } catch (error) {
      console.error('Unexpected error during form submission:', error)
      setState({
        loading: false,
        success: false,
        error: 'An unexpected error occurred. Please try again or contact us directly.',
        message: null,
      })
    }
  }, [initializeEmailJS])

  // Reset form state
  const resetState = useCallback(() => {
    setState({
      loading: false,
      success: false,
      error: null,
      message: null,
    })
  }, [])

  return {
    ...state,
    submitAppointment,
    resetState,
  }
}