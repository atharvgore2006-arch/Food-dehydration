const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return { statusCode: 400, body: 'Email is required' };
  }

  // NOTE: In a real app, you should use environment variables for these!
  // Process: Netlify UI -> Site Settings -> Build & Deploy -> Environment -> Edit Variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'hackerathu06@gmail.com',
      pass: process.env.EMAIL_PASS || 'Hacker1234',
    },
  });

  try {
    await transporter.sendMail({
      from: '"Vijay Dehydration" <no-reply@virendraplant.com>',
      to: email,
      subject: 'Login Successful',
      text: 'You have successfully login',
      html: '<b>You have successfully login</b>',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
