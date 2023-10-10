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

  static show = async (req, res) => {
    const { id } = req.params;

    const article = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: {
          select: {
            photo: true,
            name: true,
            bio: true,
          },
        },
        comment: {
          include: {
            user: {
              select: {
                photo: true,
                name: true,
              },
            },
          },
        },
      },
    });

    res.render("articles/show", { title: "article", article });
  };

  static add = async (req, res) => {};

  static store = async (req, res) => {};

  static edit = async (req, res) => {};

  static update = async (req, res) => {};

  static delete = async (req, res) => {};
}

module.exports = ArticleController;
