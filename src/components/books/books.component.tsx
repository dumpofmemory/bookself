import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.component';
import SelectedBookPreview from '../selected-book-preview/selected-book-preview.component';
import { useBooks } from './books.hooks';
import SearchBar from '../search/searchbar.component';
import Login from '../login/login.component';
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

export function User({ uid }: any): JSX.Element {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { uid },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  return (
    <div>
      <h3>Yo {data.user.email}</h3>
    </div>
  );
}

const Books = (): JSX.Element => {
  const booksHook = useBooks();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

  const authHandler = async (authData: any) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const googleAuthToken = authData.credential.accessToken;

    await createUser({
      variables: {
        uid: authData.user.uid,
        name: authData.user.displayName,
        email: authData.user.email,
        photoURL: authData.user.photoURL,
        isNewUser: authData.user.isNewUser,
      },
    });
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
        // User is signed in.
        setIsAuthenticated(true);
        console.log(isAuthenticated);
        console.log(user);
      } else {
        // No user is signed in.
        setIsAuthenticated(false);
        console.log(user);
        console.log(isAuthenticated);
      }
    });
  }, [isAuthenticated]);

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        setIsAuthenticated(false);
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login authenticate={authenticate} />
      ) : (
        <div className="">
          <Header />
          <div className="sign-out">
            <button onClick={() => signout()}>Sign Out</button>
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
                <User uid="pVgDXrQwvPNTec2PH68uiZuaYBE2" />
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
};

export default Books;
