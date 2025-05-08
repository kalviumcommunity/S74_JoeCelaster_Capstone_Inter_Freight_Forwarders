
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/api', (req, res) => {
  const data = {
    message: 'This is a GET endpoint example',
  };
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
