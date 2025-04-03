const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const mongoose = require('mongoose');


//Middleware för att hitta en bok genom ID

async function getBook(req, res, next) {
    let book;
    try {
        book = await Book.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Cannot find book' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.book = book;
    next();
}
    
// Enkel filtrering och sortering, samt pagination
router.get('/', async (req, res) => {
    const { author, releaseYear, title, sortBy, page = 1, limit = 10 } = req.query;
    const filter = {};
    if (author) filter.author = author;
    if (releaseYear) filter.releaseYear = releaseYear;
    if (title) filter.title = title;
    
    try {
        let query = Book.find(filter);

        if (sortBy) {
            const sortCriteria = {};
            sortCriteria[sortBy] = -1;
            query = query.sort(sortCriteria);
        }

        const books = await query
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const totalBooks = await Book.countDocuments(filter);
        const totalPages = Math.ceil(totalBooks / limit);

        res.json({
            books,
            totalPages,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, author, releaseYear, Quantity, InStock } = req.body;
    const book = new Book({ 
        title, 
        author,
        releaseYear, 
        Quantity,
        InStock });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', getBook, async (req, res) => {
    try {
        await res.book.remove();
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Kan köras t.ex. när en kund lägger varor i sin kundvagn för att senare kunna lägga en order
//Increment skulle istället kunna användas när man får en ny bokleverans. 
router.put('/:id/decrement', async (req, res) => {
    try {  
      const { id } = req.params;
      const book = await Book.findById(id);
      if (book && book.Quantity > 0) {
        book.Quantity -= 1;
        await book.save();
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: 'Book not found or out of stock' });
      }
    } catch (error) {
      console.error('Error:', error); 
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;

