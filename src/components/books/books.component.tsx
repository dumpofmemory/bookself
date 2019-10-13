import React from 'react';
// import React, { useState, useEffect } from 'react';
// import base from '../../rebase';
import Header from '../../components/header/header.component';
import { SelectedBookPreview } from '.././book-list.component';
import { useBooks } from './books.hooks';
import SearchBar from '../search/searchbar.component';

const Books: React.FC = (): JSX.Element => {
  const booksHook = useBooks();
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
      <div className="">
        <Header />
        <SearchBar selectedBook={booksHook.book} onSelectBook={booksHook.onSelectBook} />
        {/* // TODO: Backend */}
        {/* <main>{allBooks && allBooks.length && allBooks[0]}</main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input id="name" type="text" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form> */}
        <main className="">
          <section className="all-books">
            <h1>You added</h1>
            <div className="book-preview">
              <SelectedBookPreview selectedBook={booksHook.book} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Books;
