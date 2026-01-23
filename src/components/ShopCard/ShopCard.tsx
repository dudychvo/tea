// ShopCard.tsx
import type { Product } from '../../types/ProductType';
import styles from './ShopCard.module.scss';

interface ShopCardProps {
  product: Product;
  onAddToCart?: () => void;
}

const ShopCard = ({ product, onAddToCart }: ShopCardProps) => {
  const {
    name,
    subtitle,
    image,
    teaType,
    caffeine,
    price,
    pricePer100g,
    badges,
  } = product;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
        {badges?.length ? (
          <span className={styles.badge}>{badges[0]}</span>
        ) : null}
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{teaType}</span>
          <span className={styles.separator}>·</span>
          <span>{caffeine}</span>
        </div>

        <h3 className={styles.title}>{name}</h3>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.footer}>
          <div className={styles.pricing}>
            <span className={styles.price}>£{price}</span>
            {pricePer100g && (
              <span className={styles.perUnit}>£{pricePer100g}/100g</span>
            )}
          </div>

          <button className={styles.cartButton} onClick={onAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export { ShopCard };
