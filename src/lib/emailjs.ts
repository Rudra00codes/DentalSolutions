import emailjs from '@emailjs/browser'
import { AppointmentData } from '@/types'

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
}

// EmailJS response interface
export interface EmailJSResponse {
  success: boolean
  message: string
  error?: any
}

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  } else {
    console.warn('EmailJS public key not found. Please check your environment variables.')
  }
}

// Validate EmailJS configuration
export const validateEmailJSConfig = (): boolean => {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG
  return !!(serviceId && templateId && publicKey)
}

// Send appointment email with retry mechanism
export const sendAppointmentEmail = async (
  appointmentData: AppointmentData,
  retryCount = 0
): Promise<EmailJSResponse> => {
  const maxRetries = 2

  // Validate configuration
  if (!validateEmailJSConfig()) {
    return {
      success: false,
      message: 'EmailJS configuration is incomplete. Please check your environment variables.',
    }
  }

  // Prepare template parameters
  const templateParams = {
    to_name: 'Dental Solutions Team',
    from_name: appointmentData.name,
    patient_name: appointmentData.name,
    patient_phone: appointmentData.phone,
    patient_email: appointmentData.email,
    appointment_date: appointmentData.date,
    appointment_time: appointmentData.time,
    branch_location: appointmentData.branch,
    additional_message: appointmentData.message || 'No additional message',
    submission_date: new Date().toLocaleDateString(),
    submission_time: new Date().toLocaleTimeString(),
  }

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    return {
      success: true,
      message: 'Appointment request sent successfully! We will contact you soon to confirm your appointment.',
    }
  } catch (error: any) {
    console.error('EmailJS Error:', error)

    // Retry logic for network errors
    if (retryCount < maxRetries && isRetryableError(error)) {
      console.log(`Retrying email send... Attempt ${retryCount + 1}/${maxRetries}`)
      await delay(1000 * (retryCount + 1)) // Exponential backoff
      return sendAppointmentEmail(appointmentData, retryCount + 1)
    }

    // Return user-friendly error message
    return {
      success: false,
      message: getErrorMessage(error),
      error,
    }
  }
}

// Check if error is retryable
const isRetryableError = (error: any): boolean => {
  // Network errors, timeout errors, or temporary service unavailable
  return (
    error.status === 0 || // Network error
    error.status >= 500 || // Server errors
    error.text?.includes('timeout') ||
    error.text?.includes('network')
  )
}

// Get user-friendly error message
const getErrorMessage = (error: any): string => {
  if (error.status === 400) {
    return 'There was an issue with the form data. Please check your information and try again.'
  }
  
  if (error.status === 401 || error.status === 403) {
    return 'Authentication error. Please contact support if this issue persists.'
  }
  
  if (error.status >= 500) {
    return 'Our email service is temporarily unavailable. Please try again in a few minutes or call us directly.'
  }
  
  if (error.status === 0) {
    return 'Network connection error. Please check your internet connection and try again.'
  }
  
  return 'Unable to send appointment request. Please try again or contact us directly at our phone number.'
}

// Utility delay function
const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Generic send email function (keeping for backward compatibility)
export const sendEmail = async (templateParams: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}