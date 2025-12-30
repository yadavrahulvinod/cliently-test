# Component Documentation

Detailed documentation for all components in the Cliently Brand Builders website.

## Table of Contents

- [Page Components](#page-components)
- [Layout Components](#layout-components)
- [Feature Components](#feature-components)
- [UI Components](#ui-components)
- [Hooks](#hooks)
- [Utilities](#utilities)

## Page Components

### `Home.tsx`

**Location**: `src/pages/Home.tsx`

**Description**: Main landing page that combines all major sections.

**Structure**:
```tsx
<main>
  <HeroSection />
  <PortfolioCollage />
  <WhyChooseSection />
  <StickyScrollSolutions />
  <TestimonialMarquee /> (x2)
  <CTA Section />
</main>
```

**Features**:
- Hero section with CTAs
- Portfolio showcase
- Benefits section
- Solutions showcase
- Dual testimonial marquees
- Final CTA section

**Props**: None

**Dependencies**:
- `react-router-dom` (Link)
- `@/components/ui/button`
- All major section components

---

### `Solutions.tsx`

**Location**: `src/pages/Solutions.tsx`

**Description**: Solutions/services page showcasing Cliently's offerings.

**Props**: None

---

### `Portfolio.tsx`

**Location**: `src/pages/Portfolio.tsx`

**Description**: Portfolio gallery page displaying all projects.

**Props**: None

---

### `About.tsx`

**Location**: `src/pages/About.tsx`

**Description**: About us page with company information.

**Props**: None

---

### `Contact.tsx`

**Location**: `src/pages/Contact.tsx`

**Description**: Contact form page for client inquiries.

**Props**: None

**Features**:
- Contact form (likely using React Hook Form)
- Form validation (likely using Zod)
- Submission handling

---

### `NotFound.tsx`

**Location**: `src/pages/NotFound.tsx`

**Description**: 404 error page for unmatched routes.

**Props**: None

---

## Layout Components

### `Header.tsx`

**Location**: `src/components/Header.tsx`

**Description**: Fixed navigation header with glassmorphism design.

**Features**:
- **Desktop Navigation**: 
  - Glassmorphism pill container
  - Individual pill navigation items
  - Active route highlighting
  - CTA button
- **Mobile Navigation**:
  - Hamburger menu
  - Slide-out menu panel
  - Mobile-optimized layout
- **Logo**: Cliently branding
- **WhatsApp Integration**: Direct link to WhatsApp

**State**:
- `isMobileMenuOpen`: Boolean for mobile menu visibility

**Hooks Used**:
- `useState`: Mobile menu state
- `useLocation`: Current route detection
- `useEffect`: Close menu on route change

**Props**: None

**Styling**:
- Fixed positioning (`fixed top-0`)
- Glassmorphism effect (`glass-strong`)
- Responsive design (mobile/desktop breakpoints)

**Example Usage**:
```tsx
<Header />
```

---

### `Footer.tsx`

**Location**: `src/components/Footer.tsx`

**Description**: Site footer with links, contact info, and branding.

**Structure**:
```
Footer
├── Brand Section (logo + description)
├── Quick Links
├── Services List
├── Contact Information
└── Copyright + Legal Links
```

**Features**:
- Four-column layout (responsive)
- Company branding
- Navigation links
- Contact information (phone, email, location)
- Social links (if any)
- Copyright notice
- Legal links (Privacy Policy, Terms)

**Props**: None

**Dependencies**:
- `react-router-dom` (Link)
- `lucide-react` (icons)

---

### `CookieConsent.tsx`

**Location**: `src/components/CookieConsent.tsx`

**Description**: GDPR-compliant cookie consent banner.

**Features**:
- Cookie policy acceptance
- LocalStorage persistence
- Dismissible with animation
- Appears on first visit

**State Management**:
- Uses LocalStorage to remember consent
- Conditional rendering based on consent status

**Props**: None

---

## Feature Components

### `HeroSection.tsx`

**Location**: `src/components/HeroSection.tsx`

**Description**: Hero section with main headline and CTAs.

**Content**:
- **Headline**: "Build better sites, faster"
- **Subheadline**: Value proposition text
- **CTAs**: 
  - "Start for free" (WhatsApp)
  - "Start with AI" (Contact page)

**Features**:
- Fade-in animations
- Responsive typography
- Two CTA buttons
- Centered layout

**Props**: None

**Styling**:
- Large typography (5xl-7xl)
- Centered text
- Responsive spacing
- Animation delays

---

### `PortfolioCollage.tsx`

**Location**: `src/components/PortfolioCollage.tsx`

**Description**: Visual portfolio showcase with grid layout.

**Layout**:
- 22 portfolio tiles
- 7 columns on desktop
- Responsive grid
- Hover effects

**Features**:
- Grid layout
- Image optimization
- Hover animations
- Responsive columns

**Props**: None

**Data Source**: Images from `src/assets/portfolio/`

---

### `StickyScrollSolutions.tsx`

**Location**: `src/components/StickyScrollSolutions.tsx`

**Description**: Interactive sticky scroll section showcasing solutions.

**Features**:
- Sticky scroll effect (Framer-style)
- Three main solutions:
  1. **Create**: Build websites
  2. **Collaborate**: Work together
  3. **Go Live**: Deploy and launch
- Smooth transitions
- Feature descriptions
- Icons/illustrations

**Props**: None

**Technical**:
- Uses scroll position for sticky behavior
- Intersection Observer (likely)
- Smooth animations

---

### `TestimonialMarquee.tsx`

**Location**: `src/components/TestimonialMarquee.tsx`

**Description**: Scrolling testimonial carousel component.

**Props**:
```typescript
interface TestimonialMarqueeProps {
  testimonials: Array<{
    name: string;
    company: string;
    text: string;
    avatar: string;
  }>;
  direction: "left" | "right";
  speed: number; // pixels per second
}
```

**Features**:
- Continuous scrolling animation
- Configurable direction (left/right)
- Configurable speed
- Testimonial cards with:
  - Client name
  - Company name
  - Testimonial text
  - Avatar initials

**Usage Example**:
```tsx
<TestimonialMarquee 
  testimonials={testimonialsRow1} 
  direction="left" 
  speed={25} 
/>
```

**Technical**:
- CSS animations or JavaScript-based scrolling
- Infinite loop
- Smooth transitions

---

### `WhyChooseSection.tsx`

**Location**: `src/components/WhyChooseSection.tsx`

**Description**: Benefits/features section explaining why to choose Cliently.

**Layout**:
- Grid of feature cards
- Icons
- Titles
- Descriptions

**Props**: None

**Features**:
- Grid layout
- Feature cards
- Hover effects
- Responsive design

---

### `NavLink.tsx`

**Location**: `src/components/NavLink.tsx`

**Description**: Navigation link component (if exists as separate component).

**Props**: (Check implementation)

---

## UI Components

All UI components are located in `src/components/ui/` and are built using **shadcn/ui** patterns with Radix UI primitives.

### Common UI Components

#### `Button`
**File**: `src/components/ui/button.tsx`

**Variants**:
- `default`: Primary button
- `destructive`: Delete/danger actions
- `outline`: Outlined button
- `secondary`: Secondary button
- `ghost`: Ghost button
- `link`: Link-style button

**Sizes**:
- `default`
- `sm`
- `lg`
- `icon`

**Usage**:
```tsx
<Button variant="default" size="lg">
  Click me
</Button>
```

#### `Card`
**File**: `src/components/ui/card.tsx`

**Sub-components**:
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `CardFooter`

**Usage**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

#### `Input`
**File**: `src/components/ui/input.tsx`

**Usage**:
```tsx
<Input type="text" placeholder="Enter text" />
```

#### `Dialog`
**File**: `src/components/ui/dialog.tsx`

**Sub-components**:
- `DialogTrigger`
- `DialogContent`
- `DialogHeader`
- `DialogTitle`
- `DialogDescription`
- `DialogFooter`

**Usage**:
```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Complete UI Component List

- `accordion.tsx` - Collapsible content sections
- `alert.tsx` - Alert messages
- `alert-dialog.tsx` - Modal alert dialogs
- `aspect-ratio.tsx` - Maintain aspect ratios
- `avatar.tsx` - User avatars
- `badge.tsx` - Badges and labels
- `breadcrumb.tsx` - Breadcrumb navigation
- `button.tsx` - Button component
- `calendar.tsx` - Date picker calendar
- `card.tsx` - Card container
- `carousel.tsx` - Carousel/slider
- `chart.tsx` - Chart components
- `checkbox.tsx` - Checkbox input
- `collapsible.tsx` - Collapsible sections
- `command.tsx` - Command palette
- `context-menu.tsx` - Right-click menu
- `dialog.tsx` - Modal dialogs
- `drawer.tsx` - Drawer/sheet component
- `dropdown-menu.tsx` - Dropdown menus
- `form.tsx` - Form components
- `hover-card.tsx` - Hover card tooltip
- `input.tsx` - Text input
- `input-otp.tsx` - OTP input
- `label.tsx` - Form labels
- `menubar.tsx` - Menu bar
- `navigation-menu.tsx` - Navigation menu
- `pagination.tsx` - Pagination controls
- `popover.tsx` - Popover component
- `progress.tsx` - Progress bar
- `radio-group.tsx` - Radio button group
- `resizable.tsx` - Resizable panels
- `scroll-area.tsx` - Custom scrollbar
- `select.tsx` - Select dropdown
- `separator.tsx` - Divider/separator
- `sheet.tsx` - Side sheet
- `sidebar.tsx` - Sidebar component
- `skeleton.tsx` - Loading skeleton
- `slider.tsx` - Range slider
- `sonner.tsx` - Toast notifications
- `switch.tsx` - Toggle switch
- `table.tsx` - Table component
- `tabs.tsx` - Tab component
- `textarea.tsx` - Textarea input
- `toast.tsx` - Toast notifications
- `toaster.tsx` - Toast container
- `toggle.tsx` - Toggle button
- `toggle-group.tsx` - Toggle group
- `tooltip.tsx` - Tooltip component
- `use-toast.ts` - Toast hook

## Hooks

### `use-mobile.tsx`

**Location**: `src/hooks/use-mobile.tsx`

**Description**: Hook to detect mobile devices/viewport.

**Returns**: Boolean indicating if viewport is mobile

**Usage**:
```tsx
const isMobile = useMobile();
```

---

### `use-toast.ts`

**Location**: `src/hooks/use-toast.ts`

**Description**: Hook for displaying toast notifications.

**Returns**: Toast functions

**Usage**:
```tsx
const { toast } = useToast();
toast({
  title: "Success",
  description: "Action completed",
});
```

---

## Utilities

### `utils.ts`

**Location**: `src/lib/utils.ts`

**Description**: Utility functions, primarily for className merging.

**Functions**:
- `cn(...classes)`: Merges Tailwind classes using `clsx` and `tailwind-merge`

**Usage**:
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

---

## Component Patterns

### Composition Pattern

Components are composed together:
```tsx
<Page>
  <Section>
    <Component />
  </Section>
</Page>
```

### Props Pattern

Most components accept:
- `className`: Additional CSS classes
- `children`: Child elements
- Component-specific props

### Styling Pattern

- Tailwind utility classes
- CSS variables for theming
- Conditional classes via `cn()` utility

### State Pattern

- Local state: `useState`
- URL state: React Router hooks
- Form state: React Hook Form
- Server state: TanStack Query

---

## Best Practices

1. **Component Size**: Keep components focused and small
2. **Reusability**: Extract reusable logic into hooks
3. **Type Safety**: Use TypeScript for props and state
4. **Accessibility**: Use semantic HTML and ARIA attributes
5. **Performance**: Memoize expensive computations
6. **Styling**: Use Tailwind classes, avoid inline styles
7. **Naming**: Use descriptive, clear names

---

This documentation covers all major components. For specific implementation details, refer to the source code in `src/components/`.

