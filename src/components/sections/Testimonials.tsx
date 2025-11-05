"use client"

import { useRef } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Akshit Sharma',
    rating: 5,
    review:
      "I recently visited Dental Solutions for a dental check-up and cleaning, and I couldn't be more impressed. If you're looking for a reliable and experienced dentist near me, I highly recommend this clinic in VIP road Zirakpur. They truly provide top-quality dental care.",
  },
  {
    id: '2',
    name: 'Rudra Pratap Singh',
    rating: 5,
    review:
      "Absolutely delighted with my experience at Dental Solutions on VIP Road, Zirakpur! My implant looks and feels completely natural. Highly recommend this clinic for anyone considering implants in Zirakpur!",
  },
  {
    id: '3',
    name: 'Akshit Sharma',
    rating: 5,
    review:
      "Absolutely delighted with my experience at Dental Solutions on VIP Road, Zirakpur! My implant looks and feels completely natural. Highly recommend this clinic for anyone considering implants in Zirakpur!",
  },
]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const renderStars = (count: number) => (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={`text-sm ${i < count ? '' : 'text-gray-300'}`} />
      ))}
    </div>
  )

  return (
  <section className="section-padding bg-[#F5F5F5]">
      <div className="container mx-auto container-padding">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Stories Behind Beautiful Smiles
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="min-w-[300px] md:min-w-[360px] lg:min-w-[420px] snap-start bg-blue-100/70 border border-blue-200 rounded-2xl p-5"
                aria-label={`Testimonial by ${t.name}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">{t.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-sm">5.0</span>
                    {renderStars(t.rating)}
                  </div>
                </div>
                <p className="text-sm leading-6 text-gray-700">
                  {t.review}
                </p>
              </article>
            ))}
          </div>

          {/* Controls bottom-right */}
          <div className="mt-4 flex justify-end gap-3">
            <button
              onClick={() => scrollBy(-400)}
              aria-label="Scroll testimonials left"
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-white shadow-sm grid place-items-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scrollBy(400)}
              aria-label="Scroll testimonials right"
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-white shadow-sm grid place-items-center"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}