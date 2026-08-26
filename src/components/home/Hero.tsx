import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.title}>THRYA</h1>
        <p className={styles.caption}>TRADITION &bull; TALENT &bull; TRIUMPH</p>
        <div className={styles.divider} />
        <p className={styles.statement}>
          A celebration of tradition, talent and artistic expression.
        </p>
      </div>
    </section>
  );
}
