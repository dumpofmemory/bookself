import React, { useState, useEffect } from 'react';
import './searchbar.component.scss';
import Book from '../../models/book.model';
import axios from 'axios';
import BooksList from '../book-list.component';
import { useSearchBook } from './searchbar.hooks';
// import { useBooks } from '../books/books.hooks';

// export interface SearchProps {
//   searchQuery: string;
//   onSearchQueryChange: (searchTerm: string) => void;
// }

const SearchBar = ({ selectedBook, onSelectBook }: any): JSX.Element => {
  // const SearchBar = ({ onSearchQueryChange, searchQuery }: SearchProps): JSX.Element => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  // const [book, setBook] = useState<Book | null>(null);
  const searchBarHook = useSearchBook();
  // const booksHook = useBooks();

  const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  const fetchBooks = async (searchTerm: string) => {
    try {
      const result = await axios.get(`${API_BASE_URL}?q=${searchTerm}`);
      setSearchResults(result.data);
      onSelectBook(result.data.items[0]);
      // booksHook.onSelectBook(result.data.items[0]);
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
            books={searchResults}
            selectedBook={selectedBook}
            // selectedBook={booksHook.book}
            // onSelectBook={booksHook.onSelectBook}
            onSelectBook={onSelectBook}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
