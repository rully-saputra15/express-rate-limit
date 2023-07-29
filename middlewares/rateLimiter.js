const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
  standardHeaders: true,
  legacyHeaders: true,
});

module.exports = limiter;
