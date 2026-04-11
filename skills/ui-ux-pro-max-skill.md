---
name: ui-ux-pro-max
description: Advanced UI/UX skill that supercharges Claude Code to build stunning, production-ready websites and applications with professional design patterns, accessibility, and modern best practices.
version: 1.0
---

# UI UX Pro Max Skill

This skill transforms Claude Code into a world-class frontend development tool, combining cutting-edge design principles with production-grade engineering practices.

## Core Principles

### 1. Design-First Thinking
Before writing code, establish a clear design vision:
- **User Journey**: Map the complete user experience from entry to conversion
- **Visual Hierarchy**: Define information architecture and focus areas
- **Aesthetic Direction**: Choose a bold, cohesive design language (not generic)
- **Accessibility First**: Design for all users, all abilities, all contexts

### 2. Modern Component Architecture
Build with reusable, maintainable components:
- Component composition over inheritance
- Props interface design for flexibility
- Compound component patterns for complex UI
- Headless UI patterns for maximum customization

### 3. Responsive & Adaptive Design
- Mobile-first approach with progressive enhancement
- Fluid typography using clamp() and CSS custom properties
- Container queries for true component-level responsiveness
- Touch-friendly targets (minimum 44×44px)

## Technology Stack Best Practices

### React/Next.js
```javascript
// Use modern patterns
- Server Components for data fetching
- Client Components for interactivity
- Suspense boundaries for loading states
- Error boundaries for graceful failures
- useOptimistic for optimistic updates
```

### Styling Architecture
**Tailwind CSS** (Preferred):
- Use @layer for custom utilities
- Extract repeated patterns to components
- Leverage arbitrary values sparingly
- Use CSS variables for dynamic theming

**CSS Modules/Styled Components**:
- BEM-like naming conventions
- CSS custom properties for theming
- Logical properties for RTL support

### State Management
- React hooks for local state (useState, useReducer)
- Context for shared UI state (theme, auth status)
- Server state with TanStack Query or SWR
- URL state for shareable/bookmarkable state
- Form state with React Hook Form or Formik

## Design System Components

### Typography Scale
```css
/* Fluid type scale using clamp() */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.375rem);
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.625rem);
--text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 2rem);
--text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.625rem);
--text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3.25rem);
```

### Spacing System
```css
/* Consistent spacing scale */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-24: 6rem;    /* 96px */
```

### Color System
Create semantic color tokens:
```css
/* Base palette */
--color-primary-50: ...;
--color-primary-500: ...;
--color-primary-900: ...;

/* Semantic tokens */
--color-background: var(--color-neutral-50);
--color-surface: var(--color-white);
--color-text-primary: var(--color-neutral-900);
--color-text-secondary: var(--color-neutral-600);
--color-border: var(--color-neutral-200);
--color-accent: var(--color-primary-500);
--color-success: var(--color-green-500);
--color-error: var(--color-red-500);
```

## UX Patterns Library

### Navigation Patterns
- **Sticky header** with scroll-based opacity/shadow
- **Hamburger menu** with smooth slide-in animation
- **Breadcrumbs** for deep navigation hierarchies
- **Tab navigation** with active state indicators
- **Mega menus** for complex site structures

### Form Patterns
- **Inline validation** with debounced feedback
- **Multi-step forms** with progress indicators
- **Autocomplete** with keyboard navigation
- **File upload** with drag-and-drop and preview
- **Password strength** indicators

### Feedback & Loading
- **Toast notifications** (top-right, auto-dismiss)
- **Loading skeletons** matching content structure
- **Progress bars** for multi-step processes
- **Empty states** with actionable guidance
- **Error states** with recovery suggestions

### Data Display
- **Data tables** with sorting, filtering, pagination
- **Cards** with consistent structure and actions
- **Lists** with virtualization for large datasets
- **Modals/Dialogs** with focus trapping and ESC handling
- **Tooltips/Popovers** with smart positioning

## Animation & Motion

### Micro-interactions
```css
/* Smooth transitions */
transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);

/* Common easing curves */
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Page Transitions
- Fade in/out on route changes
- Slide animations for drawer/sidebar
- Staggered animations for list items
- Parallax effects for hero sections

### Performance Budget
- Limit animations to transform and opacity
- Use will-change sparingly
- Prefer CSS animations over JS when possible
- Use requestAnimationFrame for JS animations

## Accessibility Standards

### WCAG 2.1 Level AA Compliance
1. **Color Contrast**: Minimum 4.5:1 for text, 3:1 for large text
2. **Keyboard Navigation**: All interactive elements accessible via keyboard
3. **Focus Indicators**: Visible focus states on all interactive elements
4. **ARIA Labels**: Proper semantic HTML and ARIA attributes
5. **Alt Text**: Descriptive alt text for all images
6. **Headings**: Logical heading hierarchy (no skipped levels)
7. **Form Labels**: Associated labels for all form controls

### Screen Reader Support
```jsx
// Example: Accessible button
<button
  aria-label="Close dialog"
  onClick={handleClose}
>
  <CloseIcon aria-hidden="true" />
</button>

// Example: Live region for dynamic content
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  {successMessage}
</div>
```

### Keyboard Shortcuts
- Implement common shortcuts (ESC to close, Tab navigation)
- Provide skip links for keyboard users
- Support arrow key navigation in menus and lists

## Performance Optimization

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Image Optimization
```jsx
// Next.js Image component
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // for above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Code Splitting
- Route-based splitting (automatic in Next.js)
- Component-based splitting with React.lazy()
- Dynamic imports for heavy libraries

### Bundle Optimization
- Tree-shaking unused code
- Minimize CSS with PurgeCSS/Tailwind JIT
- Use bundle analyzer to identify large dependencies
- Implement proper caching strategies

