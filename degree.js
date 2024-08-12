const mongoose = require('mongoose');

const degreeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true }, // For example: Bachelor's, Master's
});

module.exports = mongoose.model('Degree', degreeSchema);