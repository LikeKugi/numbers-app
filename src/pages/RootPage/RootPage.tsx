import { JSX } from 'react';
import {Outlet} from 'react-router-dom';

const RootPage = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default RootPage;
