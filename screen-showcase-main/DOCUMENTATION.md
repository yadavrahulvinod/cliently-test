# Screen Showcase - Project Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Component Documentation](#component-documentation)
6. [Setup & Installation](#setup--installation)
7. [Development Guide](#development-guide)
8. [Build & Deployment](#build--deployment)
9. [Styling & Theming](#styling--theming)
10. [Assets Management](#assets-management)

---

## Project Overview

**Screen Showcase** is a modern, responsive landing page built to showcase website designs and portfolios. It features smooth animations, interactive components, and a visually appealing layout designed to highlight creative work.

The application is a single-page website that includes:
- Hero section with call-to-action buttons
- Portfolio grid showcasing various project types
- Feature highlights with scroll-triggered animations
- Client testimonials with infinite scroll
- Responsive navigation header

---

## Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Component library (Radix UI primitives)
- **Framer Motion 12.23.26** - Animation library
- **Lucide React 0.462.0** - Icon library

### Additional Libraries
- **React Query (@tanstack/react-query)** - Data fetching and caching
- **React Helmet Async** - SEO and meta tag management
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## Project Structure

```
screen-showcase-main/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Image assets
│   │   ├── features/      # Feature showcase images
│   │   ├── portfolio/     # Portfolio project images
│   │   └── testimonials/  # Testimonial profile images
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── LogoStrip.tsx
│   │   ├── StickyFeaturesSection.tsx
│   │   └── TestimonialsSection.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

---

## Features

### 1. **Responsive Header Navigation**
- Fixed header with backdrop blur effect
- Responsive navigation menu (hidden on mobile)
- Login and Sign up buttons
- Smooth fade-in animation on page load

### 2. **Hero Section**
- Large, bold headline with animated entrance
- Call-to-action buttons (Start for free, Start with AI)
- Award badge notification
- Responsive typography scaling

### 3. **Portfolio Grid**
- Multi-column layout showcasing various projects
- Different card sizes (laptop, mobile, square)
- Hover effects with image zoom and overlay
- Gradient fade effects on edges
- Staggered animation on load

### 4. **Logo Strip**
- Company/client logos display
- Sequential fade-in animation
- Responsive wrapping layout

### 5. **Sticky Features Section**
- Scroll-triggered feature switching
- Sticky positioning during scroll
- Four feature highlights:
  - AI-powered design generation
  - Powerful design tools
  - Built-in CMS
  - Real-time collaboration
- Interactive feature selection

### 6. **Testimonials Section**
- Infinite scrolling testimonials
- Two rows scrolling in opposite directions
- Client testimonials with avatars
- Gradient fade effects on edges

---

## Component Documentation

### Header Component (`src/components/Header.tsx`)

**Purpose**: Fixed navigation header with logo, menu items, and auth buttons.

**Props**: None

**Features**:
- Fixed positioning with backdrop blur
- Responsive navigation (hidden on mobile)
- Navigation items: Product, Teams, Resources, Community, Support, Pricing
- Login and Sign up buttons

**Usage**:
```tsx
import Header from '@/components/Header';

<Header />
```

---

### HeroSection Component (`src/components/HeroSection.tsx`)

**Purpose**: Main hero section with headline, description, and CTAs.

**Props**: None

**Features**:
- Animated badge notification
- Large responsive headline
- Subtitle description
- Two CTA buttons

**Usage**:
```tsx
import HeroSection from '@/components/HeroSection';

<HeroSection />
```

---

### PortfolioGrid Component (`src/components/PortfolioGrid.tsx`)

**Purpose**: Displays a multi-column grid of portfolio projects.

**Props**: None

**Structure**:
- 7 columns total
- Columns 0 & 6: Edge columns (partially hidden)
- Columns 1 & 2: Mobile/thin columns
- Columns 3-5: Desktop columns
- 22 portfolio items total

**Features**:
- Responsive column widths
- Gradient fade effects
- "See more" button at bottom

**Usage**:
```tsx
import PortfolioGrid from '@/components/PortfolioGrid';

<PortfolioGrid />
```

---

### PortfolioCard Component (`src/components/PortfolioCard.tsx`)

**Purpose**: Individual portfolio item card.

**Props**:
```typescript
interface PortfolioCardProps {
  image: string;        // Image source path
  title?: string;       // Project title
  subtitle?: string;    // Project category/subtitle
  size: 'laptop' | 'mobile' | 'square' | 'wide';  // Card aspect ratio
  delay?: number;       // Animation delay multiplier
}
```

**Features**:
- Hover effects (image zoom, overlay, title reveal)
- Multiple size options
- Staggered animation support

**Usage**:
```tsx
import PortfolioCard from '@/components/PortfolioCard';

<PortfolioCard
  image={dashboardImage}
  title="Analytics Pro"
  subtitle="Dashboard"
  size="laptop"
  delay={0}
/>
```

---

### LogoStrip Component (`src/components/LogoStrip.tsx`)

**Purpose**: Displays company/client logos in a horizontal strip.

**Props**: None

**Features**:
- Sequential fade-in animation
- Responsive wrapping
- Hover effects

**Usage**:
```tsx
import LogoStrip from '@/components/LogoStrip';

<LogoStrip />
```

---

### StickyFeaturesSection Component (`src/components/StickyFeaturesSection.tsx`)

**Purpose**: Scroll-triggered sticky section showcasing features.

**Props**: None

**Features**:
- Sticky positioning during scroll
- Scroll progress tracking
- Four features with images:
  - AI
  - Design
  - CMS
  - Collaborate
- Interactive feature selection
- Smooth transitions

**Usage**:
```tsx
import StickyFeaturesSection from '@/components/StickyFeaturesSection';

<StickyFeaturesSection />
```

---

### TestimonialsSection Component (`src/components/TestimonialsSection.tsx`)

**Purpose**: Infinite scrolling testimonials display.

**Props**: None

**Features**:
- Two rows of testimonials
- Opposite scrolling directions
- Infinite loop animation
- Gradient fade effects
- Testimonial cards with avatars

**Usage**:
```tsx
import TestimonialsSection from '@/components/TestimonialsSection';

<TestimonialsSection />
```

---

## Setup & Installation

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **bun** package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd screen-showcase-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open in browser**
   - The app will be available at `http://localhost:8080`

---

## Development Guide

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Development Server

The development server runs on port **8080** by default (configured in `vite.config.ts`).

### Code Style

- TypeScript strict mode is disabled for flexibility
- ESLint is configured for React and TypeScript
- Components use functional components with hooks
- Props are typed with TypeScript interfaces

### Adding New Components

1. Create component file in `src/components/`
2. Export as default or named export
3. Import using `@/components/ComponentName` alias
4. Use TypeScript for type safety

### Adding New Assets

1. Place images in appropriate `src/assets/` subdirectories:
   - `features/` - Feature showcase images
   - `portfolio/` - Portfolio project images
   - `testimonials/` - Profile images

2. Import in component:
   ```tsx
   import imageName from '@/assets/path/to/image.jpg';
   ```

---

## Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Build Output

- Static HTML, CSS, and JavaScript files
- Optimized and minified assets
- Tree-shaken dependencies

### Deployment Options

1. **Static Hosting** (Vercel, Netlify, GitHub Pages)
   - Upload `dist/` folder contents
   - Configure build command: `npm run build`
   - Set output directory: `dist`

2. **Traditional Web Server**
   - Copy `dist/` contents to web server
   - Configure server for SPA routing (redirect all routes to `index.html`)

3. **Lovable Platform**
   - Use Lovable's built-in deployment
   - Click Share → Publish in Lovable dashboard

---

## Styling & Theming

### Tailwind CSS Configuration

The project uses Tailwind CSS with custom configuration:

- **Custom Colors**: HSL-based color system with CSS variables
- **Font**: Sora font family
- **Animations**: Custom keyframes for accordion, fade-in, scale-in, float
- **Dark Mode**: Class-based dark mode support

### CSS Variables

Colors are defined using CSS variables in `src/index.css`:
- `--background`
- `--foreground`
- `--primary`
- `--secondary`
- `--muted`
- `--accent`
- `--border`
- `--card`
- etc.

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

### Animation Library

**Framer Motion** is used for animations:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Staggered animations

---

## Assets Management

### Image Assets Structure

```
src/assets/
├── features/
│   ├── ai-feature.jpg
│   ├── design-feature.jpg
│   ├── cms-feature.jpg
│   └── collaborate-feature.jpg
├── portfolio/
│   ├── dashboard-1.jpg
│   ├── dashboard-2.jpg
│   ├── mobile-*.jpg (8 files)
│   └── ... (22 total portfolio images)
└── testimonials/
    └── person-*.jpg (10 files)
```

### Adding New Portfolio Items

1. Add image to `src/assets/portfolio/`
2. Import in `PortfolioGrid.tsx`
3. Add to `portfolioColumns` array with:
   - `image`: Imported image
   - `title`: Project name
   - `subtitle`: Category/type
   - `size`: 'laptop' | 'mobile' | 'square'

### Image Optimization

- Use optimized JPG/WebP formats
- Recommended sizes:
  - Portfolio images: 800-1200px width
  - Feature images: 1200-1600px width
  - Testimonial avatars: 200x200px

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Features Used

- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- ES6+ JavaScript
- CSS Backdrop Filter (for blur effects)

---

## Performance Considerations

### Optimization Features

- **Code Splitting**: Automatic via Vite
- **Tree Shaking**: Unused code removed in production
- **Image Optimization**: Manual optimization recommended
- **Lazy Loading**: Consider implementing for below-fold images
- **Animation Performance**: Framer Motion uses GPU acceleration

### Performance Tips

1. Optimize images before adding to assets
2. Use appropriate image formats (WebP when possible)
3. Consider lazy loading for portfolio images
4. Monitor bundle size with `npm run build`

---

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change port in `vite.config.ts` server.port

2. **TypeScript errors**
   - Run `npm run lint` to identify issues
   - Check `tsconfig.json` for configuration

3. **Styles not applying**
   - Ensure Tailwind is processing files in `tailwind.config.ts` content array
   - Restart dev server after config changes

4. **Images not loading**
   - Verify import paths use `@/assets/` alias
   - Check file extensions match exactly

---

## Contributing

### Code Style Guidelines

- Use functional components
- Type all props with TypeScript interfaces
- Use meaningful variable and function names
- Follow existing code structure
- Add comments for complex logic

### Component Structure

```tsx
// Imports
import { ... } from '...';

// Types/Interfaces
interface ComponentProps {
  // ...
}

// Component
const Component = ({ prop }: ComponentProps) => {
  // Hooks
  // State
  // Effects
  // Handlers
  
  return (
    // JSX
  );
};

// Export
export default Component;
```

---

## License

[Specify license if applicable]

---

## Contact & Support

[Add contact information or support channels]

---

**Last Updated**: [Current Date]
**Version**: 0.0.0

