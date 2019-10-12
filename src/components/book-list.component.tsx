import React from 'react';
import { Link } from 'react-router-dom';
import './suggestions/book.component.scss';
import { bookAuthors } from '../utils';

const Book = ({ book }: any) => {
  return (
    <li className="Book">
      <div className="book-details">
        <img
          className="cover-image"
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h5 className="title">{book.volumeInfo.title}</h5>
          <p className="author">{bookAuthors(book.volumeInfo.authors)}</p>
          <p className="publish-date">{book.volumeInfo.publishedDate}</p>
          <Link to={`/book/${book.id}`}>Show details</Link>
        </div>
      </div>
      <hr />
    </li>
  );
};

const BooksList = ({ books }: any) => {
  return (
    <ul className="suggestions-list">
      {books.items.map((book: any, index: any) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};

export default BooksList;
