import { LinkButton } from "@/ui/button/button";
import { SITE } from "@/lib/site";

import styles from "./not-found.module.css";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <div className={styles.page}>
            <span className={styles.code} aria-hidden>
                404
            </span>
            <h1 className={styles.title}>Page not found.</h1>
            <p className={styles.lede}>
                This link doesn't go anywhere. Yet, anyway.
            </p>
            <div className={styles.ctas}>
                <LinkButton href="/" variant="brand" size="lg">
                    Take me home
                </LinkButton>
                <LinkButton
                    href={SITE.blogUrl}
                    variant="ghost"
                    size="lg"
                    target="_blank"
                    rel="noreferrer"
                >
                    Try the blog ↗
                </LinkButton>
            </div>
        </div>
    );
}
