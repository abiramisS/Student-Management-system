const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const instituteRoutes = require('./routes/instituteRoutes'); // Adjust the path as needed
const departmentRoutes=require('./routes/departmentRoutes');
const degreeRoutes=require('./routes/degreeRoutes');
const courseRoutes=require('./routes/courseRoutes');
const studentRoutes=require('./routes/studentRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/institutes', instituteRoutes);
app.use('/departments', departmentRoutes);
app.use('/degree', degreeRoutes);
app.use('/course', courseRoutes);
app.use('/student',studentRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/StudentManagement', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});