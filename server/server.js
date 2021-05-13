// const path = require('path');
const express = require('express');

const router = express.Router();
const cors = require('cors');
const dotenv = require('dotenv');
const transporter = require('./config');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

router.post('/send', (req, res) => {
  try {
    const emailDetails = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `,
    };

    transporter.sendMail(emailDetails, err => {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Please try again later.',
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting me. I will get back to you shortly.',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});

app.listen(3030, () => {
  console.log('server start on port 3030');
});
