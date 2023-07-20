const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Replace these with your Gmail account credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-gmail-account@gmail.com',
    pass: 'your-gmail-account-password',
  },
});

const mailOptions = {
  from: 'your-gmail-account@gmail.com',
  to: 'recipient@example.com',
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer!',
};

app.get('/send-email', (req, res) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
