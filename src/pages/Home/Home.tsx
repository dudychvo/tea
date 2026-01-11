import { Header } from '../../components/Header/Header';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
        </div>
      </div>
    </>
  );
};
