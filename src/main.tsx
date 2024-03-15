import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';
import { SearchProvider } from './app/providers/SearchProvider/SearchProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
);
