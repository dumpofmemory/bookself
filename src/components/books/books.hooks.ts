import { useState } from 'react';
import { Book } from '../../models/book.model';
import { ADD_BOOK } from '../../graphql/book.mutation';
import { useMutation } from '@apollo/react-hooks';

export interface BooksHook {
  book: Book | null;
  onSelectBook: (book: Book | null) => any;
}

export const useBooks = (): BooksHook => {
  const [book, setBook] = useState<Book | null>(null);
  console.log(book);
  const [createBook] = useMutation(ADD_BOOK);

  const onSelectBook = (book: Book | null): void => {
    const { ...currentBook } = book;

    setBook(book);
    createBook({ variables: { data: currentBook } });
  };

  return {
    book,
    onSelectBook,
  };
};
