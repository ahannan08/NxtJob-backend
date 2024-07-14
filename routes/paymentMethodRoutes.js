// routes/paymentMethodRoutes.js
const express = require('express');
const router = express.Router();
const { addPaymentMethod } = require('../controllers/paymentMethodController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addPaymentMethod);

module.exports = router;
