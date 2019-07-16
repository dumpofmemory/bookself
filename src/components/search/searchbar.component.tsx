import React from 'react';
import './searchbar.component.scss';
import { useSearch } from './searchbar.hooks';

const SearchBar = (): JSX.Element => {
  const searchHook = useSearch();

  return (
    <div className="Searchbar">
      <input
        value={searchHook.searchQuery}
        onChange={(ev: React.FormEvent<HTMLInputElement>): void =>
          searchHook.onSearchQueryChange(ev.currentTarget.value)
        }
        className="search"
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
