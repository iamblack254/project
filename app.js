// Use the contact routes
const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


// Body parser middleware to handle form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the contact router
// app.use(contactRouter);
//const propertyRoutes = require('./src/routes/propertyRoutes');

//app.use('/api/properties', propertyRoutes);


// Set up view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database connection
//mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
 // .then(() => console.log('Connected to the database'))
 //. .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));
// app.use('/admin', require('./src/routes/admin'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
