import { JSX } from 'react';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className="logo">logo</div>
        <div className={styles.header__query}>query</div>
      </div>
    </header>
  );
};
export default Header;
