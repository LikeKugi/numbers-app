import { JSX } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link className={styles.header__link} to={'/'}>Numberphilia</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
