<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## What this is

Nick Crews' personal site at nickcrews.org. Next.js 16 App Router,
TypeScript, CSS Modules, pnpm. Statically generated; deployed on
Vercel.

The blog lives in this repo at `/blog`. Posts are MDX files in
`src/content/`; the filename is the slug. The old standalone nuck.blog
source has been folded into this app.

## Commands

```bash
pnpm install     # one-time
pnpm dev         # local dev at http://localhost:3000
pnpm build       # production build (use this to verify edits compile)
pnpm lint        # eslint
```

There are no tests yet.

## Content sources

There is no CMS or database.

- **Projects**: typed array in `src/lib/projects.ts`. Tags are a
  closed `ProjectTag` union so typos are compile errors. Order is
  manual, newest-first.
- **Posts**: MDX files in `src/content/`. Each file exports `metadata`
  with `title`, ISO `date`, and optional `summary`. Posts are listed
  newest-first by `src/lib/posts.ts` and statically generated.

## Architecture

- `src/app/` — App Router routes. Pages are Server Components by
  default. CSS Modules co-located per route.
- `src/lib/site.ts` — canonical site config. `NEXT_PUBLIC_SITE_URL`
  overrides the prod default; consumed by sitemap, OG metadata, and the
  site's links. Public email, social handles, and `blogUrl` live here too.
- `src/app/components/` — site-wide chrome (header, footer).
- `src/app/blog/` — essay index and statically generated post pages.
- `src/app/rss.xml/route.ts` — statically generated RSS feed.
- `next.config.ts` — MDX support through `@next/mdx`.

## SEO is wired via App Router conventions

`app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`, and
`app/icon.tsx` are all standard Next 16 file conventions. Don't bolt on
`next-seo` or similar.

## Design

The site is deliberately plain and document-like, inspired by early
personal essay sites. It uses a narrow text column, system fonts, white
backgrounds, ordinary underlined links, and minimal header/footer chrome.
There is no component design system, custom webfont stack, decorative
surface treatment, or animation layer.

## Voice + design conventions

These are settled site conventions. Don't relitigate.

- **Voice**: clever-but-restrained. One understated beat per paragraph
  max. No em dashes in user-facing copy (use periods, parens, or
  restructured sentences). Code comments may use em dashes.
- **Prefer native text links.** Use `next/link` for internal routes and
  plain anchors for external destinations. Do not introduce button-like
  navigation, icon-only links, cards, pills, gradients, or shadows.
- **Keep the document narrow.** The shared width is defined by
  `--page-width` in `src/app/globals.css`.
- **Projects use a flat text list**, not cards or category groups. Tags
  remain typed content metadata but are not presented as UI chips.
