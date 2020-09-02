import React, { useState, useEffect } from 'react';
import Header from '../components/header/header.component';
import { authenticate, auth } from '../firebase/firebase.utils';
import SignInPage from '../components/signin-page/signin-page.component';
import { User } from '../components/books/books.component';

// eslint-disable-next-line react/display-name
export default ({ children }: any): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uid, setUID] = useState<string | null>('');

  const { currentUser } = auth;
  console.log(currentUser);

  // const signOut = async () => {
  //   try {
  //     await auth.signOut();
  //     setIsAuthenticated(false);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        const uid = user.uid;
        setUID(uid);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [isAuthenticated, setUID]);

  return (
    <>
      <Header currentUser={currentUser} />
      {/* <div className="sign-out">
        <button onClick={() => signOut()}>Sign Out</button>
      </div> */}
      {!isAuthenticated ? (
        <div className="signin-page">
          <SignInPage authenticate={authenticate} />
        </div>
      ) : (
        <div>
          {children}
          <User props={!uid ? 'NONE' : uid} />
        </div>
      )}
    </>
  );
};
