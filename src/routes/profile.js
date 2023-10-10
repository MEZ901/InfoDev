const profileController = require("../controllers/ProfileController")

const profile= (app)=>{
  app.get("/profile",profileController.profile);
}
const profilePost=(app)=>{
  app.post("/update", profileController.updateProfile);
}
module.exports={profile,profilePost};