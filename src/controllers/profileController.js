const { PrismaClient } = require("@prisma/client");
const { hashPassword } = require("../helpers/functions");

const prisma = new PrismaClient();

class ProfileController {
  static async profile(req, res) {
    try {
      const userId = req.query.id;
      const userIdInt = parseInt(userId);

      const loggedUserId = Number(JSON.parse(req.cookies.userInfo).id);

      const users = await prisma.user.findUnique({
        where: { id: userIdInt, isDeleted: false },
      });

      if (users == null) {
        res.redirect("/notFound");
      }
      const articles = await prisma.article.findMany({
        where: { authorId: userIdInt, isDeleted: false },
      });
      res.render("profile/profile", { users, articles, loggedUserId });
    } catch (error) {
      console.error("Error:", error);
      res.send(`Error:${error.message}`);
    }
  }
  static async updateProfile(req, res) {
    try {
      const { id, name, bio, email, password } = req.body;

      const imageBase64 = req?.file?.buffer.toString("base64");

      const idUserUpdate = parseInt(id);

      const data = {};
      if (name != "") {
        data.name = name;
      }
      if (bio != "") {
        data.bio = bio;
      }
      if (imageBase64 != undefined) {
        data.photo = imageBase64;
      }
      if (password != "") {
        const pass = await hashPassword(password);
        data.password = pass;
      }
      if (email != "") {
        data.email = email;
      }

      const updateUser = await prisma.user.update({
        where: { id: idUserUpdate },
        data: data,
      });
      res.redirect("/profile?id=" + id);
    } catch (error) {
      console.error("Error:", error);
      res.send(`Error:${error.message}`);
    }
  }
  static async delete(req, res) {
    try {
      const id = req.query.id;
      const idUser = parseInt(id);
      const deleteUser = await prisma.user.update({
        where: { id: idUser },
        data: {
          isDeleted: true,
        },
      });
      res.redirect("/auth/register");
    } catch (error) {
      console.error("Error:", error);
      res.send(" Error");
    }
  }
}
module.exports = ProfileController;
