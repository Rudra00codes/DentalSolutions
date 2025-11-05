'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { reportWebVitals } from '@/lib/performance'

export default function WebVitals() {
  useReportWebVitals(reportWebVitals)
  return null
}