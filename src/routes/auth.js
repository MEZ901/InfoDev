const express = require("express");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

authRouter.get("/register", (req, res) => {
  res.render("register");
});

module.exports = authRouter;
