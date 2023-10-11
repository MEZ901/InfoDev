const express = require('express');
router = express.Router();
const commentController = require('../controllers/CommentController');

router.post('/creat-comment', commentController.creatComment);

router.post('/delete-comment', commentController.deleteComment);

router.post('/edit-comment', commentController.updateComment);

router.get("/", (req, res) => {
  res.render("comment", { title: "Comment Page" });
});

module.exports = router;

