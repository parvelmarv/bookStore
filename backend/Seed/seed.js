const mongoose = require('mongoose');
const Book = require('../models/Book');
const Customer = require('../models/Customer');
const dotenv = require('dotenv');

dotenv.config();

async function seedBooks() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log('Connected to MongoDB');

        await Book.deleteMany();
        console.log('Deleted all existing books');

        const books = [
            { title: 'The Great Adventure', author: 'John Doe', releaseYear: 2001, numberInStock: 10 },
            { title: 'Mystery of the Old House', author: 'Jane Smith', releaseYear: 2002, numberInStock: 15 },
            { title: 'Journey to the Unknown', author: 'Emily Johnson', releaseYear: 2003, numberInStock: 20 },
            { title: 'Secrets of the Forest', author: 'Michael Brown', releaseYear: 2004, numberInStock: 25 },
            { title: 'The Lost City', author: 'Sarah Davis', releaseYear: 2005, numberInStock: 30 },
            { title: 'Tales of the Sea', author: 'David Wilson', releaseYear: 2006, numberInStock: 35 },
            { title: 'The Hidden Treasure', author: 'Laura Martinez', releaseYear: 2007, numberInStock: 40 },
            { title: 'Legends of the Mountain', author: 'James Anderson', releaseYear: 2008, numberInStock: 45 },
            { title: 'The Enchanted Garden', author: 'Patricia Thomas', releaseYear: 2009, numberInStock: 50 },
            { title: 'Chronicles of the Desert', author: 'Robert Taylor', releaseYear: 2010, numberInStock: 55 },
            { title: 'The Forgotten Island', author: 'Linda Moore', releaseYear: 2011, numberInStock: 60 },
            { title: 'Whispers of the Wind', author: 'Christopher Jackson', releaseYear: 2012, numberInStock: 65 },
            { title: 'The Haunted Castle', author: 'Barbara White', releaseYear: 2013, numberInStock: 70 },
            { title: 'Echoes of the Past', author: 'Paul Harris', releaseYear: 2014, numberInStock: 75 },
            { title: 'The Secret Passage', author: 'Nancy Martin', releaseYear: 2015, numberInStock: 80 },
            { title: 'The Last Frontier', author: 'Kevin Thompson', releaseYear: 2016, numberInStock: 85 },
            { title: 'The Final Quest', author: 'Sandra Garcia', releaseYear: 2017, numberInStock: 90 },
            { title: 'The Hidden Valley', author: 'Steven Martinez', releaseYear: 2018, numberInStock: 95 },
            { title: 'The Ancient Ruins', author: 'Karen Robinson', releaseYear: 2019, numberInStock: 100 },
            { title: 'The New World', author: 'Brian Clark', releaseYear: 2020, numberInStock: 105 },
        ]
        await Book.insertMany(books);
        console.log('Added new books');

        await Customer.deleteMany();
        console.log('Deleted all existing customers');

        const customers = [
        { name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St' },
        { name: 'Bob Smith', email: 'bob@example.com', phone: '234-567-8901', address: '456 Elm St' },
        { name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012', address: '789 Maple Ave' },
        { name: 'Diana Prince', email: 'diana@example.com', phone: '456-789-0123', address: '101 Oak St' },
        { name: 'Eve Adams', email: 'eve@example.com', phone: '567-890-1234', address: '202 Pine St' },
        { name: 'Frank Castle', email: 'frank@example.com', phone: '678-901-2345', address: '303 Cedar St' },
        { name: 'Grace Hopper', email: 'grace@example.com', phone: '789-012-3456', address: '404 Birch St' },
        ];
        await Customer.insertMany(customers);
        console.log('Added new customers');

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');

    } catch (error) {
        console.error('Error seeding books:', error);   
        process.exit(1);
    }
}

seedBooks();

