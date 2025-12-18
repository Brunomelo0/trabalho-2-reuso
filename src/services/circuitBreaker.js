const CircuitBreaker = require("opossum");

function createCircuitBreaker(action) {
  const breaker = new CircuitBreaker(action, {
    timeout: 7000,
    errorThresholdPercentage: 50,
    resetTimeout: 15000
  });

  breaker.on("open", () => {
    console.warn("Circuit Breaker ABERTO");
  });

  breaker.on("halfOpen", () => {
    console.warn("Circuit Breaker HALF-OPEN");
  });

  breaker.on("close", () => {
    console.info("Circuit Breaker FECHADO");
  });

  return breaker;
}

module.exports = { createCircuitBreaker };