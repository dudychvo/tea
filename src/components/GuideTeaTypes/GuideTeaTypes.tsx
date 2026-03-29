import { useState } from 'react';

import styles from './GuideTeaTypes.module.scss';

export const GuideTeaTypes = () => {
  const teas = [
    {
      id: 1,
      name: 'Green Tea',
      image:
        'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&h=600&fit=crop',
      frontDescription:
        'Delicate, fresh, and naturally sweet with grassy notes',
      flavor: 'Light, vegetal, slightly sweet',
      temperature: '75-80°C (167-176°F)',
      steepTime: '2-3 minutes',
      benefits: 'High in antioxidants, boosts metabolism, enhances focus',
    },
    {
      id: 2,
      name: 'Black Tea',
      image:
        'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&h=600&fit=crop',
      frontDescription: 'Bold, full-bodied with malty richness and depth',
      flavor: 'Robust, malty, slightly astringent',
      temperature: '95-100°C (203-212°F)',
      steepTime: '3-5 minutes',
      benefits: 'Energy boost, heart health, improves gut health',
    },
    {
      id: 3,
      name: 'Oolong Tea',
      image:
        'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=500&h=600&fit=crop',
      frontDescription: 'Complex balance between green and black tea',
      flavor: 'Floral, fruity, creamy',
      temperature: '85-95°C (185-203°F)',
      steepTime: '3-4 minutes (multiple infusions)',
      benefits: 'Weight management, mental clarity, dental health',
    },
    {
      id: 4,
      name: 'White Tea',
      image:
        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=600&fit=crop',
      frontDescription: 'Subtle, delicate, with natural sweetness',
      flavor: 'Light, sweet, floral',
      temperature: '70-75°C (158-167°F)',
      steepTime: '4-5 minutes',
      benefits: 'Anti-aging properties, skin health, immune support',
    },
    {
      id: 5,
      name: 'Pu-erh Tea',
      image:
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=600&fit=crop',
      frontDescription: 'Aged, earthy, with deep complexity',
      flavor: 'Earthy, woody, smooth',
      temperature: '95-100°C (203-212°F)',
      steepTime: '3-4 minutes (multiple infusions)',
      benefits: 'Aids digestion, reduces cholesterol, promotes calm',
    },
    {
      id: 6,
      name: 'Herbal Tea',
      image:
        'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&h=600&fit=crop',
      frontDescription: 'Naturally caffeine-free with soothing herbs',
      flavor: 'Varies: floral, minty, fruity',
      temperature: '95-100°C (203-212°F)',
      steepTime: '5-7 minutes',
      benefits: 'Relaxation, sleep aid, digestive comfort',
    },
  ];

  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const handleFlip = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={styles.teaCardsSection}>
      <div className={styles.header}>
        <h2>Discover Tea Varieties</h2>
        <p>Click each card to reveal brewing secrets and flavor profiles</p>
      </div>

      <div className={styles.cardsGrid}>
        {teas.map((tea) => (
          <div
            key={tea.id}
            className={`${styles.cardContainer} ${flipped[tea.id] ? styles.flipped : ''}`}
            onClick={() => handleFlip(tea.id)}
          >
            <div className={styles.card}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <div className={styles.imageWrapper}>
                  <img src={tea.image} alt={tea.name} />
                </div>
                <div className={styles.frontContent}>
                  <h3>{tea.name}</h3>
                  <p>{tea.frontDescription}</p>
                  <span className={styles.flipHint}>Click to learn more</span>
                </div>
              </div>

              {/* Back of card */}
              <div className={styles.cardBack}>
                <h3>{tea.name}</h3>
                <div className={styles.backContent}>
                  <div className={styles.info}>
                    <span className={styles.label}>Flavor:</span>
                    <span>{tea.flavor}</span>
                  </div>
                  <div className={styles.info}>
                    <span className={styles.label}>Temperature:</span>
                    <span>{tea.temperature}</span>
                  </div>
                  <div className={styles.info}>
                    <span className={styles.label}>Steep Time:</span>
                    <span>{tea.steepTime}</span>
                  </div>
                  <div className={styles.benefits}>
                    <span className={styles.label}>Benefits:</span>
                    <p>{tea.benefits}</p>
                  </div>
                </div>
                <span className={styles.flipHint}>Click to flip back</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
