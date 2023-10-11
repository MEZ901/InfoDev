const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./src/routes");
const authRouter = require("./src/routes/auth");
const profileRoute = require("./src/routes/profile");
const bodyParser = require("body-parser");
const articlesRouter = require("./src/routes/articles");
const methodOverride = require("method-override");

dotenv.config();

const app = express();

app.use(bodyParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

routes.register(app);
profileRoute.profile(app);
app.use("/auth", authRouter);
app.use("/articles", articlesRouter);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
