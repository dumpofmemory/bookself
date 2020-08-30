import React, { useState, useEffect } from 'react';
import './searchbar.component.scss';
import { Book } from '../../models/book.model';
import axios from 'axios';
import BooksList from '../book-list.component';
import { useSearchBook } from './searchbar.hooks';

// export interface SearchProps {
//   searchQuery: string;
//   onSearchQueryChange: (searchTerm: string) => void;
// }

const SearchBar = ({ selectedBook, onSelectBook }: any): JSX.Element => {
  // const SearchBar = ({ onSearchQueryChange, searchQuery }: SearchProps): JSX.Element => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>();

  const searchBarHook = useSearchBook();

  const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  const fetchBooks = async (searchTerm: string) => {
    try {
      const result = await axios.get(`${API_BASE_URL}?q=${searchTerm}`);
      setSearchResults(result.data);
      onSelectBook(result.data.items[0]);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    searchBarHook.onSearchQueryChange(ev.currentTarget.value);
  };

  useEffect(() => {
    if (!searchBarHook.searchQuery) {
      setSearchResults([]);
    }
  }, [searchBarHook.searchQuery]);

  useEffect(() => {
    if (!dropdownIsOpen) {
      setSearchResults([]);
      if (selectedBook && searchBarHook.searchQuery.length) {
        searchBarHook.onSearchQueryChange('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownIsOpen]);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    fetchBooks(searchBarHook.searchQuery);
  };

  return (
    <div className="Searchbar">
      <form onSubmit={onSubmitHandler}>
        <span className="icon-search" />
        <input
          type="search"
          placeholder="Search by book title or author"
          value={searchBarHook.searchQuery}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn-dark">
          {/* <span className="icon-search" /> */}
          Search
        </button>
      </form>
      {searchResults.length === 0 ? (
        <> </>
      ) : (
        <div className="books-list">
          <BooksList
            setDropdownIsOpen={setDropdownIsOpen}
            books={searchResults}
            selectedBook={selectedBook}
            onSelectBook={onSelectBook}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
