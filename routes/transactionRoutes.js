// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const { createTransaction, getTransaction } = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createTransaction);
router.get('/:transactionId', authMiddleware, getTransaction);

module.exports = router;
