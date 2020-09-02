import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetailPage from './pages/book-details-page';
import './App.scss';
import AppLayout from './containers/app-layout.component';
import Books from './components/books/books.component';
import { auth } from './firebase/firebase.utils';
import { User } from 'firebase';

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  const [currentUserAuth, setCurrentUserAuth] = useState<User | null>();
  console.log(currentUserAuth);

  useEffect(() => {
    let unsubscribeFromAuth: any = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUserAuth(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <Router>
      <AppLayout currentUser={currentUserAuth}>
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/book/:bookId" exact component={BookDetailPage} />
          <Route component={NoMatchRoute} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
