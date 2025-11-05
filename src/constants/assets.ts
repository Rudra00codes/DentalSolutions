// Asset path constants for the Dental Solutions website

export const ASSET_PATHS = {
  // Base paths
  IMAGES: '/assets/images',
  ICONS_DIR: '/assets/icons',
  
  // Hero images
  HERO: {
    WOMAN: '/assets/images/hero/hero-woman.jpg',
    BACKGROUND: '/assets/images/hero/hero-background.jpg',
    OFFICE: '/assets/images/hero/hero-dental-office.jpg',
  },
  
  // Service images
  SERVICES: {
    GENERAL: '/assets/images/services/general-dentistry.jpg',
    COSMETIC: '/assets/images/services/cosmetic-dentistry.jpg',
    ORTHODONTICS: '/assets/images/services/orthodontics.jpg',
    ORAL_SURGERY: '/assets/images/services/oral-surgery.jpg',
    PEDIATRIC: '/assets/images/services/pediatric-dentistry.jpg',
    RESTORATIVE: '/assets/images/services/restorative-dentistry.jpg',
  },
  
  // Avatar images
  AVATARS: {
    PRIYA: '/assets/images/avatars/priya.jpg',
    RAJESH: '/assets/images/avatars/rajesh.jpg',
    ANJALI: '/assets/images/avatars/anjali.jpg',
    VIKRAM: '/assets/images/avatars/vikram.jpg',
    MEERA: '/assets/images/avatars/meera.jpg',
    ARJUN: '/assets/images/avatars/arjun.jpg',
  },
  
  // Testimonial images
  TESTIMONIALS: {
    BACKGROUND: '/assets/images/testimonials/testimonial-background.jpg',
    PATIENTS: '/assets/images/testimonials/patient-testimonials.jpg',
  },
  
  // Icons and logos
  ICONS: {
    LOGO: '/assets/icons/logo-dental-solutions.svg',
    FAVICON: '/assets/icons/favicon.ico',
    APPLE_TOUCH: '/assets/icons/apple-touch-icon.png',
  }
} as const

// Helper function to get asset path
export const getAssetPath = (category: keyof typeof ASSET_PATHS, asset?: string): string => {
  if (!asset) {
    return ASSET_PATHS[category] as string
  }
  
  const categoryPaths = ASSET_PATHS[category] as Record<string, string>
  return categoryPaths[asset] || `${ASSET_PATHS.IMAGES}/${category.toLowerCase()}/${asset}`
}

// Type definitions for better TypeScript support
export type AssetCategory = keyof typeof ASSET_PATHS
export type HeroAsset = keyof typeof ASSET_PATHS.HERO
export type ServiceAsset = keyof typeof ASSET_PATHS.SERVICES
export type AvatarAsset = keyof typeof ASSET_PATHS.AVATARS
export type TestimonialAsset = keyof typeof ASSET_PATHS.TESTIMONIALS
export type IconAsset = keyof typeof ASSET_PATHS.ICONS