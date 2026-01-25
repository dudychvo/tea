import { Link } from 'react-router-dom';

import firstImg from '../../assets/landscape-home-hero.jpg';
import secondImg from '../../assets/tea-home-hero.png';

import styles from './HomeHero.module.scss';

export const HeroHero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.slogan}>
          <div className={styles.sloganText}>
            <div>
              <img src={firstImg} alt='#' className={styles.firstImg} />
              Brew &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; small
              peaceful
            </div>
            <div>
              <img src={secondImg} alt='#' className={styles.secondImg} />
              pauses, one cup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; at a time
            </div>
            <button className={styles.sloganBtn}>
              <Link to='/shop'>
                <span>Explore Tea</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
