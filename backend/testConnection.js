const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function testConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });
        console.log('Connected to MongoDB successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

testConnection();