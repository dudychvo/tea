import { useState } from 'react';
import { FaInstagram, FaTwitter, FaPinterest, FaArrowUp } from 'react-icons/fa';

import styles from './Footer.module.scss';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    //TODO: Subscription logic
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <h2 className={styles.logo}>Tea Ceremony</h2>
            <p className={styles.mission}>
              Slowing down the world, <br />
              one cup at a time.
            </p>
          </div>
          <div className={styles.newsletterCard}>
            <h3>Join the Inner Circle</h3>
            <p>Receive weekly brewing guides and rare harvest alerts.</p>
            <form onSubmit={handleSubscribe} className={styles.inputGroup}>
              <input
                type='email'
                placeholder='your@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type='submit' aria-label='Subscribe'>
                <span>Begin</span>
              </button>
            </form>
          </div>

          <div className={styles.navColumn}>
            <ul className={styles.links}>
              <li>
                <a href='#shop'>Shop Tea</a>
              </li>
              <li>
                <a href='#ceremony'>Ceremony Sets</a>
              </li>
              <li>
                <a href='#journal'>See the guidance</a>
              </li>
              <li>
                <a href='#about'>Start the quiz</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <div className={styles.socials}>
            <a href='#' aria-label='Instagram'>
              <FaInstagram />
            </a>
            <a href='#' aria-label='Pinterest'>
              <FaPinterest />
            </a>
            <a href='#' aria-label='Twitter'>
              <FaTwitter />
            </a>
          </div>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Tea Ceremony. Handcrafted digitally.
          </p>

          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label='Back to top'
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};
