import firstImg from '../../assets/test5.jpg';

import styles from './HeroHero.module.scss';

export const HeroHero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slogan}>
          <p>Tea</p>
          <img src={firstImg} alt='#' className={styles.firstImg} />
          <p>Harmony -</p>
        </div>
        <p></p>
      </div>
    </>
  );
};
