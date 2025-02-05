const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message, subject } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email address');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name}: ${subject}`,
    text: `${email}\n`+message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: '+ error);
    } else {
      res.status(200).send('Email sent successfully!');
    }
  });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});