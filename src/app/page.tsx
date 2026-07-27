import Image from "next/image";

import { LinkButton } from "@/ui/button/button";
import { SITE } from "@/lib/site";
import styles from "./page.module.css";

export default function HomePage() {
    return (
        <div className={styles.page}>
            <section className={styles.intro}>
                <Image
                    src="/me.png"
                    alt="Nick Crews"
                    width={112}
                    height={112}
                    priority
                    className={styles.avatar}
                />
                <h1 className={styles.title}>
                    <span>Hi, I'm</span>
                    <span className={styles.titleEm}>
                        Nick Crews.
                    </span>
                </h1>
                <p className={styles.lede}>
                    My name's not actually nuck (don't call me that), it's Nick,
                    sometimes T (long story).
                    I like to build things and write about it.
                    Follow along.
                </p>
                <div className={styles.ctas}>
                    <LinkButton
                        href={SITE.blogUrl}
                        variant="brand"
                        size="lg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read the blog ↗
                    </LinkButton>
                    <LinkButton href="/projects" variant="ghost" size="lg">
                        See what I'm building
                    </LinkButton>
                </div>
            </section>
        </div>
    );
}
