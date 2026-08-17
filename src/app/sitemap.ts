import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/posts";
import { SITE, absoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getPosts();

    return [
        { url: SITE.url, lastModified: posts[0] ? new Date(posts[0].date) : undefined, changeFrequency: "weekly", priority: 1 },
        { url: absoluteUrl("/blog"), lastModified: posts[0] ? new Date(posts[0].date) : undefined, changeFrequency: "weekly", priority: 0.8 },
        { url: absoluteUrl("/projects"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.2 },
        ...posts.map((post) => ({
            url: absoluteUrl(`/blog/${post.slug}`),
            lastModified: new Date(post.date),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];
}
