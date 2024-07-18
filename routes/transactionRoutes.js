// create, getstatus, process , handle error by refund.
const express = require('express');
const router = express.Router();

const {
  createTransaction,
  getTransactionStatus,
  processTransaction,
  handleRefund
} = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createTransaction);
router.get('/:transactionId/status', authMiddleware, getTransactionStatus);
router.post('/:transactionId/process', authMiddleware, processTransaction);
router.post('/:transactionId/refund', authMiddleware, handleRefund);

module.exports = router;
