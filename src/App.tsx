import React from 'react';
import logo from './logo.svg';
import './App.scss';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {allBooks && allBooks.length && allBooks[0]}
      </header>
    </div>
  );
};

export default App;
