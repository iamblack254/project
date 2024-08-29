const express = require('express');
const router = express.Router();

// Contact page route
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
