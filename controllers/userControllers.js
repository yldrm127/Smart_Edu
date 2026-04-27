const request = require("express");
const userModel = require("../models/users");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      const isMatch = user.password === req.body.password; // (şimdilik basit)
      if (!isMatch) return res.send("Wrong password");
      req.session.userId = user._id; // 
      res.redirect("/");
    }
    if (user.password !== password) {
      return res.status(401).send("Invalid password");
    }
    res.render("index");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.create({ name, email, password });
    res.status(201).render("index");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
exports.auth = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }
  next();
};

