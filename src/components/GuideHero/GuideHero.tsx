import styles from './GuideHero.module.scss';

export const GuideHero = () => {
  return (
    <section className={styles.cultureSection}>
      <p className={styles.subtitle}>
        Beyond the cup lies centuries of wisdom, artistry, and sacred ritual
      </p>

      <p className={styles.description}>
        From mist-covered mountains to sacred ceremonies, tea has been a path to
        stillness for thousands of years. Each cup invites you to pause,
        breathe, and simply be.
      </p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <img
              src='https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop'
              alt='Organic tea leaves'
            />
          </div>
          <p>Ancient leaves, timeless wisdom</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <img
              src='https://images.unsplash.com/photo-1563299796-17596ed6b017?w=400&h=300&fit=crop'
              alt='Tea farmer'
            />
          </div>
          <p>Ceremony as meditation</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <img
              src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop'
              alt='Worldwide delivery'
            />
          </div>
          <p>Each cup a small ceremony</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.imageWrapper}>
            <img
              src='https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&h=300&fit=crop'
              alt='Tea tradition'
            />
          </div>
          <p>Tradition meets this moment</p>
        </div>
      </div>
    </section>
  );
};
