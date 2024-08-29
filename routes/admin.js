const express = require('express');
const router = express.Router();
const Section = require("../models/section");

// Admin dashboard
router.get('/', async (req, res) => {
  const sections = await Section.find();
  res.render('admin', { sections });
});

// Add a new section
router.post('/add', async (req, res) => {
  const { title, content, image, type } = req.body;
  await Section.create({ title, content, image, type });
  res.redirect('/admin');
});

// Edit a section
router.get('/edit/:id', async (req, res) => {
  const section = await Section.findById(req.params.id);
  res.render('edit', { section });
});

router.post('/edit/:id', async (req, res) => {
  const { title, content, image, type } = req.body;
  await Section.findByIdAndUpdate(req.params.id, { title, content, image, type });
  res.redirect('/admin');
});

// Delete a section
router.post('/delete/:id', async (req, res) => {
  await Section.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
});

module.exports = router;
