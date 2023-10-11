const memberMiddleware = (req, res, next) => {
  const userInfo = req.cookies.userInfo;

  if (userInfo) return next();

  res.redirect("/auth/login");
};

const guestMiddleware = (req, res, next) => {
  const userInfo = req.cookies.userInfo;

  if (!userInfo) return next();

  res.redirect("/articles");
};

module.exports = { memberMiddleware, guestMiddleware };
