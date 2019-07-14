import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import base from './rebase';

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState();

  function getSales(): any {
    base
      .fetch('books', {
        context: setData(data),
        asArray: true,
      })
      .then((data: any): any => {
        console.log(data);
        const result = data.map((item: any): any => item.key);
        console.log(result);
        setData(result);
      })
      .catch((error: any): any => {
        alert(error);
      });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  useEffect(() => {
    if (!data) {
      getSales();
    }
  }, [data, getSales]);

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
        {data && data.length && data[0]}
      </header>
    </div>
  );
};

export default App;
