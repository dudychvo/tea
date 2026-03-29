import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

import { LoginForm } from './LoginForm/LoginForm';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { ForgetPasswordForm } from './ForgetPasswordForm/ForgetPasswordForm';

import styles from './AuthModal.module.scss';

export const AuthModal = () => {
  const [form, setForm] = useState<'LOGIN' | 'SIGN_UP' | 'FORGET_PASSWORD'>(
    'LOGIN',
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
        <button
          className={styles.userButton}
          onClick={() => {
            setIsOpen(true);
            setForm('LOGIN');
          }}
        >
          <div className={styles.avatarWrapper}>
            <img src={'/assets/default-avatar.jpg'} alt='User avatar' />
            <div className={styles.statusDot}></div>
          </div>
          <div className={styles.userInfo}>
            <span className={styles.greeting}>Log in </span>
            <span className={styles.username}>Guest</span>
          </div>
          <svg
            className={styles.chevron}
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M4 6L8 10L12 6'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
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
              <img src={'/assets/auth-modal.jpg'} alt='#' />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
