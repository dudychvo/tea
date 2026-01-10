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
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        Open Auth
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={styles.dialog}
      >
        <div className={styles.overlay}>
          <DialogPanel className={styles.panel}>
            <DialogTitle className={styles.title}>
              Authentication Required
            </DialogTitle>
            <Description className={styles.description}>
              Please sign in to access premium features
            </Description>
            <p className={styles.content}>
              This action requires account verification. Your data remains
              secure.
            </p>
            <div className={styles.actions}>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className={styles.confirmBtn}
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
