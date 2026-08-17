import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import { cache } from "react";
import { notFound } from "next/navigation";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export type PostMetadata = {
    title: string;
    date: string;
    summary?: string;
};

export type Post = PostMetadata & { slug: string };

export const getPostSlugs = cache(async (): Promise<string[]> => {
    const entries = await fs.readdir(CONTENT_DIR);
    return entries
        .filter((name) => name.endsWith(".mdx"))
        .map((name) => name.replace(/\.mdx$/, ""));
});

export const getPost = cache(async (slug: string) => {
    const slugs = await getPostSlugs();
    if (!slugs.includes(slug)) notFound();

    const { default: Content, metadata } = await import(`@/content/${slug}.mdx`);
    return {
        slug,
        metadata: metadata as PostMetadata,
        Content: Content as ComponentType,
    };
});

export const getPosts = cache(async (): Promise<Post[]> => {
    const slugs = await getPostSlugs();
    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const { metadata } = await getPost(slug);
            return { slug, ...metadata };
        }),
    );

    return posts.sort((a, b) => b.date.localeCompare(a.date));
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
});

export function formatDate(date: string): string {
    return dateFormatter.format(new Date(date));
}
