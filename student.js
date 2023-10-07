const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    },
  first_name: {
    type: String,
    },
  email: {
    type: String,
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;