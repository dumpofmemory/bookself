import { useState, useEffect } from 'react';

export interface SearchBarHook {
  searchQuery: string;
  onSearchQueryChange: (searchTerm: string) => void;
}

export const useSearch = (): SearchBarHook => {
  const [searchQuery, onSearchQueryChange] = useState('');

  useEffect(() => {
    onSearchQueryChange(searchQuery);
  }, [searchQuery]);

  return {
    searchQuery,
    onSearchQueryChange,
  };
};
