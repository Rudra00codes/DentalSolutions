import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dental Solutions - Professional Dental Care in Zirakpur',
  description: 'Expert dental care with advanced technology and painless treatments. Book your appointment today at Dental Solutions, Zirakpur.',
  keywords: 'dental clinic, dentist, Zirakpur, dental care, teeth cleaning, dental implants',
  authors: [{ name: 'Dental Solutions' }],
  openGraph: {
    title: 'Dental Solutions - Professional Dental Care',
    description: 'Expert dental care with advanced technology and painless treatments.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}