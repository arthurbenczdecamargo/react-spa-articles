import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <p>Developed by Arthur |
                <a className={styles.icon} href="https://github.com/arthurbenczdecamargo"><i class="bi bi-github"></i></a>
                <a className={styles.icon} href="https://www.linkedin.com/in/arthurbenczdecamargo/"><i class="bi bi-linkedin"></i></a></p>
        </footer>
    );
}