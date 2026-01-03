# Copilot Instructions - PBO Portfolio Website

## Project Overview

Next.js 16 (App Router) portfolio site with Prismic CMS headless integration, using Slice Machine for content modeling. Components are styled with Tailwind CSS v4 + custom design system and animated with Framer Motion.

**Tech Stack**: Next.js 16.1.1, React 19, Tailwind CSS 4.1, Prismic CMS, Framer Motion 12, TypeScript 5.9

## Architecture & Key Concepts

### Content Management (Prismic)

- **Slices Pattern**: Content blocks live in `src/slices/` as reusable components (e.g., `MainStage`, `ContactForm`, `SkillsTable`)
- **Custom Types**: Schema definitions in `customtypes/` define Prismic document types (home, page, project, testimonial, etc.)
- **Client Setup**: Use `createClient()` from `src/prismicio.ts` for all Prismic queries
  - Production uses ISR with `cache: 'force-cache'` and `tags: ['prismic']`
  - Dev mode uses 5-second revalidation
- **Routes**: Only two route patterns configured:
  - `type: "home"` → `/`
  - `type: "page"` → `/:uid`

### Component Architecture

- **Two-tier structure**:
  - `src/components/`: App-level components (Header, Footer, ContactForm)
  - `src/components/elements/`: Design system primitives (Button, Input, Card, etc.)
- **Radix UI + CVA Pattern**: Elements use Radix primitives with `class-variance-authority` for variant management (see [Button.tsx](src/components/elements/Button.tsx) lines 6-35)
- **Styling Helper**: Always use `cn()` utility from `src/lib/utils.ts` to merge Tailwind classes

### State & Context

- **Global Context** (`src/context/store.tsx`): Manages `mainMenu` toggle state and wraps app with:
  - `NextUIProvider` for NextUI components (⚠️ deprecated, consider migrating to HeroUI)
  - `ThemeProvider` (next-themes) with class-based dark mode
- Access via `useGlobalContext()` hook

### File & Folder Conventions

- **Folder names**: Always lowercase (e.g., `components/`, `context/`, `lib/`, `slices/`)
- **Component files**: PascalCase for React components (e.g., `Button.tsx`, `MainMenu.tsx`)
- **Utility/config files**: camelCase or lowercase (e.g., `utils.ts`, `prismicio.ts`)
- **Slice folders**: PascalCase to match Prismic slice names (e.g., `slices/MainStage/`)
- **Directory structure**:
  - `src/app/` - Next.js App Router (pages, layouts, route handlers only)
  - `src/components/` - Reusable React components
  - `src/components/elements/` - Design system primitives
  - `src/context/` - React Context providers
  - `src/lib/` - Utility functions and helpers
  - `src/slices/` - Prismic slice components
  - `src/types/` - TypeScript type definitions
  - `customtypes/` - Prismic custom type schemas (root level)
  - `public/` - Static assets

### Styling System

