import React from 'react';
import { bookAuthors } from '../../utils/index';
import './selected-book-preview.component.scss';

const SelectedBookPreview = ({ selectedBook }: any): JSX.Element => (
  <div className="SelectedBookPreview">
    {!selectedBook ? (
      <></>
    ) : (
      <>
        <div className="book-preview">
          <img
            className="cover-image"
            alt={`${selectedBook && selectedBook.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${selectedBook &&
              selectedBook.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
          <div className="book-detail">
            <p className="author">{bookAuthors(selectedBook.volumeInfo.authors)}</p>
            <h6 className="title">{selectedBook.volumeInfo.title}</h6>
            {/* <p className="publish-date">{selectedBook.volumeInfo.publishedDate}</p> */}
            {/* <p className="publisher">{selectedBook.volumeInfo.publisher}</p> */}
            {/* <p className="page-count">{selectedBook.volumeInfo.pageCount}</p> */}
            {/* <p className="description"> */}
            {/* {selectedBook.volumeInfo.description && */}
            {/* // selectedBook.volumeInfo.description.substr(0, 160)} */}
            {/* ... */}
            {/* </p> */}
          </div>
        </div>
      </>
    )}
  </div>
);

export default SelectedBookPreview;
