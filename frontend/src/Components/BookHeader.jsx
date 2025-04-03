import './Bookrow.css';

const BookHeader = () => {
  return (
    <div className="book-row book-header">
      <div className="book-detail">Title</div>
      <div className="book-detail">Author</div>
      <div className="book-detail">Release Year</div>
      <div className="book-detail">In Stock</div>
      <div className="book-detail">Quantity</div>
    </div>
  );
};

export default BookHeader;