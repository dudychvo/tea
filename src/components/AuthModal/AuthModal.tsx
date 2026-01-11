import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

import { LoginForm } from './LoginForm/LoginForm';

import test1 from '../../assets/test1.jpg';

import styles from './AuthModal.module.scss';

export const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <>
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        Log in
      </button>

      <Dialog open={isOpen} onClose={closeModal} className={styles.dialog}>
        <div
          className={`${styles.overlay} ${isAnimating ? styles.closed : ''}`}
        >
          <DialogPanel className={styles.panel}>
            <div className={styles.auth}>
              <div className={styles.title}>
                <h1>Hello, Tea Lover</h1>
                <p>
                  Continue your mindful tea ceremony. Journey with serenity
                  awaits.
                </p>
              </div>
              <LoginForm />
              <div className={styles.divider}>
                <span>or</span>
              </div>
              <div className={styles.signUpBtn}>
                New to the tea tradition?{' '}
                <a href='#'>Sign up</a>
              </div>
            </div>
            <div className={styles.imgSection}>
              <img src={test1} alt='#' />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
