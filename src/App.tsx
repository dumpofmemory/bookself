import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetailPage from './pages/book-details-page';
import './App.scss';
import AppLayout from './containers/app-layout.component';
import Books from './components/books/books.component';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const NoMatchRoute = () => <div>404 Page</div>;

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={Books} />
            <Route path="/book/:bookId" exact component={BookDetailPage} />
            <Route component={NoMatchRoute} />
          </Switch>
        </AppLayout>
      </ApolloProvider>
    </Router>
  );
};

export default App;
