import React from 'react';
import SelectedBookPreview from '../selected-book-preview/selected-book-preview.component';
import { useBooks } from './books.hooks';
import SearchBar from '../search/searchbar.component';

export function User({ props }: any): JSX.Element {
  return (
    <div>
      <h3>Yo {props}!</h3>
    </div>
  );
}

const Books = (): JSX.Element => {
  const booksHook = useBooks();
  // const [allBooks, setAllBooks] = useState<[] | null>(null);

  // useEffect(() => {
  //   function fetchBooks(): any {
  //     base
  //       .fetch('books', {
  //         context: setAllBooks(allBooks),
  //         asArray: true,
  //       })
  //       .then((responseData: any): any => {
  //         console.log(responseData);
  //         const result = responseData.map((item: any): any => item.key);
  //         console.log(result);
  //         setAllBooks(result);
  //       })
  //       .catch((error: any): any => {
  //         alert(error);
  //       });
  //   }
  //   if (!allBooks) {
  //     fetchBooks();
  //   }
  // });

  return (
    <div className="App">
      <div className="">
        <div className="searchbar">
          <SearchBar selectedBook={booksHook.book} onSelectBook={booksHook.onSelectBook} />
        </div>
        <main>
          {/* {allBooks} */}
          <section className="all-books">
            <h1>You added</h1>
            <div className="book-preview-section">
              <SelectedBookPreview selectedBook={booksHook.book} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Books;
