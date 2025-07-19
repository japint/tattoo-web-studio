# Separation of Concerns - Architecture Documentation

## Overview

This document outlines the comprehensive separation of concerns architecture implemented in the Ink Rebellion Tattoo Studio website. The refactoring separates code into distinct layers for better maintainability, reusability, and scalability.

## Architecture Layers

### 1. UI Components (`src/components/ui/`)

**Purpose:** Pure presentational components with no business logic
**Files:**

- `Button.tsx` - Reusable button with variants (primary, secondary, fab)
- `FormField.tsx` - Input, textarea, and select field components
- `SectionHeader.tsx` - Consistent section headers with title/subtitle
- `Card.tsx` - Glass-effect card wrapper component
- `index.ts` - Centralized exports

**Benefits:**

- Reusable across different sections
- Consistent styling and behavior
- Easy to maintain and update
- Type-safe props with TypeScript

### 2. Business Components (`src/components/business/`)

**Purpose:** Components that contain business logic and use UI components
**Files:**

- `ContactForm.tsx` - Contact form with validation and service options
- `GalleryGrid.tsx` - Image gallery with hover effects and Next.js Image optimization
- `ArtistCard.tsx` - Artist information display with social links
- `NavigationMenu.tsx` - Dynamic navigation using custom hooks
- `ServiceGrid.tsx` - Service display with pricing and descriptions
- `FloatingActionButton.tsx` - FAB with scroll-to-section functionality
- `index.ts` - Centralized exports

**Benefits:**

- Combines UI components with business logic
- Reusable business patterns
- Easier testing of business logic
- Clear separation from presentation

### 3. Custom Hooks (`src/hooks/`)

**Purpose:** Reusable business logic and stateful behavior
**Files:**

- `useScroll.ts` - Scroll position detection with debouncing
- `useNavigation.ts` - Navigation utilities and smooth scrolling

**Benefits:**

- Shared logic across components
- Easier to test business logic
- Cleaner component code
- Reusable patterns

### 4. Configuration (`src/config/`)

**Purpose:** Application constants and content management
**Files:**

- `constants.ts` - Business info, services, navigation items
- `content.ts` - Static content and copy

**Benefits:**

- Centralized content management
- Easy to update business information
- Type-safe constants
- Separation of data from logic

### 5. Type Definitions (`src/types/`)

**Purpose:** TypeScript interfaces and type definitions
**Files:**

- `index.ts` - All application types (Service, Artist, ContactInfo, etc.)

**Benefits:**

- Type safety across the application
- Clear contracts between components
- Better IDE support and autocomplete
- Easier refactoring

## Refactored Sections

### ContactSection

**Before:** Monolithic component with inline form elements
**After:** Uses `SectionHeader`, `Card`, `ContactForm`, and `BUSINESS_INFO`
**Benefits:**

- Form logic separated into reusable component
- Business info centralized in config
- UI components reused

### ServicesSection

**Before:** Hardcoded services array and inline card elements
**After:** Uses `SectionHeader`, `ServiceGrid`, `Card`, `Button`, and `SERVICES`
**Benefits:**

- Services data centralized and type-safe
- Grid component reusable for other content
- Consistent UI components

### Main Pages (page.tsx, about/page.tsx)

**Before:** Inline FAB implementation with duplicated code
**After:** Uses `FloatingActionButton` component
**Benefits:**

- No code duplication
- Consistent behavior across pages
- Easy to maintain and update

## Import Structure

### Centralized Exports

```typescript
// UI Components
import { Button, Card, SectionHeader, FormField } from "@/components/ui";

// Business Components
import {
  ContactForm,
  ServiceGrid,
  FloatingActionButton,
} from "@/components/business";

// Configuration
import { SERVICES, BUSINESS_INFO } from "@/config/constants";

// Types
import { Service, Artist, ContactInfo } from "@/types";
```

## Key Improvements

### 1. **Maintainability**

- Changes to UI elements only require updates in one place
- Business logic is isolated and easier to modify
- Type safety prevents runtime errors

### 2. **Reusability**

- UI components can be used across different sections
- Business components can be composed differently
- Hooks can be shared across multiple components

### 3. **Testability**

- Pure UI components are easy to test
- Business logic is isolated in hooks and business components
- Clear interfaces make mocking easier

### 4. **Scalability**

- New features can reuse existing components
- Adding new sections follows established patterns
- Team development is more organized

### 5. **Type Safety**

- TypeScript interfaces ensure correct prop usage
- Configuration data is type-safe
- Compile-time error checking

## Best Practices Implemented

1. **Single Responsibility Principle** - Each component has one clear purpose
2. **Composition over Inheritance** - Components are composed together
3. **Dependency Injection** - Data is passed down through props
4. **Separation of Concerns** - UI, business logic, and data are separated
5. **Type Safety** - Full TypeScript coverage with strict typing
6. **Consistent Naming** - Clear, descriptive component and function names
7. **Centralized Configuration** - All constants in dedicated config files

## Performance Benefits

1. **Tree Shaking** - Unused components can be eliminated
2. **Code Splitting** - Components can be lazy-loaded
3. **Bundle Optimization** - Better chunking strategies
4. **Image Optimization** - Next.js Image component usage
5. **Reduced Bundle Size** - Eliminated code duplication

## Future Enhancements

1. **State Management** - Add global state when needed
2. **API Integration** - Hook-based API calls
3. **Theme System** - Centralized theme configuration
4. **Localization** - Internationalization support
5. **Performance Monitoring** - Component performance tracking

## Conclusion

The separation of concerns architecture provides a solid foundation for the tattoo studio website. The code is now more maintainable, reusable, and scalable while maintaining excellent performance and user experience. The FAB functionality works seamlessly across all pages, and the hydration issues have been resolved.
