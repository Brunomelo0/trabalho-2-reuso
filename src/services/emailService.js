const axios = require("axios");
const createBreaker = require("./circuitBreaker");
const retry = require("./retry");

async function sendEmail(payload) {
  return retry(() =>
    axios.post("https://fake-email-provider/send", payload)
  );
}

const emailBreaker = createBreaker(sendEmail);

emailBreaker.fallback(() => ({
  data: { status: "FAILED" }
}));

module.exports = emailBreaker;