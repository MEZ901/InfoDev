const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashPassword } = require("../helpers/functions");
const bcryptjs = require("bcryptjs");
// const localStorage = require("localStorage");

const app = express();
app.use(express.json());

class AuthController {
  static register = async (req, res) => {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      return res.status(400).send("Please fill all the inputs");
    }
    try {
      const emailUniq = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (emailUniq) {
        return res.status(400).send("Email is already taken.");
      }
      const hashedPassword = await hashPassword(password);
      const newUser = await prisma.user.create({
        data: {
          name: name,
          password: hashedPassword,
          email: email,
        },
      });
      res.status(201).redirect("login");
    } catch (error) {
      console.error(error);
      res.status(500).redirect("register");
    }
  };
  static login = async (req, res) => {
    const { password, email } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(401).send("Incorrect email or password");
      }
      const passwordMatch = await bcryptjs.compare(password, user.password);

      if (passwordMatch) {
        return res.redirect("/articles");
      } else {
        return res.status(401).send("Incorrect email or password");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Something went wrong");
    }
  };
  static CheckAuth = async (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect("login");
    }
    next();
  };
}

module.exports = AuthController;
