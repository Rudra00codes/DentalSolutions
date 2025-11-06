// Appointment form data interface
export interface AppointmentData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  branch: 'Zirakpur' | 'Baltana'
  message?: string
}

// Team member interface
export interface TeamMember {
  id: string
  name: string
  title: string
  specialization: string
  image: string
  credentials: string[]
}

// Service interface
export interface Service {
  id: string
  name: string
  description: string
  image: string
  category: string
}

// Testimonial interface
export interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
  date: string
}

// Navigation item interface
export interface NavItem {
  name: string
  href: string
  current?: boolean
}