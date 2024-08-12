Student Management System
A web-based Student Management System (SMS) designed to handle student data, including course, degree, department, and institute details. Built with Node.js, Express, and MongoDB using Mongoose for schema management.

Features:
Student Management: Add, update, and retrieve student details.
Course Management: Manage courses and their details.
Degree Management: Manage degree programs and their levels.
Department Management: Manage departments within institutes.
Institute Management: Manage institutes and their associated details.

Technologies:
Node.js: JavaScript runtime for building the server-side application.
Express: Web application framework for Node.js.
MongoDB: NoSQL database for storing student and related data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js. 
Thunder client:For testing API endpoints.

Installation:
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/student-management-system.git
cd student-management-system
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables

Create a .env file in the root directory of the project and add your MongoDB connection string:

env
Copy code
MONGO_URI=mongodb://localhost:27017/student_management
Run the Application

Start the server:

bash
Copy code
npm start
The application will run on http://localhost:5000 by default.

API Endpoints:
Student Routes:
Create a New Student
POST /students
Request Body: { "name": "John Doe", "age": 20, "institute": "Institute ID", "course": "Course ID", "degree": "Degree ID", "department": "Department ID" }
Response: Details of the created student.
Get Students by Institute ID

GET /students/institute/:instituteId
URL Parameter: :instituteId - ID of the institute
Response: List of students associated with the given institute, including their course, degree, and department details.

Course Routes:
Create a New Course
POST /courses
Request Body: { "name": "Data Structures", "credits": 3, "department": "Department ID" }
Response: Details of the created course.

Degree Routes:
Create a New Degree
POST /degrees
Request Body: { "name": "Bachelor of Technology", "level": "Undergraduate" }
Response: Details of the created degree.

Department Routes:
Create a New Department
POST /departments
Request Body: { "name": "Department of Computer Science", "institute": "Institute ID" }
Response: Details of the created department.

Institute Routes:
Create a New Institute
POST /institutes
Request Body: { "name": "ABC Institute" }
Response: Details of the created institute.

Schema Definitions:

Student Schema:
name: String, required
age: Number, required
institute: ObjectId, reference to Institute
course: ObjectId, reference to Course
degree: ObjectId, reference to Degree
department: ObjectId, reference to Department

Course Schema:
name: String, required
credits: Number, required
department: ObjectId, reference to Department

Degree Schema:
name: String, required
level: String, required

Department Schema:
name: String, required
institute: ObjectId, reference to Institute

Institute Schema:
name: String, required
