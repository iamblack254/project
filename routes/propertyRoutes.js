const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Get all properties
//router.get('/', async (req, res) => {
 //   try {
     //   const properties = await Property.find();
      //  res.json(properties);
    //} catch (err) {
      //  res.status(500).send('Server Error');
   // }
//});

// Get a single property by ID
router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).send('Property not found');
        res.json(property);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});
router.get('/', async (req, res) => {
    try {
      const properties = await Property.find();
      if (!properties.length) {
        return res.status(404).json({ message: 'No properties found' });
      }
      res.json(properties);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// Other routes...

module.exports = router;
