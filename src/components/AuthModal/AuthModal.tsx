import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

import { LoginForm } from './LoginForm/LoginForm';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { ForgetPasswordForm } from './ForgetPasswordForm/ForgetPasswordForm';

import test1 from '../../assets/test1.jpg';

import styles from './AuthModal.module.scss';

export const AuthModal = () => {
  const [form, setForm] = useState<'LOGIN' | 'SIGN_UP' | 'FORGET_PASSWORD'>(
    'LOGIN'
  );
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
      <div className={styles.user}>
        <div className={styles.avatarContainer}>
          <img
            src='https://www.jordanharbinger.com/wp-content/uploads/2018/09/be-the-most-interesting.jpg'
            alt='#'
          />
          <p>Guest</p>
        </div>
        <button
          className={styles.openButton}
          onClick={() => {
            setIsOpen(true);
            setForm('LOGIN');
          }}
        >
          <p>Log in</p>
        </button>
      </div>

      <Dialog open={isOpen} onClose={closeModal} className={styles.dialog}>
        <div
          className={`${styles.overlay} ${isAnimating ? styles.closed : ''}`}
        >
          <DialogPanel className={styles.panel}>
            <div className={styles.auth}>
              {form === 'LOGIN' ? (
                <LoginForm
                  handleButtonClick={(newForm) => setForm(newForm)}
                  onSubmit={() => {
                    console.log('submitted');
                  }}
                />
              ) : form === 'SIGN_UP' ? (
                <SignUpForm
                  handleButtonClick={(newForm) => setForm(newForm)}
                  onSubmit={() => {
                    console.log('submitted');
                  }}
                />
              ) : (
                <ForgetPasswordForm
                  handleButtonClick={(newForm) => setForm(newForm)}
                  onSubmit={() => {
                    console.log('submitted');
                  }}
                />
              )}
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
