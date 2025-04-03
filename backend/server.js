const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const booksRouter = require('./routes/books');
const customersRouter = require('./routes/customers');
const ordersRouter = require('./routes/orders');

dotenv.config();

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

connectToDatabase();

const app = express();
app.use(express.json());
app.use('/books', booksRouter);
app.use('/customers', customersRouter);
app.use('/orders', ordersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
