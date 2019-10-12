import React, { useState } from 'react';
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

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    fetchBooks(searchQuery);
  };

  return (
    <div className="Searchbar">
      <form onSubmit={onSubmitHandler}>
        <input
          type="search"
          placeholder="Search for books"
          value={searchQuery}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Search</button>
      </form>
      {results.length === 0 ? (
        <div>none</div>
      ) : (
        <div className="books-list">
          <BooksList books={results} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
