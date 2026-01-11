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
              <li>
                <a href='#'>Guide</a>
              </li>
              <li>
                <a href='#'>Shop</a>
              </li>
              <li>
                <a href='#'>Quiz</a>
              </li>
              <li>
                <a href='#'>Cart</a>
              </li>
            </ul>
          </nav>
          <AuthModal />
        </div>
      </div>
    </>
  );
};
