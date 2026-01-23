// components/Shop/ShopGrid.tsx
import type { Product } from '../../types/ProductType';

import { ShopCard } from '../ShopCard/ShopCard';

import styles from './ShopGrid.module.scss';

interface ShopGridProps {
  products: Product[];
}

const ShopGrid = ({ products }: ShopGridProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {products.map((product) => (
          <ShopCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export { ShopGrid };
