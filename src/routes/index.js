const IndexController = require("../controllers/IndexController");
const profileController = require("../controllers/profileController");

const register = (app) => {
  app.get("/", IndexController.index);
  app.get("/profile", profileController.profile);
};

module.exports = { register };
