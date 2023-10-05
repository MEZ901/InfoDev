class IndexController {
  static index = (req, res, next) => {
    res.render("index", { title: "InfoDev" });
  };
}

module.exports = IndexController;
