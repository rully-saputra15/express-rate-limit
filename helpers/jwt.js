const { sign, verify } = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const signToken = (payload) => {
  return sign(payload, JWT_SECRET);
};

const verifyToken = (token) => {
  return verify(token, JWT_SECRET);
};

module.exports = { signToken, verifyToken };
