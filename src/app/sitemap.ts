import type { MetadataRoute } from "next";

import { SITE, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: SITE.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: absoluteUrl("/projects"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ];
}
