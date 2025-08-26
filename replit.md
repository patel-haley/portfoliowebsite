# Portfolio Website

## Overview

This is a modern portfolio website built as a full-stack application showcasing personal projects, experience, and contact information. The application features a React frontend with a clean, modern design using shadcn/ui components and a Node.js/Express backend for handling contact form submissions. The site includes features like a command palette for navigation, theme switching, and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using React with TypeScript and follows a component-based architecture:

- **Framework**: React 18 with Vite as the build tool for fast development and optimized production builds
- **Routing**: Uses Wouter for lightweight client-side routing
- **UI Components**: Implements shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: Uses React Query (TanStack Query) for server state management and built-in React hooks for local state
- **Forms**: React Hook Form with Zod for form validation and type safety
- **Styling**: Tailwind CSS with CSS variables for theming, supports dark/light mode switching
- **Typography**: Custom font stack including Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono

### Backend Architecture

The backend follows a RESTful API pattern with Express.js:

- **Framework**: Express.js with TypeScript for type safety
- **Storage**: Currently uses in-memory storage with an interface-based design that allows easy migration to database storage
- **API Design**: RESTful endpoints for contact form handling and data retrieval
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot-reload development server with Vite integration for seamless full-stack development

### Key Features

- **Command Palette**: Keyboard shortcut (Ctrl/Cmd+K) navigation system for quick access to different sections
- **Theme System**: Dark/light mode toggle with system preference detection and local storage persistence
- **Contact System**: Form handling with validation, submission feedback, and server-side storage
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Performance**: Optimized build process with code splitting and asset optimization

### Design Patterns

- **Component Composition**: Uses Radix UI's compound component pattern for complex UI elements
- **Hook-based Logic**: Custom hooks for reusable functionality (theme, mobile detection, command palette)
- **Interface Segregation**: Storage layer uses interfaces to allow for easy swapping of storage implementations
- **Error Boundaries**: Proper error handling at component and application levels

## External Dependencies

### Core Technologies
- **React 18** - Frontend framework with concurrent features
- **Node.js/Express** - Backend server framework
- **TypeScript** - Type safety across the entire stack
- **Vite** - Build tool and development server

### UI and Styling
- **Radix UI** - Headless UI components for accessibility and functionality
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **class-variance-authority** - Utility for creating component variants

### Data and Forms
- **React Hook Form** - Form state management and validation
- **Zod** - Runtime type validation and schema definition
- **TanStack React Query** - Server state management and caching

### Database and ORM
- **Drizzle ORM** - Type-safe SQL ORM with PostgreSQL support
- **Neon Database** - Serverless PostgreSQL database (configured but not actively used in current implementation)

### Development Tools
- **Replit Integration** - Development environment plugins and tools
- **PostCSS** - CSS processing with Autoprefixer
- **ESBuild** - Fast JavaScript bundler for production builds

The application is designed to be easily deployable on platforms like Vercel, Netlify, or traditional hosting providers, with the database configuration ready for PostgreSQL deployment when needed.