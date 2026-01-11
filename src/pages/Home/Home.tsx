import { Header } from '../../components/Header/Header';
import { HeroHero } from '../../components/HomeHero/HomeHero';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <div className={styles.backgroundWrapper}>
        <div className={styles.container}>
          <Header />
          <HeroHero />
        </div>
      </div>
      <div className={styles.container}>1</div>
    </>
  );
};
