import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

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
        Open Auth
      </button>

      <Dialog open={isOpen} onClose={closeModal} className={styles.dialog}>
        <div
          className={`${styles.overlay} ${isAnimating ? styles.closed : ''}`}
        >
          <DialogPanel
            className={styles.panel}
          >
            <div className={styles.auth}>
              <div className={styles.title}>
                <h1>Tea Welcome Back 👋</h1>
                <p>
                  TeaToday is a new day. It's your day. You shape it. Sign in to
                  start managing your projects.
                </p>
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
