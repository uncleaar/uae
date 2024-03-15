import { useContext } from 'react';

import { SearchContext, SearchContextType } from './SearchContext';

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};
