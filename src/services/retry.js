async function retry(fn, retries = 3, delay = 500) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;

    await new Promise((resolve) => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay);
  }
}

module.exports = retry;