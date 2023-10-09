const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./src/routes");
const authRouter = require("./src/routes/auth");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

routes.register(app);

app.use("/auth", authRouter);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
