const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const { Reply } = require('lucide-react');

// Load environment variables
const envPath = './.env';
console.log('Current Directory:', __dirname);

if (fs.existsSync(envPath)) {
  console.log('.env file exists');
  dotenv.config({ path: envPath });
} else {
  console.log('.env file does not exist');
}

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { FirstName, LastName, subject, email, message } = req.body;

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    html: `<h1>${FirstName} ${LastName}</h1> <br /> <p>${message}</p> <br /> <p>${email}</p>`,
    ReplyTo: email,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
