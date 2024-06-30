const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const connect = require("./config/db");

connect.connect();
dotenv.config();

const port = process.env.PORT || 5000;



const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthRoute = require("./routes/AuthRoute");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const providerRoutes = require('./routes/providerRoutes');
const contactsRouter = require('./routes/contactRoute');
const reviewRoutes = require("./routes/reviewRoutes");

app.use(bodyParser.json());
//middlewares
app.use(express.json()); //this ERR, when i forgot this line :TypeError: Cannot destructure property 'name' of 'req.body' as it is undefined.
app.use(cookieParser());

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', AuthRoute);
app.use('/api/v1', productRoutes);
app.use('/api/v1', subscriptionRoutes);
app.use('/api/v1/feedback', feedbackRoutes);
app.use('/api/v1/providers', providerRoutes);
app.use('/api/v1/contacts', contactsRouter);
app.use('/api/v1', reviewRoutes);

const paymentRoutes = require('./routes/payment');
app.use('/api', paymentRoutes);

app.get("/", (req, res) => {
  res.status(200).send("welcome to our website!");
});

app.listen(port, () => {
  console.log(`Server is running at Port no: ${port}`);
});
