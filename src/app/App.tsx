import { Suspense } from 'react';

import { AppRouter } from './providers/Router/AppRouter';

import './styles/globals.scss';

export const App = () => (
  <div className="app">
    <Suspense fallback="">
      <div className="content-page">
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
