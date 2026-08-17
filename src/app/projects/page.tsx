import type { Metadata } from "next";

import { PROJECTS } from "@/lib/projects";

import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Projects",
    description: "Things I've built. Agents, apps, websites, experiments.",
    alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
    return (
        <div className={styles.page}>
            <header>
                <h1>Things I&apos;ve built</h1>
                <p>My favorite projects over the years, in chronologic(ish) order</p>
            </header>

            <ul className={styles.list}>
                {PROJECTS.map((project) => (
                    <li key={project.name}>
                        {project.href ? (
                            <a href={project.href}>{project.name}</a>
                        ) : (
                            <strong>{project.name}</strong>
                        )}
                        {": "}
                        {project.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}
