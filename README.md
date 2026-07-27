# nuckcrews.com

My personal site. Next.js 16, App Router, TypeScript.

The blog lives at [nuck.blog](https://nuck.blog), not here. This site
just links out to it.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Change where the blog points

`SITE.blogUrl` in `src/lib/site.ts` drives the header, home CTA,
footer, and 404 links. `BLOG_URL` in `next.config.ts` drives the
redirects from the old `/blog` and `/rss.xml` routes (the latter goes
to the blog's own feed). Update both.

## Add a project

Edit `src/lib/projects.ts`. Tags are typed (`ai`, `agent`, `web`, `ios`,
`blockchain`, `blog`) so typos are compile errors.

## Deploy

Pushed to Vercel. Set `NEXT_PUBLIC_SITE_URL` for canonical URLs on
previews if you want them to resolve to a custom domain.
