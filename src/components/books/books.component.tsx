import React from 'react';
import Header from '../../components/header/header.component';
import SelectedBookPreview from '../selected-book-preview/selected-book-preview.component';
import { useBooks } from './books.hooks';
import SearchBar from '../search/searchbar.component';
import Login from '../login/login.component';
import * as firebase from 'firebase';
import { firebaseApp } from '../../rebase';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../graphql/user.query';
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

const Books = (): JSX.Element => {
  const booksHook = useBooks();

  const [createUser] = useMutation(CREATE_USER);

  const authHandler = async (authData: any) => {
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

  return (
    <div className="App">
      <Login authenticate={authenticate} />
      <div className="">
        <Header />
        <div className="searchbar">
          <SearchBar selectedBook={booksHook.book} onSelectBook={booksHook.onSelectBook} />
        </div>

        <main className="">
          <section className="all-books">
            <h1>You added</h1>
            <div className="book-preview-section">
              <SelectedBookPreview selectedBook={booksHook.book} />
              <Users />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Books;
