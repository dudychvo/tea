// components/CartModal/CartModal.tsx
import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useCart } from '../../context/CartContext';
import styles from './CartModal.module.scss';

export const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { cartItems, updateQuantity, removeFromCart, getTotalItems } =
    useCart();

  const itemCount = getTotalItems();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <>
      {/* Cart Button */}
      <button className={styles.cartButton} onClick={() => setIsOpen(true)}>
        <span className={styles.text}>Cart</span>
        {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onClose={closeModal} className={styles.dialog}>
        <div
          className={`${styles.overlay} ${isAnimating ? styles.closed : ''}`}
        >
          <div className={styles.container}>
            <DialogPanel className={styles.panel}>
              {/* Header */}
              <div className={styles.header}>
                <DialogTitle className={styles.title}>
                  Your Cart ({getTotalItems()})
                </DialogTitle>
                <button
                  className={styles.closeButton}
                  onClick={closeModal}
                  aria-label='Close cart'
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className={styles.content}>
                {cartItems.length === 0 ? (
                  // Empty State
                  <div className={styles.emptyCart}>
                    <div className={styles.emptyIconWrapper}>
                      <svg
                        className={styles.emptyIcon}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <circle cx='9' cy='21' r='1' />
                        <circle cx='20' cy='21' r='1' />
                        <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
                      </svg>
                    </div>
                    <p className={styles.emptyText}>Your cart is empty</p>
                    <p className={styles.emptySubtext}>
                      Add some delicious tea to get started!
                    </p>
                    <button
                      className={styles.continueShopping}
                      onClick={closeModal}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  // Cart Items
                  <>
                    <div className={styles.itemsList}>
                      {cartItems.map((item) => (
                        <div key={item.product.id} className={styles.cartItem}>
                          {/* Product Image */}
                          <div className={styles.imageWrapper}>
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className={styles.itemImage}
                            />
                          </div>

                          {/* Product Info */}
                          <div className={styles.itemInfo}>
                            <h3 className={styles.itemName}>
                              {item.product.name}
                            </h3>
                            <p className={styles.itemMeta}>
                              {item.product.teaType} · {item.product.caffeine}{' '}
                              caffeine
                            </p>
                            <div className={styles.itemPricing}>
                              <span className={styles.itemPrice}>
                                £{item.product.price}
                              </span>
                              {item.product.pricePer100g && (
                                <span className={styles.itemPriceUnit}>
                                  £{item.product.pricePer100g}/100g
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className={styles.itemActions}>
                            {/* Quantity Controls */}
                            <div className={styles.quantityControls}>
                              <button
                                className={styles.quantityButton}
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1,
                                  )
                                }
                                aria-label='Decrease quantity'
                              >
                                −
                              </button>
                              <span className={styles.quantity}>
                                {item.quantity}
                              </span>
                              <button
                                className={styles.quantityButton}
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1,
                                  )
                                }
                                aria-label='Increase quantity'
                              >
                                +
                              </button>
                            </div>

                            {/* Item Total Price */}
                            <p className={styles.itemTotal}>
                              £{(item.product.price * item.quantity).toFixed(2)}
                            </p>

                            {/* Remove Button */}
                            <button
                              className={styles.removeButton}
                              onClick={() => removeFromCart(item.product.id)}
                              aria-label='Remove item'
                              title='Remove from cart'
                            >
                              <svg
                                width='18'
                                height='18'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path d='M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6' />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className={styles.footer}>
                      {/* Shipping Notice */}
                      <div className={styles.shippingNotice}>
                        <svg
                          className={styles.shippingIcon}
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <rect x='1' y='3' width='15' height='13' />
                          <path d='M16 8h4l3 3v5h-7V8z' />
                          <circle cx='5.5' cy='18.5' r='2.5' />
                          <circle cx='18.5' cy='18.5' r='2.5' />
                        </svg>
                        <p>Free shipping on orders over £50</p>
                      </div>

                      {/* Total */}
                      <div className={styles.totalSection}>
                        <div className={styles.totalRow}>
                          <span className={styles.totalLabel}>Subtotal:</span>
                          <span className={styles.subtotalPrice}>
                            £{totalPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className={styles.totalRow}>
                          <span className={styles.totalLabel}>Shipping:</span>
                          <span className={styles.shippingPrice}>
                            {totalPrice >= 50 ? 'FREE' : '£4.99'}
                          </span>
                        </div>
                        <div className={styles.totalRowFinal}>
                          <span className={styles.totalLabelFinal}>Total:</span>
                          <span className={styles.totalPrice}>
                            £
                            {(
                              totalPrice + (totalPrice >= 50 ? 0 : 4.99)
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <button className={styles.checkoutButton}>
                        Proceed to Checkout
                      </button>
                      <button
                        className={styles.continueButton}
                        onClick={closeModal}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
