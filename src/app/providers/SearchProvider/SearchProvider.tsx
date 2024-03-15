import { useMemo, useState } from 'react';

import { SearchContext } from './SearchContext';

export const SearchProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const value = useMemo(() => ({ searchTerm, setSearchTerm }), [searchTerm, setSearchTerm]);

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
