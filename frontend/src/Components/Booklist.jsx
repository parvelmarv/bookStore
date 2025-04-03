import React from 'react';
import './Booklist.css';

const Book = ({ id, title, author, releaseYear, onDecrement  }) => {
  return (
    <div className="book-card">
      <div className="book-image"></div> {}
      <h3>{title}</h3>
      <p>{author}, {releaseYear}</p>
      <button className='buy-button' onClick={() => onDecrement(id)}>Buy</button>
    </div>
  );
};

const BookList = ({ books, onDecrement }) => {
    return (
      <div className="book-list">
        {books.map((book, index) => (
          <Book key={index} id={book._id} title={book.title} author={book.author} releaseYear={book.releaseYear} onDecrement={onDecrement} />
        ))}
      </div>
    );
  };

export default BookList;