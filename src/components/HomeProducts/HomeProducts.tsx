import styles from './HomeProducts.module.scss';

export const HomeProducts = () => {
  const collections = [
    {
      id: 1,
      name: 'Awakening rituals begin here.',
      image:
        'https://images.pexels.com/photos/4041244/pexels-photo-4041244.jpeg',
      href: '/collections/morning',
    },
    {
      id: 2,
      name: 'Ancient wisdom in modern times.',
      image: 'https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg',
      href: '/collections/green-tea',
    },
    {
      id: 3,
      name: 'Natures remedy for restless minds.',
      image:
        'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
      href: '/collections/herbal',
    },
    {
      id: 4,
      name: 'Where tradition meets intention.',
      image:
        'https://images.pexels.com/photos/37349/tea-teapot-ceramic-asia.jpg',
      href: '/collections/ceremonial',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <span className={styles.eyebrow}>Collections</span>
            <h2 className={styles.mainTitle}>Moments Worth Savoring</h2>
          </div>
          <p className={styles.intro}>
            Each collection tells a story—of heritage, craft, and the quiet
            moments that make life beautiful.
          </p>
        </div>

        <div className={styles.grid}>
          <a
            href={collections[0].href}
            className={`${styles.card} ${styles.large}`}
          >
            <img
              src={collections[0].image}
              alt={collections[0].name}
              className={styles.cardImage}
            />
            <div className={styles.overlay}></div>
            <p className={styles.cardText}>{collections[0].name}</p>
          </a>

          <div className={styles.rightColumn}>
            <a href={collections[1].href} className={styles.card}>
              <img
                src={collections[1].image}
                alt={collections[1].name}
                className={styles.cardImage}
              />
              <div className={styles.overlay}></div>
              <p className={styles.cardText}>{collections[1].name}</p>
            </a>
            <a href={collections[2].href} className={styles.card}>
              <img
                src={collections[2].image}
                alt={collections[2].name}
                className={styles.cardImage}
              />
              <div className={styles.overlay}></div>
              <p className={styles.cardText}>{collections[2].name}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
