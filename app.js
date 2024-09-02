// Use the contact routes
const express = require('express');
const bodyParser = require('body-parser');
const emailRouter = require('./routes/contact');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

//mongoose connection


// Body parser middleware to handle form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// Use the contact router
// app.use(contactRouter);
//const propertyRoutes = require('./src/routes/propertyRoutes');

//app.use('/api/properties', propertyRoutes);
// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

 //middleware to prevent common security threat.
 app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff'); // Prevent MIME type sniffing
  res.setHeader('X-Frame-Options', 'DENY'); // Prevent clickjacking
  res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;");

  next();
});


// Routes
app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/contact'));
app.use(emailRouter);
// app.use('/admin', require('./src/routes/admin'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
