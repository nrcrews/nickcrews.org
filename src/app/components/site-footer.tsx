import styles from "./site-footer.module.css";

export function SiteFooter() {
    return (
        <footer className={styles.footer}>
            &copy; {new Date().getFullYear()} Nick Crews
        </footer>
    );
}
