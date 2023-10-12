const express = require("express");
const AuthController = require("../controllers/AuthController");
const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("auth/login", { title: "Login Page" });
});

authRouter.get("/register", (req, res) => {
  res.render("auth/register");
});

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

module.exports = authRouter;
