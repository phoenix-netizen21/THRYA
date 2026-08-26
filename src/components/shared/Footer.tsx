import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <h2 className={styles.brandName}>THRYA</h2>
          <p className={styles.tagline}>TRADITION &bull; TALENT &bull; TRIUMPH</p>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.navLink}>Home</a></li>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#events" className={styles.navLink}>Events</a></li>
            <li><a href="#team" className={styles.navLink}>Core Team</a></li>
            <li><a href="#gallery" className={styles.navLink}>Gallery</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </nav>

        <div className={styles.socialSection}>
          <a 
            href="https://www.instagram.com/_.thrya._?igsi=MnhtendwM29lZm1q" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialIcon} 
            aria-label="Instagram"
          >
            ◈
          </a>
          <a href="#contact" className={styles.socialIcon} aria-label="Email">✉</a>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.collegeName}>College Name</p>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} THRYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
