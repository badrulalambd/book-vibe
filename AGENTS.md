<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Book Vibe Agent Guide

## Project Shape

- Use the Next.js App Router under `src/app`; keep shared UI in `src/components` and shared client state in `src/context`.
- Prefer the existing `@/*` import alias for internal modules. Server Components are the default; add `'use client'` only for state, effects, event handlers, or browser-only APIs.
- The book catalogue is currently stored in [`public/booksData.json`](public/booksData.json). Keep data loading and recommendation logic separate from presentational components.
- Use `next/link` for internal navigation and `next/image` for book artwork when adding or updating UI.
- Follow the existing Tailwind CSS v4 and DaisyUI styling approach in [`src/app/globals.css`](src/app/globals.css); avoid introducing another styling system.

## Commands

```bash
npm run lint
npm run build
npm run dev
```

Run lint after focused edits and build when changing routes, layouts, data loading, or shared context.

## Quick Suggestions

When adding a quick-suggestion interaction, keep the selection deterministic and derived from the catalogue rather than duplicating book data in the component. Keep transient selection state at the smallest client boundary, provide a useful empty or loading state, and make the trigger a semantic keyboard-accessible button. Reuse the existing book card and navigation patterns instead of creating a parallel recommendation UI.

## Useful References

- Main page: [`src/app/page.tsx`](src/app/page.tsx)
- Shared navigation: [`src/components/navbar/Navbar.tsx`](src/components/navbar/Navbar.tsx)
- Book grid entry point: [`src/components/book/BooksGrid.tsx`](src/components/book/BooksGrid.tsx)
- Theme/context boundary: [`src/context/ThemeContext.tsx`](src/context/ThemeContext.tsx)
- Next.js project notes: [`README.md`](README.md)
