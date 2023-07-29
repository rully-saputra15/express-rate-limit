const { hashSync, compareSync } = require("bcryptjs");

const hashPassword = (password) => {
  return hashSync(password);
};

const comparePassword = (password, hashedPassword) => {
  return compareSync(password, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
