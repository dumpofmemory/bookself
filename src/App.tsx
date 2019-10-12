import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SearchPage from './pages/search-page';
import BookDetailPage from './pages/book-details-page';
import './App.scss';
import AppLayout from './containers/app-layout.component';
import Books from './components/books/books.component';

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    // <div className="App">
    //   <div className="container-fluid">
    //     <Header searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
    //     <main>
    //       <Jumbotron>
    //         <h1 className="display-4">A place to mind your books</h1>
    //         <h3>{greeting && greeting.greeting}</h3>
    //         <Button variant="outline-light">Add new</Button>
    //       </Jumbotron>
    //       {allBooks && allBooks.length && allBooks[0]}
    //     </main>
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="name">Enter your name: </label>
    //       <input id="name" type="text" onChange={handleChange} />
    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>
    // </div>
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
