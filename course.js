const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }, // Reference to Department
});

module.exports = mongoose.model('Course', courseSchema);