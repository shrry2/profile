# Project Overview

## Purpose
竹内 貴紀 (Takaki Takeuchi) のプロフィールサイト - フリーランスWebエンジニアのポートフォリオサイト

## Tech Stack
- **Framework**: Next.js 15.5.4 (App Router with Turbopack)
- **Language**: TypeScript 5.9.3
- **UI Framework**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.13 with Typography plugin
- **Code Quality**: Biome 2.2.4 (linting + formatting)
- **Package Manager**: pnpm 10.12.4

## Key Features
- Modern Next.js 15 with App Router architecture
- Turbopack for fast development builds
- OpenGraph image generation
- Sitemap and robots.txt generation
- Legacy path redirects (/posts/* → https://shrry2.me/posts/*)

## Architecture Pattern
Feature-based architecture with clear separation:
- `/src/app` - Next.js App Router pages and metadata
- `/src/features/profile` - Profile feature module
- `/src/components` - Shared components
- `/src/styles` - Global styles
