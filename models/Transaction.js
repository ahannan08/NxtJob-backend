//transaction
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  paymentMethodId: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentMethod', required: true },
  transactionType: { type: String, enum: ['credit_card', 'debit_card', 'digital_wallet'], required: true },
  status: { type: String, enum: ['created', 'complete', 'failed', 'refunded'], default: 'created' },
  processedAt: { type: Date },
  refundedAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
