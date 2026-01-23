// ShopGuide.tsx
import { useState } from 'react';
import styles from './ShopNav.module.scss';

interface ShopGuideProps {
  onSearch?: (query: string) => void;
  onFilterClick?: () => void;
}

export const ShopNav = ({ onSearch, onFilterClick }: ShopGuideProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch?.('');
  };

  return (
    <div className={styles.guide}>
      <div className={styles.searchWrapper}>
        <svg
          className={styles.searchIcon}
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
        >
          <circle
            cx='11'
            cy='11'
            r='8'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21 21l-4.35-4.35'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <input
          type='text'
          className={styles.searchInput}
          placeholder='Search teas...'
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {searchQuery && (
          <button className={styles.clearButton} onClick={handleClear}>
            ×
          </button>
        )}
      </div>

      <button className={styles.filterButton} onClick={onFilterClick}>
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
          <line
            x1='4'
            y1='6'
            x2='20'
            y2='6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <line
            x1='4'
            y1='12'
            x2='20'
            y2='12'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <line
            x1='4'
            y1='18'
            x2='20'
            y2='18'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='8' cy='6' r='2' fill='currentColor' />
          <circle cx='16' cy='12' r='2' fill='currentColor' />
          <circle cx='12' cy='18' r='2' fill='currentColor' />
        </svg>
        Filters
      </button>
    </div>
  );
};
