# Architecture Documentation

## Overview

This document provides a detailed technical overview of the Cliently Brand Builders website architecture, design patterns, and implementation details.

## Application Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                     │
├─────────────────────────────────────────────────────────┤
│  React App (SPA)                                        │
│  ├── React Router (Client-side routing)                 │
│  ├── React Query (Server state management)              │
│  ├── React Hook Form (Form state)                       │
│  └── Context Providers (Theme, Toast, etc.)            │
├─────────────────────────────────────────────────────────┤
│  Vite Dev Server / Static Build                         │
│  ├── HMR (Hot Module Replacement)                       │
│  ├── Fast Refresh                                       │
│  └── Source Maps                                        │
└─────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
App
├── QueryClientProvider
│   └── TooltipProvider
│       └── BrowserRouter
│           ├── Header (Fixed)
│           ├── Routes
│           │   ├── Home
│           │   │   ├── HeroSection
│           │   │   ├── PortfolioCollage
│           │   │   ├── WhyChooseSection
│           │   │   ├── StickyScrollSolutions
│           │   │   └── TestimonialMarquee (x2)
│           │   ├── Solutions
│           │   ├── Portfolio
│           │   ├── About
│           │   ├── Contact
│           │   └── NotFound
│           ├── Footer (Fixed)
│           └── CookieConsent
├── Toaster (Global Toast)
└── Sonner (Global Toast)
```

## Design Patterns

### 1. Component Composition

Components are built using composition patterns:
- **Container/Presentational**: Pages are containers, components are presentational
- **Compound Components**: UI components use Radix UI's compound component patterns
- **Render Props**: Some components accept render functions for flexibility

### 2. State Management

**Local State**: React `useState` for component-specific state
```typescript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

**Server State**: TanStack Query for async data
```typescript
const queryClient = new QueryClient();
```

**Form State**: React Hook Form for form management
```typescript
const { register, handleSubmit } = useForm();
```

**URL State**: React Router for navigation state
```typescript
const location = useLocation();
```

### 3. Styling Architecture

**Utility-First CSS**: Tailwind CSS for styling
- No CSS-in-JS runtime overhead
- PurgeCSS removes unused styles in production
- Consistent design system via Tailwind config

**CSS Variables**: Theme system via CSS custom properties
- Centralized color definitions
- Easy theme switching (future enhancement)
- Runtime theme updates possible

**Component Variants**: Class Variance Authority (CVA)
- Type-safe component variants
- Consistent styling patterns
- Used in shadcn/ui components

### 4. Routing Strategy

**Client-Side Routing**: React Router DOM
- No page reloads
- Smooth transitions
- SEO handled via meta tags (can be enhanced with SSR)

**Route Structure**:
- Flat route structure (no nested routes currently)
- Catch-all route for 404 handling
- Active route highlighting in navigation

### 5. Performance Optimizations

**Code Splitting**: 
- Route-based code splitting (via React Router)
- Lazy loading possible for heavy components

**Image Optimization**:
- Images stored in `src/assets/`
- Vite handles image imports and optimization
- Consider adding WebP format support

**Bundle Optimization**:
- Tree-shaking via Vite/ESBuild
- Minification in production builds
- Gzip/Brotli compression (handled by hosting)

**React Optimizations**:
- React.memo for expensive components (if needed)
- useMemo/useCallback for expensive computations
- Proper key props for lists

## File Organization Patterns

### Component Structure

```
ComponentName.tsx
├── Imports (external dependencies first)
├── Types/Interfaces (if needed)
├── Constants (if needed)
├── Component Function
│   ├── Hooks (useState, useEffect, etc.)
│   ├── Event Handlers
│   └── JSX Return
└── Export
```

### Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`)
- **Hooks**: camelCase with `use` prefix (`use-mobile.tsx`)
- **Utilities**: camelCase (`utils.ts`)
- **Constants**: UPPER_SNAKE_CASE or camelCase
- **Files**: Match component/hook name

### Import Organization

1. External dependencies (React, libraries)
2. Internal components
3. UI components
4. Utilities and hooks
5. Types
6. Assets (images, styles)

## Data Flow

### Unidirectional Data Flow

```
User Action
    ↓
Event Handler
    ↓
State Update (useState/setState)
    ↓
Component Re-render
    ↓
UI Update
```

### Props Flow

