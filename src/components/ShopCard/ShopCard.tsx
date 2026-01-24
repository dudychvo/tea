import { useCart } from '../../context/CartContext';

import type { Product } from '../../types/ProductType';

import styles from './ShopCard.module.scss';

interface ShopCardProps {
  product: Product;
}

const ShopCard = ({ product }: ShopCardProps) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

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

  // Get current quantity of this product in cart
  const quantity = getItemQuantity(product.id);
  const isInCart = quantity > 0;

  // Handle add to cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  // Handle increase quantity
  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  // Handle decrease quantity
  const handleDecrease = () => {
    updateQuantity(product.id, quantity - 1);
  };

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

          {/* Show "Add to cart" button OR quantity controls */}
          {!isInCart ? (
            <button className={styles.cartButton} onClick={handleAddToCart}>
              Add to cart
            </button>
          ) : (
            <div className={styles.quantityControls}>
              <button
                className={styles.quantityButton}
                onClick={handleDecrease}
                aria-label='Decrease quantity'
              >
                −
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.quantityButton}
                onClick={handleIncrease}
                aria-label='Increase quantity'
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export { ShopCard };
