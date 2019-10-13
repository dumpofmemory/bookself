import React from 'react';
import { bookAuthors } from '../../utils/index';

const SelectedBookPreview = ({ selectedBook }: any): JSX.Element => (
  <div>
    {!selectedBook ? (
      <></>
    ) : (
        <>
          <div className="book-preview">
            <img
              alt={`${selectedBook && selectedBook.volumeInfo.title} book`}
              src={`http://books.google.com/books/content?id=${selectedBook &&
                selectedBook.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
            />
            <div className="book-detail">
              <h6>{selectedBook.volumeInfo.title}</h6>
              <p>
                <b>{bookAuthors(selectedBook.volumeInfo.authors)}</b>
              </p>
              <p className="publish-date">{selectedBook.volumeInfo.publishedDate}</p>
              <p className="publisher">{selectedBook.volumeInfo.publisher}</p>
              <p className="page-count">{selectedBook.volumeInfo.pageCount}</p>
              <p>
                {selectedBook.volumeInfo.description &&
                  selectedBook.volumeInfo.description.substr(0, 160)}
                ...
            </p>
            </div>
          </div>
        </>
      )}
  </div>
);

export default SelectedBookPreview;
