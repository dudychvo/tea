import firstImg from '../../assets/landscape.jpg';
import secondImg from '../../assets/teaPot.png';

import styles from './HeroHero.module.scss';

export const HeroHero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.slogan}>
          <div className={styles.sloganText}>
            <div>
              <img src={firstImg} alt='#' className={styles.firstImg} />
              Tea
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Harmony - your
            </div>
            <div>
              <img src={secondImg} alt='#' className={styles.secondImg} />
              corner of true tea
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              enjoyment
            </div>
            <button className={styles.sloganBtn} data-text='Explore Tea'>
              <span>Explore Tea</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
