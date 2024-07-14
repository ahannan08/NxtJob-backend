// controllers/transactionController.js
const Transaction = require('../models/Transaction');
const PaymentMethod = require('../models/PaymentMethod');

exports.createTransaction = async (req, res) => {
  const { userId, amount, paymentMethodId } = req.body;

  try {
    // Fetch the payment method to get the methodType
    const paymentMethod = await PaymentMethod.findById(paymentMethodId);
    if (!paymentMethod) {
      return res.status(404).json({ msg: 'Payment method not found' });
    }

    const transaction = new Transaction({
      userId,
      amount,
      paymentMethodId,
      transactionType: paymentMethod.methodType, // Set transactionType based on payment method
    });

    await transaction.save();
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
exports.getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);

    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    res.status(500).send('Server error');
  }
};