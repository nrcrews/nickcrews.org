# nickcrews.org

My personal site. Next.js 16, App Router, TypeScript.

The blog lives in this app at `/blog`. Posts are MDX files in
`src/content/`.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Add a post

Add an `.mdx` file to `src/content/`. Export a `metadata` object with a
title, ISO date, and optional summary. The filename becomes the URL slug.

## Add a project

Edit `src/lib/projects.ts`. Tags are typed (`ai`, `agent`, `web`, `ios`,
`blockchain`, `blog`) so typos are compile errors.

## Deploy

Pushed to Vercel. Set `NEXT_PUBLIC_SITE_URL` for canonical URLs on
previews if you want them to resolve to a custom domain.
