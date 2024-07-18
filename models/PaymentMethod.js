//pay method
const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  methodType: { type: String, enum: ['credit_card', 'debit_card', 'digital_wallet'], required: true },
  provider: { type: String, required: true },
  accountNumber: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);
