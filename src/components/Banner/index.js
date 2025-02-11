import styles from './Banner.module.css'
import circleColored from '../../assets/circle-colored.png'
import myPhoto from '../../assets/my-photo.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.title}>Hello, World!</h1>
                <p className={styles.paragraph}>
                    Here you can find articles about programming and web development, made by Alura.
                </p>
            </div>
            <div className={styles.images}>
                <img className={styles.circleColored} src={circleColored} alt="colored circle" aria-hidden={true}/>
                <img className={styles.myPhoto} src={myPhoto} alt=""/>
           </div>
        </div>
    );
}