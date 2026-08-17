import type { Metadata } from "next";

import { SITE } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Email",
    description: `Email ${SITE.author}.`,
    alternates: { canonical: "/contact" },
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <h1>Email</h1>
            <p>
                The best way to reach me is{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
        </div>
    );
}
