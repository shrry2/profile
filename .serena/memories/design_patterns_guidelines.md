# Design Patterns and Guidelines

## Architecture Patterns

### Feature-Based Structure
- Organize code by feature/domain, not by file type
- Each feature has its own `components/` and `routes/` directories
- Export public APIs through `index.ts` files
- Keep feature-specific logic contained within feature directory

### Component Hierarchy
```
Feature Module (e.g., profile/)
├── components/     # Feature-specific components
├── routes/         # Page-level components
└── index.ts        # Public API exports
```

## Next.js 15 App Router Patterns

### Page Structure
- `app/page.tsx` delegates to feature route components
- `app/layout.tsx` provides root layout and metadata
- Metadata configuration in layout for SEO

### Metadata Generation
- OpenGraph images: `opengraph-image.tsx`
- Sitemap: `sitemap.ts`
- Robots: `robots.ts`

### Redirects
- Configure in `next.config.js`
- Use for legacy path handling

## Component Patterns

### Functional Components
- Use TypeScript with proper prop typing
- Functional components only (no class components)
- Default exports for page components
- Named exports for reusable components

### Styling Approach
- Tailwind CSS utility classes
- Typography plugin for prose content
- No CSS modules or styled-components
- Global styles in `src/styles/globals.css`

## Import Patterns

### Path Aliases
```typescript
// Use path alias for internal imports
import { Profile } from '~/features/profile'

// Not: import { Profile } from '../../../features/profile'
```

### Feature Exports
```typescript
// features/profile/index.ts
export { Profile } from './routes/Profile'
```

## Biome-Specific Patterns

### Ignore Comments
```typescript
// For Tailwind at-rules
/* biome-ignore lint/suspicious/noUnknownAtRules: Tailwind required syntax */
@plugin '@tailwindcss/typography';
```

## File Naming Conventions
- Components: PascalCase (e.g., `Profile.tsx`, `CurrentStatus.tsx`)
- Config files: kebab-case (e.g., `next.config.js`, `biome.json`)
- Styles: lowercase (e.g., `globals.css`)

## TypeScript Guidelines
- Strict mode enabled
- Use type inference where possible
- Explicit types for props and public APIs
- No `any` types unless absolutely necessary
