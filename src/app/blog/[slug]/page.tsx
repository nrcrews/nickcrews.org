import type { Metadata } from "next";
import Link from "next/link";

import { formatDate, getPost, getPostSlugs } from "@/lib/posts";
import { absoluteUrl, RSS_ALTERNATE, SITE } from "@/lib/site";
import styles from "../blog.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
    const slugs = await getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
    props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
    const { slug } = await props.params;
    const { metadata } = await getPost(slug);
    const url = absoluteUrl(`/blog/${slug}`);

    return {
        title: metadata.title,
        description: metadata.summary,
        alternates: {
            canonical: `/blog/${slug}`,
            types: RSS_ALTERNATE,
        },
        openGraph: {
            type: "article",
            siteName: SITE.name,
            title: metadata.title,
            description: metadata.summary,
            url,
            locale: SITE.locale,
            publishedTime: new Date(metadata.date).toISOString(),
            authors: [SITE.author],
        },
    };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
    const { slug } = await props.params;
    const { metadata, Content } = await getPost(slug);

    return (
        <article className={styles.post}>
            <Link href="/blog" className={styles.back}>
                All essays
            </Link>
            <header>
                <h1>{metadata.title}</h1>
                <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
            </header>
            <div className={styles.content}>
                <Content />
            </div>
        </article>
    );
}
