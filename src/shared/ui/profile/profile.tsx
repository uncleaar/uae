import React from 'react';

import styles from './profile.module.scss';

export const Profile = () => (
  <div className={styles.profile}>
    <img src="/assets/user.svg" alt="user" className={styles.user} />
    <span className={styles.name}>Your name</span>
  </div>
);
