'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AppointmentForm } from '@/components/forms'
import { useAppointmentForm } from '@/lib/hooks'
import Button from '@/components/ui/Button'
import { FiCheckCircle, FiXCircle, FiPhone, FiMail } from 'react-icons/fi'

export default function AppointmentFormWrapper() {
  const { loading, success, error, message, submitAppointment, resetState } = useAppointmentForm()
  const [showForm, setShowForm] = useState(true)

  const handleSubmit = async (data: any) => {
    await submitAppointment(data)
  }

  const handleTryAgain = () => {
    resetState()
    setShowForm(true)
  }

  const handleBookAnother = () => {
    resetState()
    setShowForm(true)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {showForm && !success && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AppointmentForm onSubmit={handleSubmit} loading={loading} />
            
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-start">
                  <FiXCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800 mb-1">
                      Booking Failed
                    </h3>
                    <p className="text-sm text-red-700">{error}</p>
                    <div className="mt-3 flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleTryAgain}
                        className="border-red-300 text-red-700 hover:bg-red-50"
                      >
                        Try Again
                      </Button>
                      <div className="flex items-center gap-4 text-sm text-red-600">
                        <a
                          href="tel:+91-XXXXXXXXXX"
                          className="flex items-center gap-1 hover:text-red-800 transition-colors"
                        >
                          <FiPhone className="w-4 h-4" />
                          Call Us
                        </a>
                        <a
                          href="mailto:info@dentalsolutions.com"
                          className="flex items-center gap-1 hover:text-red-800 transition-colors"
                        >
                          <FiMail className="w-4 h-4" />
                          Email Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {success && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="text-center py-12"
          >
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FiCheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                Appointment Request Sent!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-6 max-w-md mx-auto"
              >
                {message}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Our team will review your appointment request</li>
                  <li>• We&apos;ll call you within 24 hours to confirm the appointment</li>
                  <li>• You&apos;ll receive a confirmation with appointment details</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="primary"
                  onClick={handleBookAnother}
                >
                  Book Another Appointment
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/'}
                >
                  Back to Home
                </Button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Need immediate assistance?</p>
                <div className="flex justify-center gap-6">
                  <a
                    href="tel:+91-XXXXXXXXXX"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <FiPhone className="w-4 h-4" />
                    <span className="text-sm font-medium">Call Us</span>
                  </a>
                  <a
                    href="mailto:info@dentalsolutions.com"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <FiMail className="w-4 h-4" />
                    <span className="text-sm font-medium">Email Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}