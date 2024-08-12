const express = require('express');
const router = express.Router();
const Institute = require('../models/Institute'); // Adjust the path as needed

// Create a new institute
router.post('/', async (req, res) => {
  try {
    const institute = new Institute(req.body);
    await institute.save();
    res.status(201).json(institute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all institutes
router.get('/', async (req, res) => {
  try {
    const institutes = await Institute.find();
    res.status(200).json(institutes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get a single institute by ID
router.get('/:id', async (req, res) => {
  try {
    const institute = await Institute.findById(req.params.id);
    if (!institute) {
      return res.status(404).json({ message: 'Institute not found' });
    }
    res.status(200).json(institute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an institute by ID
router.put('/:id', async (req, res) => {
  try {
    const institute = await Institute.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!institute) {
      return res.status(404).json({ message: 'Institute not found' });
    }
    res.status(200).json(institute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an institute by ID
router.delete('/:id', async (req, res) => {
  try {
    const institute = await Institute.findByIdAndDelete(req.params.id);
    if (!institute) {
      return res.status(404).json({ message: 'Institute not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;