// controllers/paymentMethodController.js
const PaymentMethod = require('../models/PaymentMethod');

exports.addPaymentMethod = async (req, res) => {
  const { userId, methodType, provider, accountNumber, expiryDate } = req.body;

  try {
    const paymentMethod = new PaymentMethod({
      userId,
      methodType,
      provider,
      accountNumber,
      expiryDate
    });

    await paymentMethod.save();
    res.json(paymentMethod);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
