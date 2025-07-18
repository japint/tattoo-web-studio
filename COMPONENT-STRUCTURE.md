# Ink Rebellion - Tattoo Studio Component Organization

This project has been organized into a clean, maintainable component structure for the Ink Rebellion tattoo studio website.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main page with component imports
│   ├── page-backup.tsx    # Backup of original monolithic version
│   ├── layout.tsx         # App layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Main page sections
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ArtistsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── ui/               # Reusable UI components (future)
└── lib/
    └── prisma.ts         # Database configuration

public/
└── images/               # All image assets (img0.jpg - img9.jpg)
```

## Components Overview

### Navigation.tsx

- Fixed navigation bar with glass effect
- Mobile-responsive hamburger menu
- Brand logo and navigation links

### HeroSection.tsx

- Full-screen hero with background image
- Call-to-action buttons
- Animated text effects

### AboutSection.tsx

- Studio philosophy and stats
- Studio interior image
- Professional credentials display

### GallerySection.tsx

- Grid layout of tattoo artwork
- 8 images from the public/images folder
- Hover effects and animations

### ArtistsSection.tsx

- Artist profiles with specialties
- Experience information
- Portfolio links

### ServicesSection.tsx

- Service offerings and pricing
- Feature lists for each service
- Consultation call-to-action

### ContactSection.tsx

- Contact information display
- Contact form with validation
- Business hours and location

### Footer.tsx

- Company information
- Social media links
- Additional navigation and legal info

## Image Assets

All images are stored in `public/images/` and are properly optimized:

- `img0.jpg` - `img9.jpg`: Various tattoo artwork and studio photos
- Used throughout different sections for gallery, hero, about, and artists

## Development Notes

1. **TypeScript**: All components are TypeScript-enabled with no compilation errors
2. **Next.js Image Optimization**: All images use Next.js Image component with:
   - `fill` prop for responsive sizing
   - `quality={85}` for optimal compression
   - `sizes` attribute for responsive loading
   - `priority` for hero image
   - `placeholder="blur"` for better UX
3. **CSS Animations**: Complete animation system with:
   - `animate-float` for floating elements
   - `animate-fade-in`, `animate-slide-up`, `animate-scale-in` for entrance effects
   - `animate-glow` for text glow effects
   - `bg-tattoo-pattern` for decorative backgrounds
4. **Responsive Design**: Mobile-first approach with proper breakpoints
5. **Performance Optimized**: Removed problematic `animate-on-scroll` delays
6. **Glass Effects**: Consistent glass-morphism design throughout
7. **Hover Effects**: Enhanced card and image hover interactions

## Running the Project

```bash
npm run dev
```

Visit `http://localhost:3000` (or next available port) to view the website.

## Future Enhancements

- Add reusable UI components in `components/ui/`
- Implement proper form handling for contact form
- Add image optimization with Next.js Image component
- Add animation libraries for enhanced user experience
- Implement proper mobile navigation menu functionality
