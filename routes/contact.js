const express = require('express');
const router = express.Router();

// Route to handle subscription form submission
router.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    console.log('Received email:', email);
    // Logic to save email to the database would go here
    
    // Redirect or render a thank you page
    res.redirect('/'); // Or render a thank you page
});

// Route to handle contact form submission
router.post('/email', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
  }

    // Log the data to the terminal
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    // Send a success response
    res.status(200).json({ message: 'Your message has been received. Thank you!' });
});

module.exports = router;
