const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy data (you would usually get this from a database)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// PUT endpoint to update a user by ID
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Get ID from URL
  const { name } = req.body; // Get updated data from request body

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
