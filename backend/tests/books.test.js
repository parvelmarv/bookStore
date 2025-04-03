const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('../routes/books');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe('Get all books API', () => {
    it('Returns all books', async () => {
        try {
            const response = await request(app).get('/books');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        } catch (error) {
            console.error('Error during test:', error);
        }
    });
});

describe('Add a new book to the book store', () => {
    it('Should add a new book to the book store', async () => {
        try {
            const newBook = {
                title: 'Test Book',
                author: 'Test Author',
                releaseYear: 2024,
                numberInStock: 10   

        }
        const response = await request(app).post('/books').send(newBook);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Book');
        expect(response.body.author).toBe('Test Author');
        expect(response.body.releaseYear).toBe(2024);
        expect(response.body.numberInStock).toBe(10);
        } catch (error) {
            console.error('Error during test:', error);
        }
    });
});