import React from 'react';
import Header from '../../components/header/header.component';
import SelectedBookPreview from '../selected-book-preview/selected-book-preview.component';
import { useBooks } from './books.hooks';
import SearchBar from '../search/searchbar.component';
import Login from '../login/login.component';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../../rebase';

const Books: React.FC = (): JSX.Element => {
  const booksHook = useBooks();
  // TODO: backend
  // const [allBooks, setAllBooks] = useState();
  // const [name, setName] = useState('');
  // const [greeting, setGreeting] = useState();

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

  const authHandler = async (authData: any) => console.log(authData);

  const authenticate = (provider: any) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler);
  };

  return (
    <div className="App">
      <Login authenticate={authenticate} />
      <div className="">
        <Header />
        <div className="searchbar">
          <SearchBar selectedBook={booksHook.book} onSelectBook={booksHook.onSelectBook} />
        </div>
        {/* // TODO: Backend */}
        {/* <main>{allBooks && allBooks.length && allBooks[0]}</main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input id="name" type="text" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form> */}
        <main className="">
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
