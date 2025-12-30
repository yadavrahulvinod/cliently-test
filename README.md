# Cliently Brand Builders - Website Documentation

A modern, high-performance website built with React, TypeScript, and Tailwind CSS. This project showcases Cliently's web development services with a beautiful, responsive design inspired by Framer's aesthetic.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Component Documentation](#component-documentation)
- [Styling & Theming](#styling--theming)
- [Routing](#routing)
- [Build & Deployment](#build--deployment)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## 🎯 Project Overview

This is a modern marketing website for Cliently, a web development agency. The site features:

- **Modern UI/UX**: Glassmorphism effects, smooth animations, and responsive design
- **Portfolio Showcase**: Visual portfolio gallery with 22+ project tiles
- **Interactive Sections**: Sticky scroll solutions, testimonial marquees, and animated components
- **Contact Integration**: WhatsApp integration for direct client communication
- **Cookie Consent**: GDPR-compliant cookie consent banner
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimizations

## 🛠 Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI Framework & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library
- **DM Sans** - Google Fonts typography

### State Management & Data
- **TanStack Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation

### Additional Libraries
- **date-fns 3.6.0** - Date utility library
- **recharts 2.15.4** - Charting library
- **embla-carousel-react 8.6.0** - Carousel component
- **sonner 1.7.4** - Toast notifications
- **next-themes 0.3.0** - Theme management

## 📁 Project Structure

```
cliently-brand-builders-main/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── favicon.png
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   │   ├── cliently-logo.png
│   │   ├── features/      # Feature images
│   │   ├── portfolio/     # Portfolio project images
│   │   └── testimonials/  # Testimonial avatars
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── CookieConsent.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NavLink.tsx
│   │   ├── PortfolioCollage.tsx
│   │   ├── StickyScrollSolutions.tsx
│   │   ├── TestimonialMarquee.tsx
│   │   └── WhyChooseSection.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Portfolio.tsx
│   │   └── Solutions.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .cursor/              # Cursor IDE configuration
├── components.json       # shadcn/ui configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **yarn** or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cliently-brand-builders-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:8080` (or the port shown in terminal)

## 💻 Development

### Development Server

The development server runs on port **8080** by default (configured in `vite.config.ts`). It features:

- **Hot Module Replacement (HMR)** - Instant updates without page refresh
- **Fast Refresh** - Preserves component state during updates
- **Source Maps** - Easy debugging in browser DevTools

### Code Style

- **ESLint** - Code linting (configured in `eslint.config.js`)
- **TypeScript** - Type checking
- **Prettier** - Code formatting (if configured)

Run linting:
```bash
npm run lint
```

### TypeScript Configuration

The project uses TypeScript with relaxed settings for faster development:
- `noImplicitAny: false`
- `strictNullChecks: false`
- Path aliases configured: `@/*` → `./src/*`

## 📚 Component Documentation

### Core Components

#### `App.tsx`
Main application component that sets up:
- React Query client
- React Router
- Global providers (TooltipProvider, Toaster)
- Route configuration

#### `Header.tsx`
Navigation header component featuring:
- **Desktop Navigation**: Glassmorphism pill-style navigation
- **Mobile Navigation**: Hamburger menu with slide-out panel
- **Logo**: Cliently branding
- **CTA Button**: "Start Building" WhatsApp link
- **Active Route Highlighting**: Visual indication of current page

**Props**: None (uses React Router's `useLocation` hook)

#### `Footer.tsx`
Site footer with:
- Company branding and description
- Quick links navigation
- Services list
- Contact information (phone, email, location)
- Copyright and legal links

**Props**: None

#### `HeroSection.tsx`
Hero section component:
- Large headline: "Build better sites, faster"
- Subheadline with value proposition
- Two CTA buttons (WhatsApp and Contact)
- Fade-in animations

**Props**: None

#### `PortfolioCollage.tsx`
Portfolio showcase component:
- Grid layout with 22 portfolio tiles
- Responsive columns (7 columns on desktop)
- Hover effects and animations
- Image optimization

**Props**: None

#### `StickyScrollSolutions.tsx`
Interactive solutions section:
- Sticky scroll effect (Framer-style)
- Three main solutions: Create, Collaborate, Go Live
- Smooth transitions between sections
- Feature descriptions and icons

**Props**: None

#### `TestimonialMarquee.tsx`
Testimonial carousel component:
- Dual-direction scrolling (left and right)
- Continuous loop animation
- Client testimonials with avatars
- Configurable speed

**Props**:
- `testimonials`: Array of testimonial objects
- `direction`: "left" | "right"
- `speed`: Number (pixels per second)

#### `WhyChooseSection.tsx`
Benefits/features section:
- Grid layout of feature cards
- Icons and descriptions
- Hover effects

**Props**: None

#### `CookieConsent.tsx`
GDPR cookie consent banner:
- Cookie policy acceptance
- LocalStorage persistence
- Dismissible with animation

**Props**: None

### Page Components

#### `Home.tsx`
Main landing page combining:
- HeroSection
- PortfolioCollage
- WhyChooseSection
- StickyScrollSolutions
- TestimonialMarquee (dual marquee)
- CTA section

#### `Solutions.tsx`
Solutions/services page

#### `Portfolio.tsx`
Portfolio gallery page

#### `About.tsx`
About us page

#### `Contact.tsx`
Contact form page

#### `NotFound.tsx`
404 error page

### UI Components (`src/components/ui/`)

The project uses **shadcn/ui** components, which are built on Radix UI primitives. All components are located in `src/components/ui/`:

- **Form Components**: Button, Input, Textarea, Select, Checkbox, Radio, Switch
- **Layout Components**: Card, Separator, Tabs, Accordion, Collapsible
- **Overlay Components**: Dialog, Popover, Tooltip, Hover Card, Alert Dialog
- **Navigation**: Navigation Menu, Menubar, Breadcrumb, Pagination
- **Feedback**: Toast, Sonner, Alert, Progress, Skeleton
- **Data Display**: Table, Chart, Avatar, Badge
- **Utilities**: Scroll Area, Resizable, Command, Calendar

All UI components follow shadcn/ui patterns and can be customized via Tailwind classes.

## 🎨 Styling & Theming

### Tailwind CSS Configuration

The project uses a **dark theme by default** (Framer-inspired):

- **Color System**: HSL-based color variables
- **Custom Colors**: Background, foreground, card, muted, accent, etc.
- **Border Radius**: Custom radius system (sm, md, lg, xl, 2xl, 3xl)
- **Animations**: fade-in-up, glow-pulse, accordion animations
- **Shadows**: Soft shadows and glow effects

### CSS Variables

Colors are defined in `src/index.css` using CSS custom properties:

```css
:root {
  --background: 0 0% 4%;        /* Very dark background */
  --foreground: 0 0% 98%;       /* Light text */
  --card: 0 0% 7%;              /* Card background */
  --muted: 0 0% 12%;            /* Muted elements */
  /* ... more variables */
}
```

### Glassmorphism

The site uses glassmorphism effects via custom Tailwind classes:
- `.glass-strong` - Strong glass effect with backdrop blur
- Custom shadows and borders for depth

### Typography

- **Font Family**: DM Sans (Google Fonts)
- **Font Weights**: 100-1000 (variable)
- **Font Sizes**: Responsive typography scale

### Responsive Design

Breakpoints (Tailwind defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## 🧭 Routing

The application uses **React Router DOM v6** for client-side routing.

### Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page |
| `/solutions` | `Solutions` | Services page |
| `/portfolio` | `Portfolio` | Portfolio gallery |
| `/about` | `About` | About us page |
| `/contact` | `Contact` | Contact form |
| `*` | `NotFound` | 404 page |

### Navigation

- **Header Navigation**: Fixed header with navigation links
- **Footer Navigation**: Quick links in footer
- **Active State**: Current route is highlighted in navigation

## 🏗 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Development Build

```bash
npm run build:dev
```

Creates a development build with source maps.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Deployment Options

1. **Static Hosting**: Deploy `dist/` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting service

2. **Lovable Platform**: 
   - Open [Lovable Project](https://lovable.dev/projects/c6e609b3-eb95-42f2-895e-e58da4506923)
   - Click Share → Publish

3. **Custom Domain**: 
   - Configure in Project > Settings > Domains
   - See [Lovable Custom Domain Docs](https://docs.lovable.dev/features/custom-domain)

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (port 8080) |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development (with source maps) |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 📦 Dependencies

### Production Dependencies

**UI & Styling**
- `@radix-ui/*` - Component primitives (20+ packages)
- `tailwindcss`, `tailwindcss-animate` - CSS framework
- `lucide-react` - Icons
- `class-variance-authority`, `clsx`, `tailwind-merge` - Styling utilities

**React Ecosystem**
- `react`, `react-dom` - Core React
- `react-router-dom` - Routing
- `@tanstack/react-query` - Data fetching
- `react-hook-form`, `@hookform/resolvers` - Form handling

**Utilities**
- `zod` - Schema validation
- `date-fns` - Date utilities
- `recharts` - Charts
- `sonner` - Toast notifications
- `embla-carousel-react` - Carousel
- `next-themes` - Theme management

### Development Dependencies

- `vite`, `@vitejs/plugin-react-swc` - Build tool
- `typescript` - TypeScript compiler
- `eslint`, `typescript-eslint` - Linting
- `tailwindcss`, `postcss`, `autoprefixer` - CSS processing
- `@types/react`, `@types/react-dom`, `@types/node` - Type definitions

## 🔧 Configuration Files

### `vite.config.ts`
- React SWC plugin for fast compilation
- Port 8080 configuration
- Path alias: `@` → `./src`
- Component tagger (development only)

### `tailwind.config.ts`
- Dark mode configuration
- Custom color system
- Custom animations and keyframes
- Container configuration
- Typography plugin

### `tsconfig.json`
- Path aliases
- Relaxed TypeScript settings
- References to app and node configs

### `components.json`
- shadcn/ui configuration
- Component paths and styling

## 🌐 External Integrations

### WhatsApp Integration
- Phone: +91 83568 91147
- Pre-filled message: "Hi Cliently! I'm interested in your services."
- Opens in new tab/window

### Contact Information
- **Email**: cliently.live@gmail.com
- **Phone**: +91 83568 91147
- **Location**: India

## 📝 Notes

- The project uses **dark theme by default** (Framer-inspired design)
- **Glassmorphism effects** are used throughout for modern aesthetics
- **Responsive design** ensures compatibility across all devices
- **Performance optimized** with Vite's build optimizations
- **Accessible** components via Radix UI primitives

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support:
- **Email**: cliently.live@gmail.com
- **WhatsApp**: +91 83568 91147
- **Website**: [Contact Page](/contact)

---

Built with ❤️ by Cliently
