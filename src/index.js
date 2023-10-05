const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./routes");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

routes.register(app);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
