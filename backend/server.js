const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/example', (req, res) => {
  const { name, email } = req.body;

  res.status(201).send({ message: 'Data received', name, email });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
