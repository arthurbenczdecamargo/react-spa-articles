import styles from './PostModel.module.css'

export default function PostModel({ children, cover, title }) {
    return (
        <article className={styles.postModelContainer}>
            <div className={styles.cover} style={{ backgroundImage: `url(${cover})` }}>

            </div>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.postContentContainer}>
                {children}
            </div>

        </article>
    );
}