import { Link } from 'react-router-dom';

import { Input, Profile } from '../../../../../shared/ui';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <Link to="/">
        <img src="/assets/logo.jpg" alt="logo" />
      </Link>

      <Input placeholder="Search" icon />

      <Profile />
    </nav>

  </header>
);
