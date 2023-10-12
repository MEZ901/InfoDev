const profileController = require("../controllers/profileController");
const { memberMiddleware } = require("../middlewares/authMiddleware");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const profile = (app) => {
  app.get("/profile", memberMiddleware, profileController.profile);
  app.post(
    "/updateProfile",
    memberMiddleware,
    upload.single("image"),
    profileController.updateProfile
  );
  app.get("/deleteProfile", memberMiddleware, profileController.delete);
};
module.exports = { profile };
