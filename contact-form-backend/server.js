const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form data received:', { name, email, message });

  // Here you can add code to save the data to a database or send an email

  res.status(200).send({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});