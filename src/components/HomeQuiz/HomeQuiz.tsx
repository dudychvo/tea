import firstImg from '../../assets/landscape.jpg';
import secondImg from '../../assets/teaPot.png';

import styles from './HomeQuiz.module.scss';

export const HomeQuiz = () => {
  return (
    <>
      <div className={styles.container}>
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
            <div className={styles.sloganBtn}>
              <span>See All The Products</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
