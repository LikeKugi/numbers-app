import { JSX } from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@components/Header/Header';
import styles from './RootPage.module.scss'
import Footer from '@components/Footer/Footer';

const RootPage = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.root__content}>
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};
export default RootPage;
