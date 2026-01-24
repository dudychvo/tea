import { NavLink } from 'react-router-dom';

import { AuthModal } from '../AuthModal/AuthModal';
import { CartModal } from '../CartModal/CartModal';
import { QuizModal } from '../QuizModal/QuizModal';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          <h1>Tea Ceremony</h1>
        </NavLink>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to='/guide'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Guide
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shop'
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <QuizModal />
            </li>
            <li>
              <CartModal />
            </li>
          </ul>
        </nav>
        <AuthModal />
      </div>
    </>
  );
};
