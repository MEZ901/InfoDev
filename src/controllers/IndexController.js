class IndexController {
  static index = (req, res) => {
    res.render("index", { title: "InfoDevYep" });
  };
}

module.exports = IndexController;
