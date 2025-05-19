const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/UserRoutes')

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cookieParser());


const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT


mongoose.connect(MONGO_URI)
.then(()=>console.log('Mongo Connected'))
.catch(()=>console.log('Error connection'))


app.use('/api/users',userRoutes)

app.get('/api', (req, res) => {
  const data = {
    message: 'This is a GET endpoint example',
  };
  res.status(200).json(data);
});



app.post('/api/example', (req, res) => {
  const { name, email } = req.body;

  res.status(201).send({ message: 'Data received', name, email });
});

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body; 

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = name; // Update user name
  res.json({ message: 'User updated successfully', user });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
