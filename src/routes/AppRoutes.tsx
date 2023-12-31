import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootPage from '@pages/RootPage/RootPage';
import HomePage from '@pages/HomePage/HomePage';
import NumberPage from '@pages/NumberPage/NumberPage';

const routes = createHashRouter(createRoutesFromElements(
  <Route path={'/'} element={<RootPage />}>
    <Route index element={<HomePage/>} />
    <Route path={':number'} element={<NumberPage/>} />
  </Route>
))

const AppRoutes = () => {
  return (
    <RouterProvider router={routes} />
  );
};

export default AppRoutes;
