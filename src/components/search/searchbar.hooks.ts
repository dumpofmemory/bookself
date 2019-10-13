import { useState } from 'react';

export interface SearchBarHook {
  searchQuery: string;
  onSearchQueryChange: (searchTerm: string) => void;
}

export const useSearchBook = (): SearchBarHook => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchQueryChange = (searchTerm: string): void => setSearchQuery(searchTerm);

  return {
    searchQuery,
    onSearchQueryChange,
  };
};
