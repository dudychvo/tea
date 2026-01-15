import { Header } from '../../components/Header/Header';
import { HeroHero } from '../../components/HomeHero/HomeHero';
import { HomeQuiz } from '../../components/HomeQuiz/HomeQuiz';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <div className={styles.backgroundWrapper}>
        <div className={styles.topContainer}>
          <Header />
          <HeroHero />
        </div>
        <HomeQuiz />
      </div>
    </>
  );
};
