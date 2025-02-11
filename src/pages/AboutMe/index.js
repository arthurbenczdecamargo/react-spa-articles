import styles from "./AboutMe.module.css"
import PostModel from "../../components/PostModel"
import cover from "../../assets/aboutme-bg.png"

export default function AboutMe() {
    return (
        <PostModel cover={cover} title="About me">
            <h3 className={styles.subtitle}>
                Hello, my name is Arthur
            </h3>
            <p className={styles.paragraph}>
                I'm a Brazilian Software Engineering student, currently in my 5th semester, with a passion for technology and software development. I'm constantly improving my skills through courses at Alura and personal projects involving programming logic, web development, and data science.
            </p>
            <p className={styles.paragraph}>
                Fluent in Portuguese (native), proficient in English and intermediate in Spanish, I've also been learning German for 5 years through private lessons and started self-studying Japanese recently. Additionally, my Luxembourgish citizenship provides me with greater flexibility and opportunities for work within the European Union.
            </p>
            <p className={styles.paragraph}>
                Currently, I'm seeking my first job or internship as a Software Developer or Web Developer, and I'm open to both remote and in-person opportunities. I'm excited to apply my knowledge and contribute to innovative projects in the tech industry.
            </p>
        </PostModel>
    );
}