import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import styles from './ForgetPasswordForm.module.scss';

const schema = Yup.object({
  email: Yup.string()
    .email('Valid email required')
    .required('Email is required'),
});

type FormData = Yup.InferType<typeof schema>;

interface ForgetPasswordFormProps {
  handleButtonClick: (form: 'LOGIN' | 'SIGN_UP' | 'FORGET_PASSWORD') => void;
  onSubmit: (arg0: FormData) => Promise<void> | void;
  className?: string;
}

export const ForgetPasswordForm = ({
  handleButtonClick,
  onSubmit,
  className = '',
}: ForgetPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className={styles.title}>
        <h1>Reset Password</h1>
        <p>Enter your email to receive a reset link.</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.form} ${className}`}
        noValidate
      >
        <div className={styles.fieldGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <div className={styles.inputContainer}>
            <input
              id='email'
              type='email'
              placeholder='Example@email.com'
              className={styles.input}
              disabled={isSubmitting}
              autoComplete='email'
              {...register('email')}
            />
          </div>
          <p className={styles.error}>{errors.email?.message || '\u00A0'}</p>
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className={styles.submitBtn}
          aria-label={isSubmitting ? 'Sending reset link' : 'Send Reset Link'}
        >
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
      <div className={styles.divider}>
        <span>or</span>
      </div>
      <div className={styles.signUpBtn}>
        <p onClick={() => handleButtonClick('LOGIN')}>Back to Sign In</p>
      </div>
    </>
  );
};
