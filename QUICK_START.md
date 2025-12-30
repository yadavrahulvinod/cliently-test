# Quick Start Guide

A quick reference guide for developers working on the Cliently Brand Builders website.

## 🚀 Getting Started (5 Minutes)

```bash
# 1. Navigate to project directory
cd cliently-brand-builders-main

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:8080
```

## 📁 Key Files & Locations

| File/Folder | Purpose |
|-------------|---------|
| `src/App.tsx` | Main app component, routing setup |
| `src/main.tsx` | Application entry point |
| `src/pages/` | Page components (Home, About, Contact, etc.) |
| `src/components/` | Reusable components |
| `src/components/ui/` | shadcn/ui components |
| `src/assets/` | Images, logos, media files |
| `src/index.css` | Global styles, CSS variables |
| `tailwind.config.ts` | Tailwind configuration |
| `vite.config.ts` | Vite/build configuration |

## 🎨 Common Tasks

### Add a New Page

1. Create page component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/Header.tsx`

### Add a New Component

1. Create component in `src/components/NewComponent.tsx`
2. Import and use:
   ```tsx
   import NewComponent from '@/components/NewComponent';
   ```

### Modify Styles

- **Global styles**: Edit `src/index.css`
- **Component styles**: Use Tailwind classes
- **Theme colors**: Modify CSS variables in `src/index.css`
- **Tailwind config**: Edit `tailwind.config.ts`

### Add a New Route

```tsx
// In src/App.tsx
<Route path="/new-route" element={<NewPage />} />
```

### Use UI Components

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Button variant="default">Click me</Button>
<Card>Content</Card>
```

## 🛠 Common Commands

```bash
# Development
npm run dev          # Start dev server (port 8080)

# Building
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Component Quick Reference

### Header Component
```tsx
import Header from '@/components/Header';
<Header />
```

### Footer Component
```tsx
import Footer from '@/components/Footer';
<Footer />
```

### Button Component
```tsx
import { Button } from '@/components/ui/button';
<Button variant="outline" size="lg">Text</Button>
```

### Link Component (React Router)
```tsx
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>
```

## 🎨 Styling Quick Reference

### Tailwind Classes
```tsx
// Layout
className="container mx-auto px-4"

// Colors
className="bg-background text-foreground"

// Spacing
className="p-4 m-2 gap-4"

// Responsive
className="md:flex lg:grid"
```

### CSS Variables
```css
/* Use in Tailwind classes */
bg-background
text-foreground
border-border

/* Or in CSS */
background: hsl(var(--background));
```

### Glassmorphism
```tsx
<div className="glass-strong">
  Content with glass effect
</div>
```

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## 🔗 Important Links

- **WhatsApp**: https://wa.me/918356891147
- **Email**: cliently.live@gmail.com
- **Phone**: +91 83568 91147

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.ts
server: {
  port: 3000, // Change to available port
}
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear build cache
rm -rf dist
npm run build
```

## 📚 Documentation Files

- **README.md** - Main documentation
- **ARCHITECTURE.md** - Technical architecture
- **COMPONENTS.md** - Component documentation
- **QUICK_START.md** - This file

## 💡 Tips

1. **Use Path Aliases**: Import with `@/` instead of relative paths
   ```tsx
   import Button from '@/components/ui/button';
   ```

2. **Hot Reload**: Changes auto-reload in browser (HMR)

3. **TypeScript**: Get autocomplete and type checking

4. **Tailwind IntelliSense**: Install VS Code extension for autocomplete

5. **Component Structure**: Follow existing patterns

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)

---

**Need Help?** Check the main README.md or ARCHITECTURE.md for detailed information.

