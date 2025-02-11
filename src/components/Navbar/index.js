import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <header>
            <nav className={styles.nav}>
                <NavLink className={({ isActive }) => (isActive ? styles.link : "")} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? styles.link : "")} to="/aboutme">About me</NavLink>
            </nav>
        </header>
    );
}