const nodemailer = require('nodemailer');
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

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use any email service provider here
    auth: {
        user: 'johnicarus2020@gmail.com', // Your email
        pass: 'tjio bxuw zxet tgor' // Your email password or app-specific password
    }
});

// Route to handle contact form submission
router.post('/email', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
  }

    // Setup email options
    const mailOptions = {
        from: email,
        to: 'johnicarus2020@gmail.com', // The email address where you want to receive the form data
        subject: `New Contact Form Submission: ${subject}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Failed to send email.' });
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Your message has been sent. Thank you!' });
    });
});

module.exports = router;

