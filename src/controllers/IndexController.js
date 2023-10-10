class IndexController {
  static index = (req, res) => {
    res.render("index", { title: "articles" });
  };
}

module.exports = IndexController;
