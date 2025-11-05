# Assets Directory Structure

This directory contains all static assets for the Dental Solutions website.

## Directory Structure

```
public/assets/
├── icons/
│   ├── Logo.svg                    # Main logo (used in navbar)
│   └── ...                         # Other icons and SVG files
├── images/
│   ├── hero/
│   │   ├── hero-woman.jpg          # Main hero section image
│   │   └── ...                     # Other hero images
│   ├── services/
│   │   ├── general-dentistry.jpg   # Service category images
│   │   ├── cosmetic-dentistry.jpg
│   │   ├── orthodontics.jpg
│   │   ├── oral-surgery.jpg
│   │   ├── pediatric-dentistry.jpg
│   │   ├── restorative-dentistry.jpg
│   │   └── ...                     # Additional service images
│   ├── testimonials/
│   │   ├── avatars/                # Patient avatars/photos
│   │   └── ...                     # Testimonial related images
│   └── ...                         # Other image categories
└── README.md                       # This file
```

## Usage Guidelines

### Icons
- **Logo.svg**: Main brand logo used in the navigation header
- Use SVG format for scalable icons
- Optimize SVGs for web (remove unnecessary metadata)

### Images
- **Hero Images**: High-quality images for the main hero section (recommended: 1200x800px or larger)
- **Service Images**: Professional images representing each dental service (recommended: 600x400px)
- **Testimonial Images**: Patient photos or avatars (recommended: 200x200px, square format)

### File Naming Convention
- Use lowercase with hyphens: `hero-woman.jpg`
- Be descriptive: `cosmetic-dentistry.jpg` instead of `img1.jpg`
- Include category in path: `/assets/images/services/` not `/assets/images/`

### Optimization
- Compress images for web (use tools like TinyPNG)
- Use appropriate formats:
  - JPG for photos
  - PNG for images with transparency
  - SVG for icons and simple graphics
  - WebP for modern browsers (Next.js handles conversion)

### Accessibility
- All images should have descriptive alt text
- Use the PlaceholderImage component for graceful fallbacks
- Ensure sufficient color contrast for overlaid text

## Component Integration

The website uses a custom `PlaceholderImage` component that:
- Handles missing images gracefully
- Shows professional fallbacks
- Includes loading states
- Maintains brand consistency

Example usage:
```tsx
<PlaceholderImage
  src="/assets/images/hero/hero-woman.jpg"
  alt="Confident woman with beautiful smile"
  fill
  className="rounded-2xl shadow-2xl object-cover"
  priority
/>
```

## Adding New Assets

1. Place files in the appropriate subdirectory
2. Follow the naming convention
3. Update component references if needed
4. Test with both existing and missing files
5. Ensure proper alt text for accessibility