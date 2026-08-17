import Link from "next/link";

import styles from "./not-found.module.css";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <div className={styles.page}>
            <h1>Page not found</h1>
            <p>This link doesn&apos;t go anywhere. Yet, anyway.</p>
            <p><Link href="/">Go home</Link>.</p>
        </div>
    );
}
