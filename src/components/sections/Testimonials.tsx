"use client"

import { useRef } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
  source?: 'google'
  timeAgo?: string
  reviewerMeta?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Karandeep Kaur',
    rating: 5,
    timeAgo: 'a month ago',
    reviewerMeta: '3 reviews · 1 photo',
    source: 'google',
    review:
      "Best dental clinic in Zirakpur Chandigarh area. I was very afraid of the treatment got my wisdom tooth removal done from here and this is my second visit. Dr Ritika & Dr Harsh Kohli explained me the gum problem properly and resolved it within 3 days. Big thanks to them, highly recommended for all dental procedures.",
  },
  {
    id: '2',
    name: 'Dhruv Kumar',
    rating: 5,
    timeAgo: '3 months ago',
    reviewerMeta: '1 review · 1 photo',
    source: 'google',
    review:
      "Got one dental implant experience is fantastic. Dr Kohli and team is very knowledgeable and deals very politely. I am very much satisfied and recommend every one to visit this place at least once before going any other dental clinic. Dental Solutions is the best dental clinic in Zirakpur.",
  },
  {
    id: '3',
    name: 'Akshit Sharma',
    rating: 5,
    review:
      "I recently visited Dental Solutions for a dental check-up and cleaning, and I couldn't be more impressed. If you're looking for a reliable and experienced dentist near me, I highly recommend this clinic in VIP road Zirakpur. They truly provide top-quality dental care.",
  },
  {
    id: '4',
    name: 'Rudra Pratap Singh',
    rating: 5,
    review:
      "Absolutely delighted with my experience at Dental Solutions on VIP Road, Zirakpur! My implant looks and feels completely natural. Highly recommend this clinic for anyone considering implants in Zirakpur!",
  },
]

// Google "G" SVG icon
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
)

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
                className="min-w-[300px] md:min-w-[360px] lg:min-w-[420px] snap-start bg-blue-100/70 border border-blue-200 rounded-2xl p-5 flex flex-col gap-3"
                aria-label={`Testimonial by ${t.name}`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {/* Avatar initial */}
                    <div className="w-9 h-9 rounded-full bg-primary-600 text-white text-sm font-bold grid place-items-center shrink-0">
                      {t.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight">{t.name}</h3>
                      {t.reviewerMeta && (
                        <p className="text-xs text-gray-500 mt-0.5">{t.reviewerMeta}</p>
                      )}
                    </div>
                  </div>
                  {t.source === 'google' && (
                    <div className="shrink-0 mt-0.5" title="Google Review">
                      <GoogleIcon />
                    </div>
                  )}
                </div>

                {/* Stars + time */}
                <div className="flex items-center gap-2">
                  {renderStars(t.rating)}
                  {t.timeAgo && (
                    <span className="text-xs text-gray-500">{t.timeAgo}</span>
                  )}
                </div>

                <p className="text-sm leading-6 text-gray-700">{t.review}</p>
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