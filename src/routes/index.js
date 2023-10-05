const IndexController = require("../controllers/IndexController");

const register = (app) => {
  app.get("/", IndexController.index);
};

module.exports = { register };
