# Code Style and Conventions

## Code Quality Tools
- **Biome**: Used for both linting and formatting (replaces ESLint + Prettier)
- Schema version: 2.2.4
- Excluded paths: `.next/`, `.claude/`

## Formatting Rules
- **Indent Style**: Spaces (configured in biome.json)
- **Component Naming**: PascalCase for React components
- **File Naming**: PascalCase for component files (e.g., `Profile.tsx`, `Awards.tsx`)

## Linter Configuration
- Most rules use Biome defaults
- Disabled rule: `correctness.useUniqueElementIds` (turned off)

## TypeScript Configuration
- **Strict Mode**: Enabled
- **Target**: ES5
- **Module**: ESNext with Node resolution
- **JSX**: Preserve (Next.js handles transformation)
- **Force Consistent Casing**: Enabled for cross-platform compatibility

## Styling Conventions
- **Tailwind CSS 4**: PostCSS-based import system
- **Typography Plugin**: `@tailwindcss/typography` for prose styling
- **Global Styles**: Import Tailwind in `src/styles/globals.css`
- **Biome Ignore Comments**: Use for Tailwind-specific at-rules (e.g., `@plugin`)

## Component Patterns
- Functional components with TypeScript
- Feature-based organization
- Export from index files for clean imports
- Use path aliases (`~/`) for internal imports

## Comments
- Use `biome-ignore` comments when necessary (e.g., for Tailwind at-rules)
- Format: `// biome-ignore lint/rule/name: reason`
