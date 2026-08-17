import type { Metadata } from "next";
import Link from "next/link";

import { formatDate, getPosts } from "@/lib/posts";
import { BLOG_DESCRIPTION, RSS_ALTERNATE } from "@/lib/site";
import styles from "./blog.module.css";

export const metadata: Metadata = {
    title: "Essays",
    description: BLOG_DESCRIPTION,
    alternates: { canonical: "/blog", types: RSS_ALTERNATE },
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className={styles.page}>
            <header>
                <h1>Essays</h1>
                <p>{BLOG_DESCRIPTION}</p>
            </header>
            <ul className={styles.list}>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        {post.summary ? <p>{post.summary}</p> : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}
