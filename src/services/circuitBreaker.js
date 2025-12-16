const CircuitBreaker = require("opossum");

module.exports = (action) => {
  return new CircuitBreaker(action, {
    timeout: 3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
  });
};