## Modern Design Patterns

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Neumorphism
```css
.neumorphic {
  background: #e0e5ec;
  box-shadow: 
    9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}
```

### Dark Mode
```css
/* CSS custom properties approach */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--color-neutral-900);
    --color-text-primary: var(--color-neutral-50);
  }
}

/* Or use data attribute */
[data-theme="dark"] {
  --color-background: var(--color-neutral-900);
  --color-text-primary: var(--color-neutral-50);
}
```

## Typography Excellence

### Font Selection Guidelines
**Avoid**: Inter, Roboto, Arial, system fonts (overused)

**Consider**:
- **Display Fonts**: Syne, Clash Display, Cabinet Grotesk, DM Serif Display
- **Body Fonts**: Zodiak, General Sans, Switzer, Manrope, Plus Jakarta Sans
- **Monospace**: JetBrains Mono, IBM Plex Mono, Fira Code

### Font Loading Strategy
```css
/* Prevent FOUT/FOIT */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-display: swap; /* or 'optional' for critical performance */
  font-weight: 400;
  font-style: normal;
}
```

### Typographic Scale
- Use modular scale (1.25, 1.333, 1.5, 1.618)
- Establish clear hierarchy (h1-h6, body, small)
- Set appropriate line-height (1.5 for body, 1.2 for headings)
- Use letter-spacing for fine-tuning

## Layout Patterns

### Grid Systems
```css
/* Modern CSS Grid */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.grid-asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}
```

### Flexbox Patterns
```css
/* Center anything */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Space between with wrap */
.flex-space-between {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
```

### Container Queries (Modern)
```css
@container (min-width: 400px) {
  .card {
    grid-template-columns: 150px 1fr;
  }
}
```

## Component Library Integration

### Headless UI Libraries
- Radix UI (React primitives)
- Headless UI (Tailwind team)
- React Aria (Adobe)
- Downshift (for autocomplete/select)

### Full Component Libraries
- shadcn/ui (copy-paste components)
- Chakra UI (accessible component system)
- Mantine (full-featured React library)
- Material-UI (Material Design)

## Testing & Quality

### Visual Regression Testing
- Use Percy, Chromatic, or Playwright
- Test critical user flows
- Verify responsive breakpoints

### Accessibility Testing
- axe DevTools browser extension
- pa11y automated testing
- Manual screen reader testing (NVDA, JAWS, VoiceOver)

### Performance Testing
- Lighthouse CI in build pipeline
- WebPageTest for real-world conditions
- Bundle size tracking

## Development Workflow

### Tools & Setup
```json
// Recommended package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:e2e": "playwright test"
  }
}
```

### Code Quality
- ESLint with React/Next.js config
- Prettier for consistent formatting
- TypeScript for type safety
- Husky for pre-commit hooks

## Deployment Checklist

Before deploying to production:
- [ ] SEO meta tags configured (title, description, OG tags)
- [ ] Favicon and app icons added
- [ ] Analytics implemented (GA4, Plausible, etc.)
- [ ] Error tracking set up (Sentry, LogRocket)
- [ ] 404 and error pages designed
- [ ] Accessibility audit passed (Lighthouse, axe)
- [ ] Performance budget met (Core Web Vitals)
- [ ] Security headers configured
- [ ] HTTPS enforced
- [ ] robots.txt and sitemap.xml generated

## Anti-Patterns to Avoid

❌ **Don't**:
- Use inline styles extensively (breaks consistency)
- Ignore responsive design (mobile traffic is majority)
- Skip accessibility (legal and ethical issue)
- Over-engineer simple components
- Use outdated libraries (check npm deprecation)
- Ignore bundle size (impacts performance)
- Copy-paste code without understanding
- Use generic stock photos (use Unsplash, Pexels wisely)

✅ **Do**:
- Build reusable component systems
- Test on real devices (not just DevTools)
- Measure performance continuously
- Document component APIs
- Use semantic HTML
- Implement error boundaries
- Optimize images and assets
- Think about edge cases

## Resources & References

### Design Inspiration
- Dribbble, Behance (visual inspiration)
- Awwwards, CSS Design Awards (web excellence)
- Mobbin (mobile app patterns)
- Land-book (landing page gallery)

### Color Tools
- Coolors.co (palette generator)
- ColorBox by Lyft Design (accessible palettes)
- Palettte.app (color scheme builder)

### Typography
- Google Fonts (free fonts)
- Fontshare by Indian Type Foundry (quality free fonts)
- Adobe Fonts (with Creative Cloud)

### Icons & Graphics
- Heroicons (tailwind team, simple icons)
- Lucide (beautiful consistent icons)
- Phosphor Icons (flexible icon family)
- Undraw, Humaaans (customizable illustrations)

---

## Implementation Guide

When building with this skill:

1. **Understand the Project**: Ask questions about user needs, business goals, technical constraints
2. **Choose Your Stack**: Select appropriate frameworks and tools for the use case
3. **Design First**: Establish visual direction and component architecture
4. **Build Incrementally**: Start with layout, then components, then refinement
5. **Test Continuously**: Check responsiveness, accessibility, performance at each stage
6. **Refine & Polish**: Add animations, optimize assets, perfect details
7. **Document**: Write clear comments and component documentation

Remember: **Every detail matters**. The difference between good and exceptional UI/UX is in the refinement, the micro-interactions, the thoughtful error states, the accessible implementation, and the cohesive design vision executed with precision.

Build interfaces that users love to use. Build experiences that solve real problems. Build code that other developers respect.

---

**Version**: 1.0  
**Last Updated**: April 2026  
**License**: Free to use and modify
