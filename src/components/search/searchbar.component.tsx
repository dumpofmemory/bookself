import React, { useState, useEffect } from 'react';
import './searchbar.component.scss';
import Book from '../../models/book.model';
import axios from 'axios';
import BooksList from '../book-list.component';

export interface SearchProps {
  searchQuery: string;
  onSearchQueryChange: (searchTerm: string) => void;
}

const SearchBar = ({ onSearchQueryChange, searchQuery }: SearchProps): JSX.Element => {
  const [results, setResults] = useState<Book[]>([]);

  const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  const fetchBooks = async (searchTerm: string) => {
    try {
      const result = await axios.get(`${API_BASE_URL}?q=${searchTerm}`);
      setResults(result.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    onSearchQueryChange(ev.currentTarget.value);
  };

  useEffect(() => {
    if (!searchQuery) {
      setResults([]);
    }
  }, [searchQuery]);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    fetchBooks(searchQuery);
  };

  return (
    <div className="Searchbar">
      <form onSubmit={onSubmitHandler}>
        <span className="icon-search" />
        <input
          type="search"
          placeholder="Search by book title or author"
          value={searchQuery}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn-dark">
          Search
        </button>
      </form>
      {results.length === 0 ? (
        <div> </div>
      ) : (
        <div className="books-list">
          <BooksList books={results} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
