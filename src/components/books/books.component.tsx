import React from 'react';
// import React, { useState, useEffect } from 'react';
// import base from '../../rebase';
import Header from '../../components/header/header.component';

const Books: React.FC = (): JSX.Element => {
  // TODO: backend
  // const [allBooks, setAllBooks] = useState();
  // const [name, setName] = useState('');
  // const [greeting, setGreeting] = useState();

  // useEffect(() => {
  //   function fetchBooks(): any {
  //     base
  //       .fetch('books', {
  //         context: setAllBooks(allBooks),
  //         asArray: true,
  //       })
  //       .then((responseData: any): any => {
  //         console.log(responseData);
  //         const result = responseData.map((item: any): any => item.key);
  //         console.log(result);
  //         setAllBooks(result);
  //       })
  //       .catch((error: any): any => {
  //         alert(error);
  //       });
  //   }
  //   if (!allBooks) {
  //     fetchBooks();
  //   }
  // });

  // function handleChange(e: any) {
  //   const value = e.target.value;
  //   setName(value);
  // }

  // function handleSubmit(e: any) {
  //   e.preventDefault();

  //   fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
  //     .then(response => response.json())
  //     .then(state => setGreeting(state));
  // }

  // console.log(greeting);

  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        {/* <main>{allBooks && allBooks.length && allBooks[0]}</main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input id="name" type="text" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form> */}
      </div>
    </div>
  );
};

export default Books;
