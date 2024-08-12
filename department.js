const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  faculty: { type: String, required: true }, // For example: Engineering, Medicine
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' }, // Reference to Institute
});

module.exports = mongoose.model('Department', departmentSchema);