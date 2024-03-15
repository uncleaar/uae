import React, { FC } from 'react';

import { useSearch } from '../../../app/providers/SearchProvider';

import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  icon: boolean;
  placeholder?: string
  // onChange: (value: string) => void;
}

export const Input:FC<InputProps> = ({
  label, type, placeholder, icon,
}) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.input_inner}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type={type}
          onChange={handleSearchChange}
          placeholder={placeholder}
          value={searchTerm}
        />
        {icon && <span className={styles.search_icon} /> }
      </div>
    </div>
  );
};
