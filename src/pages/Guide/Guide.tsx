import { Header } from '../../components/Header/Header';

import { GuideHero } from '../../components/GuideHero/GuideHero';
import { GuideTeaCulture } from '../../components/GuideTeaCulture/GuideTeaCulture';
import { GuideTeaTypes } from '../../components/GuideTeaTypes/GuideTeaTypes';
import { GuideCeremony } from '../../components/GuideCeremony/GuideCeremony';

import { Footer } from '../../components/Footer/Footer';

import styles from './Guide.module.scss';

export const Guide = () => {
  return (
    <>
      <div className={styles.guideWrapper}>
        <div className={styles.headerWrapper}>
          <div className={styles.container}>
            <Header />
          </div>
        </div>
        <div className={styles.container}>
          <GuideHero />
          <GuideTeaCulture />
          <GuideTeaTypes />
          <GuideCeremony />
        </div>
        <Footer />
      </div>
    </>
  );
};
