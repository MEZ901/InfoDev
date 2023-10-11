const profileController = require("../controllers/profileController");
const { memberMiddleware } = require("../middlewares/authMiddleware");

const profile = (app) => {
  app.get("/profile", memberMiddleware, profileController.profile);
  app.post("/updateProfile", memberMiddleware, profileController.updateProfile);
  app.get("/deleteProfile", memberMiddleware, profileController.delete);
};
module.exports = { profile };
