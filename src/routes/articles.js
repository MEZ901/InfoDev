const express = require("express");
const articlesRouter = express.Router();
const articleController = require("../controllers/ArticleController");

articlesRouter.get("/", articleController.index);
articlesRouter.get("/new", articleController.add);
articlesRouter.post("/store", articleController.store);
articlesRouter.get("/:id", articleController.show);
articlesRouter.get("/:id/edit", articleController.edit);
articlesRouter.put("/:id", articleController.update);
articlesRouter.delete("/:id", articleController.delete);

module.exports = articlesRouter;
