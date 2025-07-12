# Portfolio Website - Replit.md

## Overview

This is a modern full-stack portfolio website built with React, Express.js, and PostgreSQL. The application showcases a developer's portfolio with sections for about, skills, education, projects, experience, and contact functionality. It features a beautiful, responsive design with dark/light theme support, custom animations, and a professional UI built with shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

### Major UI/UX Enhancements
- **Responsive Navigation**: Added hamburger menu for mobile devices with smooth transitions
- **Enhanced Navbar**: Full-width navbar without padding, positioned at screen edges
- **Advanced Animations**: Added 3D card effects, hover lifts, shimmer text effects
- **Custom Cursor**: Enhanced cursor effects with better hover interactions for all interactive elements
- **Profile Image**: Integrated user's actual profile image from attached assets

### Content Updates
- **Dynamic Hero Text**: Animated role text that cycles between "Frontend Developer", "Backend Developer", "Full Stack Developer"
- **Enhanced Education Section**: Added Intermediate (MPC) and SSC education entries with proper formatting
- **Project Cards**: Fixed alignment issues, cards now properly align to bottom with consistent spacing
- **Experience Section**: Added "View Internship Details" button for better UI consistency

### Animation & Effects Improvements
- **3D Transformations**: Cards now have perspective-based 3D hover effects
- **Enhanced Glass Morphism**: Improved backdrop blur and hover states for light/dark themes
- **Floating Elements**: Better parallax scrolling effects for background shapes
- **Hover States**: Added scale transforms, shadow effects, and color transitions throughout

### Technical Improvements
- **Mobile Responsiveness**: Hamburger menu with smooth slide animations
- **Theme Enhancement**: Better contrast and visual appeal in both light and dark modes
- **Performance**: Optimized animations with hardware acceleration and proper CSS transitions

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful APIs with structured error handling
- **Middleware**: Custom logging, JSON parsing, CORS handling
- **Development**: Hot reload with tsx for TypeScript execution

### Database Architecture
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Environment-based database URL configuration

## Key Components

### Frontend Components
1. **Layout Components**
   - Navigation with smooth scrolling and theme toggle
   - Custom cursor effects for enhanced UX
   - Floating background shapes for visual appeal
   - Responsive footer with social links

2. **Content Sections**
   - Hero section with animated introductions
   - About section with personal information and stats
   - Skills section with animated progress bars
   - Education section with academic details
   - Projects showcase with technology tags
   - Experience timeline with professional background
   - Contact form with real-time validation

3. **UI Components**
   - Theme provider for dark/light mode switching
   - Toast notifications for user feedback
   - Form components with validation
   - Custom animations and transitions

### Backend Components
1. **API Routes**
   - Contact form submission endpoint with validation
   - Error handling middleware
   - Request logging for debugging

2. **Database Schema**
   - Users table for potential authentication
   - Contacts table for form submissions
   - Zod schemas for runtime validation

3. **Storage Layer**
   - In-memory storage implementation for development
   - Interface-based design for easy database integration

## Data Flow

1. **Contact Form Submission**
   - User fills out contact form on frontend
   - Form data validated using React Hook Form + Zod
   - Data sent to `/api/contact` endpoint via React Query
   - Backend validates data again using shared Zod schemas
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Theme Management**
   - Theme state managed in React context
   - Preference stored in localStorage
   - CSS classes applied to document root
   - Tailwind CSS variables updated automatically

3. **Smooth Scrolling Navigation**
   - Navigation items trigger smooth scroll to sections
   - Custom scroll behavior implemented with native APIs
   - Active section detection for navigation highlighting

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Libraries**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form, Hookform resolvers
- **Utilities**: date-fns, lucide-react icons
- **Development**: Vite, TypeScript, PostCSS

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon serverless, PostgreSQL
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, nodemon equivalent

### Build Dependencies
- **Bundling**: Vite for frontend, esbuild for backend
- **TypeScript**: Shared tsconfig for type checking
- **Development Tools**: Replit-specific plugins for debugging

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with file watching for auto-restart
- **Database**: Neon serverless PostgreSQL
- **Environment**: Replit-optimized with error overlays

### Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: esbuild bundle to `dist/index.js`
- **Static Files**: Served via Express static middleware
- **Process**: Single Node.js process serving both API and static files

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **Development**: `NODE_ENV=development` for dev features
- **Production**: `NODE_ENV=production` for optimizations

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with shared TypeScript configuration and schemas between frontend and backend for type safety and code reuse.

2. **Serverless Database**: Neon PostgreSQL chosen for easy deployment and scaling without infrastructure management.

3. **Component Library**: shadcn/ui selected for high-quality, customizable components with consistent design system.

4. **Type Safety**: Full TypeScript implementation with shared Zod schemas ensuring type safety across the entire application stack.

5. **Performance**: Vite for fast development builds, React Query for efficient data fetching, and optimized production builds.

6. **User Experience**: Custom animations, smooth scrolling, theme switching, and responsive design for professional presentation.