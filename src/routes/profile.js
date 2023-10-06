const profileController = require("../controllers/ProfileController")

const profile= (app)=>{
  app.get("/profile",profileController.profile);
}

module.exports={profile};