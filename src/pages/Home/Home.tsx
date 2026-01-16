import { Header } from '../../components/Header/Header';
import { HeroHero } from '../../components/HomeHero/HomeHero';
import { HomeQuiz } from '../../components/HomeQuiz/HomeQuiz';
import { Footer } from '../../components/Footer/Footer';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.heroWrapper}>
          <div className={styles.container}>
            <Header />
            <HeroHero />
          </div>
        </div>
        <div className={styles.container}>
          <HomeQuiz />
          <Footer />
        </div>
      </div>
    </>
  );
};
