# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Install dependencies
pnpm install

# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Code linting with Biome
pnpm lint

# Code formatting with Biome
pnpm format
```

## Architecture Overview

This is a Next.js 15 portfolio website built with TypeScript and Tailwind CSS. The project uses a feature-based architecture pattern.

### Key Architectural Decisions

1. **Feature-based Structure**: Components are organized under `src/features/profile/` with dedicated components and routes subdirectories
2. **Path Aliases**: Uses `~/` as an alias for `./src/` directory (configured in tsconfig.json)
3. **Styling**: Tailwind CSS 4 with PostCSS, using prose typography for content sections
4. **Code Quality**: Biome for linting and formatting (replaces ESLint/Prettier)

### Component Organization

- **Page Components**: Located in `src/app/`, with the main page delegating to the Profile feature
- **Feature Components**: `src/features/profile/components/` contains all profile-related components (Awards, Contact, CurrentStatus, etc.)
- **Layout**: Root layout in `src/app/layout.tsx` provides the main structure with header metadata and footer
- **Shared Components**: Common components like Footer are in `src/components/`

### Routing

- Main profile page is served at the root path
- Legacy `/posts/*` paths redirect to `https://shrry2.me/posts/*` (configured in next.config.js)

### Metadata and SEO

- OpenGraph and Twitter card metadata configured in the root layout
- Custom OpenGraph image generation in `src/app/opengraph-image.tsx`
- Sitemap and robots.txt configuration in respective files