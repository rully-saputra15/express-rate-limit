require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000; // IF PORT IS NOT DEFINED IN ENV VARIABLE, USE 3000
const errorHandler = require("./middlewares/errorHandler");
const route = require("./routes");
const limiter = require("./middlewares/rateLimiter");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use(route);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
