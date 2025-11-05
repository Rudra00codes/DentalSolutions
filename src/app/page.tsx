import { 
  HeroSection, 
  ServicesGrid, 
  WhyChooseUs, 
  Testimonials, 
  ContactPreview 
} from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Hidden H1 for SEO - Main heading is in HeroSection */}
      <h1 className="sr-only">
        Dental Solutions - Professional Dental Care in Zirakpur | Advanced Technology & Painless Treatments
      </h1>
      <main className="min-h-screen">
        <HeroSection />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <ContactPreview />
      </main>
    </>
  )
}