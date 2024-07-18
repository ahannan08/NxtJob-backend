const Transaction = require('../models/Transaction');
const PaymentMethod = require('../models/PaymentMethod');

exports.createTransaction = async (req, res) => {
  const { userId, amount, paymentMethodId } = req.body;

  try {
    const paymentMethod = await PaymentMethod.findById(paymentMethodId);
    if (!paymentMethod) {
      return res.status(404).json({ msg: 'Payment method not found' });
    }

    const transaction = new Transaction({
      userId,
      amount,
      paymentMethodId,
      transactionType: paymentMethod.methodType,
    });

    await transaction.save();
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.processTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);

    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    // payment processing logic
    const isSuccess = Math.random() > 0.5; // Random success or failure for test

    if (isSuccess) {
      transaction.status = 'complete';
    } else {
      transaction.status = 'failed';
    }
    
    transaction.processedAt = Date.now();

    await transaction.save();

    if (transaction.status === 'failed') {
      await this.handleRefund(req, res); // Trigger refund if failed
    } else {
      res.json(transaction);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.handleRefund = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);

    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    // refund logic
    transaction.status = 'refunded';
    transaction.refundedAt = Date.now();

    await transaction.save();
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getTransactionStatus = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);

    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    res.json({ status: transaction.status });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Transaction not found' });
    }

    res.status(500).send('Server error');
  }
};
