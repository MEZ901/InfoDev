const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashPassword } = require("../helpers/functions");
const bcryptjs = require("bcryptjs");

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
        return res.redirect("/auth/login?error=Email or password is wrong");
      }
      const passwordMatch = await bcryptjs.compare(password, user.password);

      if (passwordMatch) {
        const userInfo = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        res.cookie("userInfo", JSON.stringify(userInfo));

        return res.redirect("/articles");
      } else {
        return res.redirect("/auth/login?error=Email or password is wrong");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Something went wrong");
    }
  };
}
module.exports = AuthController;
