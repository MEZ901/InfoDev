const { guestMiddleware } = require("../middlewares/authMiddleware");

const index = (app) => {
  app.get("/", guestMiddleware, (req, res) => {
    res.render("index", { title: "InfoDev" });
  });
};

module.exports = { index };
