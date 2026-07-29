<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## What this is

Nick Crews' personal site at nuckcrews.com. Next.js 16 App Router,
TypeScript, CSS Modules, pnpm. Statically generated; deployed on
Vercel.

The blog is **not** in this repo. It lives at https://nuck.blog
(`SITE.blogUrl`). Every "blog" affordance here is an outbound link:
header nav, home CTA, footer, 404. Don't add post routes, markdown
parsing, or a feed back to this site.

## Commands

```bash
pnpm install     # one-time
pnpm dev         # local dev at http://localhost:3000
pnpm build       # production build (use this to verify edits compile)
pnpm lint        # eslint
```

There are no tests yet.

## Content sources

Projects are the only in-repo content. There is no CMS or database.

- **Projects**: typed array in `src/lib/projects.ts`. Tags are a
  closed `ProjectTag` union so typos are compile errors. Order is
  manual, newest-first.

## Architecture

- `src/app/` — App Router routes. Pages are Server Components by
  default. CSS Modules co-located per route.
- `src/lib/site.ts` — canonical site config. `NEXT_PUBLIC_SITE_URL`
  overrides the prod default; consumed by sitemap, OG metadata, and the
  footer's social/contact links. Public email, social handles, and
  `blogUrl` live here too.
- `src/ui/button/` — `LinkButton` + `Button` ports of the robotnet
  "lab" button. Variants: `brand` (cloudy-blue CTA), `secondary` (paper),
  `ghost` (transparent). Sizes: `sm` / `md` / `lg`. Internal hrefs
  auto-route through `next/link`.
- `src/ui/glyph/` — single-color SVGs in `/public` rendered as CSS
  masks so the icon picks up `currentColor`. To add an icon: drop the
  SVG in `/public`, add one row to `GLYPH_SRC` in `glyph.tsx`, and
  extend the `GlyphType` union.
- `src/app/components/` — site-wide chrome (header, footer).
- `next.config.ts` — 308s from the retired `/blog`, `/blog/:slug`, and
  `/rss.xml` routes to nuck.blog. Keep `BLOG_URL` there in sync with
  `SITE.blogUrl`.

## SEO is wired via App Router conventions

`app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`, and
`app/icon.tsx` are all standard Next 16 file conventions. Don't bolt on
`next-seo` or similar.

## Design system

A slimmed adaptation of the robotnet "lab" design system at
`../rbnx/RobotNetworks/robotnet-web/src/app/lab/` (external to this
repo, read-only reference). Late-2000s Aqua/Web-2.0 feel: paper
backgrounds, cloudy-blue palette, hairline borders, glassy gradients,
brand-gradient wordmark.

Tokens live in `src/app/globals.css` at `:root` (not scoped to
`[data-lab]` like the original). Three fonts loaded in
`layout.tsx`: Geist (display), Inter (body), JetBrains Mono.

## Voice + design conventions

These are settled site conventions. Don't relitigate.

- **Voice**: clever-but-restrained. One understated beat per paragraph
  max. No em dashes in user-facing copy (use periods, parens, or
  restructured sentences). Code comments may use em dashes.
- **No mono-uppercase "eyebrow" tags above page titles.** The lab uses
  them; this site doesn't.
- **Use `LinkButton` for nav-like UI**, not plain `<a>`. Header nav,
  back links, CTAs are all buttons.
- **Chevron glyphs for back-nav**, not arrow characters (`← All
  projects` is wrong; use `<Glyph type="chevronLeft" />` as the
  `leadingIcon`). External-link rows still use `↗`, including the
  outbound blog buttons.
- **Projects use a flat tag-based list**, not category groups. Adding
  a new tag means extending the `ProjectTag` union.

## Cursor Cloud specific instructions

- Standard commands are in the `## Commands` section above (`pnpm dev`,
  `pnpm build`, `pnpm lint`). Node 22 + pnpm 10 are already installed;
  the startup update script runs `pnpm install`.
- Run `pnpm dev` in a long-lived tmux session (it does not exit). The
  dev server serves at `http://localhost:3000`; hot reload picks up new
  `content/posts/*.md` files without a restart.
- `pnpm lint` currently reports pre-existing `react/no-unescaped-entities`
  errors and one unused-var warning in committed source. These are not
  caused by the environment. Do not "fix" them unless the task asks.
