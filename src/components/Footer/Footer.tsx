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
    // Add subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      {/* Organic Wave Divider */}
      <div className={styles.waveDivider}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <h2 className={styles.logo}>TEA CEREMONY</h2>
            <p className={styles.mission}>
              Slowing down the world, <br />
              one cup at a time.
            </p>
          </div>

          {/* Unique Center Feature: The "Newsletter Ritual" */}
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
                <a href='#journal'>The Journal</a>
              </li>
              <li>
                <a href='#about'>Our Story</a>
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
