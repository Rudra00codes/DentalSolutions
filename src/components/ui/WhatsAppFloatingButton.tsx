import { FaWhatsapp } from 'react-icons/fa'

// Minimal floating WhatsApp button for bottom-right corner
// Opens a direct chat with the clinic on WhatsApp
const PHONE_E164 = '919780025988' // +91 9780025988 without the plus and spaces
const PREFILL_MESSAGE = encodeURIComponent(
  "Hello Dental Solutions! I'd like to make an inquiry."
)

export default function WhatsAppFloatingButton() {
  const href = `https://wa.me/${PHONE_E164}?text=${PREFILL_MESSAGE}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] print:hidden"
    >
      <span className="sr-only">Open WhatsApp chat</span>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 border border-white/20 flex items-center justify-center transition-transform duration-200 will-change-transform focus:outline-none">
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
      </div>
    </a>
  )
}
