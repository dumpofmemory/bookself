import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.component';
import SelectedBookPreview from '../selected-book-preview/selected-book-preview.component';
import { useBooks } from './books.hooks';
import SearchBar from '../search/searchbar.component';
import SignInPage from '../signin-page/signin-page.component';
import * as firebase from 'firebase';
import { firebaseApp } from '../../rebase';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, GET_USER } from '../../graphql/user.query';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../../graphql/user.mutation';

export function Users(): JSX.Element {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  return (
    <ul>
      {data.users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export function User({ props }: any): JSX.Element {
  return (
    <div>
      <h3>Yo {props}!</h3>
    </div>
  );
}

const Books = (): JSX.Element => {
  const booksHook = useBooks();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uid, setUID] = useState<string | null>('');

  const [createUser] = useMutation(CREATE_USER);
  const { data } = useQuery(GET_USER, {
    variables: { uid },
  });

  const authHandler = async (authData: any) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const googleAuthToken = authData.credential.accessToken;

    // console.log(authData);
    // console.log(data);

    if (!data) {
      await createUser({
        variables: {
          uid: authData.user.uid,
          name: authData.user.displayName,
          email: authData.user.email,
          photoURL: authData.user.photoURL,
          isNewUser: authData.user.isNewUser,
        },
      });
    }
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
        <SignInPage authenticate={authenticate} />
      ) : (
        <div className="">
          <Header />
          <div className="sign-out">
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
          <div className="searchbar">
            <SearchBar selectedBook={booksHook.book} onSelectBook={booksHook.onSelectBook} />
          </div>

          <main className="">
            <section className="all-books">
              <h1>You added</h1>
              <div className="book-preview-section">
                <SelectedBookPreview selectedBook={booksHook.book} />
                <Users />
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
