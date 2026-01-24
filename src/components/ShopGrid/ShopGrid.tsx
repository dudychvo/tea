// components/Shop/ShopGrid.tsx
import { useState } from 'react';

import type { Product } from '../../types/ProductType';

import { ShopCard } from '../ShopCard/ShopCard';

import styles from './ShopGrid.module.scss';

interface ShopGridProps {
  products: Product[];
}

const ITEMS_PER_PAGE = 6;

export const ShopGrid = ({ products }: ShopGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      {/* Product Grid - shows only 6 products */}
      <div className={styles.grid}>
        {currentProducts.map((product) => (
          <ShopCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls - only show if we have more than 1 page */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {/* Previous Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1} // Disable on first page
            className={styles.navButton}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`${styles.pageButton} ${
                  currentPage === page ? styles.active : ''
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages} // Disable on last page
            className={styles.navButton}
          >
            Next
          </button>
        </div>
      )}

      {/* Page Info - shows "Showing 1-6 of 22 products" */}
      {totalPages > 1 && (
        <div className={styles.pageInfo}>
          Showing {startIndex + 1}–{Math.min(endIndex, products.length)} of{' '}
          {products.length} products
        </div>
      )}
    </section>
  );
};
