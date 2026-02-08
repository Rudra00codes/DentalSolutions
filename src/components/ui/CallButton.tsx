import { FaPhone } from 'react-icons/fa'

// Minimal floating call button positioned above WhatsApp
// Initiates a direct phone call to the clinic
const PHONE_NUMBER = '919780025988' // +91 9780025988

export default function CallButton() {
  const href = `tel:+${PHONE_NUMBER}`

  return (
    <a
      href={href}
      aria-label="Call Dental Solutions"
      className="fixed z-50 right-[max(1rem,env(safe-area-inset-right))] bottom-[calc(max(1rem,env(safe-area-inset-bottom))+5rem)] md:bottom-[calc(max(1rem,env(safe-area-inset-bottom))+6rem)] print:hidden"
    >
      <span className="sr-only">Call clinic</span>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-white/20 flex items-center justify-center transition-transform duration-200 will-change-transform focus:outline-none hover:scale-110">
        <FaPhone className="w-7 h-7 md:w-8 md:h-8 rotate-90" aria-hidden="true" />
      </div>
    </a>
  )
}
