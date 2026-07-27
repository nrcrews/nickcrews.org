import type { NextConfig } from "next";

// Keep in sync with SITE.blogUrl in src/lib/site.ts. next.config runs
// outside the app bundle, so it doesn't import from src.
const BLOG_URL = "https://nuck.blog";

const nextConfig: NextConfig = {
  /*
   * The blog moved to nuck.blog. Old post URLs are still linked from the
   * wild, so /blog and everything under it goes to the new home.
   * `/blog/:slug*` also matches bare `/blog`.
   *
   * Old feed subscribers land on nuck.blog's own feed.
   */
  async redirects() {
    return [
      { source: "/blog/:slug*", destination: BLOG_URL, permanent: true },
      { source: "/rss.xml", destination: `${BLOG_URL}/rss.xml`, permanent: true },
    ];
  },
};

export default nextConfig;
