const express = require('express');
const router = express.Router();
const SubscribedEmail = require('../models/subscribedEmails');
const ContactMessage = require('../models/contactMessages');

// Route to handle subscription form submission
router.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    try {
        
        console.log('Saved subscribed email:', email);
        res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
        console.error('Error saving subscription:', error);
        res.status(500).json({ error: 'Failed to save subscription.' });
    }
});

// Route to handle HOME contact form submission
router.post('/email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        console.log(`Saved contact message from ${name} (${email})`);
        res.status(200).json({ message: 'Your message has been received. Thank you!' });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ error: 'Failed to save your message.' });
    }
});

module.exports = router;
