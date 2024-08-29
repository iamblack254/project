const express = require('express');
const router = express.Router();

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  console.log('Received email:', email);
  // We will add logic to save email to database here
  
  // For now, we just redirect back to the home page with a success message
  res.redirect('/'); // Or render a thank you page, you'll decide on that.
});

module.exports = router;
