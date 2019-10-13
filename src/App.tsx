import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetailPage from './pages/book-details-page';
import './App.scss';
import AppLayout from './containers/app-layout.component';
import Books from './components/books/books.component';

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <Router>
      <AppLayout>
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
