import React, { useState, useEffect } from 'react';
import './App.scss';
import base from './rebase';
import Header from './components/header/header.component';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const App: React.FC = (): JSX.Element => {
  const [allBooks, setAllBooks] = useState();

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
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  useEffect(() => {
    if (!allBooks) {
      fetchBooks();
    }
  });

  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="main">
          <Jumbotron>
            <h1 className="display-4">A place to mind your books</h1>
            {/* <p className="lead">Add your books onto the shelf</p> */}
            <Button variant="success">Add new book</Button>
          </Jumbotron>
          {allBooks && allBooks.length && allBooks[0]}
        </div>
      </div>
    </div>
  );
};

export default App;