```
Parent Component
    ↓ (props)
Child Component
    ↓ (callback props)
Parent Component (state update)
```

## Styling System

### Tailwind Configuration Layers

1. **Base Layer** (`@layer base`): CSS resets, base styles
2. **Components Layer** (`@layer components`): Reusable component classes
3. **Utilities Layer** (`@layer utilities`): Utility classes

### Custom CSS Classes

Defined in `src/index.css`:
- `.glass-strong`: Glassmorphism effect
- `.animate-fade-in-up`: Fade-in animation
- Custom shadows and glows

### Theme System

**CSS Variables** (`:root`):
- HSL color values
- Border radius values
- Shadow definitions
- Gradient definitions

**Usage**:
```css
background: hsl(var(--background));
color: hsl(var(--foreground));
```

## Build System

### Vite Configuration

**Plugins**:
- `@vitejs/plugin-react-swc`: Fast React compilation
- `lovable-tagger`: Component tagging (dev only)

**Resolve Aliases**:
- `@` → `./src` (for cleaner imports)

**Server Configuration**:
- Host: `::` (all interfaces)
- Port: `8080`

### Build Process

1. **Development**:
   - Vite dev server
   - HMR enabled
   - Source maps enabled
   - Fast refresh

2. **Production**:
   - ESBuild minification
   - Tree-shaking
   - Asset optimization
   - Code splitting

## Type Safety

### TypeScript Configuration

**Relaxed Settings** (for faster development):
- `noImplicitAny: false`
- `strictNullChecks: false`
- `skipLibCheck: true`

**Path Mapping**:
- `@/*` → `./src/*`

### Type Definitions

- React types: `@types/react`, `@types/react-dom`
- Node types: `@types/node`
- Component props: Inline interfaces or types

## Accessibility

### Radix UI Primitives

All UI components built on Radix UI:
- Keyboard navigation
- ARIA attributes
- Focus management
- Screen reader support

### Semantic HTML

- Proper heading hierarchy
- Semantic elements (`<nav>`, `<main>`, `<footer>`)
- Alt text for images
- ARIA labels where needed

## Error Handling

### Error Boundaries

Consider adding React Error Boundaries for:
- Component error catching
- Fallback UI
- Error logging

### Form Validation

- Zod schemas for validation
- React Hook Form integration
- Client-side validation
- Error message display

## Security Considerations

### XSS Prevention

- React's built-in XSS protection
- Sanitized user inputs (if any)
- Safe URL handling

### External Links

- `rel="noopener noreferrer"` for external links
- `target="_blank"` with security attributes

### Cookie Consent

- GDPR-compliant cookie banner
- LocalStorage for consent tracking

## Future Enhancements

### Potential Improvements

1. **Server-Side Rendering (SSR)**:
   - Next.js migration
   - Better SEO
   - Faster initial load

2. **Internationalization (i18n)**:
   - Multi-language support
   - React-i18next integration

3. **Analytics**:
   - Google Analytics
   - Event tracking
   - User behavior analysis

4. **Performance Monitoring**:
   - Web Vitals tracking
   - Error tracking (Sentry)
   - Performance budgets

5. **Testing**:
   - Unit tests (Vitest)
   - Component tests (React Testing Library)
   - E2E tests (Playwright/Cypress)

6. **Content Management**:
   - Headless CMS integration
   - Dynamic content loading
   - Admin panel

## Dependencies Overview

### Core Dependencies

- **React**: UI library
- **Vite**: Build tool
- **TypeScript**: Type safety
- **React Router**: Routing
- **TanStack Query**: Data fetching

### UI Dependencies

- **Radix UI**: Component primitives
- **Tailwind CSS**: Styling
- **shadcn/ui**: Component library
- **Lucide**: Icons

### Utility Dependencies

- **Zod**: Validation
- **date-fns**: Date utilities
- **clsx/tailwind-merge**: Class utilities

## Development Workflow

### Local Development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open browser: `http://localhost:8080`
4. Make changes (HMR updates automatically)
5. Test changes
6. Commit and push

### Code Quality

- ESLint for linting
- TypeScript for type checking
- Manual code review
- Browser testing

### Deployment

1. Build: `npm run build`
2. Test build: `npm run preview`
3. Deploy `dist/` folder
4. Verify deployment

---

This architecture is designed for scalability, maintainability, and performance. The modular structure allows for easy feature additions and modifications.

