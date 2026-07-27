import Link from "next/link";

import { LinkButton } from "@/ui/button/button";
import { SITE } from "@/lib/site";

import styles from "./site-header.module.css";

export function SiteHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.wordmark}>
                    <span className={styles.wordmarkText}>nuckcrews</span>
                </Link>
                <nav className={styles.nav} aria-label="Primary">
                    <LinkButton href="/" variant="ghost" size="sm">
                        Home
                    </LinkButton>
                    <LinkButton
                        href={SITE.blogUrl}
                        variant="ghost"
                        size="sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Blog ↗
                    </LinkButton>
                    <LinkButton href="/projects" variant="ghost" size="sm">
                        Projects
                    </LinkButton>
                </nav>
            </div>
        </header>
    );
}
