import React from 'react';
import { Link } from 'react-router-dom';
import './suggestions/book.component.scss';
import { bookAuthors } from '../utils';

export const SelectedBookPreview = ({ selectedBook }: any): JSX.Element => (
  <div>
    {!selectedBook ? (
      <></>
    ) : (
      <>
        <h4>Book Preview:</h4>
        <div className="book-preview">
          <img
            alt={`${selectedBook && selectedBook.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${selectedBook &&
              selectedBook.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
          <div className="book-detail">
            <h6>{selectedBook.volumeInfo.title}</h6>
            <p>
              <b>{bookAuthors(selectedBook.volumeInfo.authors)}</b>
            </p>
            <p className="publish-date">{selectedBook.volumeInfo.publishedDate}</p>
            <p className="publisher">{selectedBook.volumeInfo.publisher}</p>
            <p className="page-count">{selectedBook.volumeInfo.pageCount}</p>
            <p>
              {selectedBook.volumeInfo.description &&
                selectedBook.volumeInfo.description.substr(0, 160)}
              ...
            </p>
          </div>
        </div>
      </>
    )}
  </div>
);

const Book = ({ book, onClick }: any): JSX.Element => {
  return (
    <li className="Book" onClick={onClick}>
      <div className="book-details">
        <img
          className="cover-image"
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h5 className="title">{book.volumeInfo.title}</h5>
          <p className="author">
            <b>{bookAuthors(book.volumeInfo.authors)}</b>
          </p>
          <p className="publish-date">{book.volumeInfo.publishedDate}</p>
          <Link to={`/book/${book.id}`}>Show details</Link>
        </div>
      </div>
      <hr />
    </li>
  );
};

const BooksList = ({ books, selectedBook, onSelectBook }: any): JSX.Element => (
  <>
    <ul className="suggestions-list">
      <SelectedBookPreview selectedBook={selectedBook} />
      {books.items.map((book: any, index: any) => {
        return <Book book={book} key={index} onClick={(): any => onSelectBook(book)} />;
      })}
    </ul>
  </>
);

export default BooksList;