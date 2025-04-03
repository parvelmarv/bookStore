import BookRow from './Bookrow.jsx';
import BookHeader from './BookHeader.jsx';

const Stock = ({ books }) => {
    return (
      <div className="Stock-view">
        <h1>Current Stock</h1>
        <div className="book-list">
            <BookHeader />
          {books.map((book) => (
            <BookRow key={book._id} book={book} />
          ))}
        </div>
      </div>
    );
  };

export default Stock;   