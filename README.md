# Dental Solutions Website

A modern, responsive website for Dental Solutions clinic in Zirakpur, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🦷 Professional dental clinic website
- 📱 Fully responsive design (optimized for mobile and desktop)
- ⚡ Built with Next.js 14 and App Router
- 🎨 Styled with Tailwind CSS
- 📧 Online appointment booking with EmailJS integration
- � AdOvanced date picker with business hours validation
- 🕐 Interactive time picker with scrollable columns (MUI)
- ✅ Real-time form validation with instant feedback
- 🔍 SEO optimized with structured data
- ♿ Accessibility compliant (ARIA labels, keyboard navigation)
- 📊 Google Ads conversion tracking
- 💬 WhatsApp floating button for instant contact
- 🎯 Business hours enforcement (Mon-Sat: 10 AM-10 PM, Sun: 10 AM-8 PM)

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Material-UI (MUI) Date Pickers
- **Animations:** Framer Motion, GSAP
- **Icons:** React Icons
- **Forms:** EmailJS
- **Date/Time:** Flatpickr, Day.js, MUI Date Pickers
- **Analytics:** Google Ads (gtag.js)
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rudra00codes/DentalSolutions.git
   cd DentalSolutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

4. Configure EmailJS in `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Google Ads tracking
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── appointment/       # Appointment booking page
│   └── contact/           # Contact page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── DatePicker.tsx # Custom date picker with Flatpickr
│   │   ├── TimePicker.tsx # MUI-based time picker with business hours
│   │   ├── Button.tsx     # Reusable button component
│   │   ├── Header.tsx     # Site header/navigation
│   │   ├── Footer.tsx     # Site footer
│   │   └── ...
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   └── forms/             # Form components
│       ├── AppointmentForm.tsx        # Main appointment form
│       └── AppointmentFormWrapper.tsx # Form state management
├── lib/
│   ├── hooks/             # Custom React hooks
│   │   └── useAppointmentForm.ts
│   ├── seo.ts             # SEO utilities and metadata
│   └── utils.ts           # Helper functions
├── types/                 # TypeScript type definitions
│   └── index.ts
└── public/                # Static assets
    ├── assets/            # Images, icons, fonts
    └── ...
```

## Key Components

### Appointment Form
- **Real-time validation** with instant error feedback
- **Date Picker** with mobile-friendly format (dd/mm/yyyy)
- **Time Picker** with scrollable columns for hours, minutes, and AM/PM
- **Business hours validation** - automatically restricts time selection based on:
  - Monday-Saturday: 10:00 AM - 10:00 PM
  - Sunday: 10:00 AM - 8:00 PM
- **Branch selection** (Zirakpur/Baltana)
- **EmailJS integration** for appointment notifications

### Form Validation Features
- Immediate validation on input change
- Proper state management to prevent race conditions
- Mobile-optimized validation (fixes persistent error messages)
- Business hours enforcement based on selected date
- Honeypot field for spam prevention

## Recent Updates

### v1.2.0 (Latest)
- ✨ Replaced TimePicker with MUI StaticTimePicker featuring scrollable columns
- 🐛 Fixed date/time validation race condition on mobile viewports
- 🎨 Improved DatePicker display format for better mobile UX
- 🔧 Added business hours validation and enforcement
- 📊 Integrated Google Ads conversion tracking (AW-17732836414)
- 🧹 Removed unused imports and optimized layout

### v1.1.0
- 📧 Updated business hours (Mon-Sat: 10 AM-10 PM, Sun: 10 AM-8 PM)
- 🏷️ Added Google Tag Manager integration
- 🎯 Enhanced form validation with immediate feedback

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Required environment variables for EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a private project for Dental Solutions clinic. For any issues or suggestions, please contact the development team.

## License

Private project for Dental Solutions clinic.