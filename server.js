const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();
const port = process.env.PORT || 5000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//PAYPAL ROUTES
const paypalRoutes = require('./routes/paypal');
app.use('/paypal', paypalRoutes)

//USER ROUTES
const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

//EMAIL ROUTES
const emailRoutes = require('./routes/email');
app.use('/email', emailRoutes)

//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => { console.log('Connected to db!')}
)

app.listen(port, () => console.log(`Listening on port ${port}`));
