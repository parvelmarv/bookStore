import './Bookrow.css';

const BookRow = ({ book }) => {
  return (
    <div className="book-row">
      <div className="book-detail">{book.title}</div>
      <div className="book-detail">{book.author}</div>
      <div className="book-detail">{book.releaseYear}</div>
      <div className="book-detail">{book.inStock ? 'Yes' : 'No'}</div>
      <div className="book-detail">{book.Quantity}</div>
    </div>
  );
};

export default BookRow;