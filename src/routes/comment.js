const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controllers/CommentController");

commentRouter.post("/creat-comment", commentController.creatComment);

commentRouter.post("/delete-comment", commentController.deleteComment);

commentRouter.post("/edit-comment", commentController.updateComment);

commentRouter.get("/", (req, res) => {
  res.render("comment/comment", { title: "Comment Page" });
});

module.exports = commentRouter;
