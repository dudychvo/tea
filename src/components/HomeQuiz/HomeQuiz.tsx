import styles from './HomeQuiz.module.scss';

export const HomeQuiz = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <span className={styles.subtitle}>Discover Your Perfect Blend</span>
          <h1 className={styles.title}>Find Your Tea Personality</h1>
          <p className={styles.description}>
            Answer a few questions and let us guide you to the tea that matches
            your taste, mood, and lifestyle. Your perfect cup awaits.
          </p>
          <button className={styles.ctaButton}>
            Start the Quiz
            <span className={styles.arrow}>≫</span>
          </button>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.teaIllustration}>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
