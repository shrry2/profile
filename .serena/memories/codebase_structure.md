# Codebase Structure

## Directory Layout

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Root page (delegates to Profile feature)
│   ├── layout.tsx                # Root layout with metadata
│   ├── opengraph-image.tsx       # OG image generation
│   ├── sitemap.ts                # Sitemap configuration
│   └── robots.ts                 # Robots.txt configuration
├── features/
│   └── profile/                  # Profile feature module
│       ├── components/           # Feature-specific components
│       │   ├── Awards.tsx
│       │   ├── Contact.tsx
│       │   ├── CurrentStatus.tsx
│       │   ├── Favorites.tsx
│       │   ├── History.tsx
│       │   ├── LinkList.tsx
│       │   ├── LongList.tsx
│       │   ├── MemorableEvents.tsx
│       │   └── Skills.tsx
│       ├── routes/               # Feature routes
│       │   └── Profile.tsx       # Main profile page component
│       └── index.ts              # Feature exports
├── components/                   # Shared components
│   └── Footer.tsx
└── styles/
    └── globals.css               # Global styles with Tailwind imports

## Path Aliases
- `~/` resolves to `./src/` (configured in tsconfig.json)
- Example: `import { Profile } from '~/features/profile'`

## Component Organization
- Feature-based structure under `features/profile/`
- Components are organized by feature, not by type
- Routes directory contains page-level components
- Shared components go in top-level `components/` directory
