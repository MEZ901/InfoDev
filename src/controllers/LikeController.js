const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class LikeController {
  static async like(req, res) {
    const { article_id } = req.body;
    const articleId = Number(article_id);
    const userId = Number(JSON.parse(req.cookies.userInfo).id);

    const like = await prisma.like.findFirst({
      where: {
        articleId,
        userId,
        isDeleted: false,
      },
    });

    if (like) {
      await prisma.like.update({
        where: {
          id: like.id,
        },
        data: {
          like: true,
          dislike: false,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          articleId,
          userId,
          like: true,
          dislike: false,
        },
      });
    }

    const referer = req.headers.referer || "/";
    res.redirect(referer);
  }

  static async dislike(req, res) {
    const { article_id } = req.body;
    const articleId = Number(article_id);
    const userId = Number(JSON.parse(req.cookies.userInfo).id);

    const like = await prisma.like.findFirst({
      where: {
        articleId,
        userId,
        isDeleted: false,
      },
    });

    if (like) {
      await prisma.like.update({
        where: {
          id: like.id,
        },
        data: {
          like: false,
          dislike: true,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          articleId,
          userId,
          like: false,
          dislike: true,
        },
      });
    }

    const referer = req.headers.referer || "/";
    res.redirect(referer);
  }

  static async unlike(req, res) {
    const { article_id } = req.body;
    const articleId = Number(article_id);
    const userId = Number(JSON.parse(req.cookies.userInfo).id);

    const like = await prisma.like.findFirst({
      where: {
        articleId,
        userId,
        isDeleted: false,
      },
    });

    if (like) {
      await prisma.like.update({
        where: {
          id: like.id,
        },
        data: {
          isDeleted: true,
        },
      });
    }

    const referer = req.headers.referer || "/";
    res.redirect(referer);
  }
}

module.exports = LikeController;
