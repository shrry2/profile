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

This is a Next.js 15 portfolio website for Takaki Takeuchi (竹内 貴紀), a freelance web engineer. The project uses a feature-based architecture pattern with TypeScript and Tailwind CSS.

### Key Architectural Decisions

1. **Feature-based Structure**: Components are organized under `src/features/profile/` with dedicated `components/` and `routes/` subdirectories
2. **Path Aliases**: Uses `~/` as an alias for `./src/` directory (configured in tsconfig.json)
3. **Styling**: Tailwind CSS 4 with PostCSS and `@tailwindcss/typography` plugin for prose content
4. **Code Quality**: Biome for both linting and formatting (replaces ESLint/Prettier)

### Component Organization Pattern

The codebase follows a strict feature-based hierarchy:

```
src/
├── app/                    # Next.js App Router (pages, layouts, metadata)
│   ├── page.tsx           # Root page (delegates to Profile feature)
│   └── layout.tsx         # Root layout with metadata
├── features/profile/      # Profile feature module
│   ├── components/        # Feature-specific components
│   ├── routes/            # Page-level components (Profile.tsx)
│   └── index.ts           # Public API exports
└── components/            # Shared components (Footer, etc.)
```

**Key Pattern**: Page components in `src/app/` delegate rendering to feature route components (e.g., `app/page.tsx` → `features/profile/routes/Profile.tsx`). This keeps App Router concerns separate from feature logic.

### Import Conventions

Always use the `~/` path alias for internal imports:
```typescript
// ✅ Correct
import { Profile } from '~/features/profile'

// ❌ Avoid
import { Profile } from '../../../features/profile'
```

### Routing and Redirects

- Main profile page is served at the root path (`/`)
- Legacy `/posts/*` paths permanently redirect to `https://shrry2.me/posts/*` (configured in next.config.js)

### Metadata and SEO Configuration

- OpenGraph and Twitter card metadata: Root layout (`src/app/layout.tsx`)
- Dynamic OpenGraph image generation: `src/app/opengraph-image.tsx`
- Sitemap generation: `src/app/sitemap.ts`
- Robots configuration: `src/app/robots.ts`

### Styling Guidelines

- Tailwind CSS 4 uses PostCSS-based imports in `src/styles/globals.css`
- Typography plugin provides prose styles for content sections
- When using Tailwind-specific at-rules, add Biome ignore comments:
  ```css
  /* biome-ignore lint/suspicious/noUnknownAtRules: Tailwind required syntax */
  @plugin '@tailwindcss/typography';
  ```