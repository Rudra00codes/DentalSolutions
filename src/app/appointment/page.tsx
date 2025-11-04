import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Appointment - Dental Solutions',
  description: 'Schedule your dental appointment online. Quick and easy booking for all dental services.',
}

export default function Appointment() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto container-padding section-padding">
        <div className="text-center">
          <h1 className="mb-6">Book Your Appointment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Coming soon - Online appointment booking system.
          </p>
        </div>
      </div>
    </main>
  )
}