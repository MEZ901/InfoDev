const profileController = require("../controllers/ProfileController")

const profile= (app)=>{
  app.get("/profile",profileController.profile);
  app.post("/updateProfile", profileController.updateProfile);
}
module.exports={profile};