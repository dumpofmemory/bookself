import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.component';
import SelectedBookPreview from '../selected-book-preview/selected-book-preview.component';
import { useBooks } from './books.hooks';
import SearchBar from '../search/searchbar.component';
import SignInPage from '../signin-page/signin-page.component';
import base from '../../rebase';
import * as firebase from 'firebase';
import { firebaseApp } from '../../rebase';

export function User({ props }: any): JSX.Element {
  return (
    <div>
      <h3>Yo {props}!</h3>
    </div>
  );
}

const Books = (): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uid, setUID] = useState<string | null>('');
  const booksHook = useBooks();
  const [allBooks, setAllBooks] = useState<[] | null>(null);

  useEffect(() => {
    function fetchBooks(): any {
      base
        .fetch('books', {
          context: setAllBooks(allBooks),
          asArray: true,
        })
        .then((responseData: any): any => {
          console.log(responseData);
          const result = responseData.map((item: any): any => item.key);
          console.log(result);
          setAllBooks(result);
        })
        .catch((error: any): any => {
          alert(error);
        });
    }
    if (!allBooks) {
      fetchBooks();
    }
  });

  const authHandler = async (authData: any) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const googleAuthToken = authData.credential.accessToken;
    console.log(authData);
    // console.log(data);
  };

  const authenticate = (provider: any) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const uid = user.uid;
        setUID(uid);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [isAuthenticated, setUID]);

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      setIsAuthenticated(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="signin-page">
          <SignInPage authenticate={authenticate} />
        </div>
      ) : (
        <div className="">
          <Header />
          <div className="sign-out">
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
          <div className="searchbar">
            <SearchBar selectedBook={booksHook.book} onSelectBook={booksHook.onSelectBook} />
          </div>
          <main>
            {allBooks}
            <section className="all-books">
              <h1>You added</h1>
              <div className="book-preview-section">
                <SelectedBookPreview selectedBook={booksHook.book} />
                <User props={!uid ? 'NONE' : uid} />
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
};

export default Books;
