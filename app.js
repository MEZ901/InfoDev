// Required libraries and modules
const express = require("express");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

// Middlewares
const {
  memberMiddleware,
  guestMiddleware,
} = require("./src/middlewares/authMiddleware");

// Custom route modules
const routes = require("./src/routes");
const authRouter = require("./src/routes/auth");
const commentRouter = require("./src/routes/comment");
const profileRoute = require("./src/routes/profile");
const articlesRouter = require("./src/routes/articles");
const notFound = require("./src/routes/404");
const likeRouter = require("./src/routes/like");

// Load environment variables from a .env file
dotenv.config();

const app = express();

// Middleware setup
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// View engine and static files configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.static(path.join(__dirname, "public")));

// Enable HTTP method override
app.use(methodOverride("_method"));

// Routes
routes.index(app);
profileRoute.profile(app);
app.use("/auth", guestMiddleware, authRouter);
app.use("/comment", memberMiddleware, commentRouter);
app.use("/articles", memberMiddleware, articlesRouter);
app.use("/like", memberMiddleware, likeRouter);
notFound.found(app);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
