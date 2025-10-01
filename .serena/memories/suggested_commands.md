# Suggested Commands

## Development Commands

### Package Management
```bash
# Install dependencies
pnpm install
```

### Development Server
```bash
# Start dev server with Turbopack (http://localhost:3000)
pnpm dev
```

### Build and Production
```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Code Quality
```bash
# Run linter (check only)
pnpm lint

# Run formatter and auto-fix issues
pnpm format
```

## Git Commands (macOS/Darwin)
```bash
# Standard git workflow
git status
git add .
git commit -m "message"
git push

# Branch management
git branch
git checkout -b feature/name
```

## File System (macOS/Darwin)
```bash
# List files
ls -la

# Navigate directories
cd path/to/dir

# Search files
find . -name "*.tsx"

# Search content
grep -r "pattern" src/
```

## Next.js Specific
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```
