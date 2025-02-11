import styles from './NotFound.module.css'
import error404 from '../../assets/error_404.png'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Page not found</h1>
                <p className={styles.paragraph}>The page you are looking for does not exist</p>
                <div className={styles.buttonContainer} onClick={() => navigate(-1)}>
                    <Button>Back</Button>
                </div>
                <img className={styles.imageDog} src={error404} alt="error 404" />
            </div>
            <div className={styles.blank}></div>
        </>

    )
}