- **Tailwind v4 CSS-first config**: Theme defined in [globals.css](src/app/globals.css) using `@theme` directive (no JS config)
- **Custom Color Palette**:
  - Primary: `cyan` (#3BF6EB), `blue` (#3BBFF6)
  - Accent: `magenta` (#F63BCD)
  - Base: `black` (#0D1F2D), `white` (#FFFFFF)
- **Semantic UI tokens**: `muted`, `accent`, `popover`, `ring`, `input` defined with dark mode overrides
- **Dark Mode**: Uses `class` strategy via `next-themes`
- **Typography**: Montserrat font loaded as CSS variable `--font-montserrat`
- **Animation utilities**: Custom `@utility` rules port `tailwindcss-animate` (animate-in, fade-in, zoom-in, etc.)

### Data Flow

1. **Page Rendering**: `src/app/[uid]/page.tsx` fetches page by UID → renders via `<SliceZone>` with slice components
2. **Revalidation**: POST to `/api/revalidate` triggers cache invalidation via `revalidateTag('prismic', { expire: 0 })`
3. **Preview Mode**: `/api/preview` enables draft content viewing; `/api/exit-preview` disables

## Critical Workflows

### Development

```bash
pnpm dev              # Next.js dev server (localhost:3000) - uses Turbopack by default
pnpm slicemachine     # Prismic Slice Machine editor (http://localhost:9999)
pnpm build            # Production build (also uses Turbopack)
pnpm lint             # Run ESLint directly (next lint removed in Next.js 16)
```

### Adding New Slices

1. Create/edit in Slice Machine UI
2. Generate TypeScript types: Slice Machine handles this automatically
3. Implement component in `src/slices/[SliceName]/index.tsx`
4. Export in `src/slices/index.ts`

### Image Handling

- Use `<PrismicNextImage>` for Prismic images (auto-optimized)
- Allowed image domains in [next.config.js](next.config.js): `images.prismic.io`, `philippboue.de`, `localhost`

### Forms & Netlify

- Contact form uses Netlify Forms (see [ContactForm.tsx](src/components/ContactForm.tsx) line 36: `data-netlify="true"`)
- Form submissions redirect to `/success` page

## Conventions

### Next.js 16 Async APIs (IMPORTANT)

- **`params` is now a Promise**: Always `await params` in page/layout components:

```tsx
export default async function Page({
	params,
}: {
	params: Promise<{ uid: string }>;
}) {
	const { uid } = await params;
	// ...
}
```

- **`revalidateTag` requires 2 arguments**: Use `revalidateTag("tag", "max")` or `revalidateTag("tag", { expire: 0 })`
- **`viewport`/`themeColor` in separate export**: Use `generateViewport()` instead of including in metadata

### Client/Server Components

- **"use client" markers**: Required for:
  - Framer Motion animations (all slices with animations)
  - Context consumers (`useGlobalContext()`)
  - Interactive components with state/effects
- **Server by default**: Page components, layouts use async/await for data fetching

### Animation Pattern

Standard Framer Motion setup in slices (see [MainStage/index.tsx](src/slices/MainStage/index.tsx)):

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
const mainControls = useAnimation();

useEffect(() => {
	if (isInView) mainControls.start("visible");
}, [isInView]);
```

### Type Safety

- Prismic generates types in `prismicio-types.d.ts`
- Slice props typed as `SliceComponentProps<Content.[SliceName]Slice>`
- Use `React.ReactElement` instead of deprecated `JSX.Element` (React 19)
- **Never use `any`** - always use proper types from Prismic or define explicit interfaces
- Use `type` imports for type-only imports: `import type { FC } from "react"`
- For Prismic image fields, use `ImageField` from `@prismicio/client`

## Code Quality Standards

### Philosophy

This codebase adheres to **senior-level, production-grade standards**:

- Write sophisticated, maintainable code that follows framework best practices
- Prioritize type safety, performance, and security in all decisions
- Follow conventions established by Next.js, React, and Prismic documentation

### TypeScript Best Practices

- **No `any` types**: Use proper types, `unknown`, or define explicit interfaces
- **Prefer `type` imports**: Use `import type { X }` for type-only imports (better tree-shaking)
- **Use primitive types**: `string` not `String`, `number` not `Number`
- **Leverage Prismic types**: Import `Content` from `@prismicio/client` for document types
- **Filter undefined**: Use type guards when mapping arrays that may contain undefined

### React Best Practices

- **No unnecessary React imports**: JSX transform (React 17+) doesn't require `import React`
- **Use `type` keyword**: `import type { FC } from "react"` instead of `import { FC }`
- **Prefer named exports**: For components that may be tree-shaken
- **Co-locate related code**: Keep hooks, types, and components together when specific to one feature

### Accessibility (a11y)

- All interactive elements must have accessible names (`aria-label`, visible text, or `aria-labelledby`)
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<section>`)
- Include `aria-expanded` for toggleable elements
- Ensure color contrast meets WCAG 2.1 AA standards

### Performance

- **Use Next.js Image**: Always use `<PrismicNextImage>` or `next/image` for images
- **Lazy load below-fold content**: Use `loading="lazy"` or dynamic imports
- **Minimize client components**: Keep "use client" usage to the smallest necessary scope
- **Avoid layout shifts**: Define explicit dimensions for images and containers

### Security

- **Sanitize user input**: Never render untrusted content without sanitization
- **Use `rel="noopener"` for external links**: Prevents tab-nabbing attacks
- **Environment variables**: Never expose secrets client-side (only `NEXT_PUBLIC_*` are safe)
- **CSP headers**: Consider implementing Content Security Policy for production

## Integration Points

- **CMS**: Prismic repository `philippboue-de` (see [slicemachine.config.json](slicemachine.config.json))
- **Deployment**: Configured for Netlify (forms + CLI in dependencies)
- **Analytics/SEO**: OpenGraph metadata generated from Prismic `settings` singleton

## Common Pitfalls

- Don't query Prismic in client components - fetch in server components or route handlers
- Always add new slice components to the exports in `src/slices/index.ts`
- Image paths must match remotePatterns in next.config.js
- NextUI package is deprecated - use @heroui/react for new components

## Known Issues & TODOs

- [ ] **NextUI deprecated**: Consider migrating to `@heroui/react` (the successor package)
- [ ] **Playwright testing**: Not yet configured - can be added for E2E testing
