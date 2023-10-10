const profileController = require("../controllers/profileController")

const profile= (app)=>{
  app.get("/profile",profileController.profile);
  app.post("/updateProfile", profileController.updateProfile);
  app.get("/deleteProfile",profileController.delete);
}
module.exports={profile};