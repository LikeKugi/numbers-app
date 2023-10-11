import { JSX } from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@components/Header/Header';

const RootPage = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default RootPage;
