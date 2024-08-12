const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get students by institute ID
router.get('/institute/:instituteId', async (req, res) => {
  try {
    // Find students associated with the given institute ID
    const students = await Student.find({ institute: req.params.instituteId })
      .populate({
        path: 'course',
        select: 'name credits department',
        populate: { path: 'department', select: 'name' } // Populate department inside course
      })
      .populate('degree', 'name level') // Populate degree
      .populate({
        path: 'department',
        select: 'name' // Populate department directly
      });

    // Check if students are found
    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found for this institute' });
    }

    // Return students with all populated details
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;