# Task Completion Checklist

## Before Marking Task Complete

### 1. Code Quality Checks
```bash
# ALWAYS run before completion
pnpm lint      # Check for linting errors
pnpm format    # Auto-fix formatting issues
```

### 2. Build Verification
```bash
# For significant changes, verify build succeeds
pnpm build
```

### 3. Development Testing
```bash
# Start dev server and manually test changes
pnpm dev
# Visit http://localhost:3000
```

### 4. File Organization
- Ensure new components are in correct feature directory
- Use path aliases (`~/`) for imports
- Follow PascalCase naming for components

### 5. Git Status
```bash
# Review changes before committing
git status
git diff
```

### 6. TypeScript Validation
- No TypeScript errors in editor
- Proper types for props and functions
- Use strict mode compliance

## Common Issues to Check

### Biome Issues
- Fix linting errors before committing
- Use `biome-ignore` comments only when necessary
- Follow indentStyle: space configuration

### Next.js Specific
- Verify App Router patterns are followed
- Check metadata configuration if changed
- Ensure client/server component boundaries are correct

### Styling
- Tailwind classes are valid
- No style conflicts
- Responsive design works properly

## Final Validation
✅ Code quality checks pass (`pnpm lint`, `pnpm format`)  
✅ Build succeeds (`pnpm build`)  
✅ Manual testing completed  
✅ TypeScript errors resolved  
✅ Git changes reviewed  
✅ Documentation updated if needed
