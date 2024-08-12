const express = require('express');
const router = express.Router();
const Degree = require('../models/Degree');
// Create a new degree
router.post('/', async (req, res) => {
  try {
    const degree = new Degree(req.body);
    await degree.save();
    res.status(201).json(degree);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all degrees
router.get('/', async (req, res) => {
  try {
    const degrees = await Degree.find();
    res.status(200).json(degrees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;