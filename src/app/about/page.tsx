import type { Metadata } from 'next'
import AboutContent from './AboutContent'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'About Us - Professional Dental Care in Zirakpur',
  description: 'Learn about our experienced dental team, state-of-the-art facility, and commitment to providing exceptional dental care in Zirakpur. Advanced technology meets compassionate care.',
  keywords: 'about dental solutions, dental team Zirakpur, dental clinic facility, experienced dentists, advanced dental technology, painless dentistry, modern dental equipment',
  canonical: '/about',
})

export default function About() {
  return <AboutContent />
}