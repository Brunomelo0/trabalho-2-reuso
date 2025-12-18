const nodemailer = require("nodemailer");
const { withRetry } = require("./retry");
const { createCircuitBreaker } = require("./circuitBreaker");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendEmailRaw(payload) {
  const { to, subject, message } = payload;

  return transporter.sendMail({
    from: `"Notification Service" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: message
  });
}

async function sendEmailWithRetry(payload) {
  return withRetry(() => sendEmailRaw(payload));
}

const emailBreaker = createCircuitBreaker(sendEmailWithRetry);

emailBreaker.fallback(() => ({
  data: {
    status: "FAILED",
    reason: "Email service unavailable"
  }
}));

module.exports = emailBreaker;