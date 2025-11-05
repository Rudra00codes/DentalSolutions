import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/ui'
import { generateMetadata, generateLocalBusinessStructuredData, generateWebsiteStructuredData } from '@/lib/seo'
import WebVitals from '@/components/WebVitals'
import PageTransition from '@/components/ui/PageTransition'

import ScrollToTop from '@/components/ui/ScrollToTop'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateMetadata({
  title: 'Dental Solutions - Professional Dental Care in Zirakpur',
  description: 'Expert dental care with advanced technology and painless treatments. Book your appointment today at Dental Solutions, Zirakpur.',
  keywords: 'dental clinic, dentist, Zirakpur, dental care, teeth cleaning, dental implants, painless dentistry, advanced dental technology',
  canonical: '/',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessData = generateLocalBusinessStructuredData()
  const websiteData = generateWebsiteStructuredData()

  return (
    <html lang="en">
      <head>
        {/* Font Preloading for Performance */}
        <link
          rel="preload"
          href="/InstrumentSerif_Font/instrumentserif-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/InstrumentSerif_Font/instrumentserif-italic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Prevent header layout shift and optimize loading */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .header-loading { 
              opacity: 1 !important; 
              transform: translateY(0) !important; 
              visibility: visible !important;
            }
            body { margin: 0; padding: 0; }
            /* Critical header styles for immediate rendering */
            header { 
              position: fixed; 
              top: 0.5rem; 
              left: 0.5rem; 
              right: 0.5rem; 
              z-index: 50; 
              opacity: 1;
            }
            @media (min-width: 640px) {
              header { top: 1rem; left: 1rem; right: 1rem; }
            }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData),
          }}
        />
      </head>
      <body className={inter.className}>
        <WebVitals />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}