import React from 'react';
import './searchbar.component.scss';

export interface SearchProps {
  searchQuery: string;
  onSearchQueryChange: (searchTerm: string) => void;
}

const SearchBar = ({ onSearchQueryChange, searchQuery }: SearchProps): JSX.Element => (
  <div className="Searchbar">
    <input
      value={searchQuery}
      onChange={(ev: React.FormEvent<HTMLInputElement>): void =>
        onSearchQueryChange(ev.currentTarget.value)
      }
      className="search"
      type="search"
      placeholder="Search..."
    />
  </div>
);

export default SearchBar;
