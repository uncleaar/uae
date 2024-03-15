import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import { HomePage } from '../../../pages/HomePage';
import { ROUTES } from '../../../shared/constants';
import { Layout } from '../Layout';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
