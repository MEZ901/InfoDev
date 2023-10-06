const express = require("express");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("login");
});

authRouter.get("/register", (req, res) => {
  res.send("register");
});

module.exports = authRouter;
