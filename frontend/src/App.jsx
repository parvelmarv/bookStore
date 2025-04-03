import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookList from './Components/Booklist.jsx';
import Stock from './Components/Stock.jsx';

const API_URL = '/api';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        console.log(`${API_URL}/books`);
        const response = await fetch(`${API_URL}/books`);
        const { books, totalPages } = await response.json();
        setBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    fetchBooks();
  }, []);

  const handleDecrement = async (id) => {
    console.log('Decrementing book:', id);
    try {
      const response = await fetch(`${API_URL}/books/${id}/decrement`, {
        method: 'PUT',
      });
    } catch (error) {
      console.error('Error decrementing book:', error);
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList books={books} onDecrement={handleDecrement}/>} />
        <Route path="/Stock" element={<Stock books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;