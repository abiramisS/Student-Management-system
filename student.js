const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  degree: { type: mongoose.Schema.Types.ObjectId, ref: 'Degree' },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }
});

module.exports = mongoose.model('student',studentSchema);