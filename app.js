const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./src/routes");
const profileRoute= require("./src/routes/profile");
 const bodyParser = require('body-parser'); 
const multer = require("multer");

 
 dotenv.config();
 
 const app = express();
 app.use(bodyParser.urlencoded({ extended: true }));
//  app.use(multer().none())
 
 app.set("view engine", "ejs");
 app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

routes.register(app);
profileRoute.profile(app);
// profileRoute.profilePost(app);
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
