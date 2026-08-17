import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

export default function HomePage() {
    return (
        <div className={styles.page}>
            <figure className={styles.photo}>
                <div
                    className={styles.placeholder}
                    role="img"
                    aria-label="Placeholder for a photo from Nick's phone"
                >
                    Photo goes here
                </div>
                <figcaption>A picture from my phone</figcaption>
            </figure>

            <nav className={styles.links} aria-label="Quick links">
                <strong>Quick links</strong>
                <div className={styles.linkRow}>
                    <Link href="/projects">Projects</Link>
                    <Link href={SITE.blogUrl}>Essays</Link>
                </div>
            </nav>

            <nav className={styles.links} aria-label="Elsewhere">
                <strong>Elsewhere</strong>
                <div className={styles.linkRow}>
                    <a href={SITE.social.github.url}>GitHub</a>
                    <a href={SITE.social.twitter.url}>X</a>
                    <a href={SITE.social.robotnet.url}>RobotNet</a>
                    <Link href="/contact">Email</Link>
                </div>
            </nav>
        </div>
    );
}
