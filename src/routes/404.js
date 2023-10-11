const found = (app) => {
  app.get("/notFound", (req, res) => {
    res.render("errors/404");
  });
};
module.exports = { found };
