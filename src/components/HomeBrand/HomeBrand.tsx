import styles from './HomeBrand.module.scss';

export const HomeBrand = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSide}>
          <span className={styles.label}>Our Philosophy</span>
          <h2 className={styles.heading}>
            Tea is not just a drink—it's a ritual, a moment of peace, and a
            bridge between cultures.
          </h2>
        </div>

        <div className={styles.statsSide}>
          <div className={styles.stat}>
            <h3 className={styles.number}>100%</h3>
            <p className={styles.text}>Organic sourcing</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.number}>15+</h3>
            <p className={styles.text}>Partner farms</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.number}>50+</h3>
            <p className={styles.text}>Unique blends</p>
          </div>
        </div>
      </div>
    </div>
  );
};
