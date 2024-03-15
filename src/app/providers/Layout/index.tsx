import { Outlet } from 'react-router-dom';

import { Footer } from './ui/Footer/Footer';
import { Header } from './ui/Header/Header';

export const Layout = () => (
  <div className="layout">
    <Header />
    <Outlet />
    {/* <Footer /> */}
  </div>
);
