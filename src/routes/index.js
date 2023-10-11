const index = (app) => {
  app.get("/", (req, res) => {
    res.render("index", { title: "InfoDev" });
  });
};

module.exports = { index };
