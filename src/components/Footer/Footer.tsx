import { JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <nav className={styles.footer__nav}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}><Link to={'/'}>1</Link></li>
            <li className={styles.footer__item}><Link to={'/'}>1</Link></li>
            <li className={styles.footer__item}><Link to={'/'}>1</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
