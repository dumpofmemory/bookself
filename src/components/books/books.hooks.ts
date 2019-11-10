import { useState } from 'react';
import { Book } from '../../models/book.model';

export interface BooksHook {
  book: Book | null;
  onSelectBook: (book: Book | null) => any;
}

export const useBooks = (): BooksHook => {
  const [book, setBook] = useState<Book | null>(null);

  const onSelectBook = (book: Book | null): void => setBook(book);

  return {
    book,
    onSelectBook,
  };
};
