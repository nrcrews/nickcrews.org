import Link from "next/link";

import { SITE } from "@/lib/site";

import styles from "./site-header.module.css";

export function SiteHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.wordmark}>
                    Nick Crews
                </Link>
                <nav className={styles.nav} aria-label="Primary">
                    <Link href={SITE.blogUrl}>
                        essays
                    </Link>
                    <Link href="/projects">projects</Link>
                    <Link href="/contact">email</Link>
                </nav>
            </div>
        </header>
    );
}
