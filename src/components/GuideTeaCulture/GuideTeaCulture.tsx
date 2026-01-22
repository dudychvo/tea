import styles from './GuideTeaCulture.module.scss';

export const GuideTeaCulture = () => {
  return (
    <section className={styles.cultureSection}>
      <div className={styles.content}>
        <div className={styles.introBlock}>
          <span className={styles.smallTitle}>Ancient Wisdom</span>
          <h2>The Soul of Tea Ceremony</h2>
          <p className={styles.lead}>
            For thousands of years, tea has been more than a beverage—it's a
            practice of presence, a ritual of mindfulness, and a bridge between
            earth and spirit.
          </p>
        </div>

        <div className={styles.storySplit}>
          <div className={styles.storyCard}>
            <div className={styles.cardHeader}>
              <span className={styles.region}>China</span>
              <h3>Gong Fu Cha</h3>
            </div>
            <p>
              The "art of making tea" emerged from Chinese monks who found
              clarity in every deliberate pour. Small vessels, multiple
              infusions, complete attention— each movement becomes meditation.
            </p>
            <div className={styles.highlight}>The art of patience</div>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.cardHeader}>
              <span className={styles.region}>Japan</span>
              <h3>Chanoyu</h3>
            </div>
            <p>
              The Way of Tea, refined through Zen philosophy. Every gesture
              choreographed, every tool sacred. Four principles guide the
              practice: harmony with nature, respect for all, purity of heart,
              tranquility of mind.
            </p>
            <div className={styles.highlight}>The way of stillness</div>
          </div>
        </div>

        <div className={styles.essenceBox}>
          <img
            src='https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=400&fit=crop'
            alt='Tea leaves'
            className={styles.bgImage}
          />
          <div className={styles.overlay}>
            <p className={styles.quote}>
              "In tea, we find what words cannot express—
              <br />a moment suspended, a breath held, peace discovered."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
