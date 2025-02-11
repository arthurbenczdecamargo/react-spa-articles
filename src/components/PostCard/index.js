import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import Button from '../Button';

export default function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.image}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="post cover"
                />
                <h2 className={styles.title}>{post.title}</h2>
                <Button>Read</Button>
            </div>
        </Link>
    );
}