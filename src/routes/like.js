const express = require("express");
const likeRouter = express.Router();

const likeController = require("../controllers/LikeController");

likeRouter.post("/like", likeController.like);
likeRouter.post("/dislike", likeController.dislike);
likeRouter.post("/unlike", likeController.unlike);

module.exports = likeRouter;
