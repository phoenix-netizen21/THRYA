import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Traditional arts performance on stage with dramatic red and gold lighting"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Gradient overlays */}
      <div className={styles.overlay} />

      {/* Decorative floating elements */}
      <div className={styles.decorativeElements}>
        <div className={`${styles.floatingShape} ${styles.shape1}`} />
        <div className={`${styles.floatingShape} ${styles.shape2}`} />
        <div className={`${styles.floatingShape} ${styles.shape3}`} />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.title}>THRYA</h1>
        <p className={styles.caption}>TRADITION &bull; TALENT &bull; TRIUMPH</p>
        <div className={styles.divider} />
        <p className={styles.statement}>
          A celebration of tradition, talent and artistic expression.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
