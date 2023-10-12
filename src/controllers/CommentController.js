const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

class CommentController {
  static index = async (req, res) => {};

  static show = async (req, res) => {};

  static add = async (req, res) => {};

  static creatComment = async (req, res) => {
    const { text } = req.body;
    const { article_id } = req.query;
    const user_id = JSON.parse(req.cookies.userInfo).id;

    try {
      const newComment = await prisma.comment.create({
        data: {
          content: text,
          articleId: Number(article_id),
          userId: Number(user_id),
        },
      });

      const referer = req.headers.referer || "/";
      res.redirect(referer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating comment" });
    }
  };

  static edit = async (req, res) => {};

  static updateComment = async (req, res) => {
    const commentId = req.body.commentId;
    const editedComment = req.body.editedComment;

    try {
      if (!commentId || isNaN(commentId) || commentId <= 0) {
        return res.status(400).json({ error: "Invalid comment ID" });
      }

      if (!editedComment || editedComment.trim() === "") {
        return res.status(400).json({ error: "Comment cannot be empty" });
      }

      const updatedComment = await prisma.comment.update({
        where: { id: parseInt(commentId) },
        data: { content: editedComment },
      });

      if (!updatedComment) {
        return res.status(404).json({ error: "Comment not found" });
      }

      res.status(200).json(updatedComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error editing comment" });
    }
  };

  static deleteComment = async (req, res) => {
    const commentId = req.body.commentId;

    if (!commentId || isNaN(commentId) || commentId <= 0) {
      return res.status(400).json({ error: "Invalid comment ID" });
    }

    try {
      const deletedComment = await prisma.comment.delete({
        where: { id: parseInt(commentId) },
      });

      if (!deletedComment) {
        return res.status(404).json({ error: "Comment not found" });
      }

      const referer = req.headers.referer || "/";
      res.redirect(referer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting comment" });
    }
  };
}

module.exports = CommentController;
