import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Dental Solutions',
  description: 'Learn about our experienced dental team and state-of-the-art facility in Zirakpur.',
}

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto container-padding section-padding">
        <div className="text-center">
          <h1 className="mb-6">About Dental Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Coming soon - Learn about our experienced team and modern facility.
          </p>
        </div>
      </div>
    </main>
  )
}