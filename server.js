// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const paymentMethodRoutes = require('./routes/paymentMethodRoutes');
//const paymentRoutes = require("./routes/paymentRoutes")

require('dotenv').config();

//init app
const app = express();

//connect to mongo databases
connectDB();

//middleware to accept json responses
app.use(bodyParser.json());


//routes for auth, transaction,
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/payment-methods', paymentMethodRoutes);
//app.use('/api/payments', paymentRoutes);


//listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`My server running on port ${PORT}`));
