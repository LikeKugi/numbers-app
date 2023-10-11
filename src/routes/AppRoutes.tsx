import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootPage from '@pages/RootPage/RootPage';

const routes = createHashRouter(createRoutesFromElements(
  <Route path={'/'} element={<RootPage />}>
  </Route>
))

const AppRoutes = () => {
  return (
    <RouterProvider router={routes} />
  );
};

export default AppRoutes;
