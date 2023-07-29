const errorHandler = (err, req, res, next) => {
  console.log(err);
  let statusCode = 0;
  let message = "";
  switch (err.name) {
    case "SequelizeValidationError":
      const errors = err.errors.map((el) => el.message);
      statusCode = 400;
      message = errors.join(", ");
      break;
    case "SequelizeUniqueConstraintError":
      statusCode = 400;
      message = err.errors[0].message;
      break;
    case "EmailRequired":
      statusCode = 400;
      message = "Email is required";
      break;
    case "PasswordRequired":
      statusCode = 400;
      message = "Password is required";
      break;
    case "InvalidLogin":
      statusCode = 400;
      message = "Invalid email or password";
      break;
    default:
      statusCode = 500;
      message = "Internal Server Error";
      break;
  }
  res.status(statusCode).json({ statusCode, message });
};

module.exports = errorHandler;
