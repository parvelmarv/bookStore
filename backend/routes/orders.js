const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

/* Flöde: 
1. Kund lägger till böcker i sin kundvagn
2. Kund betalar och när betalningen är klar skapas en order
3. Order sparas i databasen och böckerna i kundvagnen minskas med antalet som finns i ordern
*/

//Hämtar alla order och visar kunden om orderna har ett customer id
router.get('/', async (req, res) => {
    try {
        //Om ordern har ett cusomter id så visas det
        const orders = await Order.find().populate('customerId');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    const { books, customerId } = req.body;

    if (!books || books.length === 0) {
        return res.status(400).json({ message: 'No books in order' });
    }

    //Även personer som inte är kunder ska kunna lägga en order
    const orderData = {
        books,
        ...(customerId && { customerId })
    };

    try {
        const order = new Order(orderData);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;