import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import styles from './LoginForm.module.scss';

const schema = Yup.object({
  email: Yup.string()
    .email('Valid email required')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'At least 8 characters')
    .required('Password is required'),
});

type FormData = Yup.InferType<typeof schema>;

interface LoginFormProps {
  handleButtonClick: (form: 'LOGIN' | 'SIGN_UP' | 'FORGET_PASSWORD') => void;
  onSubmit: (arg0: FormData) => Promise<void> | void;
  className?: string;
}

export const LoginForm = ({
  handleButtonClick,
  onSubmit,
  className = '',
}: LoginFormProps) => {
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
        <h1>Welcome back</h1>
        <p>Continue your mindful tea ceremony. Journey with serenity awaits.</p>
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
        <div className={styles.fieldGroup}>
          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <div className={styles.inputContainer}>
            <input
              id='password'
              type='password'
              placeholder='At least 8 characters'
              className={styles.input}
              disabled={isSubmitting}
              autoComplete='current-password'
              {...register('password')}
            />
          </div>
          <p className={styles.error}>{errors.password?.message || '\u00A0'}</p>
        </div>
        <div className={styles.forgotWrapper}>
          <p
            onClick={() => handleButtonClick('FORGET_PASSWORD')}
            className={styles.forgotLink}
          >
            Forgot Password?
          </p>
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className={styles.submitBtn}
          aria-label={isSubmitting ? 'Signing in' : 'Sign in'}
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      <div className={styles.divider}>
        <span>or</span>
      </div>
      <div className={styles.signUpBtn}>
        New to the tea tradition?
        <p onClick={() => handleButtonClick('SIGN_UP')}>Sign up</p>
      </div>
    </>
  );
};
