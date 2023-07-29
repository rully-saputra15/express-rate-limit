const { User } = require("../models");
const comparePassword = require("../helpers/bcrypt").comparePassword;
const { signToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, password } = req.body;
      const newUser = await User.create({ username, password });
      res.status(201).json({ id: newUser.id, username: newUser.username });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username) throw { name: "EmailRequired" };
      if (!password) throw { name: "PasswordRequired" };

      const user = await User.findOne({ where: { username } });

      if (!user) throw { name: "InvalidLogin" };

      const isValidPassword = comparePassword(password, user.password);

      if (!isValidPassword) throw { name: "InvalidLogin" };

      const access_token = signToken({ id: user.id, username: user.username });

      res.status(200).json({ statusCode: 200, access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
