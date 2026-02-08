import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/ui'
import { generateMetadata, generateLocalBusinessStructuredData, generateWebsiteStructuredData } from '@/lib/seo'
import WebVitals from '@/components/WebVitals'
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton'
import CallButton from '@/components/ui/CallButton'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Script from "next/script";



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
        {/* Mobile Viewport - Critical for mobile performance */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        
        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dental Solutions" />
        
        {/* Performance & Security */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
        {/* Tap highlight on mobile */}
        <meta name="apple-mobile-web-app-capable" content="yes" />


        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/assets/icons/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon_io/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon_io/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/icons/favicon_io/site.webmanifest" />

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
        
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17767460741"
        />

        <Script id="google-ads-tag">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17767460741');
  `}
        </Script>

        <WebVitals />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <CallButton />
          <WhatsAppFloatingButton />
        </div>
      </body>
    </html>
  )
}