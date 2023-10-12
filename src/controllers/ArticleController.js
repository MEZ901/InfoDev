const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ArticleController {
  static index = async (req, res) => {
    const currentUserId = Number(JSON.parse(req.cookies.userInfo).id);
    const { search } = req.query;

    const currentUser = await prisma.user.findUnique({
      where: {
        id: currentUserId,
      },
    });

    let articles;

    if (search) {
      articles = await prisma.article.findMany({
        where: {
          isDeleted: false,
          OR: [
            {
              title: {
                contains: search,
              },
            },
            {
              content: {
                contains: search,
              },
            },
          ],
        },
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
      });
    } else {
      articles = await prisma.article.findMany({
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
    }

    res.render("articles/index", {
      title: "articles",
      articles,
      currentUser,
      search,
    });
  };

  static show = async (req, res) => {
    const { id } = req.params;
    const currentUserId = Number(JSON.parse(req.cookies.userInfo).id);

    const currentUser = await prisma.user.findUnique({
      where: {
        id: currentUserId,
      },
    });
    const article = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: {
          select: {
            id: true,
            photo: true,
            name: true,
            bio: true,
          },
        },
        comment: {
          include: {
            user: {
              select: {
                id: true,
                photo: true,
                name: true,
              },
            },
          },
        },
      },
    });

    res.render("articles/show", {
      title: "article",
      article,
      currentUser,
    });
  };

  static add = async (req, res) => {
    const currentUserId = Number(JSON.parse(req.cookies.userInfo).id);

    const currentUser = await prisma.user.findUnique({
      where: {
        id: currentUserId,
      },
    });

    res.render("articles/add", { title: "add article", currentUser });
  };

  static store = async (req, res) => {
    const { title, content } = req.body;
    const user_id = JSON.parse(req.cookies.userInfo).id;
    const sqlRegex = /[\;"]/g;

    if (sqlRegex.test(title) || sqlRegex.test(content)) {
      return res.status(400).send("Invalid input. Avoid special characters.");
    }

    const article = await prisma.article.create({
      data: {
        title,
        content,
        authorId: Number(user_id),
      },
    });

    res.redirect("/articles");
  };

  static edit = async (req, res) => {
    const { id } = req.params;

    const currentUserId = Number(JSON.parse(req.cookies.userInfo).id);

    const currentUser = await prisma.user.findUnique({
      where: {
        id: currentUserId,
      },
    });
    const article = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.render("articles/edit", {
      title: "edit article",
      article,
      currentUser,
    });
  };

  static update = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const sqlRegex = /[\;"]/g;

    if (sqlRegex.test(title) || sqlRegex.test(content)) {
      return res.status(400).send("Invalid input. Avoid special characters.");
    }

    const article = await prisma.article.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });

    res.redirect(`/articles/${id}`);
  };

  static delete = async (req, res) => {
    const { id } = req.params;

    const article = await prisma.article.update({
      where: {
        id: Number(id),
      },
      data: {
        isDeleted: true,
      },
    });

    res.redirect("/articles");
  };
}

module.exports = ArticleController;
