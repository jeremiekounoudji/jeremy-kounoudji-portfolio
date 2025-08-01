# Design Document

## Overview

The developer portfolio will be a single-page application (SPA) built with React + Vite + Tailwind CSS, featuring a modern dark theme with smooth scroll animations. The design emphasizes clean typography, strategic use of whitespace, and subtle animations that enhance user experience without being distracting. The portfolio will showcase technical expertise through both content and implementation quality.

## Architecture

### Technology Stack
- **Frontend Framework**: React 18 with Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first styling and consistent design system
- **Animations**: Framer Motion for smooth, performant animations and scroll triggers
- **Icons**: Lucide React for consistent iconography
- **Typography**: Inter font family for excellent readability
- **Build Tool**: Vite with optimized production builds

### Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Badge.jsx
│   └── animations/
│       ├── ScrollReveal.jsx
│       └── AnimatedText.jsx
├── data/
│   ├── projects.js
│   └── skills.js
├── hooks/
│   └── useScrollAnimation.js
├── utils/
│   └── constants.js
└── styles/
    └── globals.css
```

## Components and Interfaces

### Layout Components

#### Header/Navigation
- Fixed header with smooth background blur on scroll
- "Kounoudji Jeremie" logo/name on the left, navigation menu on the right
- Mobile hamburger menu with smooth slide-in animation
- Active section highlighting based on scroll position

#### Hero Section
- Full viewport height with centered content
- Professional avatar/photo of Kounoudji Jeremie with subtle animation
- Animated typing effect for the main title displaying "Kounoudji Jeremie"
- Subtitle showing "Full-Stack Developer | 5+ Years Experience"
- Subtle particle background animation
- Call-to-action buttons with hover effects
- Scroll indicator at the bottom

#### About Section
- Two-column layout (desktop) with additional professional photo and detailed content about Kounoudji Jeremie
- Timeline component showing career progression and experience at Bandesoft Ltd
- Animated counter for 5+ years of experience
- Company logos with hover effects (Bandesoft Ltd prominently featured)

#### Skills Section
- Grid layout showcasing technology categories
- Animated skill bars or circular progress indicators
- Technology icons with hover animations
- Categorized by Frontend, Backend, Mobile, Tools

#### Projects Section
- Masonry or grid layout for project cards
- Filter buttons for project categories (Company vs Personal)
- Project cards with image, description, tech stack, and links
- Modal  view for detailed project information
- Special highlighting for Bandesoft Ltd projects

#### Contact Section
- Contact form with validation
- Social media links with animated icons
- Location and availability information
- Animated background elements

### UI Components

#### Card Component
```jsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}
```

#### Button Component
```jsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
```

#### Badge Component
```jsx
interface BadgeProps {
  text: string;
  variant: 'tech' | 'category' | 'status';
  icon?: React.ReactNode;
}
```

## Data Models

### Project Model
```javascript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'company' | 'personal';
  company?: 'Bandesoft Ltd';
  features: string[];
  challenges: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

### Skill Model
```javascript
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  proficiency: number; // 1-100
  icon: string;
  yearsOfExperience: number;
}
```

### Experience Model
```javascript
interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}
```

## Animation Strategy

### Scroll Animations
- **Intersection Observer API** for triggering animations when elements enter viewport
- **Framer Motion** variants for consistent animation patterns
- **Stagger animations** for lists and grids
- **Parallax effects** for background elements (subtle)

### Animation Patterns
1. **Fade In Up**: Default animation for most content blocks
2. **Slide In**: For navigation and modal elements
3. **Scale**: For interactive elements on hover
4. **Rotate**: For loading states and icons
5. **Typewriter**: For hero text animation

### Performance Considerations
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `will-change` property strategically
- Respect `prefers-reduced-motion` media query
- Lazy load animations outside viewport

## Dark Theme Design System

### Color Palette
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #a3a3a3;
  --text-muted: #737373;
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
  --border: #262626;
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

### Typography Scale
- **Headings**: 48px, 36px, 24px, 20px, 18px
- **Body**: 16px (base), 14px (small)
- **Line Heights**: 1.2 (headings), 1.6 (body)
- **Font Weights**: 300, 400, 500, 600, 700

### Spacing System
- Based on 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

### Layout Adaptations
- **Mobile**: Single column, stacked navigation, touch-optimized buttons
- **Tablet**: Two-column where appropriate, collapsible navigation
- **Desktop**: Multi-column layouts, hover states, larger typography

## Error Handling

### Form Validation
- Real-time validation for contact form
- Clear error messages with appropriate styling
- Success states with confirmation animations

### Loading States
- Skeleton loaders for content sections
- Smooth transitions between loading and loaded states
- Progressive image loading with blur-to-sharp effect

### Fallback Handling
- Graceful degradation for animation failures
- Alternative layouts for missing images
- Error boundaries for React components

## Testing Strategy

### Unit Testing
- Component rendering tests with React Testing Library
- Animation trigger tests
- Form validation logic tests
- Utility function tests

### Integration Testing
- Navigation flow testing
- Form submission testing
- Responsive behavior testing
- Animation sequence testing

### Performance Testing
- Core Web Vitals monitoring
- Animation performance profiling
- Bundle size optimization
- Image optimization validation

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation testing
- Color contrast validation
- Motion preference respect testing

## Performance Optimization

### Code Splitting
- Route-based code splitting (if multi-page)
- Component lazy loading for below-fold content
- Dynamic imports for heavy libraries

### Asset Optimization
- Image optimization with WebP format
- SVG optimization for icons
- Font subsetting for faster loading
- CSS purging in production

### Caching Strategy
- Service worker for static asset caching
- Browser caching headers
- CDN integration for assets

### Bundle Optimization
- Tree shaking for unused code
- Minification and compression
- Critical CSS inlining
- Preload hints for important resources