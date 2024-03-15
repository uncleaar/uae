import React, { FC } from 'react';

import styles from './card.module.scss';

interface CardProps {
  name: string;
  id: string;
  year: string;
  poster: string;
  type: string;
}
export const Card:FC<CardProps> = ({
  name, id, year, type, poster,
}) => (
  <div className={styles.card_inner}>
    <div className={styles.card}>
      <img src={poster === 'N/A' ? '/assets/placeholder.png' : poster} className={styles.poster} alt="poster" />
    </div>

    <div className={styles.info}>
      <div className={styles.info_item}>
        Name:
        {name}
      </div>
      <div className={styles.info_item}>
        imdbId:
        {id}
      </div>
      <div className={styles.info_item}>
        Year:
        {year}
      </div>
      <div className={styles.info_item}>
        Type:
        {type}
      </div>
    </div>
  </div>
);
