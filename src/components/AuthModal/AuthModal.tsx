import { useState } from 'react';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

import styles from './AuthModal.module.scss';

export const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.modalOverlay}>
          <DialogPanel className={styles.modalPanel}>
            <DialogTitle className={styles.modalTitle}>
              Authentication Required
            </DialogTitle>
            <Description className={styles.modalDescription}>
              Please sign in to continue
            </Description>
            <p className={styles.modalContent}>
              This action requires authentication. Your data is secure.
            </p>
            <div className={styles.modalActions}>
              <button
                className={styles.btnSecondary}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className={styles.btnPrimary}
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
