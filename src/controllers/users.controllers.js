const User = require("../models/users.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

exports.login = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({ email });
    if (!user || !password) {
      throw new Error("Invalid email or password. Please, try again!");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Invalid email or password. Please, try again!");
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 365,
    });
    res.status(200).json({ token });
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};
