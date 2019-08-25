import React, { useState, useEffect } from 'react';
import './App.scss';
import base from './rebase';
import Header from './components/header/header.component';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const App: React.FC = (): JSX.Element => {
  const [allBooks, setAllBooks] = useState();
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    function fetchBooks(): any {
      base
        .fetch('books', {
          context: setAllBooks(allBooks),
          asArray: true,
        })
        .then((responseData: any): any => {
          // eslint-disable-next-line no-console
          console.log(responseData);
          const result = responseData.map((item: any): any => item.key);
          // eslint-disable-next-line no-console
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

  function handleChange(e: any) {
    const value = e.target.value;
    setName(value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
      .then(response => response.json())
      .then(state => setGreeting(state));
  }

  console.log(greeting);

  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <main>
          <Jumbotron>
            <h1 className="display-4">A place to mind your books</h1>
            <Button variant="success">Add new</Button>
          </Jumbotron>
          {allBooks && allBooks.length && allBooks[0]}
        </main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input id="name" type="text" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <p>{greeting && greeting.greeting}</p>
      </div>
    </div>
  );
};

export default App;
