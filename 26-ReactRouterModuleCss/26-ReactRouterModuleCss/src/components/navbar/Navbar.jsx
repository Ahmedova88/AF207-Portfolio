import { Link } from 'react-router-dom';
import styles from '../navbar/Navbar.module.css';


function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <h1 className={styles.logo}>Start Bootstrap</h1>
            <ul className={styles.navItems}>
                <li><Link to="/" className={styles.link}>Home</Link></li>
                <li><Link to="/about" className={styles.link}>About</Link></li>
                <li><Link to="/contact" className={styles.link}>Contact</Link></li>
                <li><Link to="/services" className={styles.link}>Services</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar