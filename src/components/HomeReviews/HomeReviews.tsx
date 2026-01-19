import styles from './HomeReviews.module.scss';

export const HomeReviews = () => {
  const reviews = [
    {
      id: 1,
      text: 'The ceremonial matcha changed my morning routine entirely. Pure and vibrant.',
      author: 'Sarah Chen',
      location: 'London',
    },
    {
      id: 2,
      text: "Tea Harmony's sourcing quality is unmatched. You can taste the difference.",
      author: 'James Morrison',
      location: 'Edinburgh',
    },
    {
      id: 3,
      text: "The quiz helped me discover teas I never knew I'd love. Absolutely perfect.",
      author: 'Emma Williams',
      location: 'Manchester',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>Testimonials</span>
        <h2 className={styles.title}>What Our Customers Say</h2>
      </div>

      <div className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <p className={styles.reviewText}>"{review.text}"</p>
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>{review.author}</p>
              <p className={styles.authorLocation}>{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
