# Dental Solutions Website

A modern, responsive website for Dental Solutions clinic in Zirakpur, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🦷 Professional dental clinic website
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and App Router
- 🎨 Styled with Tailwind CSS
- 📧 Online appointment booking with EmailJS
- 🔍 SEO optimized
- ♿ Accessibility compliant

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Forms:** EmailJS
- **Deployment:** Vercel (recommended)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

4. Configure EmailJS in `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable components
│   ├── ui/             # Basic UI components
│   ├── sections/       # Page sections
│   └── forms/          # Form components
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project for Dental Solutions clinic.