import { Products } from '../../data/ProductsData';

import { Header } from '../../components/Header/Header';
import { ShopNav } from '../../components/ShopNav/ShopNav';
import { ShopGrid } from '../../components/ShopGrid/ShopGrid';
import { Footer } from '../../components/Footer/Footer';

import styles from './Shop.module.scss';

export const Shop = () => {
  return (
    <>
      <div className={styles.shopWrapper}>
        <div className={styles.headerWrapper}>
          <div className={styles.container}>
            <Header />
          </div>
        </div>
        <div className={styles.container}>
          <ShopNav />
          <ShopGrid products={Products} />
        </div>
        <Footer />
      </div>
    </>
  );
};
