import { AuthModal } from '../AuthModal/AuthModal';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Tea Ceremony</h1>
          <nav className={styles.nav}>
            <ul>
              <li>Guide</li>
              <li>Shop</li>
              <li>Quiz</li>
              <li>Cart</li>
            </ul>
          </nav>
          <AuthModal />
        </div>
      </div>
    </>
  );
};
