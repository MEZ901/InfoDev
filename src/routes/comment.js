const express = require("express");

const commentRouter = express.Router();

commentRouter.get("/", (req, res) => {
  res.render("comment", { title: "Comment Page" });
});

module.exports = commentRouter;