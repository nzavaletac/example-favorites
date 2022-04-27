const User = require("../models/users.models");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 365,
    });
    res.status(201).json({ token });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};
