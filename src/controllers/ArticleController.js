const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ArticleController {
  static index = async (req, res) => {
    const articles = await prisma.article.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    res.render("articles/index", { title: "articles", articles });
  };

  static show = async (req, res) => {};

  static add = async (req, res) => {};

  static store = async (req, res) => {};

  static edit = async (req, res) => {};

  static update = async (req, res) => {};

  static delete = async (req, res) => {};
}

module.exports = ArticleController;
