const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    }],
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: false // Set to false to make it optional
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    // Add other fields as necessary, such as order status, total price, etc.
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;