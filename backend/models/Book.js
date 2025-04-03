const mongoose = require('mongoose');

const bookScheme = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    Quantity: {type: Number, default: 100},
    ranking: {type: Number, default: 0},
    InStock: {type: Boolean, default: true},
})

const Book = mongoose.model('Book', bookScheme);

module.exports = Book;
