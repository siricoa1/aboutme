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

async function verifyEmail(email) {
  const fetch = (await import('node-fetch')).default;
  const apiKey = process.env.MAILBOXLAYER_API_KEY;
  const url = `http://apilayer.net/api/check?access_key=${apiKey}&email=${email}&smtp=1&format=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.format_valid && data.smtp_check;
  } catch (error) {
    console.error("Error verifying email:", error);
    return false;
  }
}


app.post('/send-email', async (req, res) => {
  const { name, email, message, subject } = req.body;

  const isValidEmail = await verifyEmail(email);
  if (!isValidEmail) {
    return res.status(400).send('Invalid or non-existent email.');
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