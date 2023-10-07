
import 'dotenv';
import Student from './student';
const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hi')
})

app.post('/create-student', (req, res) => {
        const { name, first_name, email } = req.body;
  
        const newStudent = new Student({
      name,
      first_name,
      email,
    });
  
   
    newStudent.save((err) => {
      if (err) {
        console.error('new student not saved', err);
        res.status(500).send('new student not saved');
      } else {
        res.status(201).send('successfuly created new student ');
      }
    });
  });
  app.get('/get-students', async (req, res) => {
    try {
      
        const students = await Student.find();
  
           res.json(students);
    } catch (err) {
      console.error('cant retrieving ', err);
      res.status(500).send('cant retrieving ');
    }
  });
  
app.put('/update-students', async (req, res) => {
    try {
     
      const result = await Student.updateMany({ name: 'John' }, { name: 'Bob' });
        
      if (result.nModified > 0) {
        res.send('All "John" entries updated to "Bob"');
      } else {
        res.send('No entries with the name "John" found');
      }
    } catch (err) {
      console.error('Error updating students:', err);
      res.status(500).send('Error updating students');
    }
  });
  
app.get('/get-students', async (req, res) => {
    try {
     
      const students = await Student.findOneAndUpdate();
        
      res.json(students);
    } catch (err) {
      console.error('Error retrieving students:', err);
      res.status(500).send('Error retrieving students');
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});