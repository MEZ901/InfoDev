const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./src/routes");
const authRouter = require("./src/routes/auth");
<<<<<<< HEAD
const commentRouter = require("./src/routes/comment");
// const router = require("./src/routes/comment");
const bodyParser = require('body-parser');
const { use } = require("browser-sync");
=======
const profileRoute = require("./src/routes/profile");
const bodyParser = require("body-parser");
const articlesRouter = require("./src/routes/articles");
const methodOverride = require("method-override");
const notFound=require("./src/routes/404");
>>>>>>> 790b5d0ab03516b89eea114b716406c984aa0c79

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
<<<<<<< HEAD
app.use("/comment", commentRouter);

=======
app.use("/articles", articlesRouter);
notFound.found(app);
>>>>>>> 790b5d0ab03516b89eea114b716406c984aa0c79
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
//e("/auth", au