class IndexController {
  static index = (req, res) => {
    res.render("index", { title: "InfoDev" });
  };
}

module.exports = IndexController;
