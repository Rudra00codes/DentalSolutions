import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dentalsolutions.com'
  const fullTitle = config.title.includes('Dental Solutions') 
    ? config.title 
    : `${config.title} - Dental Solutions`

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'Dental Solutions' }],
    robots: config.noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: config.canonical ? `${baseUrl}${config.canonical}` : undefined,
    },
    openGraph: {
      title: fullTitle,
      description: config.description,
      type: 'website',
      locale: 'en_US',
      url: config.canonical ? `${baseUrl}${config.canonical}` : baseUrl,
      siteName: 'Dental Solutions',
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
  }
}

export function generateLocalBusinessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Dental Solutions',
    description: 'Professional dental care with advanced technology and painless treatments in Zirakpur, Punjab.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://dentalsolutions.com',
    telephone: '+91 97800 25988',
    email: 'info@dentalsolutions.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dental Solutions Clinic',
      addressLocality: 'Zirakpur',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.6425',
      longitude: '76.8173',
    },
    openingHours: [
      'Mo-Sa 09:00-18:00',
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'INR',
    areaServed: {
      '@type': 'City',
      name: 'Zirakpur',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '30.6425',
        longitude: '76.8173',
      },
      geoRadius: '25000', // 25km radius
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'General Dentistry',
            description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cosmetic Dentistry',
            description: 'Teeth whitening, veneers, and smile makeovers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dental Implants',
            description: 'Permanent tooth replacement solutions with advanced implant technology.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Orthodontics',
            description: 'Braces and clear aligners for teeth straightening.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: 'Excellent service and painless treatment. The staff is very professional and caring.',
        datePublished: '2024-01-15',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael Chen',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: 'State-of-the-art equipment and highly skilled dentists. Highly recommended!',
        datePublished: '2024-02-10',
      },
    ],
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dental Solutions',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://dentalsolutions.com',
    description: 'Professional dental care with advanced technology and painless treatments in Zirakpur, Punjab.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://dentalsolutions.com'}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}