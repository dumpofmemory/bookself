import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BookDetail from '../components/book-details.component';

const BookDetailPage = ({ match }: any) => {
  const {
    params: { bookId },
  } = match;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBook = async () => {
      try {
        const result = await axios.get(`${API_BASE_URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        alert(error);
      }
    };
    // Call the API
    fetchBook();
  }, [bookId]);

  return (
    <>
      <Link to={`/`}>Go back to search books</Link>

      {book && <BookDetail book={book} />}
    </>
  );
};

export default BookDetailPage;
