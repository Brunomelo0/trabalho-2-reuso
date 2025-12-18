const retry = require("async-retry");

async function withRetry(fn) {
  return retry(
    async () => {
      return await fn();
    },
    {
      retries: 3,
      minTimeout: 1000,
      maxTimeout: 5000,
      factor: 2
    }
  );
}

module.exports = { withRetry };