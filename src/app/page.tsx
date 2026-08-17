import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SITE } from "@/lib/site";
import mainPhoto from "./main-photo.jpg";
import styles from "./page.module.css";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

export default function HomePage() {
    return (
        <div className={styles.page}>
            <figure className={styles.photo}>
                <Image
                    src={mainPhoto}
                    alt="A person lying in the grass beneath a tree under a blue sky"
                    className={styles.photoImage}
                    sizes="(max-width: 450px) calc(100vw - 40px), 410px"
                    placeholder="blur"
                    preload
                />
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
                    <Link href="/contact">Email</Link>
                </div>
            </nav>
        </div>
    );
}
