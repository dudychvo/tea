import clsx from 'clsx';

import { Header } from '../../components/Header/Header';

import { HeroHero } from '../../components/HomeHero/HomeHero';
import { HomeQuiz } from '../../components/HomeQuiz/HomeQuiz';
import { HomeProducts } from '../../components/HomeProducts/HomeProducts';
import { HomeReviews } from '../../components/HomeReviews/HomeReviews';
import { HomeBrand } from '../../components/HomeBrand/HomeBrand';

import { Footer } from '../../components/Footer/Footer';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <div className={styles.homeWrapper}>
        <div className={styles.heroWrapper}>
          <div className={clsx(styles.container, styles.fullVH)}>
            <Header />
            <HeroHero />
          </div>
        </div>
        <div className={styles.container}>
          <HomeQuiz />
          <HomeProducts />
          <HomeReviews />
          <HomeBrand />
          <Footer />
        </div>
      </div>
    </>
  );
};
